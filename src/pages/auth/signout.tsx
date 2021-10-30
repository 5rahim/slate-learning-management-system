import { signOut, useSession } from 'next-auth/client'
import { DefaultHead } from '../../components/Layout/DefaultHead'
import AuthLayout from '../../components/Layout/AuthLayout'
import AuthCard from '../../ui/AuthCard'
import { Box } from 'chalkui/dist/cjs/Components/Layout'
import { Button } from 'chalkui/dist/cjs/React'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { useRouter } from 'next/router'
import { Compose } from '../../next/compose'
import { Utils } from 'slate/utils'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'


function Page() {
   
   const { t, i18n } = useTranslation(['common', 'contact', 'form', 'auth'], { useSuspense: false })
   
   const router = useRouter()
   
   return (
      
      <>
         
         <DefaultHead pageTitle={t('Sign out')} />
         
         <AuthLayout>
            
            <AuthCard title={t('Sign out')}>
               
               <Box p={3}>
                  
                  <Button size="lg" colorScheme="primary" width="100%" as="a" href={Utils.Url.linkToLogout()}>{t('Sign out')}</Button>
               
               </Box>
            
            </AuthCard>
         
         </AuthLayout>
      
      </>
   )
}


export default Compose(
   withPageAuthRequired,
)(Page)
