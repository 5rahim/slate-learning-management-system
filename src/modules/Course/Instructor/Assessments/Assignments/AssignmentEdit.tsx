import { ComponentVisibility } from "@slate/components/ComponentVisibility"
import { Dropzone } from '@slate/components/Dropzone'
import { AlignedFlex } from '@slate/components/UI/AlignedFlex'
import { EntityDrawer } from '@slate/components/UI/Course/EntityDrawer'
import { FileLister } from "@slate/components/UI/FileLister"
import { Assignments, EditAssignmentMutationVariables, Gradebook_Items } from '@slate/generated/graphql'
import { useEditAssignment } from '@slate/graphql/schemas/gradebook_items/hooks'
import { useAccommodationSetting } from '@slate/hooks/settings/useAccommodationSetting'
import { useAssignToSetting } from '@slate/hooks/settings/useAssignToSetting'
import { useAttemptSetting } from '@slate/hooks/settings/useAttemptSetting'
import { useDueDateSetting } from '@slate/hooks/settings/useDueDateSetting'
import { useGradingSetting } from '@slate/hooks/settings/useGradingSetting'
import { useGroupAssignmentSetting } from '@slate/hooks/settings/useGroupAssignmentSetting'
import { usePublishDateSetting } from '@slate/hooks/settings/usePublishDateSetting'
import { useCurrentCourse } from '@slate/hooks/useCurrentCourse'
import { useFormCreator } from '@slate/hooks/useFormCreator'
import { useFormFileUpload } from '@slate/hooks/useFormFileUpload'
import { useRichTextEditor } from '@slate/hooks/useRichTextEditor'
import { useTypeSafeTranslation } from '@slate/hooks/useTypeSafeTranslation'
import { FormErrors } from '@slate/types/FormErrors'
import { Button } from 'chalkui/dist/cjs/Components/Button'
import { FormControl, FormLabel } from 'chalkui/dist/cjs/Components/FormControl'
import { Input } from 'chalkui/dist/cjs/Components/Input'
import { Box } from 'chalkui/dist/cjs/Components/Layout'
import React, { useState } from 'react'

