import { BiLogOut } from '@react-icons/all-files/bi/BiLogOut'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { BiUser } from '@react-icons/all-files/bi/BiUser'
import { useCurrentSchool } from '@slate/hooks/useCurrentSchool'
import { useCurrentUser } from '@slate/hooks/useCurrentUser'
import { Utils } from '@slate/utils'
import { useColorMode } from 'chalkui/dist/cjs/ColorMode'
import { Avatar } from 'chalkui/dist/cjs/Components/Avatar/Avatar'
import { IconButton } from 'chalkui/dist/cjs/Components/Button/IconButton'
import { Dropdown, DropdownButton, DropdownItem, DropdownList } from 'chalkui/dist/cjs/Components/Dropdown/Dropdown'
import { Box, Flex } from 'chalkui/dist/cjs/Components/Layout'
import { Text } from 'chalkui/dist/cjs/Components/Typography'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface HeaderProps {
   openDrawer: any
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
   const { openDrawer, ...rest } = props
   
   const { t, i18n } = useTranslation(['common'], { useSuspense: false })
   const router = useRouter()
   const { colorMode, toggleColorMode } = useColorMode()
   const bg = { light: 'white', dark: 'gray.800' }
   
   const { name: schoolName, iid } = useCurrentSchool()
   const user = useCurrentUser()
   
   return (
      <Box
         // pos="fixed"
         as="header"
         top="0"
         zIndex="4"
         bg={bg[colorMode]}
         left="0"
         right="0"
         borderBottomWidth="1px"
         width="full"
         height="4rem"
         {...rest}
      >
         <Flex width="100%" mx="auto" px={6} pr={[1, 6]} height="100%" alignItems={"center"}>
            
            <Flex width="100%" justify="space-between">
               
               <Flex width="100%" align="center">
                  
                  <IconButton
                     display={['flex', null, 'none']}
                     aria-label="Options"
                     icon={<BiMenu />}
                     size="md"
                     fontSize="1.4rem"
                     mr={3}
                     variant="secondary"
                     onClick={openDrawer}
                  />
                  
                  <Box as="a" d="block" onClick={() => router.push(Utils.Url.schoolLinkTo(iid, '/'))}>
                     <Text fontWeight={"bolder"} fontSize="1.4rem">{schoolName}</Text>
                  </Box>
               
               </Flex>
               
               <Flex align="center">
                  
                  <Box mr={3}>
                     <Dropdown>
                        <DropdownButton
                           as={Box}
                           aria-label="Options"
                           size="lg"
                           variant="outline"
                           cursor="pointer"
                        >
                           <Avatar size="sm" name={Utils.Names.formatLocaleFullName('en', user)} src={user?.image as string} />
                        </DropdownButton>
                        <DropdownList>
                           <DropdownItem icon={<BiUser />}>
                              {t('Your Profile')}
                           </DropdownItem>
                           <DropdownItem as={'a'} href="/auth/signout" icon={<BiLogOut />}>
                              {t('Sign out')}
                           </DropdownItem>
                        </DropdownList>
                     </Dropdown>
                  </Box>
                  
                  {/*<IconButton*/}
                  {/*   aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}*/}
                  {/*   variant="secondary"*/}
                  {/*   colorScheme={colorMode === 'light' ? 'gray.800' : 'gray.200'}*/}
                  {/*   color="current"*/}
                  {/*   ml="2"*/}
                  {/*   fontSize="20px"*/}
                  {/*   onClick={toggleColorMode}*/}
                  {/*   icon={colorMode === 'light' ? <BiMoon /> : <BiSun />}*/}
                  {/*/>*/}
               </Flex>
            </Flex>
         </Flex>
      </Box>
   )
   
}
