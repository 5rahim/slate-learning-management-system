import { gql } from '@apollo/client'

export const UPDATE_PROSPECTIVE_USER_EMAIL = gql`
    mutation UpdateProspectiveUserEmail($student_id: String!, $email: String!, $registration_step: Int!) {
        update_prospective_users(where: {student_id: {_eq: $student_id}}, _set: {email: $email, registration_step: $registration_step}) {
            affected_rows
        }
    }
`


export const ACTIVATE_PROSPECTIVE_USER = gql`
    mutation ActivateProspectiveUser($student_id: String!) {
        update_prospective_users(where: {student_id: {_eq: $student_id}}, _set: {is_active: true}) {
            affected_rows
        }
    }
`
