import { HiOutlineSpeakerphone } from '@react-icons/all-files/hi/HiOutlineSpeakerphone'
import { ComponentVisibility } from "@slate/components/ComponentVisibility"
import { DateInput } from '@slate/components/DateInput'
import { DeletionAlert } from '@slate/components/DeletionAlert'
import { RichTextEditor } from '@slate/components/RichTextEditor'
import { createRichTextEditorRef } from '@slate/components/RichTextEditor/utils'
import { TimePicker } from '@slate/components/TimePicker'
import { AlignedFlex } from '@slate/components/UI/AlignedFlex'
import { Announcements, UpdateAnnouncementMutationVariables } from '@slate/generated/graphql'
import { useDeleteAnnouncement, useUpdateAnnouncement } from '@slate/graphql/schemas/announcements/hooks'
import { useDateAndTimeFields } from '@slate/hooks/useDateAndTimeFields'
import { useFormCreator } from '@slate/hooks/useFormCreator'
import { useTypeSafeTranslation } from '@slate/hooks/useTypeSafeTranslation'
import { FormErrors } from '@slate/types/FormErrors'
import { Utils } from '@slate/utils'
import { Button } from 'chalkui/dist/cjs/Components/Button/Button'
import { FormControl } from 'chalkui/dist/cjs/Components/FormControl/FormControl'
import { FormLabel } from 'chalkui/dist/cjs/Components/FormControl/FormLabel'
import { IconBox } from 'chalkui/dist/cjs/Components/IconBox/IconBox'
import { Input } from 'chalkui/dist/cjs/Components/Input/Input'
import { Box, Divider } from 'chalkui/dist/cjs/Components/Layout'
import {
   AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay,
} from 'chalkui/dist/cjs/Components/Modal/AlertDialog'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from 'chalkui/dist/cjs/Components/Modal/Modal'
import { Switch } from 'chalkui/dist/cjs/Components/Switch/Switch'
import { Text } from 'chalkui/dist/cjs/Components/Typography/Text'
import React from 'react'


interface AnnouncementEditProps {
   isOpen: boolean
   onClose: any
   deleteIsOpen: boolean
   deleteOnClose: any
   deleteOnOpen: any
   data: Announcements
}

export function AnnouncementEdit(
   {
      isOpen,
      onClose,
      deleteIsOpen,
      deleteOnClose,
      data,
   }: AnnouncementEditProps,
) {
   
   const t = useTypeSafeTranslation()
   
   const [updateAnnouncement, updateIsLoading] = useUpdateAnnouncement()
   
   const [deleteAnnouncement] = useDeleteAnnouncement({
      onCompleted: () => {
         deleteOnClose()
      },
   })
   
   const cancelRef: any = React.useRef()
   
   const editorRef = createRichTextEditorRef()
   const { value: publishOn, setDateField, setTimeField, resetDateAndTimeFields } = useDateAndTimeFields(data.publish_on)
   
   const { onFormSubmit, fields, formState } = useFormCreator({
      defaultValues: {
         title: data.title,
      },
      schema: ({ z }) => z.object({
         title: z.string().min(4, FormErrors.RequiredField),
         publish: z.boolean(),
      }),
      onSubmit: formData => {
         
         const update_data: UpdateAnnouncementMutationVariables = {
            title: formData.title,
            is_scheduled: !formData.publish,
            publish_on: !formData.publish ? publishOn : new Date(),
            message: editorRef.current?.getContent() ?? '',
            id: data.id,
         }
         
         if (editorRef.current?.getContent().length === 0)
            fields.setError('message', FormErrors.RequiredField)
         else if (!formData.publish && !publishOn) {
            console.log(formData.publish, publishOn)
            fields.setError('date', FormErrors.RequiredField)
         } else {
            // console.log(update_data)
            updateAnnouncement(update_data)
         }
      },
   })
   
   return (
      <ComponentVisibility.AssistantAndHigher>
         
         
         {!data.is_scheduled || ( data.is_scheduled && Utils.Dates.dateHasPassed(data.publish_on) ) ?
            (
               <>
                  <AlertDialog
                     motionPreset="slideInBottom"
                     leastDestructiveRef={cancelRef}
                     onClose={onClose}
                     isOpen={isOpen}
                     isCentered
                  >
                     <AlertDialogOverlay />
                     
                     <AlertDialogContent>
                        <AlertDialogCloseButton />
                        <AlertDialogHeader>Oops!</AlertDialogHeader>
                        <AlertDialogBody>
                           <Text>
                              {t('course:announcementAlreadyPublished')}
                           </Text>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                           <Button colorScheme="primary" variant="outline" ref={cancelRef} onClick={onClose}>
                              {t('Cancel')}
                           </Button>
                        </AlertDialogFooter>
                     </AlertDialogContent>
                  </AlertDialog>
               </>
            ) :
            (
               <>
                  <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
                     <ModalOverlay />
                     <ModalContent>
                        <IconBox isCircular icon={<HiOutlineSpeakerphone />} colorScheme="primary" margin="0 auto" mt={3} />
                        <ModalHeader textAlign="center">{t('course:Update an announcement')}</ModalHeader>
                        <form onSubmit={onFormSubmit}>
                           <ModalBody>
                              
                              <FormControl mb={3} id="title" isRequired={true}>
                                 <FormLabel>{t('form:Title')}</FormLabel>
                                 <Input
                                    {...fields.register('title', { placeholder: 'Title' })}
                                 />
                                 {fields.errorMessage('title')}
                              </FormControl>
                              
                              
                              <RichTextEditor mb={4} defaultValue={data.message} editorRef={editorRef} />
                              {fields.errorMessage('message')}
                              
                              <FormControl display="flex" alignItems="center" mb={3} id="publish">
                                 <FormLabel htmlFor="publish" mb={0}>{t('form:Publish now')}</FormLabel>
                                 <Switch size="md" id="puslish" defaultChecked={!data.is_scheduled} {...fields.register("publish")} />
                              </FormControl>
                              
                              <Box display={fields.watch('publish', !data.is_scheduled) === false ? 'block' : 'none'}>
                                 
                                 <Divider mb="3" />
                                 
                                 <Text mb="2">{t('form:Publish when')}</Text>
                                 
                                 <AlignedFlex mb="2">
                                    {t('form:Date')}:
                                    <DateInput defaultSelectedDate={Utils.Dates.parseDurationDateObject(data.publish_on)} onChange={setDateField} />
                                 </AlignedFlex>
                                 {fields.errorMessage('date')}
                                 
                                 <AlignedFlex>
                                    {t('form:Time')}:
                                    <TimePicker defaultTime={Utils.Dates.getTimeInMinutesFromDate(data.publish_on) ?? 1439} onChange={setTimeField} />
                                 </AlignedFlex>
                              </Box>
                           
                           </ModalBody>
                           
                           <ModalFooter gridGap={5}>
                              <Button
                                 colorScheme="brand.100"
                                 width="100%"
                                 type="submit"
                                 isDisabled={!formState.touched}
                                 isLoading={updateIsLoading}
                              >
                                 {t('Save')}
                              </Button>
                              <Button colorScheme="brand.800" onClick={onClose} isFullWidth>
                                 {t('Cancel')}
                              </Button>
                           </ModalFooter>
                        </form>
                     </ModalContent>
                  </Modal>
               </>
            )}
         
         <DeletionAlert
            onClose={deleteOnClose}
            isOpen={deleteIsOpen}
            handleDelete={() => deleteAnnouncement({ id: data.id })}
            type={'announcement'}
         />
      
      
      </ComponentVisibility.AssistantAndHigher>
   )
}

export default AnnouncementEdit
