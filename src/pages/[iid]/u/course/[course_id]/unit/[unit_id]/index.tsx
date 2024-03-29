import { AiOutlineSnippets } from '@react-icons/all-files/ai/AiOutlineSnippets'
import { BiEdit } from '@react-icons/all-files/bi/BiEdit'
import { BiFolderOpen } from '@react-icons/all-files/bi/BiFolderOpen'
import { BiFolderPlus } from '@react-icons/all-files/bi/BiFolderPlus'
import { BiHeading } from '@react-icons/all-files/bi/BiHeading'
import { BiLink } from '@react-icons/all-files/bi/BiLink'
import { BiMessageAlt } from '@react-icons/all-files/bi/BiMessageAlt'
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import { RiFile3Line } from '@react-icons/all-files/ri/RiFile3Line'
import { RiMistFill } from '@react-icons/all-files/ri/RiMistFill'
import { VscChecklist } from '@react-icons/all-files/vsc/VscChecklist'
import { ComponentVisibility } from '@slate/components/ComponentVisibility'
import { ModuleBox } from '@slate/components/UI/Course/ModuleBox'
import { withApollo } from '@slate/graphql/apollo/withApollo'
import { useCurrentCourse } from '@slate/hooks/useCurrentCourse'
import { useCurrentUnit, useCurrentUnitName } from '@slate/hooks/useCurrentUnit'
import { useModuleFolder } from '@slate/hooks/useModuleFolder'
import { useTypeSafeTranslation } from '@slate/hooks/useTypeSafeTranslation'
import { withAuth } from '@slate/middlewares/auth/withAuth'
import { withCourse } from '@slate/middlewares/dashboard/withCourse'
import { withDashboard } from '@slate/middlewares/dashboard/withDashboard'
import { withUnit } from '@slate/middlewares/dashboard/withUnit'
import { StudentOptions } from '@slate/modules/Course/Instructor/Settings/StudentOptions'
import { CourseContextMenu } from '@slate/modules/Course/Shared/CourseContextMenu'
import { Compose } from '@slate/next/compose'
import { UnitModuleTypes } from '@slate/types/UnitModules'
import { Button } from 'chalkui/dist/cjs/Components/Button/Button'
import { Dropdown, DropdownButton, DropdownItem, DropdownList } from 'chalkui/dist/cjs/Components/Dropdown/Dropdown'
import { Box } from 'chalkui/dist/cjs/Components/Layout/Box'
import { Flex } from 'chalkui/dist/cjs/Components/Layout/Flex'
import { useDisclosure } from 'chalkui/dist/cjs/Hooks/use-disclosure'
import dynamic from 'next/dynamic'
import React, { memo, useState } from 'react'


const UnitContent = dynamic(() => import('@slate/modules/Course/Shared/Units/UnitContent'))
const CourseLayout = dynamic(() => import('@slate/components/Layout/CourseLayout'))
const UnitEdit = dynamic(() => import('@slate/modules/Course/Instructor/Units/UnitEdit'))
const UnitModuleCreation = dynamic(() => import('@slate/modules/Course/Instructor/Units/Modules/UnitModuleCreation'))
const UnitModuleAddAssignment = dynamic(() => import('@slate/modules/Course/Instructor/Units/Modules/UnitModuleAddAssignment'))
const UnitModuleAddTest = dynamic(() => import('@slate/modules/Course/Instructor/Units/Modules/UnitModuleAddTest'))

