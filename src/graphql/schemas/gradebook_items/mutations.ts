import { gql } from '@apollo/client'

export const CREATE_ASSIGNMENT = gql`
    mutation CreateAssignment($gradebook_item_id: uuid!, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $submission_type: String!, $accommodations: String, $assignment_id: uuid!, $name: String!, $type: String!, $files: String, $description: String) {
        insert_gradebook_items_one(object: {id: $gradebook_item_id, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, submission_type: $submission_type, accommodations: $accommodations}) {
            id
        }
        insert_assignments_one(object: {id: $assignment_id, name: $name, type: $type, gradebook_item_id: $gradebook_item_id, files: $files, description: $description}) {
            id
        }
    }
`

export const EDIT_ASSIGNMENT = gql`
    mutation EditAssignment($gradebook_item_id: uuid!, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $submission_type: String!, $accommodations: String, $assignment_id: uuid!, $name: String!, $type: String!, $files: String, $description: String) {
        update_gradebook_items_by_pk(_set: {id: $gradebook_item_id, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, submission_type: $submission_type, accommodations: $accommodations}, pk_columns: {id: $gradebook_item_id}) {
            id
        }
        update_assignments_by_pk(_set: {id: $assignment_id, name: $name, type: $type, gradebook_item_id: $gradebook_item_id, files: $files, description: $description}, pk_columns: {id: $assessment_id}) {
            id
        }
    }
`


export const CREATE_TEST = gql`
    mutation CreateTest($time_limit: Int!, $gradebook_item_id: uuid!, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $accommodations: String, $test_id: uuid!, $name: String!, $description: String) {
        insert_gradebook_items_one(object: {id: $gradebook_item_id, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, accommodations: $accommodations}) {
            id
        }
        insert_tests_one(object: {id: $test_id, time_limit: $time_limit, name: $name, gradebook_item_id: $gradebook_item_id, description: $description}) {
            id
        }
    }
`

export const EDIT_TEST = gql`
    mutation EditTest($time_limit: Int!, $gradebook_item_id: uuid!, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $accommodations: String, $test_id: uuid!, $name: String!, $description: String) {
        update_gradebook_items_by_pk(_set: {id: $gradebook_item_id, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, accommodations: $accommodations}, pk_columns: {id: $gradebook_item_id}) {
            id
        }
        update_tests_by_pk(_set: {id: $test_id, time_limit: $time_limit, name: $name, gradebook_item_id: $gradebook_item_id, description: $description}, pk_columns: {id: $assessment_id}) {
            id
        }
    }
`
