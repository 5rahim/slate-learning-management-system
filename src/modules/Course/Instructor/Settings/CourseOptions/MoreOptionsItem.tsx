import { BiListPlus } from '@react-icons/all-files/bi/BiListPlus'
import { ModuleSection } from '@slate/components/UI/Course/ModuleSection'
import { MenuCelledList, MenuCelledListItem } from '@slate/components/UI/MenuCelledList'
import { DetailsItem } from '@slate/modules/Course/Instructor/Settings/CourseOptions/DetailsItem'
import { DurationItem } from '@slate/modules/Course/Instructor/Settings/CourseOptions/DurationItem'
import React from 'react'
import { useTranslation } from 'react-i18next'

export function MoreOptionsItem() {
   const { t } = useTranslation(['common', 'course'], { useSuspense: false })
   
   return (
      <ModuleSection
         icon={BiListPlus}
         title={t('course:More options')}
      >
         
         <MenuCelledList mt="2">
            
            <DetailsItem />
            
            <DurationItem />
            
            {/*<ScheduleItem />*/}
            
            <MenuCelledListItem>
               {t('Analytics')}
            </MenuCelledListItem>
         
         </MenuCelledList>
      </ModuleSection>
   )
}
