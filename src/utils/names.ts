import { Parameter } from '@slate/types/Parameters'
import { SlateUser } from '@slate/types/User'

export const Names = {
   formatLocaleNames: (
      locale: string | undefined,
      firstName: string | undefined,
      lastName: string | undefined,
      middleName?: string,
      capitalizeLastName: boolean = false,
   ) => {
      
      if (!locale)
         return '[No locale provided]'
      
      function getlastName(): string | undefined {
         return capitalizeLastName ? lastName?.toUpperCase() : lastName
      }
      
      switch (locale) {
         case 'fr':
            return [getlastName(), middleName, firstName].join(' ')
         case 'en':
            return [firstName, middleName, getlastName()].join(' ')
      }
      
   },
   
   formatLocaleFullName: (locale: string | undefined, user: Parameter<SlateUser>, capitalizeLastName: boolean = false, ignoreMiddleName: boolean = false) => {
      if (!locale)
         return '[No locale provided]'
      
      if (!user)
         return '???'
      
      const { first_name, last_name, middle_name } = user
      
      let mn = !ignoreMiddleName ? middle_name : null
      
      function getlastName(): string | undefined {
         return ( capitalizeLastName ? last_name?.toUpperCase() : last_name ) as string
      }
      
      switch (locale) {
         case 'fr':
            return [getlastName(), mn, first_name].join(' ')
         case 'en':
            return [first_name, mn, getlastName()].join(' ')
      }
      
   },
   
   formatInitials: (user: Parameter<SlateUser>) => {
      
      if (!user)
         return '???'
      
      const { first_name, last_name, middle_name } = user
      
      return [first_name?.charAt(0).toUpperCase(), last_name?.charAt(0).toUpperCase()].join('')
      
   },
}

// Zaki BONFOH, Zaki Abde BONFOH, Zaki Abde,
