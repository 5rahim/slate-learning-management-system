import { BiDotsHorizontal } from '@react-icons/all-files/bi/BiDotsHorizontal'
import { BiEdit } from '@react-icons/all-files/bi/BiEdit'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { ComponentVisibility, HideItemInStudentView } from '@slate/components/ComponentVisibility'
import { AlignedFlex } from '@slate/components/UI/AlignedFlex'
import { RichTextContent } from '@slate/components/UI/RichTextContent'
import { Announcements } from '@slate/generated/graphql'
import { DataListItem } from '@slate/graphql/DataListModule'
import { useCMF } from '@slate/hooks/useColorModeFunction'
import { useDateFormatter } from '@slate/hooks/useDateFormatter'
import { useLocale } from '@slate/hooks/useLocale'
import { useTypeSafeTranslation } from '@slate/hooks/useTypeSafeTranslation'
import { Utils } from '@slate/utils'
import { Avatar } from 'chalkui/dist/cjs/Components/Avatar/Avatar'
import { Dropdown, DropdownButton, DropdownItem, DropdownList } from 'chalkui/dist/cjs/Components/Dropdown/Dropdown'
import { Icon } from 'chalkui/dist/cjs/Components/Icon/Icon'
import { Box, Divider, Flex, ListItem } from 'chalkui/dist/cjs/Components/Layout'
import { Tag } from 'chalkui/dist/cjs/Components/Tag/Tag'
import { Text } from 'chalkui/dist/cjs/Components/Typography/Text'
import { useDisclosure } from 'chalkui/dist/cjs/Hooks/use-disclosure'
import dynamic from 'next/dynamic'
import React from 'react'

const AnnouncementEdit = dynamic(() => import('@slate/modules/Course/Instructor/Announcements/AnnouncementEdit'))

export const AnnouncementListItem: DataListItem<Announcements> = (props) => {
   const cmf = useCMF()
   const t = useTypeSafeTranslation()
   const locale = useLocale()
   const { data } = props
   
   const { formatDate } = useDateFormatter()
   
   const { isOpen, onOpen, onClose } = useDisclosure()
   const { isOpen: deleteIsOpen, onOpen: deleteOnOpen, onClose: deleteOnClose } = useDisclosure()
   
   return (
      <HideItemInStudentView showIf={!( data.is_scheduled && !Utils.Dates.dateHasPassed(data.publish_on) )}>
         
         <ListItem
            width="full"
            py={2}
            px={3}
            bgColor={cmf("#f9f9f9", "rgba(0,0,0,0.1)")}
            borderRadius="md"
         >
            <Flex alignItems="center" width="full">
               
               <Box fontSize="md" width="full">
                  
                  <Flex justifyContent="space-between">
                     
                     <Flex mb={2} gridGap=".5rem" flexDirection={['column', 'row']}>
                        <Text fontSize="lg" fontWeight="bold">{data.title}</Text>
                     </Flex>
                     
                     
                     <ComponentVisibility.AssistantAndHigher>
                        <Flex alignItems="center" gridGap="1rem">
                           <Flex gridGap=".5rem">
                              {( data.is_scheduled && !Utils.Dates.dateHasPassed(data.publish_on) ) && (
                                 <Tag
                                    variant="secondary"
                                    pill
                                    colorScheme={cmf("black", "white")}
                                 >
                                    {t('Not published')}
                                 </Tag>
                              )}
                              {/*{!( data.is_scheduled && !data.publish_on ) &&*/}
                              {/*<Tag pill colorScheme="orange.500">{t('Draft')}</Tag>}*/}
                           </Flex>
                           <Dropdown>
                              <DropdownButton
                                 as={Box}
                                 aria-label="Options"
                                 size="lg"
                                 variant="outline"
                                 cursor="pointer"
                                 color={cmf('gray.300', 'gray.300')}
                                 _hover={{
                                    color: cmf('black', 'white'),
                                 }}
                              >
                                 <Box
                                    fontSize="1.4rem"
                                 >
                                    <Icon as={BiDotsHorizontal} />
                                 </Box>
                              
                              </DropdownButton>
                              <DropdownList>
                                 <DropdownItem icon={<BiEdit />} onClick={onOpen}>
                                    {t('Edit')}
                                 </DropdownItem>
                                 <DropdownItem icon={<BiTrash />} onClick={deleteOnOpen}>
                                    {t('Delete')}
                                 </DropdownItem>
                              </DropdownList>
                           </Dropdown>
                        </Flex>
                     </ComponentVisibility.AssistantAndHigher>
                  
                  </Flex>
                  
                  <AlignedFlex>
                     
                     <AlignedFlex>
                        <Avatar size="xs" src={data.author?.image as string} />
                        <Text>{Utils.Names.formatLocaleFullName(locale, data.author)}</Text>
                     </AlignedFlex>
                     
                     <Text fontStyle="italic" color={cmf("gray.500", "gray.300")}>
                        {
                           !data.is_scheduled && formatDate(new Date(data.created_at), 'long with hours')
                        }
                        {
                           ( data.is_scheduled && Utils.Dates.dateHasPassed(data.publish_on) ) &&
                           formatDate(data.publish_on, 'long with hours')
                        }
                     </Text>
                     
                     {
                        data.is_scheduled && !Utils.Dates.dateHasPassed(data.publish_on) && (
                           <Text fontStyle="italic" color={cmf("gray.500", "gray.300")}>
                              {t('Scheduled for')}&nbsp;
                              <strong>{formatDate(data.publish_on, 'short with hours')}</strong>
                           </Text>
                        )
                     }
                  
                  </AlignedFlex>
                  
                  
                  <Box mt="3">
                     <Divider />
                     <RichTextContent truncate={400} content={data.message} />
                  </Box>
               </Box>
            </Flex>
         </ListItem>
   
         {isOpen && <AnnouncementEdit
            isOpen={isOpen}
            onClose={onClose}
            deleteIsOpen={deleteIsOpen}
            deleteOnOpen={deleteOnOpen}
            deleteOnClose={deleteOnClose}
            data={data}
         />}
      
      </HideItemInStudentView>
   )
   
}

export default AnnouncementListItem
