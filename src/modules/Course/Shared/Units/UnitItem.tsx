import { useSortable } from '@dnd-kit/sortable'
import { CSS } from "@dnd-kit/utilities"
import { BiArchiveIn } from '@react-icons/all-files/bi/BiArchiveIn'
import { BiDotsVertical } from '@react-icons/all-files/bi/BiDotsVertical'
import { BiDotsVerticalRounded } from '@react-icons/all-files/bi/BiDotsVerticalRounded'
import { BiEdit } from '@react-icons/all-files/bi/BiEdit'
import { BiFolder } from '@react-icons/all-files/bi/BiFolder'
import { BiNotepad } from '@react-icons/all-files/bi/BiNotepad'
import { ComponentVisibility, HideItemInStudentView } from '@slate/components/ComponentVisibility'
import { Units } from '@slate/generated/graphql'
import { usePublishDateSetting } from '@slate/hooks/settings/usePublishDateSetting'
import { useCMF } from '@slate/hooks/useColorModeFunction'
import { useDateFormatter } from '@slate/hooks/useDateFormatter'
import { useLinkHref } from '@slate/hooks/useLinkHref'
import { useTypeSafeTranslation } from '@slate/hooks/useTypeSafeTranslation'
import { UnitAddArchive } from '@slate/modules/Course/Instructor/Units/UnitAddArchive'
import { UnitEdit } from '@slate/modules/Course/Instructor/Units/UnitEdit'
import { Dropdown, DropdownButton, DropdownItem, DropdownList } from 'chalkui/dist/cjs/Components/Dropdown/Dropdown'
import Icon from 'chalkui/dist/cjs/Components/Icon/Icon'
import { IconBox } from 'chalkui/dist/cjs/Components/IconBox/IconBox'
import { Box, Flex, ListItem } from 'chalkui/dist/cjs/Components/Layout'
import { Text } from 'chalkui/dist/cjs/Components/Typography/Text'
import { useDisclosure } from 'chalkui/dist/cjs/Hooks/use-disclosure'
import Link from 'next/link'
import React, { useRef } from 'react'

interface UnitItemProps {
   data: Units
   id: string
}

