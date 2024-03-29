import { BiCalendar } from '@react-icons/all-files/bi/BiCalendar'
import { MediaComponent } from '@slate/components/Layout/MediaQueries/MediaComponent'
import { MenuCelledListItem } from '@slate/components/UI/MenuCelledList'
import { useMutateCourseDuration } from '@slate/graphql/schemas/courses/hooks'
import { useCurrentCourse } from '@slate/hooks/useCurrentCourse'
import { DurationDateFormat } from '@slate/types/Course'
import { Utils } from '@slate/utils'
import { Button } from 'chalkui/dist/cjs/Components/Button/Button'
import { IconBox } from 'chalkui/dist/cjs/Components/IconBox/IconBox'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from 'chalkui/dist/cjs/Components/Modal/Modal'
import { useDisclosure } from 'chalkui/dist/cjs/Hooks/use-disclosure'
import { useBreakpointValue } from 'chalkui/dist/cjs/MediaQuery/use-breakpoint-value'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const DatePicker = dynamic(() => import('@slate/components/DatePicker'))

export function DurationItem() {
   const { t } = useTranslation(['common', 'course'], { useSuspense: false })
   
   const course = useCurrentCourse()
   
   
   const { isOpen: durationModalIsOpen, onOpen: openDurationModal, onClose: closeDurationModal } = useDisclosure()
   const datePickerOrientation = useBreakpointValue<"vertical" | "horizontal">({ base: "vertical", md: "horizontal" })
   
   const [courseDuration, setCourseDuration] = useState<DurationDateFormat | null>(Utils.Dates.parseDurationDateObject(course?.duration))
   
   const [updateCourseDuration] = useMutateCourseDuration()
   
   
   function handleChangeCourseDuration() {
      course && updateCourseDuration({
         id: course.id,
         duration: Utils.Dates.durationDateObjectToString(courseDuration),
      })
      setCourseDuration(null)
   }
   
   return (
      <>
         
         <MenuCelledListItem onClick={openDurationModal}>
            {t('course:options.Course duration')}
         </MenuCelledListItem>
         
         
         <Modal size="3xl" isOpen={durationModalIsOpen} onClose={closeDurationModal}>
            <ModalOverlay />
            <ModalContent textAlign="center">
               <ModalCloseButton />
               <IconBox isCircular icon={<BiCalendar />} colorScheme="primary" margin="0 auto" mt={3} />
               <ModalHeader textAlign="center">{t('course:options.Change the duration of the course')}</ModalHeader>
               <ModalBody textAlign="center">
                  
                  <MediaComponent.HideOnMobile>
                     {durationModalIsOpen && <DatePicker
                        template={datePickerOrientation}
                        defaultSelectedDates={Utils.Dates.parseDurationDateObject(course?.duration)}
                        onChange={(data) => setCourseDuration(data)}
                     />}
                  </MediaComponent.HideOnMobile>
                  
                  <MediaComponent.ShowOnMobileOnly>
                     {durationModalIsOpen && <DatePicker
                        template={"vertical"}
                        defaultSelectedDates={Utils.Dates.parseDurationDateObject(course?.duration)}
                        onChange={(data) => setCourseDuration(data)}
                     />}
                  </MediaComponent.ShowOnMobileOnly>
               
               </ModalBody>
               
               <ModalFooter gridGap={5}>
                  <Button
                     colorScheme="brand.100"
                     width="100%"
                     onClick={handleChangeCourseDuration}
                     isDisabled={!courseDuration || ( !courseDuration.startDate || !courseDuration.endDate )}
                  >
                     {t('Save')}
                  </Button>
                  
                  <Button colorScheme="brand.800" onClick={closeDurationModal} isFullWidth>
                     {t('Cancel')}
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      
      </>
   )
   
}