const Page = memo(({ displayPage }: any) => {
   const { isOpen: editIsOpen, onOpen: editOnOpen, onClose: editOnClose } = useDisclosure()
   const { isOpen: createIsOpen, onOpen: createOnOpen, onClose: createOnClose } = useDisclosure()
   const { isOpen: addAssignmentIsOpen, onOpen: addAssignmentOnOpen, onClose: addAssignmentOnClose } = useDisclosure()
   const { isOpen: addTestIsOpen, onOpen: addTestOnOpen, onClose: addTestOnClose } = useDisclosure()
   const t = useTypeSafeTranslation()
   const unit = useCurrentUnit()
   const course = useCurrentCourse()
   const unitName = useCurrentUnitName()
   const { isFolderOpen, openedFolder } = useModuleFolder()
   
   
   const [moduleType, setModuleType] = useState<UnitModuleTypes>()
   
   function handleOpenCreationModal(type: UnitModuleTypes) {
      setModuleType(type)
      createOnOpen()
   }
   
   
   return (
      <CourseLayout
         displayPage={displayPage}
         headerMenuIndex={0}
         pageTitle={unitName + ' - ' + course.name}
         leftPanel={
            <>
               
               <CourseContextMenu index={0} />
               
               <StudentOptions />
            
            </>
         }
      >
         
         <>
            
            {editIsOpen && <UnitEdit
                isOpen={editIsOpen}
                onClose={editOnClose}
                data={unit}
            />}
            
            {addAssignmentIsOpen && <UnitModuleAddAssignment
                isOpen={addAssignmentIsOpen}
                onClose={addAssignmentOnClose}
            />}
            
            {addTestIsOpen && <UnitModuleAddTest
                isOpen={addTestIsOpen}
                onClose={addTestOnClose}
            />}
            
            <Box>
               
               <ModuleBox
                  headerText={unitName}
                  headerIcon={<BiFolderOpen />}
                  headerAction={
                     <ComponentVisibility.AssistantAndHigher>
                        <Flex gridGap=".5rem">
                           <Button
                              onClick={editOnOpen}
                              variant="outline"
                              borderRadius="3xl"
                              colorScheme="primary"
                              leftIcon={<BiEdit />}
                           >
                              {t('Edit')}
                           </Button>
                           
                           <Box>
                              
                              <Dropdown>
                                 <DropdownButton
                                    as={Button}
                                    borderRadius="3xl"
                                    colorScheme="primary"
                                    leftIcon={<BiPlus />}
                                 >
                                    {t('Add')}
                                 </DropdownButton>
                                 <DropdownList>
                                    {!isFolderOpen &&
                                    <DropdownItem onClick={() => handleOpenCreationModal(UnitModuleTypes.Folder)} icon={<BiFolderPlus />}>
                                       {t('Folder')}
                                    </DropdownItem>}
                                    <DropdownItem onClick={() => handleOpenCreationModal(UnitModuleTypes.TextHeader)} icon={<BiHeading />}>
                                       {t('Text header')}
                                    </DropdownItem>
                                    <DropdownItem onClick={() => handleOpenCreationModal(UnitModuleTypes.File)} icon={<RiFile3Line />}>
                                       {t('File')}
                                    </DropdownItem>
                                    <DropdownItem onClick={() => handleOpenCreationModal(UnitModuleTypes.Link)} icon={<BiLink />}>
                                       {t('Link')}
                                    </DropdownItem>
                                    <DropdownItem onClick={() => handleOpenCreationModal(UnitModuleTypes.Message)} icon={<BiMessageAlt />}>
                                       {t('Message')}
                                    </DropdownItem>
                                    <DropdownItem onClick={() => handleOpenCreationModal(UnitModuleTypes.Text)} icon={<RiMistFill />}>
                                       {t('Text')}
                                    </DropdownItem>
                                    {!isFolderOpen && (
                                       <>
                                          <DropdownItem onClick={addAssignmentOnOpen} icon={<AiOutlineSnippets />}>
                                             {t('Assignment')}
                                          </DropdownItem>
                                          <DropdownItem onClick={addTestOnOpen} icon={<VscChecklist />}>
                                             {t('Test')}
                                          </DropdownItem>
                                       </>
                                    )}
                                 </DropdownList>
                              </Dropdown>
                           
                           </Box>
                           
                           {createIsOpen && <UnitModuleCreation
                               moduleType={moduleType}
                               isOpen={createIsOpen}
                               onClose={createOnClose}
                           />}
                        
                        </Flex>
                     </ComponentVisibility.AssistantAndHigher>
                  }
               >
                  
                  <UnitContent />
               
               </ModuleBox>
            </Box>
         </>
      
      </CourseLayout>
   )
})

export default Compose(
   withApollo(),
   withAuth({ requireActiveAccount: true }),
   withDashboard(),
   withCourse(),
   withUnit(),
)(Page)