export function AssignmentEdit({ onClose, isOpen, data }: { onClose: any, isOpen: any, data: { gradebookItem: Gradebook_Items } }) {
   
   const gradebookItem = data.gradebookItem
   const assignment = data.gradebookItem.assignment as Assignments
   const t = useTypeSafeTranslation()
   const course = useCurrentCourse()
   
   const [hasAttachments, setHasAttachments] = useState(assignment.files !== null && assignment.files !== '[]')
   
   const [wait, setWait] = useState(false)
   const [submissionType, setSubmissionType] = useState(assignment.type)
   const { populateFiles, hasFiles, uploadFiles, isUploading } = useFormFileUpload("multiple")
   const { publishDateValues, publishDateFields } = usePublishDateSetting({
      defaultValue: {
         availableFrom: gradebookItem.available_from,
         status: gradebookItem.status,
      },
   })
   const { dueDateValues, dueDateFields } = useDueDateSetting(gradebookItem.available_until)
   const { gradingValues, gradingFields } = useGradingSetting({
      scoringType: gradebookItem.scoring_type,
      maxPoints: gradebookItem.max_points as number,
   })
   const { attemptValues, attemptFields } = useAttemptSetting({
      attemptsAllowed: gradebookItem.attempts_allowed as number,
      attemptsGrading: gradebookItem.attempts_grading as string,
   })
   const { assignToValues, assignToFields } = useAssignToSetting(gradebookItem.assign_to)
   const { accommodationValues, accommodationFields } = useAccommodationSetting(gradebookItem.accommodations)
   const { groupAssignmentValues, groupAssignmentFields } = useGroupAssignmentSetting(gradebookItem.submission_type)
   const { textEditor } = useRichTextEditor(assignment.description)
   
   
   const [editAssignment, isLoading] = useEditAssignment({
      onCompleted: () => {
         setWait(false)
      },
   })
   
   const { onFormSubmit, fields, formState } = useFormCreator({
      defaultValues: {
         name: assignment.name,
      },
      schema: ({ z }) => z.object({
         name: z.string().min(4, FormErrors.RequiredField),
         content: z.any(),
      }),
      onSubmit: async formData => {
         
         setWait(true)
         let update = false
         
         const update_data: EditAssignmentMutationVariables = {
            gradebook_item_id: gradebookItem.id,
            assessment_id: assignment.id,
            assessment_type: 'assignment',
            course_id: course.id,
            ...publishDateValues,
            ...dueDateValues,
            ...gradingValues,
            ...assignToValues,
            ...attemptValues,
            ...accommodationValues,
            ...groupAssignmentValues,
            /** assignment **/
            assignment_id: assignment.id,
            name: formData.name,
            description: textEditor.getValue(),
            type: submissionType,
            files: null, // todo: edit files
         }
         
         if (!hasFiles) {
            update = true
            update_data['files'] = assignment.files
         } else {
            const uploadRes = await uploadFiles()
            
            if (uploadRes) {
               update_data['files'] = JSON.stringify(uploadRes)
               update = true
            }
         }
         
         if (
            update
            && textEditor.isValid()
            && publishDateFields.isValid()
            && dueDateFields.isValid()
            && attemptFields.isValid()
            && accommodationFields.isValid()
            && assignToFields.isValid()
         ) {
            console.log(update_data)
            editAssignment(update_data)
         } else {
            setWait(false)
         }
         
      },
   })
   
   
   return (
      <ComponentVisibility.AssistantAndHigher>
         
         <EntityDrawer
            isOpen={isOpen}
            isLoading={isLoading || isUploading || wait}
            onClose={onClose}
            onFormSubmit={onFormSubmit}
            headerColor="brand.700"
            title="Edit an assignment"
            closeOnOverlayClick={true}
            settings={
               <>
                  {publishDateFields.render()}
                  {dueDateFields.render()}
                  {gradingFields.render()}
                  {assignToFields.render()}
                  <>{submissionType === 'online' && (
                     <>
                        {attemptFields.render()}
                        {accommodationFields.render()}
                        {groupAssignmentFields.render()}
                     </>
                  )}</>
               </>
            }
         
         >
            
            {/*<Box mb="5">*/}
            {/*   <FormLabel mb="2">{t('course:Submission type')}</FormLabel>*/}
            {/*   <RadioGroup size="lg" onChange={setSubmissionType} value={submissionType}>*/}
            {/*      <Stack direction="row">*/}
            {/*         <Radio value="online">{t('Online')}</Radio>*/}
            {/*         <Radio value="offline">{t('Offline')}</Radio>*/}
            {/*      </Stack>*/}
            {/*   </RadioGroup>*/}
            {/*</Box>*/}
            
            <FormControl mb={5} id="name" isRequired>
               <FormLabel>{t('form:Name')}</FormLabel>
               <Input size="lg" fontSize="4xl" variant="flushed" {...fields.register('name', { placeholder: 'Enter a name', required: true })} />
               {fields.errorMessage('name')}
            </FormControl>
            
            <Box mb="5">
               {textEditor.render({ title: 'Instructions!', height: 200 })}
            </Box>
            
            {!hasAttachments ? <Box>
               <FormLabel mb="2">{t('Attachments')}</FormLabel>
               <Dropzone
                  multiple={true}
                  disabled={isUploading}
                  onChange={populateFiles}
                  inputProps={{ ...fields.register('content') }}
               />
               {fields.errorMessage('content')}
            </Box> : (
               <>
                  <AlignedFlex mb="3">
                     <FormLabel m="0">{t('Attachments')}</FormLabel>
                     <Button size="sm" colorScheme="brand.100" onClick={() => setHasAttachments(false)}>{t('course:Upload new files')}</Button>
                  </AlignedFlex>
                  <Box>
                     <FileLister files={assignment.files} />
                  </Box>
               </>
            )}
         
         </EntityDrawer>
      
      
      </ComponentVisibility.AssistantAndHigher>
   )
}

export default AssignmentEdit
