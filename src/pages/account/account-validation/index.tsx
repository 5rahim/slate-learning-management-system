import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { DefaultHead } from 'slate/components/Layout/DefaultHead'
import { withApollo } from 'slate/graphql/withApollo'
import { Box } from 'chalkui/dist/cjs/Components/Layout'
import AuthLayout from 'slate/components/Layout/AuthLayout'
import { Alert, AlertDescription, AlertIcon, Button, Text } from 'chalkui/dist/cjs/React'
import { useCookies } from 'react-cookie'
import AuthCard from 'slate/ui/AuthCard'
import { Compose } from 'slate/next/compose'
import { withAuth } from 'slate/middlewares/auth/withAuth'
import { NextPage } from 'next'
import { Utils } from 'slate/utils'


const Page: NextPage = () => {
   
   const { t, i18n } = useTranslation(['common', 'contact', 'form', 'auth'], { useSuspense: false })
   const router = useRouter()
   const [cookies, setCookie, removeCookie] = useCookies()
   
   const [prospectiveUser, setProspectiveUser] = useState<any>(null)
   
   useEffect(() => {
      
      setProspectiveUser(cookies['prospective-user-data'])
      
      if (!cookies['prospective-user-data']) {
         router.push(`/account/new`)
      }
      
      if (cookies['account-validation-step']) {
         router.push(`/account/account-validation/google-account`)
      }
      
   }, [])
   
   
   function handleNextStep() {
      setCookie('account-validation-step', 'ask-for-google-account')
      router.push(`/account/account-validation/google-account`)
   }
   
   
   return (
      
      <>
         
         <DefaultHead pageTitle={t('Account validation')} />
         
         <AuthLayout>
            
            <AuthCard title={t('Account validation')}>
               
               <Box p={3}>
                  <Alert mb={2} status="info" variant="secondary">
                     <AlertIcon />
                     <AlertDescription>
                        {t('auth:validation.Ensure that the information below is correct')}
                     </AlertDescription>
                  </Alert>
                  
                  <Text mb={2}>
                     {/*{t('School')}: <strong>{school.name}</strong>*/}
                  </Text>
                  
                  <Text mb={2}>
                     {t('form:First name')}: <strong>{prospectiveUser?.first_name}</strong>
                  </Text>
                  
                  <Text mb={2}>
                     {t('form:Middle name(s)')}: <strong>{prospectiveUser?.middle_name}</strong>
                  </Text>
                  
                  <Text mb={2}>
                     {t('form:Last name')}: <strong>{prospectiveUser?.last_name}</strong>
                  </Text>
                  
                  <Text mb={2}>
                     {t('form:Full name')}: <strong>{Utils.Names.formatLocaleNames(i18n.language, prospectiveUser?.first_name, prospectiveUser?.last_name)}</strong>
                  </Text>
                  
                  <Text mb={2}>
                     {t('form:Student ID')}: <strong>{prospectiveUser?.student_id}</strong>
                  </Text>
                  
                  <Text mb={4}>
                     {t('form:Username')}: <strong>{prospectiveUser?.username}</strong>
                  </Text>
                  
                  
                  <Button width="100%" colorScheme="brand.700" onClick={handleNextStep}>{t('auth:validation.The information is correct')}</Button>
               </Box>
            
            </AuthCard>
         
         </AuthLayout>
      
      </>
   
   )
}


export default Compose(
   withApollo({ ssr: true }),
   withAuth({ requireNoAuth: true }),
)(Page)