export const UnitItem = ({ data, id }: UnitItemProps) => {
   const cmf = useCMF()
   const t = useTypeSafeTranslation()
   const { isOpen, onOpen, onClose } = useDisclosure()
   const { isOpen: archiveIsOpen, onOpen: archiveOnOpen, onClose: archiveOnClose } = useDisclosure()
   const { linkToUnit } = useLinkHref()
   const { formatDate } = useDateFormatter()
   const cancelRef: any = useRef()
   
   const { publishDateHelpers } = usePublishDateSetting()
   
   const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
   } = useSortable({
      id: id,
      transition: {
         duration: 150, // milliseconds
         easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
   })
   
   
   const style = {
      transform: CSS.Transform.toString(transform ? {
         x: 0,
         y: transform.y,
         scaleX: transform.scaleX,
         scaleY: transform.scaleY,
      } : transform),
      transition,
   }
   
   const isVisible = publishDateHelpers.isAvailable({ status: data.status, availableFrom: data.available_from })
   
   // const isAvailable = data.available || ( data.is_scheduled && Utils.Dates.dateHasPassed(data.publish_on) )
   // const isScheduledButNotAvailable = data.is_scheduled && !data.available && !Utils.Dates.dateHasPassed(data.publish_on)
   
   return (
      <HideItemInStudentView showIf={isVisible}>
         
         <UnitAddArchive data={data} onClose={archiveOnClose} isOpen={archiveIsOpen} cancelRef={cancelRef} />
         
         <UnitEdit
            isOpen={isOpen}
            onClose={onClose}
            data={data}
         />
         
         <ListItem>
            
            <Flex
               ref={setNodeRef}
               style={style}
               height="4rem"
               alignItems="center"
               overflow="hidden"
               bgColor={cmf('white', 'transparent')}
               // _hover={{
               //    bgColor: cmf('#e5e5e5', 'gray.700'),
               // }}
            >
               
               <ComponentVisibility.InstructorOnly>
                  <Flex
                     color={cmf("#979797", 'gray.200')}
                     // mr="-.7rem"
                     height="100%"
                     width="2rem"
                     justify="center"
                     align="center"
                     cursor="move"
                     {...attributes}
                     {...listeners}
                  >
                     <Icon as={BiDotsVertical} fontSize="1.6rem" />
                     <Icon as={BiDotsVertical} ml="-1.2rem" fontSize="1.6rem" />
                  </Flex>
               </ComponentVisibility.InstructorOnly>
               
               <Flex width="100%" justifyContent="space-between" alignItems="center">
                  
                  <Link href={linkToUnit(data.id)}>
                     <Flex
                        alignItems="center"
                        cursor="pointer"
                        _hover={{ color: cmf('messenger.500', 'messenger.500') }}
                        textDecoration="underline"
                     >
                        
                        {
                           data.type !== 'folder' ? (
                                 <Flex mr="3" position="relative" alignItems="center" gridGap=".7rem">
                                    <IconBox
                                       p=".5rem"
                                       size="md"
                                       fontSize="xs"
                                       colorScheme="purple.500"
                                       variant="secondary"
                                       as={BiNotepad}
                                       opacity={isVisible ? "1" : ".5"}
                                    />
                                    <Flex>
                                       <Text fontWeight="bold" fontSize="lg">{t('form:' + data.type)}
                                          &nbsp;{data.number}
                                       </Text>
                                       {!!data.title && <Text fontWeight="bold" fontSize="lg">: {data.title}</Text>}
                                    </Flex>
                                 </Flex>
                              ) :
                              (
                                 <Flex mr="3" position="relative" alignItems="center" gridGap=".7rem">
                                    <IconBox
                                       p=".5rem"
                                       size="md"
                                       fontSize="xs"
                                       colorScheme="teal.500"
                                       variant="secondary"
                                       as={BiFolder}
                                       opacity={isVisible ? "1" : ".5"}
                                    />
                                    <Text fontWeight="bold" fontSize="lg">{data.number}</Text>
                                 </Flex>
                              )
                        }
                     </Flex>
                  </Link>
                  
                  <ComponentVisibility.AssistantAndHigher>
                     <Flex alignItems="center">
                        
                           {publishDateHelpers.icons({ status: data.status, availableFrom: data.available_from })}
                        
                        <ComponentVisibility.AssistantAndHigher>
                           <Dropdown>
                              <DropdownButton
                                 as={Box}
                                 aria-label="Options"
                                 size="lg"
                                 ml="1"
                                 variant="outline"
                                 cursor="pointer"
                                 color={cmf('gray.300', 'gray.300')}
                                 _hover={{
                                    color: cmf('black', 'white'),
                                 }}
                              >
                                 <Box
                                    fontSize="1.6rem"
                                 >
                                    <Icon as={BiDotsVerticalRounded} />
                                 </Box>
                              
                              </DropdownButton>
                              <DropdownList>
                                 <DropdownItem icon={<BiEdit />} onClick={onOpen}>
                                    {t('Edit')}
                                 </DropdownItem>
                                 
                                 <ComponentVisibility.InstructorOnly>
                                    <DropdownItem icon={<BiArchiveIn />} onClick={archiveOnOpen}>
                                       {t('Archive')}
                                    </DropdownItem>
                                 </ComponentVisibility.InstructorOnly>
                                 
                              </DropdownList>
                           </Dropdown>
                        </ComponentVisibility.AssistantAndHigher>
                     
                     </Flex>
                  </ComponentVisibility.AssistantAndHigher>
               
               </Flex>
            </Flex>
         
         </ListItem>
      
      </HideItemInStudentView>
   )
}
