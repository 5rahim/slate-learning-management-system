import { AiOutlineFileDone } from '@react-icons/all-files/ai/AiOutlineFileDone'
import { BiCalendar } from '@react-icons/all-files/bi/BiCalendar'
import { BiCctv } from '@react-icons/all-files/bi/BiCctv'
import { BiFile } from '@react-icons/all-files/bi/BiFile'
import { BiFolder } from '@react-icons/all-files/bi/BiFolder'
import { BiUserCheck } from '@react-icons/all-files/bi/BiUserCheck'
import { FcReadingEbook } from '@react-icons/all-files/fc/FcReadingEbook'
import { HiOutlineSpeakerphone } from '@react-icons/all-files/hi/HiOutlineSpeakerphone'
import { ComponentVisibility } from '@slate/components/ComponentVisibility'
import { MediaComponent } from '@slate/components/Layout/MediaQueries/MediaComponent'
import { useCMF } from '@slate/hooks/useColorModeFunction'
import { useCurrentCourse } from '@slate/hooks/useCurrentCourse'
import { useCurrentSchool } from '@slate/hooks/useCurrentSchool'
import { useMediaSizes } from '@slate/hooks/useMediaSizes'
import { useTypeSafeTranslation } from '@slate/hooks/useTypeSafeTranslation'
import { AppActions, AppSelectors } from '@slate/store/slices/appSlice'
import { Button } from 'chalkui/dist/cjs/Components/Button'
import { IconBox } from 'chalkui/dist/cjs/Components/IconBox/IconBox'
import { Box, Flex } from 'chalkui/dist/cjs/Components/Layout'
import { Menu, MenuItem, MenuList } from 'chalkui/dist/cjs/Components/Menu'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from 'chalkui/dist/cjs/Components/Modal'
import { Text } from 'chalkui/dist/cjs/Components/Typography/Text'
import { useDisclosure } from 'chalkui/dist/cjs/Hooks/use-disclosure'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CourseHeaderLink = ({ icon, children, linkTo }: any) => {
   
   const { id } = useCurrentCourse()
   const { iid } = useCurrentSchool()
   
   function getHref(to: string) {
      return {
         pathname: '/[iid]/u/course/[course_id]' + to,
         query: { course_id: id, iid },
      }
   }
   
   return (
      <Link href={getHref(linkTo)}>
         <MenuItem>
            <Box fontSize={['1.8rem', '1.6rem', '1.6rem', '1.6rem', '1.6rem']}>
               {icon}
            </Box>
            <MediaComponent.HideOnMobile>
               <Text ml={3}>{children}</Text>
            </MediaComponent.HideOnMobile>
         </MenuItem>
      </Link>
   )
}

interface CourseHeaderProps {
   index: number
}

export const CourseHeader = ({ index }: CourseHeaderProps) => {
   const t = useTypeSafeTranslation()
   const dispatch = useDispatch()
   const course = useCurrentCourse()
   const cmf = useCMF()
   const studentView = useSelector(AppSelectors.studentView)
   const { isOpen: svIsOpen, onOpen: svOnOpen, onClose: svOnClose } = useDisclosure()
   const { isDesktop, isTabletAndSmaller } = useMediaSizes()
   
   function toggleStudentView() {
      svOnClose()
      dispatch(AppActions.toggleStudentView())
   }
   
   return (
      <Box mt="1rem">
         
         <Flex
            height={["80px", "80px", "80px", "100px"]}
            backgroundColor={course?.banner_color ?? "#4f7c6e"}
            backgroundImage={'url(/assets/patterns/memphis-mini.png)'}
            backgroundBlendMode={"color-burn"}
            position="relative"
            // color={cmf('black', 'gray.100')}
            color="white"
            alignItems="center"
            borderRadius="lg"
            // borderBottomRightRadius="0"
            // borderBottomLeftRadius="0"
            mb="1rem"
            p={3}
            px="8"
         >
            <Box>
               <Text fontSize="2.5rem" fontWeight="700">{course?.name}</Text>
            </Box>
            
            <ComponentVisibility.InstructorOnly>
               <Button
                  onClick={() => !studentView ? svOnOpen() : toggleStudentView()}
                  size="sm"
                  position="absolute"
                  right="1rem"
                  colorScheme="brand.100"
                  leftIcon={<BiCctv />}
               >
                  {t(!studentView ? 'course:Student View' : 'course:Turn off Student View')}
               </Button>
            </ComponentVisibility.InstructorOnly>
         
         </Flex>
         
         <CourseHeaderMenu index={index} />
         
         <Modal isOpen={svIsOpen} onClose={svOnClose}>
            <ModalOverlay />
            <ModalContent textAlign="center">
               <IconBox isCircular icon={<FcReadingEbook />} size="lg" colorScheme="primary" margin="0 auto" mt={3} />
               <ModalHeader textAlign="center">{t('course:Student View')}</ModalHeader>
               <ModalBody textAlign="center">
                  {t('course:Student View description')}
               </ModalBody>
               
               <ModalFooter gridGap=".5rem">
                  <Button onClick={svOnClose} colorScheme="primary" variant="outline">{t('Cancel')}</Button>
                  <Button colorScheme="primary" onClick={toggleStudentView} isFullWidth>
                     {t('course:Turn on Student View')}
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      
      </Box>
   )
   
}

function CourseHeaderMenu({ index = 0 }: any) {
   const cmf = useCMF()
   const { isDesktop, isTabletAndSmaller } = useMediaSizes()
   
   return (
      <Flex
         justifyContent="center"
         // borderBottom={cmf("2px #f3f3f3 solid", "2px #4d4d4d solid")}
         bgColor={cmf('white', 'gray.800')}
         borderRadius="md"
         mb="1rem"
         boxShadow="sm"
         sx={{
            transition: 'all .15s linear',
            _hover: {
               boxShadow: isDesktop ? 'lg' : 'sm',
            },
         }}
      >
         <Menu
            variant="custom"
            borderRadius="none"
            // colorScheme="primary"
            defaultColor={cmf('gray.400', 'gray.400')}
            hoverColor={cmf('black', 'gray.300')}
            hoverBg={cmf('gray.100', 'gray.700')}
            selectedColor={cmf('black', 'white')}
            selectedBg={cmf('gray.200', 'gray.600')}
            size="md"
            spacing="0"
            index={index}
         >
            <MenuList
               width="auto"
               height="60px"
               sx={{
                  '& > .chalk-menus__tab[aria-selected=true]': {
                     fontWeight: '700',
                     boxShadow: cmf('inset 0 -9px 0px -7px #525252', 'none'),
                  },
                  '& > .chalk-menus__tab': {
                     fontSize: ['2rem', '1rem', '1rem', '1rem', '1rem'],
                  },
               }}
            >
               <CourseHeaderLink icon={<BiFolder />} linkTo={'/'}>Content</CourseHeaderLink>
               <CourseHeaderLink icon={<HiOutlineSpeakerphone />} linkTo={'/announcements'}>Announcements</CourseHeaderLink>
               <CourseHeaderLink icon={<AiOutlineFileDone />} linkTo={'/assessments'}>Assessments</CourseHeaderLink>
               <ComponentVisibility.StudentOnly>
                  <CourseHeaderLink icon={<BiCalendar />} linkTo="/calendar">Calendar</CourseHeaderLink>
                  <CourseHeaderLink icon={<BiFile />} linkTo="/grades">Grades</CourseHeaderLink>
               </ComponentVisibility.StudentOnly>
               <ComponentVisibility.AssistantAndHigher>
                  <CourseHeaderLink icon={<BiFile />} linkTo="/grade-center">Grade center</CourseHeaderLink>
                  <CourseHeaderLink icon={<BiUserCheck />} linkTo="/attendance">Attendance</CourseHeaderLink>
               </ComponentVisibility.AssistantAndHigher>
            </MenuList>
         </Menu>
      </Flex>
   )
}
