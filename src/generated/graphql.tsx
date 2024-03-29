import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  expires_in?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['Int'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Accounts_Bool_Exp>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Accounts_Bool_Exp>>;
  access_token?: Maybe<String_Comparison_Exp>;
  expires_at?: Maybe<Int_Comparison_Exp>;
  expires_in?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_token?: Maybe<String_Comparison_Exp>;
  oauth_token?: Maybe<String_Comparison_Exp>;
  oauth_token_secret?: Maybe<String_Comparison_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
  providerAccountId?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  scope?: Maybe<String_Comparison_Exp>;
  session_state?: Maybe<String_Comparison_Exp>;
  token_type?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  expires_in?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  expires_in?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  expires_in?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  expires_in?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_token?: Maybe<Order_By>;
  oauth_token?: Maybe<Order_By>;
  oauth_token_secret?: Maybe<Order_By>;
  provider?: Maybe<Order_By>;
  providerAccountId?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  scope?: Maybe<Order_By>;
  session_state?: Maybe<Order_By>;
  token_type?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  ExpiresIn = 'expires_in',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  expires_in?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  ExpiresIn = 'expires_in',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "announcements" */
export type Announcements = {
  __typename?: 'announcements';
  /** An object relationship */
  author?: Maybe<Users>;
  author_id: Scalars['Int'];
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_scheduled: Scalars['Boolean'];
  message: Scalars['String'];
  publish_on?: Maybe<Scalars['timestamp']>;
  title: Scalars['String'];
};

/** aggregated selection of "announcements" */
export type Announcements_Aggregate = {
  __typename?: 'announcements_aggregate';
  aggregate?: Maybe<Announcements_Aggregate_Fields>;
  nodes: Array<Announcements>;
};

/** aggregate fields of "announcements" */
export type Announcements_Aggregate_Fields = {
  __typename?: 'announcements_aggregate_fields';
  avg?: Maybe<Announcements_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Announcements_Max_Fields>;
  min?: Maybe<Announcements_Min_Fields>;
  stddev?: Maybe<Announcements_Stddev_Fields>;
  stddev_pop?: Maybe<Announcements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Announcements_Stddev_Samp_Fields>;
  sum?: Maybe<Announcements_Sum_Fields>;
  var_pop?: Maybe<Announcements_Var_Pop_Fields>;
  var_samp?: Maybe<Announcements_Var_Samp_Fields>;
  variance?: Maybe<Announcements_Variance_Fields>;
};


/** aggregate fields of "announcements" */
export type Announcements_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Announcements_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Announcements_Avg_Fields = {
  __typename?: 'announcements_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "announcements". All fields are combined with a logical 'AND'. */
export type Announcements_Bool_Exp = {
  _and?: Maybe<Array<Announcements_Bool_Exp>>;
  _not?: Maybe<Announcements_Bool_Exp>;
  _or?: Maybe<Array<Announcements_Bool_Exp>>;
  author?: Maybe<Users_Bool_Exp>;
  author_id?: Maybe<Int_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_scheduled?: Maybe<Boolean_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  publish_on?: Maybe<Timestamp_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "announcements" */
export enum Announcements_Constraint {
  /** unique or primary key constraint */
  AnnouncementsPkey = 'announcements_pkey'
}

/** input type for incrementing numeric columns in table "announcements" */
export type Announcements_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "announcements" */
export type Announcements_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars['Int']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_scheduled?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  publish_on?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Announcements_Max_Fields = {
  __typename?: 'announcements_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  publish_on?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Announcements_Min_Fields = {
  __typename?: 'announcements_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  publish_on?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "announcements" */
export type Announcements_Mutation_Response = {
  __typename?: 'announcements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Announcements>;
};

/** on conflict condition type for table "announcements" */
export type Announcements_On_Conflict = {
  constraint: Announcements_Constraint;
  update_columns?: Array<Announcements_Update_Column>;
  where?: Maybe<Announcements_Bool_Exp>;
};

/** Ordering options when selecting data from "announcements". */
export type Announcements_Order_By = {
  author?: Maybe<Users_Order_By>;
  author_id?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_scheduled?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  publish_on?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: announcements */
export type Announcements_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "announcements" */
export enum Announcements_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsScheduled = 'is_scheduled',
  /** column name */
  Message = 'message',
  /** column name */
  PublishOn = 'publish_on',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "announcements" */
export type Announcements_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_scheduled?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  publish_on?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Announcements_Stddev_Fields = {
  __typename?: 'announcements_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Announcements_Stddev_Pop_Fields = {
  __typename?: 'announcements_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Announcements_Stddev_Samp_Fields = {
  __typename?: 'announcements_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Announcements_Sum_Fields = {
  __typename?: 'announcements_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "announcements" */
export enum Announcements_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsScheduled = 'is_scheduled',
  /** column name */
  Message = 'message',
  /** column name */
  PublishOn = 'publish_on',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Announcements_Var_Pop_Fields = {
  __typename?: 'announcements_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Announcements_Var_Samp_Fields = {
  __typename?: 'announcements_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Announcements_Variance_Fields = {
  __typename?: 'announcements_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "assignment_submissions" */
export type Assignment_Submissions = {
  __typename?: 'assignment_submissions';
  /** An object relationship */
  assignment?: Maybe<Assignments>;
  assignment_id: Scalars['uuid'];
  files?: Maybe<Scalars['String']>;
  gradebook_item_submission_id: Scalars['uuid'];
  /** An object relationship */
  group?: Maybe<Groups>;
  group_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  text?: Maybe<Scalars['String']>;
};

/** aggregated selection of "assignment_submissions" */
export type Assignment_Submissions_Aggregate = {
  __typename?: 'assignment_submissions_aggregate';
  aggregate?: Maybe<Assignment_Submissions_Aggregate_Fields>;
  nodes: Array<Assignment_Submissions>;
};

/** aggregate fields of "assignment_submissions" */
export type Assignment_Submissions_Aggregate_Fields = {
  __typename?: 'assignment_submissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assignment_Submissions_Max_Fields>;
  min?: Maybe<Assignment_Submissions_Min_Fields>;
};


/** aggregate fields of "assignment_submissions" */
export type Assignment_Submissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Assignment_Submissions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "assignment_submissions". All fields are combined with a logical 'AND'. */
export type Assignment_Submissions_Bool_Exp = {
  _and?: Maybe<Array<Assignment_Submissions_Bool_Exp>>;
  _not?: Maybe<Assignment_Submissions_Bool_Exp>;
  _or?: Maybe<Array<Assignment_Submissions_Bool_Exp>>;
  assignment?: Maybe<Assignments_Bool_Exp>;
  assignment_id?: Maybe<Uuid_Comparison_Exp>;
  files?: Maybe<String_Comparison_Exp>;
  gradebook_item_submission_id?: Maybe<Uuid_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "assignment_submissions" */
export enum Assignment_Submissions_Constraint {
  /** unique or primary key constraint */
  AssignmentSubmissionsPkey = 'assignment_submissions_pkey'
}

/** input type for inserting data into table "assignment_submissions" */
export type Assignment_Submissions_Insert_Input = {
  assignment?: Maybe<Assignments_Obj_Rel_Insert_Input>;
  assignment_id?: Maybe<Scalars['uuid']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item_submission_id?: Maybe<Scalars['uuid']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Assignment_Submissions_Max_Fields = {
  __typename?: 'assignment_submissions_max_fields';
  assignment_id?: Maybe<Scalars['uuid']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item_submission_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Assignment_Submissions_Min_Fields = {
  __typename?: 'assignment_submissions_min_fields';
  assignment_id?: Maybe<Scalars['uuid']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item_submission_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "assignment_submissions" */
export type Assignment_Submissions_Mutation_Response = {
  __typename?: 'assignment_submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assignment_Submissions>;
};

/** on conflict condition type for table "assignment_submissions" */
export type Assignment_Submissions_On_Conflict = {
  constraint: Assignment_Submissions_Constraint;
  update_columns?: Array<Assignment_Submissions_Update_Column>;
  where?: Maybe<Assignment_Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "assignment_submissions". */
export type Assignment_Submissions_Order_By = {
  assignment?: Maybe<Assignments_Order_By>;
  assignment_id?: Maybe<Order_By>;
  files?: Maybe<Order_By>;
  gradebook_item_submission_id?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** primary key columns input for table: assignment_submissions */
export type Assignment_Submissions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "assignment_submissions" */
export enum Assignment_Submissions_Select_Column {
  /** column name */
  AssignmentId = 'assignment_id',
  /** column name */
  Files = 'files',
  /** column name */
  GradebookItemSubmissionId = 'gradebook_item_submission_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "assignment_submissions" */
export type Assignment_Submissions_Set_Input = {
  assignment_id?: Maybe<Scalars['uuid']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item_submission_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** update columns of table "assignment_submissions" */
export enum Assignment_Submissions_Update_Column {
  /** column name */
  AssignmentId = 'assignment_id',
  /** column name */
  Files = 'files',
  /** column name */
  GradebookItemSubmissionId = 'gradebook_item_submission_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** columns and relationships of "assignments" */
export type Assignments = {
  __typename?: 'assignments';
  description: Scalars['String'];
  files?: Maybe<Scalars['String']>;
  /** An object relationship */
  gradebook_item?: Maybe<Gradebook_Items>;
  gradebook_item_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  type: Scalars['String'];
};

/** aggregated selection of "assignments" */
export type Assignments_Aggregate = {
  __typename?: 'assignments_aggregate';
  aggregate?: Maybe<Assignments_Aggregate_Fields>;
  nodes: Array<Assignments>;
};

/** aggregate fields of "assignments" */
export type Assignments_Aggregate_Fields = {
  __typename?: 'assignments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Assignments_Max_Fields>;
  min?: Maybe<Assignments_Min_Fields>;
};


/** aggregate fields of "assignments" */
export type Assignments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Assignments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "assignments". All fields are combined with a logical 'AND'. */
export type Assignments_Bool_Exp = {
  _and?: Maybe<Array<Assignments_Bool_Exp>>;
  _not?: Maybe<Assignments_Bool_Exp>;
  _or?: Maybe<Array<Assignments_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  files?: Maybe<String_Comparison_Exp>;
  gradebook_item?: Maybe<Gradebook_Items_Bool_Exp>;
  gradebook_item_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "assignments" */
export enum Assignments_Constraint {
  /** unique or primary key constraint */
  AssignmentsPkey = 'assignments_pkey'
}

/** input type for inserting data into table "assignments" */
export type Assignments_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item?: Maybe<Gradebook_Items_Obj_Rel_Insert_Input>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Assignments_Max_Fields = {
  __typename?: 'assignments_max_fields';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Assignments_Min_Fields = {
  __typename?: 'assignments_min_fields';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "assignments" */
export type Assignments_Mutation_Response = {
  __typename?: 'assignments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assignments>;
};

/** input type for inserting object relation for remote table "assignments" */
export type Assignments_Obj_Rel_Insert_Input = {
  data: Assignments_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Assignments_On_Conflict>;
};

/** on conflict condition type for table "assignments" */
export type Assignments_On_Conflict = {
  constraint: Assignments_Constraint;
  update_columns?: Array<Assignments_Update_Column>;
  where?: Maybe<Assignments_Bool_Exp>;
};

/** Ordering options when selecting data from "assignments". */
export type Assignments_Order_By = {
  description?: Maybe<Order_By>;
  files?: Maybe<Order_By>;
  gradebook_item?: Maybe<Gradebook_Items_Order_By>;
  gradebook_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: assignments */
export type Assignments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "assignments" */
export enum Assignments_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Files = 'files',
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "assignments" */
export type Assignments_Set_Input = {
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Scalars['String']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "assignments" */
export enum Assignments_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Files = 'files',
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** columns and relationships of "contacts" */
export type Contacts = {
  __typename?: 'contacts';
  comments?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  email: Scalars['String'];
  full_name: Scalars['String'];
  id: Scalars['Int'];
  institution_name: Scalars['String'];
  institution_type: Scalars['Int'];
  job_title: Scalars['String'];
  phone: Scalars['String'];
  purchase_date: Scalars['Int'];
  reason: Scalars['Int'];
};

/** aggregated selection of "contacts" */
export type Contacts_Aggregate = {
  __typename?: 'contacts_aggregate';
  aggregate?: Maybe<Contacts_Aggregate_Fields>;
  nodes: Array<Contacts>;
};

/** aggregate fields of "contacts" */
export type Contacts_Aggregate_Fields = {
  __typename?: 'contacts_aggregate_fields';
  avg?: Maybe<Contacts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Contacts_Max_Fields>;
  min?: Maybe<Contacts_Min_Fields>;
  stddev?: Maybe<Contacts_Stddev_Fields>;
  stddev_pop?: Maybe<Contacts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contacts_Stddev_Samp_Fields>;
  sum?: Maybe<Contacts_Sum_Fields>;
  var_pop?: Maybe<Contacts_Var_Pop_Fields>;
  var_samp?: Maybe<Contacts_Var_Samp_Fields>;
  variance?: Maybe<Contacts_Variance_Fields>;
};


/** aggregate fields of "contacts" */
export type Contacts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contacts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Contacts_Avg_Fields = {
  __typename?: 'contacts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  institution_type?: Maybe<Scalars['Float']>;
  purchase_date?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "contacts". All fields are combined with a logical 'AND'. */
export type Contacts_Bool_Exp = {
  _and?: Maybe<Array<Contacts_Bool_Exp>>;
  _not?: Maybe<Contacts_Bool_Exp>;
  _or?: Maybe<Array<Contacts_Bool_Exp>>;
  comments?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  full_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  institution_name?: Maybe<String_Comparison_Exp>;
  institution_type?: Maybe<Int_Comparison_Exp>;
  job_title?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  purchase_date?: Maybe<Int_Comparison_Exp>;
  reason?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "contacts" */
export enum Contacts_Constraint {
  /** unique or primary key constraint */
  ContactsPkey = 'contacts_pkey'
}

/** input type for incrementing numeric columns in table "contacts" */
export type Contacts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  institution_type?: Maybe<Scalars['Int']>;
  purchase_date?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "contacts" */
export type Contacts_Insert_Input = {
  comments?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  institution_name?: Maybe<Scalars['String']>;
  institution_type?: Maybe<Scalars['Int']>;
  job_title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  purchase_date?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Contacts_Max_Fields = {
  __typename?: 'contacts_max_fields';
  comments?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  institution_name?: Maybe<Scalars['String']>;
  institution_type?: Maybe<Scalars['Int']>;
  job_title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  purchase_date?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Contacts_Min_Fields = {
  __typename?: 'contacts_min_fields';
  comments?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  institution_name?: Maybe<Scalars['String']>;
  institution_type?: Maybe<Scalars['Int']>;
  job_title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  purchase_date?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "contacts" */
export type Contacts_Mutation_Response = {
  __typename?: 'contacts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contacts>;
};

/** on conflict condition type for table "contacts" */
export type Contacts_On_Conflict = {
  constraint: Contacts_Constraint;
  update_columns?: Array<Contacts_Update_Column>;
  where?: Maybe<Contacts_Bool_Exp>;
};

/** Ordering options when selecting data from "contacts". */
export type Contacts_Order_By = {
  comments?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  institution_name?: Maybe<Order_By>;
  institution_type?: Maybe<Order_By>;
  job_title?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  purchase_date?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
};

/** primary key columns input for table: contacts */
export type Contacts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "contacts" */
export enum Contacts_Select_Column {
  /** column name */
  Comments = 'comments',
  /** column name */
  Country = 'country',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  InstitutionName = 'institution_name',
  /** column name */
  InstitutionType = 'institution_type',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Phone = 'phone',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  Reason = 'reason'
}

/** input type for updating data in table "contacts" */
export type Contacts_Set_Input = {
  comments?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  institution_name?: Maybe<Scalars['String']>;
  institution_type?: Maybe<Scalars['Int']>;
  job_title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  purchase_date?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Contacts_Stddev_Fields = {
  __typename?: 'contacts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  institution_type?: Maybe<Scalars['Float']>;
  purchase_date?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Contacts_Stddev_Pop_Fields = {
  __typename?: 'contacts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  institution_type?: Maybe<Scalars['Float']>;
  purchase_date?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Contacts_Stddev_Samp_Fields = {
  __typename?: 'contacts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  institution_type?: Maybe<Scalars['Float']>;
  purchase_date?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Contacts_Sum_Fields = {
  __typename?: 'contacts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  institution_type?: Maybe<Scalars['Int']>;
  purchase_date?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
};

/** update columns of table "contacts" */
export enum Contacts_Update_Column {
  /** column name */
  Comments = 'comments',
  /** column name */
  Country = 'country',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  InstitutionName = 'institution_name',
  /** column name */
  InstitutionType = 'institution_type',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Phone = 'phone',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  Reason = 'reason'
}

/** aggregate var_pop on columns */
export type Contacts_Var_Pop_Fields = {
  __typename?: 'contacts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  institution_type?: Maybe<Scalars['Float']>;
  purchase_date?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Contacts_Var_Samp_Fields = {
  __typename?: 'contacts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  institution_type?: Maybe<Scalars['Float']>;
  purchase_date?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Contacts_Variance_Fields = {
  __typename?: 'contacts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  institution_type?: Maybe<Scalars['Float']>;
  purchase_date?: Maybe<Scalars['Float']>;
  reason?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "course_enrollment" */
export type Course_Enrollment = {
  __typename?: 'course_enrollment';
  authorized: Scalars['Boolean'];
  authorized_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  student?: Maybe<Users>;
  student_id: Scalars['Int'];
};

/** aggregated selection of "course_enrollment" */
export type Course_Enrollment_Aggregate = {
  __typename?: 'course_enrollment_aggregate';
  aggregate?: Maybe<Course_Enrollment_Aggregate_Fields>;
  nodes: Array<Course_Enrollment>;
};

/** aggregate fields of "course_enrollment" */
export type Course_Enrollment_Aggregate_Fields = {
  __typename?: 'course_enrollment_aggregate_fields';
  avg?: Maybe<Course_Enrollment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Course_Enrollment_Max_Fields>;
  min?: Maybe<Course_Enrollment_Min_Fields>;
  stddev?: Maybe<Course_Enrollment_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Enrollment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Enrollment_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Enrollment_Sum_Fields>;
  var_pop?: Maybe<Course_Enrollment_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Enrollment_Var_Samp_Fields>;
  variance?: Maybe<Course_Enrollment_Variance_Fields>;
};


/** aggregate fields of "course_enrollment" */
export type Course_Enrollment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Enrollment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_enrollment" */
export type Course_Enrollment_Aggregate_Order_By = {
  avg?: Maybe<Course_Enrollment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Enrollment_Max_Order_By>;
  min?: Maybe<Course_Enrollment_Min_Order_By>;
  stddev?: Maybe<Course_Enrollment_Stddev_Order_By>;
  stddev_pop?: Maybe<Course_Enrollment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Course_Enrollment_Stddev_Samp_Order_By>;
  sum?: Maybe<Course_Enrollment_Sum_Order_By>;
  var_pop?: Maybe<Course_Enrollment_Var_Pop_Order_By>;
  var_samp?: Maybe<Course_Enrollment_Var_Samp_Order_By>;
  variance?: Maybe<Course_Enrollment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "course_enrollment" */
export type Course_Enrollment_Arr_Rel_Insert_Input = {
  data: Array<Course_Enrollment_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Course_Enrollment_On_Conflict>;
};

/** aggregate avg on columns */
export type Course_Enrollment_Avg_Fields = {
  __typename?: 'course_enrollment_avg_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_enrollment" */
export type Course_Enrollment_Avg_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_enrollment". All fields are combined with a logical 'AND'. */
export type Course_Enrollment_Bool_Exp = {
  _and?: Maybe<Array<Course_Enrollment_Bool_Exp>>;
  _not?: Maybe<Course_Enrollment_Bool_Exp>;
  _or?: Maybe<Array<Course_Enrollment_Bool_Exp>>;
  authorized?: Maybe<Boolean_Comparison_Exp>;
  authorized_at?: Maybe<Timestamptz_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  student?: Maybe<Users_Bool_Exp>;
  student_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "course_enrollment" */
export enum Course_Enrollment_Constraint {
  /** unique or primary key constraint */
  CourseEnrollmentPkey = 'course_enrollment_pkey'
}

/** input type for incrementing numeric columns in table "course_enrollment" */
export type Course_Enrollment_Inc_Input = {
  student_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "course_enrollment" */
export type Course_Enrollment_Insert_Input = {
  authorized?: Maybe<Scalars['Boolean']>;
  authorized_at?: Maybe<Scalars['timestamptz']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  student?: Maybe<Users_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Course_Enrollment_Max_Fields = {
  __typename?: 'course_enrollment_max_fields';
  authorized_at?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "course_enrollment" */
export type Course_Enrollment_Max_Order_By = {
  authorized_at?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Enrollment_Min_Fields = {
  __typename?: 'course_enrollment_min_fields';
  authorized_at?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "course_enrollment" */
export type Course_Enrollment_Min_Order_By = {
  authorized_at?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "course_enrollment" */
export type Course_Enrollment_Mutation_Response = {
  __typename?: 'course_enrollment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Course_Enrollment>;
};

/** on conflict condition type for table "course_enrollment" */
export type Course_Enrollment_On_Conflict = {
  constraint: Course_Enrollment_Constraint;
  update_columns?: Array<Course_Enrollment_Update_Column>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};

/** Ordering options when selecting data from "course_enrollment". */
export type Course_Enrollment_Order_By = {
  authorized?: Maybe<Order_By>;
  authorized_at?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student?: Maybe<Users_Order_By>;
  student_id?: Maybe<Order_By>;
};

/** primary key columns input for table: course_enrollment */
export type Course_Enrollment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "course_enrollment" */
export enum Course_Enrollment_Select_Column {
  /** column name */
  Authorized = 'authorized',
  /** column name */
  AuthorizedAt = 'authorized_at',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id'
}

/** input type for updating data in table "course_enrollment" */
export type Course_Enrollment_Set_Input = {
  authorized?: Maybe<Scalars['Boolean']>;
  authorized_at?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Course_Enrollment_Stddev_Fields = {
  __typename?: 'course_enrollment_stddev_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_enrollment" */
export type Course_Enrollment_Stddev_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Enrollment_Stddev_Pop_Fields = {
  __typename?: 'course_enrollment_stddev_pop_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_enrollment" */
export type Course_Enrollment_Stddev_Pop_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Enrollment_Stddev_Samp_Fields = {
  __typename?: 'course_enrollment_stddev_samp_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_enrollment" */
export type Course_Enrollment_Stddev_Samp_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Enrollment_Sum_Fields = {
  __typename?: 'course_enrollment_sum_fields';
  student_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_enrollment" */
export type Course_Enrollment_Sum_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** update columns of table "course_enrollment" */
export enum Course_Enrollment_Update_Column {
  /** column name */
  Authorized = 'authorized',
  /** column name */
  AuthorizedAt = 'authorized_at',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id'
}

/** aggregate var_pop on columns */
export type Course_Enrollment_Var_Pop_Fields = {
  __typename?: 'course_enrollment_var_pop_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_enrollment" */
export type Course_Enrollment_Var_Pop_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Enrollment_Var_Samp_Fields = {
  __typename?: 'course_enrollment_var_samp_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_enrollment" */
export type Course_Enrollment_Var_Samp_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Enrollment_Variance_Fields = {
  __typename?: 'course_enrollment_variance_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_enrollment" */
export type Course_Enrollment_Variance_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** columns and relationships of "course_management" */
export type Course_Management = {
  __typename?: 'course_management';
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  manager?: Maybe<Users>;
  manager_id: Scalars['numeric'];
};

/** aggregated selection of "course_management" */
export type Course_Management_Aggregate = {
  __typename?: 'course_management_aggregate';
  aggregate?: Maybe<Course_Management_Aggregate_Fields>;
  nodes: Array<Course_Management>;
};

/** aggregate fields of "course_management" */
export type Course_Management_Aggregate_Fields = {
  __typename?: 'course_management_aggregate_fields';
  avg?: Maybe<Course_Management_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Course_Management_Max_Fields>;
  min?: Maybe<Course_Management_Min_Fields>;
  stddev?: Maybe<Course_Management_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Management_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Management_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Management_Sum_Fields>;
  var_pop?: Maybe<Course_Management_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Management_Var_Samp_Fields>;
  variance?: Maybe<Course_Management_Variance_Fields>;
};


/** aggregate fields of "course_management" */
export type Course_Management_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Management_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_management" */
export type Course_Management_Aggregate_Order_By = {
  avg?: Maybe<Course_Management_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Management_Max_Order_By>;
  min?: Maybe<Course_Management_Min_Order_By>;
  stddev?: Maybe<Course_Management_Stddev_Order_By>;
  stddev_pop?: Maybe<Course_Management_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Course_Management_Stddev_Samp_Order_By>;
  sum?: Maybe<Course_Management_Sum_Order_By>;
  var_pop?: Maybe<Course_Management_Var_Pop_Order_By>;
  var_samp?: Maybe<Course_Management_Var_Samp_Order_By>;
  variance?: Maybe<Course_Management_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "course_management" */
export type Course_Management_Arr_Rel_Insert_Input = {
  data: Array<Course_Management_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Course_Management_On_Conflict>;
};

/** aggregate avg on columns */
export type Course_Management_Avg_Fields = {
  __typename?: 'course_management_avg_fields';
  manager_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_management" */
export type Course_Management_Avg_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_management". All fields are combined with a logical 'AND'. */
export type Course_Management_Bool_Exp = {
  _and?: Maybe<Array<Course_Management_Bool_Exp>>;
  _not?: Maybe<Course_Management_Bool_Exp>;
  _or?: Maybe<Array<Course_Management_Bool_Exp>>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  manager?: Maybe<Users_Bool_Exp>;
  manager_id?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "course_management" */
export enum Course_Management_Constraint {
  /** unique or primary key constraint */
  CourseManagersPkey = 'course_managers_pkey'
}

/** input type for incrementing numeric columns in table "course_management" */
export type Course_Management_Inc_Input = {
  manager_id?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "course_management" */
export type Course_Management_Insert_Input = {
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manager?: Maybe<Users_Obj_Rel_Insert_Input>;
  manager_id?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Course_Management_Max_Fields = {
  __typename?: 'course_management_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manager_id?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "course_management" */
export type Course_Management_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  manager_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Management_Min_Fields = {
  __typename?: 'course_management_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manager_id?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "course_management" */
export type Course_Management_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  manager_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "course_management" */
export type Course_Management_Mutation_Response = {
  __typename?: 'course_management_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Course_Management>;
};

/** on conflict condition type for table "course_management" */
export type Course_Management_On_Conflict = {
  constraint: Course_Management_Constraint;
  update_columns?: Array<Course_Management_Update_Column>;
  where?: Maybe<Course_Management_Bool_Exp>;
};

/** Ordering options when selecting data from "course_management". */
export type Course_Management_Order_By = {
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  manager?: Maybe<Users_Order_By>;
  manager_id?: Maybe<Order_By>;
};

/** primary key columns input for table: course_management */
export type Course_Management_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "course_management" */
export enum Course_Management_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  ManagerId = 'manager_id'
}

/** input type for updating data in table "course_management" */
export type Course_Management_Set_Input = {
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manager_id?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Course_Management_Stddev_Fields = {
  __typename?: 'course_management_stddev_fields';
  manager_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_management" */
export type Course_Management_Stddev_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Management_Stddev_Pop_Fields = {
  __typename?: 'course_management_stddev_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_management" */
export type Course_Management_Stddev_Pop_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Management_Stddev_Samp_Fields = {
  __typename?: 'course_management_stddev_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_management" */
export type Course_Management_Stddev_Samp_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Management_Sum_Fields = {
  __typename?: 'course_management_sum_fields';
  manager_id?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "course_management" */
export type Course_Management_Sum_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** update columns of table "course_management" */
export enum Course_Management_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  ManagerId = 'manager_id'
}

/** aggregate var_pop on columns */
export type Course_Management_Var_Pop_Fields = {
  __typename?: 'course_management_var_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_management" */
export type Course_Management_Var_Pop_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Management_Var_Samp_Fields = {
  __typename?: 'course_management_var_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_management" */
export type Course_Management_Var_Samp_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Management_Variance_Fields = {
  __typename?: 'course_management_variance_fields';
  manager_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_management" */
export type Course_Management_Variance_Order_By = {
  manager_id?: Maybe<Order_By>;
};

/** columns and relationships of "courses" */
export type Courses = {
  __typename?: 'courses';
  access_code?: Maybe<Scalars['String']>;
  available: Scalars['Boolean'];
  background_color?: Maybe<Scalars['String']>;
  banner_color?: Maybe<Scalars['String']>;
  banner_image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  /** An array relationship */
  enrollments: Array<Course_Enrollment>;
  /** An aggregate relationship */
  enrollments_aggregate: Course_Enrollment_Aggregate;
  /** An array relationship */
  gradebook_items: Array<Gradebook_Items>;
  /** An aggregate relationship */
  gradebook_items_aggregate: Gradebook_Items_Aggregate;
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groups_aggregate: Groups_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  instructor?: Maybe<Users>;
  instructor_id: Scalars['Int'];
  level?: Maybe<Scalars['String']>;
  /** An array relationship */
  management: Array<Course_Management>;
  /** An aggregate relationship */
  management_aggregate: Course_Management_Aggregate;
  name: Scalars['String'];
  schedule?: Maybe<Scalars['String']>;
};


/** columns and relationships of "courses" */
export type CoursesEnrollmentsArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesEnrollments_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesGradebook_ItemsArgs = {
  distinct_on?: Maybe<Array<Gradebook_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Items_Order_By>>;
  where?: Maybe<Gradebook_Items_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesGradebook_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Gradebook_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Items_Order_By>>;
  where?: Maybe<Gradebook_Items_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesManagementArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesManagement_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};

/** aggregated selection of "courses" */
export type Courses_Aggregate = {
  __typename?: 'courses_aggregate';
  aggregate?: Maybe<Courses_Aggregate_Fields>;
  nodes: Array<Courses>;
};

/** aggregate fields of "courses" */
export type Courses_Aggregate_Fields = {
  __typename?: 'courses_aggregate_fields';
  avg?: Maybe<Courses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Courses_Max_Fields>;
  min?: Maybe<Courses_Min_Fields>;
  stddev?: Maybe<Courses_Stddev_Fields>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Fields>;
  sum?: Maybe<Courses_Sum_Fields>;
  var_pop?: Maybe<Courses_Var_Pop_Fields>;
  var_samp?: Maybe<Courses_Var_Samp_Fields>;
  variance?: Maybe<Courses_Variance_Fields>;
};


/** aggregate fields of "courses" */
export type Courses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Courses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses" */
export type Courses_Aggregate_Order_By = {
  avg?: Maybe<Courses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Courses_Max_Order_By>;
  min?: Maybe<Courses_Min_Order_By>;
  stddev?: Maybe<Courses_Stddev_Order_By>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Order_By>;
  sum?: Maybe<Courses_Sum_Order_By>;
  var_pop?: Maybe<Courses_Var_Pop_Order_By>;
  var_samp?: Maybe<Courses_Var_Samp_Order_By>;
  variance?: Maybe<Courses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "courses" */
export type Courses_Arr_Rel_Insert_Input = {
  data: Array<Courses_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** aggregate avg on columns */
export type Courses_Avg_Fields = {
  __typename?: 'courses_avg_fields';
  instructor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "courses" */
export type Courses_Avg_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "courses". All fields are combined with a logical 'AND'. */
export type Courses_Bool_Exp = {
  _and?: Maybe<Array<Courses_Bool_Exp>>;
  _not?: Maybe<Courses_Bool_Exp>;
  _or?: Maybe<Array<Courses_Bool_Exp>>;
  access_code?: Maybe<String_Comparison_Exp>;
  available?: Maybe<Boolean_Comparison_Exp>;
  background_color?: Maybe<String_Comparison_Exp>;
  banner_color?: Maybe<String_Comparison_Exp>;
  banner_image?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  duration?: Maybe<String_Comparison_Exp>;
  enrollments?: Maybe<Course_Enrollment_Bool_Exp>;
  gradebook_items?: Maybe<Gradebook_Items_Bool_Exp>;
  groups?: Maybe<Groups_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  instructor?: Maybe<Users_Bool_Exp>;
  instructor_id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<String_Comparison_Exp>;
  management?: Maybe<Course_Management_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  schedule?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "courses" */
export enum Courses_Constraint {
  /** unique or primary key constraint */
  CoursesPkey = 'courses_pkey'
}

/** input type for incrementing numeric columns in table "courses" */
export type Courses_Inc_Input = {
  instructor_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "courses" */
export type Courses_Insert_Input = {
  access_code?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Boolean']>;
  background_color?: Maybe<Scalars['String']>;
  banner_color?: Maybe<Scalars['String']>;
  banner_image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  enrollments?: Maybe<Course_Enrollment_Arr_Rel_Insert_Input>;
  gradebook_items?: Maybe<Gradebook_Items_Arr_Rel_Insert_Input>;
  groups?: Maybe<Groups_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  instructor?: Maybe<Users_Obj_Rel_Insert_Input>;
  instructor_id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  management?: Maybe<Course_Management_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  schedule?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Courses_Max_Fields = {
  __typename?: 'courses_max_fields';
  access_code?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  banner_color?: Maybe<Scalars['String']>;
  banner_image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instructor_id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schedule?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "courses" */
export type Courses_Max_Order_By = {
  access_code?: Maybe<Order_By>;
  background_color?: Maybe<Order_By>;
  banner_color?: Maybe<Order_By>;
  banner_image?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instructor_id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Min_Fields = {
  __typename?: 'courses_min_fields';
  access_code?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  banner_color?: Maybe<Scalars['String']>;
  banner_image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instructor_id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schedule?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "courses" */
export type Courses_Min_Order_By = {
  access_code?: Maybe<Order_By>;
  background_color?: Maybe<Order_By>;
  banner_color?: Maybe<Order_By>;
  banner_image?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instructor_id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
};

/** response of any mutation on the table "courses" */
export type Courses_Mutation_Response = {
  __typename?: 'courses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Courses>;
};

/** input type for inserting object relation for remote table "courses" */
export type Courses_Obj_Rel_Insert_Input = {
  data: Courses_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** on conflict condition type for table "courses" */
export type Courses_On_Conflict = {
  constraint: Courses_Constraint;
  update_columns?: Array<Courses_Update_Column>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** Ordering options when selecting data from "courses". */
export type Courses_Order_By = {
  access_code?: Maybe<Order_By>;
  available?: Maybe<Order_By>;
  background_color?: Maybe<Order_By>;
  banner_color?: Maybe<Order_By>;
  banner_image?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  enrollments_aggregate?: Maybe<Course_Enrollment_Aggregate_Order_By>;
  gradebook_items_aggregate?: Maybe<Gradebook_Items_Aggregate_Order_By>;
  groups_aggregate?: Maybe<Groups_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  instructor?: Maybe<Users_Order_By>;
  instructor_id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  management_aggregate?: Maybe<Course_Management_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
};

/** primary key columns input for table: courses */
export type Courses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "courses" */
export enum Courses_Select_Column {
  /** column name */
  AccessCode = 'access_code',
  /** column name */
  Available = 'available',
  /** column name */
  BackgroundColor = 'background_color',
  /** column name */
  BannerColor = 'banner_color',
  /** column name */
  BannerImage = 'banner_image',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  InstructorId = 'instructor_id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  Schedule = 'schedule'
}

/** input type for updating data in table "courses" */
export type Courses_Set_Input = {
  access_code?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Boolean']>;
  background_color?: Maybe<Scalars['String']>;
  banner_color?: Maybe<Scalars['String']>;
  banner_image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instructor_id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schedule?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Courses_Stddev_Fields = {
  __typename?: 'courses_stddev_fields';
  instructor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "courses" */
export type Courses_Stddev_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Courses_Stddev_Pop_Fields = {
  __typename?: 'courses_stddev_pop_fields';
  instructor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "courses" */
export type Courses_Stddev_Pop_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Courses_Stddev_Samp_Fields = {
  __typename?: 'courses_stddev_samp_fields';
  instructor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "courses" */
export type Courses_Stddev_Samp_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Courses_Sum_Fields = {
  __typename?: 'courses_sum_fields';
  instructor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "courses" */
export type Courses_Sum_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** update columns of table "courses" */
export enum Courses_Update_Column {
  /** column name */
  AccessCode = 'access_code',
  /** column name */
  Available = 'available',
  /** column name */
  BackgroundColor = 'background_color',
  /** column name */
  BannerColor = 'banner_color',
  /** column name */
  BannerImage = 'banner_image',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  InstructorId = 'instructor_id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  Schedule = 'schedule'
}

/** aggregate var_pop on columns */
export type Courses_Var_Pop_Fields = {
  __typename?: 'courses_var_pop_fields';
  instructor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "courses" */
export type Courses_Var_Pop_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Courses_Var_Samp_Fields = {
  __typename?: 'courses_var_samp_fields';
  instructor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "courses" */
export type Courses_Var_Samp_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Courses_Variance_Fields = {
  __typename?: 'courses_variance_fields';
  instructor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "courses" */
export type Courses_Variance_Order_By = {
  instructor_id?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "grade_items" */
export type Grade_Items = {
  __typename?: 'grade_items';
  /** An object relationship */
  gradebook_item?: Maybe<Gradebook_Items>;
  gradebook_item_id: Scalars['uuid'];
  id: Scalars['uuid'];
  points: Scalars['Int'];
  status: Scalars['String'];
  /** An object relationship */
  student?: Maybe<Users>;
  student_id: Scalars['Int'];
};

/** aggregated selection of "grade_items" */
export type Grade_Items_Aggregate = {
  __typename?: 'grade_items_aggregate';
  aggregate?: Maybe<Grade_Items_Aggregate_Fields>;
  nodes: Array<Grade_Items>;
};

/** aggregate fields of "grade_items" */
export type Grade_Items_Aggregate_Fields = {
  __typename?: 'grade_items_aggregate_fields';
  avg?: Maybe<Grade_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Grade_Items_Max_Fields>;
  min?: Maybe<Grade_Items_Min_Fields>;
  stddev?: Maybe<Grade_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Grade_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Grade_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Grade_Items_Sum_Fields>;
  var_pop?: Maybe<Grade_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Grade_Items_Var_Samp_Fields>;
  variance?: Maybe<Grade_Items_Variance_Fields>;
};


/** aggregate fields of "grade_items" */
export type Grade_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Grade_Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "grade_items" */
export type Grade_Items_Aggregate_Order_By = {
  avg?: Maybe<Grade_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Grade_Items_Max_Order_By>;
  min?: Maybe<Grade_Items_Min_Order_By>;
  stddev?: Maybe<Grade_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Grade_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Grade_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Grade_Items_Sum_Order_By>;
  var_pop?: Maybe<Grade_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Grade_Items_Var_Samp_Order_By>;
  variance?: Maybe<Grade_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "grade_items" */
export type Grade_Items_Arr_Rel_Insert_Input = {
  data: Array<Grade_Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Grade_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Grade_Items_Avg_Fields = {
  __typename?: 'grade_items_avg_fields';
  points?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "grade_items" */
export type Grade_Items_Avg_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "grade_items". All fields are combined with a logical 'AND'. */
export type Grade_Items_Bool_Exp = {
  _and?: Maybe<Array<Grade_Items_Bool_Exp>>;
  _not?: Maybe<Grade_Items_Bool_Exp>;
  _or?: Maybe<Array<Grade_Items_Bool_Exp>>;
  gradebook_item?: Maybe<Gradebook_Items_Bool_Exp>;
  gradebook_item_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  student?: Maybe<Users_Bool_Exp>;
  student_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "grade_items" */
export enum Grade_Items_Constraint {
  /** unique or primary key constraint */
  GradeItemsPkey = 'grade_items_pkey'
}

/** input type for incrementing numeric columns in table "grade_items" */
export type Grade_Items_Inc_Input = {
  points?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "grade_items" */
export type Grade_Items_Insert_Input = {
  gradebook_item?: Maybe<Gradebook_Items_Obj_Rel_Insert_Input>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  points?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  student?: Maybe<Users_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Grade_Items_Max_Fields = {
  __typename?: 'grade_items_max_fields';
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  points?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "grade_items" */
export type Grade_Items_Max_Order_By = {
  gradebook_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Grade_Items_Min_Fields = {
  __typename?: 'grade_items_min_fields';
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  points?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "grade_items" */
export type Grade_Items_Min_Order_By = {
  gradebook_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "grade_items" */
export type Grade_Items_Mutation_Response = {
  __typename?: 'grade_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Grade_Items>;
};

/** on conflict condition type for table "grade_items" */
export type Grade_Items_On_Conflict = {
  constraint: Grade_Items_Constraint;
  update_columns?: Array<Grade_Items_Update_Column>;
  where?: Maybe<Grade_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "grade_items". */
export type Grade_Items_Order_By = {
  gradebook_item?: Maybe<Gradebook_Items_Order_By>;
  gradebook_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  student?: Maybe<Users_Order_By>;
  student_id?: Maybe<Order_By>;
};

/** primary key columns input for table: grade_items */
export type Grade_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "grade_items" */
export enum Grade_Items_Select_Column {
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Points = 'points',
  /** column name */
  Status = 'status',
  /** column name */
  StudentId = 'student_id'
}

/** input type for updating data in table "grade_items" */
export type Grade_Items_Set_Input = {
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  points?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Grade_Items_Stddev_Fields = {
  __typename?: 'grade_items_stddev_fields';
  points?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "grade_items" */
export type Grade_Items_Stddev_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Grade_Items_Stddev_Pop_Fields = {
  __typename?: 'grade_items_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "grade_items" */
export type Grade_Items_Stddev_Pop_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Grade_Items_Stddev_Samp_Fields = {
  __typename?: 'grade_items_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "grade_items" */
export type Grade_Items_Stddev_Samp_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Grade_Items_Sum_Fields = {
  __typename?: 'grade_items_sum_fields';
  points?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "grade_items" */
export type Grade_Items_Sum_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** update columns of table "grade_items" */
export enum Grade_Items_Update_Column {
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Points = 'points',
  /** column name */
  Status = 'status',
  /** column name */
  StudentId = 'student_id'
}

/** aggregate var_pop on columns */
export type Grade_Items_Var_Pop_Fields = {
  __typename?: 'grade_items_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "grade_items" */
export type Grade_Items_Var_Pop_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Grade_Items_Var_Samp_Fields = {
  __typename?: 'grade_items_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "grade_items" */
export type Grade_Items_Var_Samp_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Grade_Items_Variance_Fields = {
  __typename?: 'grade_items_variance_fields';
  points?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "grade_items" */
export type Grade_Items_Variance_Order_By = {
  points?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** columns and relationships of "gradebook_item_submissions" */
export type Gradebook_Item_Submissions = {
  __typename?: 'gradebook_item_submissions';
  content?: Maybe<Scalars['jsonb']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  gradebook_item?: Maybe<Gradebook_Items>;
  gradebook_item_id: Scalars['uuid'];
  /** An object relationship */
  group?: Maybe<Groups>;
  group_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An object relationship */
  student?: Maybe<Users>;
  student_id: Scalars['Int'];
};


/** columns and relationships of "gradebook_item_submissions" */
export type Gradebook_Item_SubmissionsContentArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Aggregate = {
  __typename?: 'gradebook_item_submissions_aggregate';
  aggregate?: Maybe<Gradebook_Item_Submissions_Aggregate_Fields>;
  nodes: Array<Gradebook_Item_Submissions>;
};

/** aggregate fields of "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Aggregate_Fields = {
  __typename?: 'gradebook_item_submissions_aggregate_fields';
  avg?: Maybe<Gradebook_Item_Submissions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gradebook_Item_Submissions_Max_Fields>;
  min?: Maybe<Gradebook_Item_Submissions_Min_Fields>;
  stddev?: Maybe<Gradebook_Item_Submissions_Stddev_Fields>;
  stddev_pop?: Maybe<Gradebook_Item_Submissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gradebook_Item_Submissions_Stddev_Samp_Fields>;
  sum?: Maybe<Gradebook_Item_Submissions_Sum_Fields>;
  var_pop?: Maybe<Gradebook_Item_Submissions_Var_Pop_Fields>;
  var_samp?: Maybe<Gradebook_Item_Submissions_Var_Samp_Fields>;
  variance?: Maybe<Gradebook_Item_Submissions_Variance_Fields>;
};


/** aggregate fields of "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gradebook_Item_Submissions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Aggregate_Order_By = {
  avg?: Maybe<Gradebook_Item_Submissions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Gradebook_Item_Submissions_Max_Order_By>;
  min?: Maybe<Gradebook_Item_Submissions_Min_Order_By>;
  stddev?: Maybe<Gradebook_Item_Submissions_Stddev_Order_By>;
  stddev_pop?: Maybe<Gradebook_Item_Submissions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Gradebook_Item_Submissions_Stddev_Samp_Order_By>;
  sum?: Maybe<Gradebook_Item_Submissions_Sum_Order_By>;
  var_pop?: Maybe<Gradebook_Item_Submissions_Var_Pop_Order_By>;
  var_samp?: Maybe<Gradebook_Item_Submissions_Var_Samp_Order_By>;
  variance?: Maybe<Gradebook_Item_Submissions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gradebook_Item_Submissions_Append_Input = {
  content?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Arr_Rel_Insert_Input = {
  data: Array<Gradebook_Item_Submissions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Gradebook_Item_Submissions_On_Conflict>;
};

/** aggregate avg on columns */
export type Gradebook_Item_Submissions_Avg_Fields = {
  __typename?: 'gradebook_item_submissions_avg_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Avg_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gradebook_item_submissions". All fields are combined with a logical 'AND'. */
export type Gradebook_Item_Submissions_Bool_Exp = {
  _and?: Maybe<Array<Gradebook_Item_Submissions_Bool_Exp>>;
  _not?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
  _or?: Maybe<Array<Gradebook_Item_Submissions_Bool_Exp>>;
  content?: Maybe<Jsonb_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gradebook_item?: Maybe<Gradebook_Items_Bool_Exp>;
  gradebook_item_id?: Maybe<Uuid_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  student?: Maybe<Users_Bool_Exp>;
  student_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "gradebook_item_submissions" */
export enum Gradebook_Item_Submissions_Constraint {
  /** unique or primary key constraint */
  GradebookItemSubmissionsPkey = 'gradebook_item_submissions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gradebook_Item_Submissions_Delete_At_Path_Input = {
  content?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gradebook_Item_Submissions_Delete_Elem_Input = {
  content?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gradebook_Item_Submissions_Delete_Key_Input = {
  content?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Inc_Input = {
  student_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Insert_Input = {
  content?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gradebook_item?: Maybe<Gradebook_Items_Obj_Rel_Insert_Input>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student?: Maybe<Users_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Gradebook_Item_Submissions_Max_Fields = {
  __typename?: 'gradebook_item_submissions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  gradebook_item_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gradebook_Item_Submissions_Min_Fields = {
  __typename?: 'gradebook_item_submissions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  gradebook_item_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Mutation_Response = {
  __typename?: 'gradebook_item_submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gradebook_Item_Submissions>;
};

/** on conflict condition type for table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_On_Conflict = {
  constraint: Gradebook_Item_Submissions_Constraint;
  update_columns?: Array<Gradebook_Item_Submissions_Update_Column>;
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "gradebook_item_submissions". */
export type Gradebook_Item_Submissions_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gradebook_item?: Maybe<Gradebook_Items_Order_By>;
  gradebook_item_id?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student?: Maybe<Users_Order_By>;
  student_id?: Maybe<Order_By>;
};

/** primary key columns input for table: gradebook_item_submissions */
export type Gradebook_Item_Submissions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gradebook_Item_Submissions_Prepend_Input = {
  content?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "gradebook_item_submissions" */
export enum Gradebook_Item_Submissions_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id'
}

/** input type for updating data in table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Set_Input = {
  content?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Gradebook_Item_Submissions_Stddev_Fields = {
  __typename?: 'gradebook_item_submissions_stddev_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Stddev_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gradebook_Item_Submissions_Stddev_Pop_Fields = {
  __typename?: 'gradebook_item_submissions_stddev_pop_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Stddev_Pop_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gradebook_Item_Submissions_Stddev_Samp_Fields = {
  __typename?: 'gradebook_item_submissions_stddev_samp_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Stddev_Samp_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Gradebook_Item_Submissions_Sum_Fields = {
  __typename?: 'gradebook_item_submissions_sum_fields';
  student_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Sum_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** update columns of table "gradebook_item_submissions" */
export enum Gradebook_Item_Submissions_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id'
}

/** aggregate var_pop on columns */
export type Gradebook_Item_Submissions_Var_Pop_Fields = {
  __typename?: 'gradebook_item_submissions_var_pop_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Var_Pop_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gradebook_Item_Submissions_Var_Samp_Fields = {
  __typename?: 'gradebook_item_submissions_var_samp_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Var_Samp_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Gradebook_Item_Submissions_Variance_Fields = {
  __typename?: 'gradebook_item_submissions_variance_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gradebook_item_submissions" */
export type Gradebook_Item_Submissions_Variance_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** columns and relationships of "gradebook_items" */
export type Gradebook_Items = {
  __typename?: 'gradebook_items';
  accommodations?: Maybe<Scalars['String']>;
  assessment_id: Scalars['uuid'];
  assessment_type: Scalars['String'];
  assign_to: Scalars['jsonb'];
  /** An object relationship */
  assignment?: Maybe<Assignments>;
  attempts_allowed: Scalars['Int'];
  attempts_grading: Scalars['String'];
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  /** An array relationship */
  grade_items: Array<Grade_Items>;
  /** An aggregate relationship */
  grade_items_aggregate: Grade_Items_Aggregate;
  /** An object relationship */
  grading_rubric?: Maybe<Grading_Rubric>;
  grading_rubric_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  max_points?: Maybe<Scalars['Int']>;
  scoring_type: Scalars['String'];
  status: Scalars['String'];
  submission_type: Scalars['String'];
  /** An array relationship */
  submissions: Array<Gradebook_Item_Submissions>;
  /** An aggregate relationship */
  submissions_aggregate: Gradebook_Item_Submissions_Aggregate;
  /** An object relationship */
  test?: Maybe<Tests>;
};


/** columns and relationships of "gradebook_items" */
export type Gradebook_ItemsAssign_ToArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "gradebook_items" */
export type Gradebook_ItemsGrade_ItemsArgs = {
  distinct_on?: Maybe<Array<Grade_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grade_Items_Order_By>>;
  where?: Maybe<Grade_Items_Bool_Exp>;
};


/** columns and relationships of "gradebook_items" */
export type Gradebook_ItemsGrade_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Grade_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grade_Items_Order_By>>;
  where?: Maybe<Grade_Items_Bool_Exp>;
};


/** columns and relationships of "gradebook_items" */
export type Gradebook_ItemsSubmissionsArgs = {
  distinct_on?: Maybe<Array<Gradebook_Item_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Item_Submissions_Order_By>>;
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
};


/** columns and relationships of "gradebook_items" */
export type Gradebook_ItemsSubmissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Gradebook_Item_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Item_Submissions_Order_By>>;
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
};

/** aggregated selection of "gradebook_items" */
export type Gradebook_Items_Aggregate = {
  __typename?: 'gradebook_items_aggregate';
  aggregate?: Maybe<Gradebook_Items_Aggregate_Fields>;
  nodes: Array<Gradebook_Items>;
};

/** aggregate fields of "gradebook_items" */
export type Gradebook_Items_Aggregate_Fields = {
  __typename?: 'gradebook_items_aggregate_fields';
  avg?: Maybe<Gradebook_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gradebook_Items_Max_Fields>;
  min?: Maybe<Gradebook_Items_Min_Fields>;
  stddev?: Maybe<Gradebook_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Gradebook_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gradebook_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Gradebook_Items_Sum_Fields>;
  var_pop?: Maybe<Gradebook_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Gradebook_Items_Var_Samp_Fields>;
  variance?: Maybe<Gradebook_Items_Variance_Fields>;
};


/** aggregate fields of "gradebook_items" */
export type Gradebook_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gradebook_Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gradebook_items" */
export type Gradebook_Items_Aggregate_Order_By = {
  avg?: Maybe<Gradebook_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Gradebook_Items_Max_Order_By>;
  min?: Maybe<Gradebook_Items_Min_Order_By>;
  stddev?: Maybe<Gradebook_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Gradebook_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Gradebook_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Gradebook_Items_Sum_Order_By>;
  var_pop?: Maybe<Gradebook_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Gradebook_Items_Var_Samp_Order_By>;
  variance?: Maybe<Gradebook_Items_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gradebook_Items_Append_Input = {
  assign_to?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "gradebook_items" */
export type Gradebook_Items_Arr_Rel_Insert_Input = {
  data: Array<Gradebook_Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Gradebook_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Gradebook_Items_Avg_Fields = {
  __typename?: 'gradebook_items_avg_fields';
  attempts_allowed?: Maybe<Scalars['Float']>;
  max_points?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gradebook_items" */
export type Gradebook_Items_Avg_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gradebook_items". All fields are combined with a logical 'AND'. */
export type Gradebook_Items_Bool_Exp = {
  _and?: Maybe<Array<Gradebook_Items_Bool_Exp>>;
  _not?: Maybe<Gradebook_Items_Bool_Exp>;
  _or?: Maybe<Array<Gradebook_Items_Bool_Exp>>;
  accommodations?: Maybe<String_Comparison_Exp>;
  assessment_id?: Maybe<Uuid_Comparison_Exp>;
  assessment_type?: Maybe<String_Comparison_Exp>;
  assign_to?: Maybe<Jsonb_Comparison_Exp>;
  assignment?: Maybe<Assignments_Bool_Exp>;
  attempts_allowed?: Maybe<Int_Comparison_Exp>;
  attempts_grading?: Maybe<String_Comparison_Exp>;
  available_from?: Maybe<Timestamp_Comparison_Exp>;
  available_until?: Maybe<Timestamp_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  grade_items?: Maybe<Grade_Items_Bool_Exp>;
  grading_rubric?: Maybe<Grading_Rubric_Bool_Exp>;
  grading_rubric_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  max_points?: Maybe<Int_Comparison_Exp>;
  scoring_type?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  submission_type?: Maybe<String_Comparison_Exp>;
  submissions?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
  test?: Maybe<Tests_Bool_Exp>;
};

/** unique or primary key constraints on table "gradebook_items" */
export enum Gradebook_Items_Constraint {
  /** unique or primary key constraint */
  GradebookItemPkey = 'gradebook_item_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gradebook_Items_Delete_At_Path_Input = {
  assign_to?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gradebook_Items_Delete_Elem_Input = {
  assign_to?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gradebook_Items_Delete_Key_Input = {
  assign_to?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "gradebook_items" */
export type Gradebook_Items_Inc_Input = {
  attempts_allowed?: Maybe<Scalars['Int']>;
  max_points?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "gradebook_items" */
export type Gradebook_Items_Insert_Input = {
  accommodations?: Maybe<Scalars['String']>;
  assessment_id?: Maybe<Scalars['uuid']>;
  assessment_type?: Maybe<Scalars['String']>;
  assign_to?: Maybe<Scalars['jsonb']>;
  assignment?: Maybe<Assignments_Obj_Rel_Insert_Input>;
  attempts_allowed?: Maybe<Scalars['Int']>;
  attempts_grading?: Maybe<Scalars['String']>;
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  grade_items?: Maybe<Grade_Items_Arr_Rel_Insert_Input>;
  grading_rubric?: Maybe<Grading_Rubric_Obj_Rel_Insert_Input>;
  grading_rubric_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  max_points?: Maybe<Scalars['Int']>;
  scoring_type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submission_type?: Maybe<Scalars['String']>;
  submissions?: Maybe<Gradebook_Item_Submissions_Arr_Rel_Insert_Input>;
  test?: Maybe<Tests_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Gradebook_Items_Max_Fields = {
  __typename?: 'gradebook_items_max_fields';
  accommodations?: Maybe<Scalars['String']>;
  assessment_id?: Maybe<Scalars['uuid']>;
  assessment_type?: Maybe<Scalars['String']>;
  attempts_allowed?: Maybe<Scalars['Int']>;
  attempts_grading?: Maybe<Scalars['String']>;
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  grading_rubric_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  max_points?: Maybe<Scalars['Int']>;
  scoring_type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submission_type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "gradebook_items" */
export type Gradebook_Items_Max_Order_By = {
  accommodations?: Maybe<Order_By>;
  assessment_id?: Maybe<Order_By>;
  assessment_type?: Maybe<Order_By>;
  attempts_allowed?: Maybe<Order_By>;
  attempts_grading?: Maybe<Order_By>;
  available_from?: Maybe<Order_By>;
  available_until?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grading_rubric_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
  scoring_type?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  submission_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gradebook_Items_Min_Fields = {
  __typename?: 'gradebook_items_min_fields';
  accommodations?: Maybe<Scalars['String']>;
  assessment_id?: Maybe<Scalars['uuid']>;
  assessment_type?: Maybe<Scalars['String']>;
  attempts_allowed?: Maybe<Scalars['Int']>;
  attempts_grading?: Maybe<Scalars['String']>;
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  grading_rubric_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  max_points?: Maybe<Scalars['Int']>;
  scoring_type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submission_type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "gradebook_items" */
export type Gradebook_Items_Min_Order_By = {
  accommodations?: Maybe<Order_By>;
  assessment_id?: Maybe<Order_By>;
  assessment_type?: Maybe<Order_By>;
  attempts_allowed?: Maybe<Order_By>;
  attempts_grading?: Maybe<Order_By>;
  available_from?: Maybe<Order_By>;
  available_until?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grading_rubric_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
  scoring_type?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  submission_type?: Maybe<Order_By>;
};

/** response of any mutation on the table "gradebook_items" */
export type Gradebook_Items_Mutation_Response = {
  __typename?: 'gradebook_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gradebook_Items>;
};

/** input type for inserting object relation for remote table "gradebook_items" */
export type Gradebook_Items_Obj_Rel_Insert_Input = {
  data: Gradebook_Items_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Gradebook_Items_On_Conflict>;
};

/** on conflict condition type for table "gradebook_items" */
export type Gradebook_Items_On_Conflict = {
  constraint: Gradebook_Items_Constraint;
  update_columns?: Array<Gradebook_Items_Update_Column>;
  where?: Maybe<Gradebook_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "gradebook_items". */
export type Gradebook_Items_Order_By = {
  accommodations?: Maybe<Order_By>;
  assessment_id?: Maybe<Order_By>;
  assessment_type?: Maybe<Order_By>;
  assign_to?: Maybe<Order_By>;
  assignment?: Maybe<Assignments_Order_By>;
  attempts_allowed?: Maybe<Order_By>;
  attempts_grading?: Maybe<Order_By>;
  available_from?: Maybe<Order_By>;
  available_until?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grade_items_aggregate?: Maybe<Grade_Items_Aggregate_Order_By>;
  grading_rubric?: Maybe<Grading_Rubric_Order_By>;
  grading_rubric_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
  scoring_type?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  submission_type?: Maybe<Order_By>;
  submissions_aggregate?: Maybe<Gradebook_Item_Submissions_Aggregate_Order_By>;
  test?: Maybe<Tests_Order_By>;
};

/** primary key columns input for table: gradebook_items */
export type Gradebook_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gradebook_Items_Prepend_Input = {
  assign_to?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "gradebook_items" */
export enum Gradebook_Items_Select_Column {
  /** column name */
  Accommodations = 'accommodations',
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  AssessmentType = 'assessment_type',
  /** column name */
  AssignTo = 'assign_to',
  /** column name */
  AttemptsAllowed = 'attempts_allowed',
  /** column name */
  AttemptsGrading = 'attempts_grading',
  /** column name */
  AvailableFrom = 'available_from',
  /** column name */
  AvailableUntil = 'available_until',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GradingRubricId = 'grading_rubric_id',
  /** column name */
  Id = 'id',
  /** column name */
  MaxPoints = 'max_points',
  /** column name */
  ScoringType = 'scoring_type',
  /** column name */
  Status = 'status',
  /** column name */
  SubmissionType = 'submission_type'
}

/** input type for updating data in table "gradebook_items" */
export type Gradebook_Items_Set_Input = {
  accommodations?: Maybe<Scalars['String']>;
  assessment_id?: Maybe<Scalars['uuid']>;
  assessment_type?: Maybe<Scalars['String']>;
  assign_to?: Maybe<Scalars['jsonb']>;
  attempts_allowed?: Maybe<Scalars['Int']>;
  attempts_grading?: Maybe<Scalars['String']>;
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  grading_rubric_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  max_points?: Maybe<Scalars['Int']>;
  scoring_type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submission_type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Gradebook_Items_Stddev_Fields = {
  __typename?: 'gradebook_items_stddev_fields';
  attempts_allowed?: Maybe<Scalars['Float']>;
  max_points?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gradebook_items" */
export type Gradebook_Items_Stddev_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gradebook_Items_Stddev_Pop_Fields = {
  __typename?: 'gradebook_items_stddev_pop_fields';
  attempts_allowed?: Maybe<Scalars['Float']>;
  max_points?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gradebook_items" */
export type Gradebook_Items_Stddev_Pop_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gradebook_Items_Stddev_Samp_Fields = {
  __typename?: 'gradebook_items_stddev_samp_fields';
  attempts_allowed?: Maybe<Scalars['Float']>;
  max_points?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gradebook_items" */
export type Gradebook_Items_Stddev_Samp_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Gradebook_Items_Sum_Fields = {
  __typename?: 'gradebook_items_sum_fields';
  attempts_allowed?: Maybe<Scalars['Int']>;
  max_points?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gradebook_items" */
export type Gradebook_Items_Sum_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** update columns of table "gradebook_items" */
export enum Gradebook_Items_Update_Column {
  /** column name */
  Accommodations = 'accommodations',
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  AssessmentType = 'assessment_type',
  /** column name */
  AssignTo = 'assign_to',
  /** column name */
  AttemptsAllowed = 'attempts_allowed',
  /** column name */
  AttemptsGrading = 'attempts_grading',
  /** column name */
  AvailableFrom = 'available_from',
  /** column name */
  AvailableUntil = 'available_until',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GradingRubricId = 'grading_rubric_id',
  /** column name */
  Id = 'id',
  /** column name */
  MaxPoints = 'max_points',
  /** column name */
  ScoringType = 'scoring_type',
  /** column name */
  Status = 'status',
  /** column name */
  SubmissionType = 'submission_type'
}

/** aggregate var_pop on columns */
export type Gradebook_Items_Var_Pop_Fields = {
  __typename?: 'gradebook_items_var_pop_fields';
  attempts_allowed?: Maybe<Scalars['Float']>;
  max_points?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gradebook_items" */
export type Gradebook_Items_Var_Pop_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gradebook_Items_Var_Samp_Fields = {
  __typename?: 'gradebook_items_var_samp_fields';
  attempts_allowed?: Maybe<Scalars['Float']>;
  max_points?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gradebook_items" */
export type Gradebook_Items_Var_Samp_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Gradebook_Items_Variance_Fields = {
  __typename?: 'gradebook_items_variance_fields';
  attempts_allowed?: Maybe<Scalars['Float']>;
  max_points?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gradebook_items" */
export type Gradebook_Items_Variance_Order_By = {
  attempts_allowed?: Maybe<Order_By>;
  max_points?: Maybe<Order_By>;
};

/** columns and relationships of "grading_rubric" */
export type Grading_Rubric = {
  __typename?: 'grading_rubric';
  content: Scalars['String'];
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "grading_rubric" */
export type Grading_Rubric_Aggregate = {
  __typename?: 'grading_rubric_aggregate';
  aggregate?: Maybe<Grading_Rubric_Aggregate_Fields>;
  nodes: Array<Grading_Rubric>;
};

/** aggregate fields of "grading_rubric" */
export type Grading_Rubric_Aggregate_Fields = {
  __typename?: 'grading_rubric_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Grading_Rubric_Max_Fields>;
  min?: Maybe<Grading_Rubric_Min_Fields>;
};


/** aggregate fields of "grading_rubric" */
export type Grading_Rubric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Grading_Rubric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "grading_rubric". All fields are combined with a logical 'AND'. */
export type Grading_Rubric_Bool_Exp = {
  _and?: Maybe<Array<Grading_Rubric_Bool_Exp>>;
  _not?: Maybe<Grading_Rubric_Bool_Exp>;
  _or?: Maybe<Array<Grading_Rubric_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "grading_rubric" */
export enum Grading_Rubric_Constraint {
  /** unique or primary key constraint */
  GradingRubricPkey = 'grading_rubric_pkey'
}

/** input type for inserting data into table "grading_rubric" */
export type Grading_Rubric_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Grading_Rubric_Max_Fields = {
  __typename?: 'grading_rubric_max_fields';
  content?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Grading_Rubric_Min_Fields = {
  __typename?: 'grading_rubric_min_fields';
  content?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "grading_rubric" */
export type Grading_Rubric_Mutation_Response = {
  __typename?: 'grading_rubric_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Grading_Rubric>;
};

/** input type for inserting object relation for remote table "grading_rubric" */
export type Grading_Rubric_Obj_Rel_Insert_Input = {
  data: Grading_Rubric_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Grading_Rubric_On_Conflict>;
};

/** on conflict condition type for table "grading_rubric" */
export type Grading_Rubric_On_Conflict = {
  constraint: Grading_Rubric_Constraint;
  update_columns?: Array<Grading_Rubric_Update_Column>;
  where?: Maybe<Grading_Rubric_Bool_Exp>;
};

/** Ordering options when selecting data from "grading_rubric". */
export type Grading_Rubric_Order_By = {
  content?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: grading_rubric */
export type Grading_Rubric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "grading_rubric" */
export enum Grading_Rubric_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "grading_rubric" */
export type Grading_Rubric_Set_Input = {
  content?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "grading_rubric" */
export enum Grading_Rubric_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "group_membership" */
export type Group_Membership = {
  __typename?: 'group_membership';
  /** An object relationship */
  group?: Maybe<Groups>;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  student?: Maybe<Users>;
  student_id: Scalars['Int'];
};

/** aggregated selection of "group_membership" */
export type Group_Membership_Aggregate = {
  __typename?: 'group_membership_aggregate';
  aggregate?: Maybe<Group_Membership_Aggregate_Fields>;
  nodes: Array<Group_Membership>;
};

/** aggregate fields of "group_membership" */
export type Group_Membership_Aggregate_Fields = {
  __typename?: 'group_membership_aggregate_fields';
  avg?: Maybe<Group_Membership_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Membership_Max_Fields>;
  min?: Maybe<Group_Membership_Min_Fields>;
  stddev?: Maybe<Group_Membership_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Membership_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Membership_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Membership_Sum_Fields>;
  var_pop?: Maybe<Group_Membership_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Membership_Var_Samp_Fields>;
  variance?: Maybe<Group_Membership_Variance_Fields>;
};


/** aggregate fields of "group_membership" */
export type Group_Membership_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Membership_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_membership" */
export type Group_Membership_Aggregate_Order_By = {
  avg?: Maybe<Group_Membership_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Membership_Max_Order_By>;
  min?: Maybe<Group_Membership_Min_Order_By>;
  stddev?: Maybe<Group_Membership_Stddev_Order_By>;
  stddev_pop?: Maybe<Group_Membership_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Group_Membership_Stddev_Samp_Order_By>;
  sum?: Maybe<Group_Membership_Sum_Order_By>;
  var_pop?: Maybe<Group_Membership_Var_Pop_Order_By>;
  var_samp?: Maybe<Group_Membership_Var_Samp_Order_By>;
  variance?: Maybe<Group_Membership_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "group_membership" */
export type Group_Membership_Arr_Rel_Insert_Input = {
  data: Array<Group_Membership_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Membership_On_Conflict>;
};

/** aggregate avg on columns */
export type Group_Membership_Avg_Fields = {
  __typename?: 'group_membership_avg_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_membership" */
export type Group_Membership_Avg_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_membership". All fields are combined with a logical 'AND'. */
export type Group_Membership_Bool_Exp = {
  _and?: Maybe<Array<Group_Membership_Bool_Exp>>;
  _not?: Maybe<Group_Membership_Bool_Exp>;
  _or?: Maybe<Array<Group_Membership_Bool_Exp>>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  student?: Maybe<Users_Bool_Exp>;
  student_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_membership" */
export enum Group_Membership_Constraint {
  /** unique or primary key constraint */
  GroupMembershipPkey = 'group_membership_pkey'
}

/** input type for incrementing numeric columns in table "group_membership" */
export type Group_Membership_Inc_Input = {
  student_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group_membership" */
export type Group_Membership_Insert_Input = {
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student?: Maybe<Users_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Group_Membership_Max_Fields = {
  __typename?: 'group_membership_max_fields';
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "group_membership" */
export type Group_Membership_Max_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Membership_Min_Fields = {
  __typename?: 'group_membership_min_fields';
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "group_membership" */
export type Group_Membership_Min_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_membership" */
export type Group_Membership_Mutation_Response = {
  __typename?: 'group_membership_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Membership>;
};

/** on conflict condition type for table "group_membership" */
export type Group_Membership_On_Conflict = {
  constraint: Group_Membership_Constraint;
  update_columns?: Array<Group_Membership_Update_Column>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};

/** Ordering options when selecting data from "group_membership". */
export type Group_Membership_Order_By = {
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student?: Maybe<Users_Order_By>;
  student_id?: Maybe<Order_By>;
};

/** primary key columns input for table: group_membership */
export type Group_Membership_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "group_membership" */
export enum Group_Membership_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id'
}

/** input type for updating data in table "group_membership" */
export type Group_Membership_Set_Input = {
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Group_Membership_Stddev_Fields = {
  __typename?: 'group_membership_stddev_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_membership" */
export type Group_Membership_Stddev_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Membership_Stddev_Pop_Fields = {
  __typename?: 'group_membership_stddev_pop_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_membership" */
export type Group_Membership_Stddev_Pop_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Membership_Stddev_Samp_Fields = {
  __typename?: 'group_membership_stddev_samp_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_membership" */
export type Group_Membership_Stddev_Samp_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_Membership_Sum_Fields = {
  __typename?: 'group_membership_sum_fields';
  student_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_membership" */
export type Group_Membership_Sum_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** update columns of table "group_membership" */
export enum Group_Membership_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id'
}

/** aggregate var_pop on columns */
export type Group_Membership_Var_Pop_Fields = {
  __typename?: 'group_membership_var_pop_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_membership" */
export type Group_Membership_Var_Pop_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Membership_Var_Samp_Fields = {
  __typename?: 'group_membership_var_samp_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_membership" */
export type Group_Membership_Var_Samp_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Membership_Variance_Fields = {
  __typename?: 'group_membership_variance_fields';
  student_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_membership" */
export type Group_Membership_Variance_Order_By = {
  student_id?: Maybe<Order_By>;
};

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An array relationship */
  membership: Array<Group_Membership>;
  /** An aggregate relationship */
  membership_aggregate: Group_Membership_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "groups" */
export type GroupsMembershipArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsMembership_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
};


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "groups" */
export type Groups_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Groups_Max_Order_By>;
  min?: Maybe<Groups_Min_Order_By>;
};

/** input type for inserting array relation for remote table "groups" */
export type Groups_Arr_Rel_Insert_Input = {
  data: Array<Groups_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: Maybe<Array<Groups_Bool_Exp>>;
  _not?: Maybe<Groups_Bool_Exp>;
  _or?: Maybe<Array<Groups_Bool_Exp>>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  membership?: Maybe<Group_Membership_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint */
  GroupsPkey = 'groups_pkey'
}

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  membership?: Maybe<Group_Membership_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "groups" */
export type Groups_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "groups" */
export type Groups_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** on conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: Maybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_aggregate?: Maybe<Group_Membership_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules';
  available_from?: Maybe<Scalars['timestamp']>;
  content: Scalars['String'];
  folder_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  order: Scalars['Int'];
  status?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** An object relationship */
  unit?: Maybe<Units>;
  unit_id: Scalars['uuid'];
};

/** aggregated selection of "modules" */
export type Modules_Aggregate = {
  __typename?: 'modules_aggregate';
  aggregate?: Maybe<Modules_Aggregate_Fields>;
  nodes: Array<Modules>;
};

/** aggregate fields of "modules" */
export type Modules_Aggregate_Fields = {
  __typename?: 'modules_aggregate_fields';
  avg?: Maybe<Modules_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Modules_Max_Fields>;
  min?: Maybe<Modules_Min_Fields>;
  stddev?: Maybe<Modules_Stddev_Fields>;
  stddev_pop?: Maybe<Modules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Modules_Stddev_Samp_Fields>;
  sum?: Maybe<Modules_Sum_Fields>;
  var_pop?: Maybe<Modules_Var_Pop_Fields>;
  var_samp?: Maybe<Modules_Var_Samp_Fields>;
  variance?: Maybe<Modules_Variance_Fields>;
};


/** aggregate fields of "modules" */
export type Modules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Modules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Modules_Avg_Fields = {
  __typename?: 'modules_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: Maybe<Array<Modules_Bool_Exp>>;
  _not?: Maybe<Modules_Bool_Exp>;
  _or?: Maybe<Array<Modules_Bool_Exp>>;
  available_from?: Maybe<Timestamp_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  folder_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<Units_Bool_Exp>;
  unit_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "modules" */
export enum Modules_Constraint {
  /** unique or primary key constraint */
  ModulePkey = 'module_pkey'
}

/** input type for incrementing numeric columns in table "modules" */
export type Modules_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "modules" */
export type Modules_Insert_Input = {
  available_from?: Maybe<Scalars['timestamp']>;
  content?: Maybe<Scalars['String']>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Units_Obj_Rel_Insert_Input>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Modules_Max_Fields = {
  __typename?: 'modules_max_fields';
  available_from?: Maybe<Scalars['timestamp']>;
  content?: Maybe<Scalars['String']>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Modules_Min_Fields = {
  __typename?: 'modules_min_fields';
  available_from?: Maybe<Scalars['timestamp']>;
  content?: Maybe<Scalars['String']>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "modules" */
export type Modules_Mutation_Response = {
  __typename?: 'modules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Modules>;
};

/** on conflict condition type for table "modules" */
export type Modules_On_Conflict = {
  constraint: Modules_Constraint;
  update_columns?: Array<Modules_Update_Column>;
  where?: Maybe<Modules_Bool_Exp>;
};

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  available_from?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  folder_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  unit?: Maybe<Units_Order_By>;
  unit_id?: Maybe<Order_By>;
};

/** primary key columns input for table: modules */
export type Modules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  AvailableFrom = 'available_from',
  /** column name */
  Content = 'content',
  /** column name */
  FolderId = 'folder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "modules" */
export type Modules_Set_Input = {
  available_from?: Maybe<Scalars['timestamp']>;
  content?: Maybe<Scalars['String']>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Modules_Stddev_Fields = {
  __typename?: 'modules_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Modules_Stddev_Pop_Fields = {
  __typename?: 'modules_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Modules_Stddev_Samp_Fields = {
  __typename?: 'modules_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Modules_Sum_Fields = {
  __typename?: 'modules_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "modules" */
export enum Modules_Update_Column {
  /** column name */
  AvailableFrom = 'available_from',
  /** column name */
  Content = 'content',
  /** column name */
  FolderId = 'folder_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UnitId = 'unit_id'
}

/** aggregate var_pop on columns */
export type Modules_Var_Pop_Fields = {
  __typename?: 'modules_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Modules_Var_Samp_Fields = {
  __typename?: 'modules_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Modules_Variance_Fields = {
  __typename?: 'modules_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "announcements" */
  delete_announcements?: Maybe<Announcements_Mutation_Response>;
  /** delete single row from the table: "announcements" */
  delete_announcements_by_pk?: Maybe<Announcements>;
  /** delete data from the table: "assignment_submissions" */
  delete_assignment_submissions?: Maybe<Assignment_Submissions_Mutation_Response>;
  /** delete single row from the table: "assignment_submissions" */
  delete_assignment_submissions_by_pk?: Maybe<Assignment_Submissions>;
  /** delete data from the table: "assignments" */
  delete_assignments?: Maybe<Assignments_Mutation_Response>;
  /** delete single row from the table: "assignments" */
  delete_assignments_by_pk?: Maybe<Assignments>;
  /** delete data from the table: "contacts" */
  delete_contacts?: Maybe<Contacts_Mutation_Response>;
  /** delete single row from the table: "contacts" */
  delete_contacts_by_pk?: Maybe<Contacts>;
  /** delete data from the table: "course_enrollment" */
  delete_course_enrollment?: Maybe<Course_Enrollment_Mutation_Response>;
  /** delete single row from the table: "course_enrollment" */
  delete_course_enrollment_by_pk?: Maybe<Course_Enrollment>;
  /** delete data from the table: "course_management" */
  delete_course_management?: Maybe<Course_Management_Mutation_Response>;
  /** delete single row from the table: "course_management" */
  delete_course_management_by_pk?: Maybe<Course_Management>;
  /** delete data from the table: "courses" */
  delete_courses?: Maybe<Courses_Mutation_Response>;
  /** delete single row from the table: "courses" */
  delete_courses_by_pk?: Maybe<Courses>;
  /** delete data from the table: "grade_items" */
  delete_grade_items?: Maybe<Grade_Items_Mutation_Response>;
  /** delete single row from the table: "grade_items" */
  delete_grade_items_by_pk?: Maybe<Grade_Items>;
  /** delete data from the table: "gradebook_item_submissions" */
  delete_gradebook_item_submissions?: Maybe<Gradebook_Item_Submissions_Mutation_Response>;
  /** delete single row from the table: "gradebook_item_submissions" */
  delete_gradebook_item_submissions_by_pk?: Maybe<Gradebook_Item_Submissions>;
  /** delete data from the table: "gradebook_items" */
  delete_gradebook_items?: Maybe<Gradebook_Items_Mutation_Response>;
  /** delete single row from the table: "gradebook_items" */
  delete_gradebook_items_by_pk?: Maybe<Gradebook_Items>;
  /** delete data from the table: "grading_rubric" */
  delete_grading_rubric?: Maybe<Grading_Rubric_Mutation_Response>;
  /** delete single row from the table: "grading_rubric" */
  delete_grading_rubric_by_pk?: Maybe<Grading_Rubric>;
  /** delete data from the table: "group_membership" */
  delete_group_membership?: Maybe<Group_Membership_Mutation_Response>;
  /** delete single row from the table: "group_membership" */
  delete_group_membership_by_pk?: Maybe<Group_Membership>;
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "modules" */
  delete_modules?: Maybe<Modules_Mutation_Response>;
  /** delete single row from the table: "modules" */
  delete_modules_by_pk?: Maybe<Modules>;
  /** delete data from the table: "prospective_users" */
  delete_prospective_users?: Maybe<Prospective_Users_Mutation_Response>;
  /** delete single row from the table: "prospective_users" */
  delete_prospective_users_by_pk?: Maybe<Prospective_Users>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "schools" */
  delete_schools?: Maybe<Schools_Mutation_Response>;
  /** delete single row from the table: "schools" */
  delete_schools_by_pk?: Maybe<Schools>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "test_questions" */
  delete_test_questions?: Maybe<Test_Questions_Mutation_Response>;
  /** delete single row from the table: "test_questions" */
  delete_test_questions_by_pk?: Maybe<Test_Questions>;
  /** delete data from the table: "test_submissions" */
  delete_test_submissions?: Maybe<Test_Submissions_Mutation_Response>;
  /** delete single row from the table: "test_submissions" */
  delete_test_submissions_by_pk?: Maybe<Test_Submissions>;
  /** delete data from the table: "tests" */
  delete_tests?: Maybe<Tests_Mutation_Response>;
  /** delete single row from the table: "tests" */
  delete_tests_by_pk?: Maybe<Tests>;
  /** delete data from the table: "unit_assessments" */
  delete_unit_assessments?: Maybe<Unit_Assessments_Mutation_Response>;
  /** delete single row from the table: "unit_assessments" */
  delete_unit_assessments_by_pk?: Maybe<Unit_Assessments>;
  /** delete data from the table: "units" */
  delete_units?: Maybe<Units_Mutation_Response>;
  /** delete single row from the table: "units" */
  delete_units_by_pk?: Maybe<Units>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "announcements" */
  insert_announcements?: Maybe<Announcements_Mutation_Response>;
  /** insert a single row into the table: "announcements" */
  insert_announcements_one?: Maybe<Announcements>;
  /** insert data into the table: "assignment_submissions" */
  insert_assignment_submissions?: Maybe<Assignment_Submissions_Mutation_Response>;
  /** insert a single row into the table: "assignment_submissions" */
  insert_assignment_submissions_one?: Maybe<Assignment_Submissions>;
  /** insert data into the table: "assignments" */
  insert_assignments?: Maybe<Assignments_Mutation_Response>;
  /** insert a single row into the table: "assignments" */
  insert_assignments_one?: Maybe<Assignments>;
  /** insert data into the table: "contacts" */
  insert_contacts?: Maybe<Contacts_Mutation_Response>;
  /** insert a single row into the table: "contacts" */
  insert_contacts_one?: Maybe<Contacts>;
  /** insert data into the table: "course_enrollment" */
  insert_course_enrollment?: Maybe<Course_Enrollment_Mutation_Response>;
  /** insert a single row into the table: "course_enrollment" */
  insert_course_enrollment_one?: Maybe<Course_Enrollment>;
  /** insert data into the table: "course_management" */
  insert_course_management?: Maybe<Course_Management_Mutation_Response>;
  /** insert a single row into the table: "course_management" */
  insert_course_management_one?: Maybe<Course_Management>;
  /** insert data into the table: "courses" */
  insert_courses?: Maybe<Courses_Mutation_Response>;
  /** insert a single row into the table: "courses" */
  insert_courses_one?: Maybe<Courses>;
  /** insert data into the table: "grade_items" */
  insert_grade_items?: Maybe<Grade_Items_Mutation_Response>;
  /** insert a single row into the table: "grade_items" */
  insert_grade_items_one?: Maybe<Grade_Items>;
  /** insert data into the table: "gradebook_item_submissions" */
  insert_gradebook_item_submissions?: Maybe<Gradebook_Item_Submissions_Mutation_Response>;
  /** insert a single row into the table: "gradebook_item_submissions" */
  insert_gradebook_item_submissions_one?: Maybe<Gradebook_Item_Submissions>;
  /** insert data into the table: "gradebook_items" */
  insert_gradebook_items?: Maybe<Gradebook_Items_Mutation_Response>;
  /** insert a single row into the table: "gradebook_items" */
  insert_gradebook_items_one?: Maybe<Gradebook_Items>;
  /** insert data into the table: "grading_rubric" */
  insert_grading_rubric?: Maybe<Grading_Rubric_Mutation_Response>;
  /** insert a single row into the table: "grading_rubric" */
  insert_grading_rubric_one?: Maybe<Grading_Rubric>;
  /** insert data into the table: "group_membership" */
  insert_group_membership?: Maybe<Group_Membership_Mutation_Response>;
  /** insert a single row into the table: "group_membership" */
  insert_group_membership_one?: Maybe<Group_Membership>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "modules" */
  insert_modules?: Maybe<Modules_Mutation_Response>;
  /** insert a single row into the table: "modules" */
  insert_modules_one?: Maybe<Modules>;
  /** insert data into the table: "prospective_users" */
  insert_prospective_users?: Maybe<Prospective_Users_Mutation_Response>;
  /** insert a single row into the table: "prospective_users" */
  insert_prospective_users_one?: Maybe<Prospective_Users>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "schools" */
  insert_schools?: Maybe<Schools_Mutation_Response>;
  /** insert a single row into the table: "schools" */
  insert_schools_one?: Maybe<Schools>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "test_questions" */
  insert_test_questions?: Maybe<Test_Questions_Mutation_Response>;
  /** insert a single row into the table: "test_questions" */
  insert_test_questions_one?: Maybe<Test_Questions>;
  /** insert data into the table: "test_submissions" */
  insert_test_submissions?: Maybe<Test_Submissions_Mutation_Response>;
  /** insert a single row into the table: "test_submissions" */
  insert_test_submissions_one?: Maybe<Test_Submissions>;
  /** insert data into the table: "tests" */
  insert_tests?: Maybe<Tests_Mutation_Response>;
  /** insert a single row into the table: "tests" */
  insert_tests_one?: Maybe<Tests>;
  /** insert data into the table: "unit_assessments" */
  insert_unit_assessments?: Maybe<Unit_Assessments_Mutation_Response>;
  /** insert a single row into the table: "unit_assessments" */
  insert_unit_assessments_one?: Maybe<Unit_Assessments>;
  /** insert data into the table: "units" */
  insert_units?: Maybe<Units_Mutation_Response>;
  /** insert a single row into the table: "units" */
  insert_units_one?: Maybe<Units>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "announcements" */
  update_announcements?: Maybe<Announcements_Mutation_Response>;
  /** update single row of the table: "announcements" */
  update_announcements_by_pk?: Maybe<Announcements>;
  /** update data of the table: "assignment_submissions" */
  update_assignment_submissions?: Maybe<Assignment_Submissions_Mutation_Response>;
  /** update single row of the table: "assignment_submissions" */
  update_assignment_submissions_by_pk?: Maybe<Assignment_Submissions>;
  /** update data of the table: "assignments" */
  update_assignments?: Maybe<Assignments_Mutation_Response>;
  /** update single row of the table: "assignments" */
  update_assignments_by_pk?: Maybe<Assignments>;
  /** update data of the table: "contacts" */
  update_contacts?: Maybe<Contacts_Mutation_Response>;
  /** update single row of the table: "contacts" */
  update_contacts_by_pk?: Maybe<Contacts>;
  /** update data of the table: "course_enrollment" */
  update_course_enrollment?: Maybe<Course_Enrollment_Mutation_Response>;
  /** update single row of the table: "course_enrollment" */
  update_course_enrollment_by_pk?: Maybe<Course_Enrollment>;
  /** update data of the table: "course_management" */
  update_course_management?: Maybe<Course_Management_Mutation_Response>;
  /** update single row of the table: "course_management" */
  update_course_management_by_pk?: Maybe<Course_Management>;
  /** update data of the table: "courses" */
  update_courses?: Maybe<Courses_Mutation_Response>;
  /** update single row of the table: "courses" */
  update_courses_by_pk?: Maybe<Courses>;
  /** update data of the table: "grade_items" */
  update_grade_items?: Maybe<Grade_Items_Mutation_Response>;
  /** update single row of the table: "grade_items" */
  update_grade_items_by_pk?: Maybe<Grade_Items>;
  /** update data of the table: "gradebook_item_submissions" */
  update_gradebook_item_submissions?: Maybe<Gradebook_Item_Submissions_Mutation_Response>;
  /** update single row of the table: "gradebook_item_submissions" */
  update_gradebook_item_submissions_by_pk?: Maybe<Gradebook_Item_Submissions>;
  /** update data of the table: "gradebook_items" */
  update_gradebook_items?: Maybe<Gradebook_Items_Mutation_Response>;
  /** update single row of the table: "gradebook_items" */
  update_gradebook_items_by_pk?: Maybe<Gradebook_Items>;
  /** update data of the table: "grading_rubric" */
  update_grading_rubric?: Maybe<Grading_Rubric_Mutation_Response>;
  /** update single row of the table: "grading_rubric" */
  update_grading_rubric_by_pk?: Maybe<Grading_Rubric>;
  /** update data of the table: "group_membership" */
  update_group_membership?: Maybe<Group_Membership_Mutation_Response>;
  /** update single row of the table: "group_membership" */
  update_group_membership_by_pk?: Maybe<Group_Membership>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update data of the table: "modules" */
  update_modules?: Maybe<Modules_Mutation_Response>;
  /** update single row of the table: "modules" */
  update_modules_by_pk?: Maybe<Modules>;
  /** update data of the table: "prospective_users" */
  update_prospective_users?: Maybe<Prospective_Users_Mutation_Response>;
  /** update single row of the table: "prospective_users" */
  update_prospective_users_by_pk?: Maybe<Prospective_Users>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update data of the table: "schools" */
  update_schools?: Maybe<Schools_Mutation_Response>;
  /** update single row of the table: "schools" */
  update_schools_by_pk?: Maybe<Schools>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "test_questions" */
  update_test_questions?: Maybe<Test_Questions_Mutation_Response>;
  /** update single row of the table: "test_questions" */
  update_test_questions_by_pk?: Maybe<Test_Questions>;
  /** update data of the table: "test_submissions" */
  update_test_submissions?: Maybe<Test_Submissions_Mutation_Response>;
  /** update single row of the table: "test_submissions" */
  update_test_submissions_by_pk?: Maybe<Test_Submissions>;
  /** update data of the table: "tests" */
  update_tests?: Maybe<Tests_Mutation_Response>;
  /** update single row of the table: "tests" */
  update_tests_by_pk?: Maybe<Tests>;
  /** update data of the table: "unit_assessments" */
  update_unit_assessments?: Maybe<Unit_Assessments_Mutation_Response>;
  /** update single row of the table: "unit_assessments" */
  update_unit_assessments_by_pk?: Maybe<Unit_Assessments>;
  /** update data of the table: "units" */
  update_units?: Maybe<Units_Mutation_Response>;
  /** update single row of the table: "units" */
  update_units_by_pk?: Maybe<Units>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_AnnouncementsArgs = {
  where: Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Announcements_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Assignment_SubmissionsArgs = {
  where: Assignment_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assignment_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AssignmentsArgs = {
  where: Assignments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assignments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ContactsArgs = {
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contacts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Course_EnrollmentArgs = {
  where: Course_Enrollment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_Enrollment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Course_ManagementArgs = {
  where: Course_Management_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_Management_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CoursesArgs = {
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Courses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Grade_ItemsArgs = {
  where: Grade_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Grade_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Gradebook_Item_SubmissionsArgs = {
  where: Gradebook_Item_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gradebook_Item_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Gradebook_ItemsArgs = {
  where: Gradebook_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gradebook_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Grading_RubricArgs = {
  where: Grading_Rubric_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Grading_Rubric_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_MembershipArgs = {
  where: Group_Membership_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Membership_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ModulesArgs = {
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Modules_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Prospective_UsersArgs = {
  where: Prospective_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prospective_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SchoolsArgs = {
  where: Schools_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schools_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Test_QuestionsArgs = {
  where: Test_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Test_SubmissionsArgs = {
  where: Test_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TestsArgs = {
  where: Tests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Unit_AssessmentsArgs = {
  where: Unit_Assessments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Unit_Assessments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UnitsArgs = {
  where: Units_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Units_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AnnouncementsArgs = {
  objects: Array<Announcements_Insert_Input>;
  on_conflict?: Maybe<Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Announcements_OneArgs = {
  object: Announcements_Insert_Input;
  on_conflict?: Maybe<Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assignment_SubmissionsArgs = {
  objects: Array<Assignment_Submissions_Insert_Input>;
  on_conflict?: Maybe<Assignment_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assignment_Submissions_OneArgs = {
  object: Assignment_Submissions_Insert_Input;
  on_conflict?: Maybe<Assignment_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AssignmentsArgs = {
  objects: Array<Assignments_Insert_Input>;
  on_conflict?: Maybe<Assignments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assignments_OneArgs = {
  object: Assignments_Insert_Input;
  on_conflict?: Maybe<Assignments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactsArgs = {
  objects: Array<Contacts_Insert_Input>;
  on_conflict?: Maybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contacts_OneArgs = {
  object: Contacts_Insert_Input;
  on_conflict?: Maybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_EnrollmentArgs = {
  objects: Array<Course_Enrollment_Insert_Input>;
  on_conflict?: Maybe<Course_Enrollment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_Enrollment_OneArgs = {
  object: Course_Enrollment_Insert_Input;
  on_conflict?: Maybe<Course_Enrollment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_ManagementArgs = {
  objects: Array<Course_Management_Insert_Input>;
  on_conflict?: Maybe<Course_Management_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_Management_OneArgs = {
  object: Course_Management_Insert_Input;
  on_conflict?: Maybe<Course_Management_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CoursesArgs = {
  objects: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_OneArgs = {
  object: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grade_ItemsArgs = {
  objects: Array<Grade_Items_Insert_Input>;
  on_conflict?: Maybe<Grade_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grade_Items_OneArgs = {
  object: Grade_Items_Insert_Input;
  on_conflict?: Maybe<Grade_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gradebook_Item_SubmissionsArgs = {
  objects: Array<Gradebook_Item_Submissions_Insert_Input>;
  on_conflict?: Maybe<Gradebook_Item_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gradebook_Item_Submissions_OneArgs = {
  object: Gradebook_Item_Submissions_Insert_Input;
  on_conflict?: Maybe<Gradebook_Item_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gradebook_ItemsArgs = {
  objects: Array<Gradebook_Items_Insert_Input>;
  on_conflict?: Maybe<Gradebook_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gradebook_Items_OneArgs = {
  object: Gradebook_Items_Insert_Input;
  on_conflict?: Maybe<Gradebook_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grading_RubricArgs = {
  objects: Array<Grading_Rubric_Insert_Input>;
  on_conflict?: Maybe<Grading_Rubric_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grading_Rubric_OneArgs = {
  object: Grading_Rubric_Insert_Input;
  on_conflict?: Maybe<Grading_Rubric_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_MembershipArgs = {
  objects: Array<Group_Membership_Insert_Input>;
  on_conflict?: Maybe<Group_Membership_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Membership_OneArgs = {
  object: Group_Membership_Insert_Input;
  on_conflict?: Maybe<Group_Membership_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ModulesArgs = {
  objects: Array<Modules_Insert_Input>;
  on_conflict?: Maybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Modules_OneArgs = {
  object: Modules_Insert_Input;
  on_conflict?: Maybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prospective_UsersArgs = {
  objects: Array<Prospective_Users_Insert_Input>;
  on_conflict?: Maybe<Prospective_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prospective_Users_OneArgs = {
  object: Prospective_Users_Insert_Input;
  on_conflict?: Maybe<Prospective_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: Maybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: Maybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SchoolsArgs = {
  objects: Array<Schools_Insert_Input>;
  on_conflict?: Maybe<Schools_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schools_OneArgs = {
  object: Schools_Insert_Input;
  on_conflict?: Maybe<Schools_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_QuestionsArgs = {
  objects: Array<Test_Questions_Insert_Input>;
  on_conflict?: Maybe<Test_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Questions_OneArgs = {
  object: Test_Questions_Insert_Input;
  on_conflict?: Maybe<Test_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_SubmissionsArgs = {
  objects: Array<Test_Submissions_Insert_Input>;
  on_conflict?: Maybe<Test_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Submissions_OneArgs = {
  object: Test_Submissions_Insert_Input;
  on_conflict?: Maybe<Test_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestsArgs = {
  objects: Array<Tests_Insert_Input>;
  on_conflict?: Maybe<Tests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tests_OneArgs = {
  object: Tests_Insert_Input;
  on_conflict?: Maybe<Tests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_AssessmentsArgs = {
  objects: Array<Unit_Assessments_Insert_Input>;
  on_conflict?: Maybe<Unit_Assessments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_Assessments_OneArgs = {
  object: Unit_Assessments_Insert_Input;
  on_conflict?: Maybe<Unit_Assessments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UnitsArgs = {
  objects: Array<Units_Insert_Input>;
  on_conflict?: Maybe<Units_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Units_OneArgs = {
  object: Units_Insert_Input;
  on_conflict?: Maybe<Units_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: Maybe<Accounts_Inc_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: Maybe<Accounts_Inc_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AnnouncementsArgs = {
  _inc?: Maybe<Announcements_Inc_Input>;
  _set?: Maybe<Announcements_Set_Input>;
  where: Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Announcements_By_PkArgs = {
  _inc?: Maybe<Announcements_Inc_Input>;
  _set?: Maybe<Announcements_Set_Input>;
  pk_columns: Announcements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assignment_SubmissionsArgs = {
  _set?: Maybe<Assignment_Submissions_Set_Input>;
  where: Assignment_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assignment_Submissions_By_PkArgs = {
  _set?: Maybe<Assignment_Submissions_Set_Input>;
  pk_columns: Assignment_Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AssignmentsArgs = {
  _set?: Maybe<Assignments_Set_Input>;
  where: Assignments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assignments_By_PkArgs = {
  _set?: Maybe<Assignments_Set_Input>;
  pk_columns: Assignments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContactsArgs = {
  _inc?: Maybe<Contacts_Inc_Input>;
  _set?: Maybe<Contacts_Set_Input>;
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contacts_By_PkArgs = {
  _inc?: Maybe<Contacts_Inc_Input>;
  _set?: Maybe<Contacts_Set_Input>;
  pk_columns: Contacts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_EnrollmentArgs = {
  _inc?: Maybe<Course_Enrollment_Inc_Input>;
  _set?: Maybe<Course_Enrollment_Set_Input>;
  where: Course_Enrollment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_Enrollment_By_PkArgs = {
  _inc?: Maybe<Course_Enrollment_Inc_Input>;
  _set?: Maybe<Course_Enrollment_Set_Input>;
  pk_columns: Course_Enrollment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_ManagementArgs = {
  _inc?: Maybe<Course_Management_Inc_Input>;
  _set?: Maybe<Course_Management_Set_Input>;
  where: Course_Management_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_Management_By_PkArgs = {
  _inc?: Maybe<Course_Management_Inc_Input>;
  _set?: Maybe<Course_Management_Set_Input>;
  pk_columns: Course_Management_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CoursesArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_By_PkArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  pk_columns: Courses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Grade_ItemsArgs = {
  _inc?: Maybe<Grade_Items_Inc_Input>;
  _set?: Maybe<Grade_Items_Set_Input>;
  where: Grade_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Grade_Items_By_PkArgs = {
  _inc?: Maybe<Grade_Items_Inc_Input>;
  _set?: Maybe<Grade_Items_Set_Input>;
  pk_columns: Grade_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gradebook_Item_SubmissionsArgs = {
  _append?: Maybe<Gradebook_Item_Submissions_Append_Input>;
  _delete_at_path?: Maybe<Gradebook_Item_Submissions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Gradebook_Item_Submissions_Delete_Elem_Input>;
  _delete_key?: Maybe<Gradebook_Item_Submissions_Delete_Key_Input>;
  _inc?: Maybe<Gradebook_Item_Submissions_Inc_Input>;
  _prepend?: Maybe<Gradebook_Item_Submissions_Prepend_Input>;
  _set?: Maybe<Gradebook_Item_Submissions_Set_Input>;
  where: Gradebook_Item_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gradebook_Item_Submissions_By_PkArgs = {
  _append?: Maybe<Gradebook_Item_Submissions_Append_Input>;
  _delete_at_path?: Maybe<Gradebook_Item_Submissions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Gradebook_Item_Submissions_Delete_Elem_Input>;
  _delete_key?: Maybe<Gradebook_Item_Submissions_Delete_Key_Input>;
  _inc?: Maybe<Gradebook_Item_Submissions_Inc_Input>;
  _prepend?: Maybe<Gradebook_Item_Submissions_Prepend_Input>;
  _set?: Maybe<Gradebook_Item_Submissions_Set_Input>;
  pk_columns: Gradebook_Item_Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gradebook_ItemsArgs = {
  _append?: Maybe<Gradebook_Items_Append_Input>;
  _delete_at_path?: Maybe<Gradebook_Items_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Gradebook_Items_Delete_Elem_Input>;
  _delete_key?: Maybe<Gradebook_Items_Delete_Key_Input>;
  _inc?: Maybe<Gradebook_Items_Inc_Input>;
  _prepend?: Maybe<Gradebook_Items_Prepend_Input>;
  _set?: Maybe<Gradebook_Items_Set_Input>;
  where: Gradebook_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gradebook_Items_By_PkArgs = {
  _append?: Maybe<Gradebook_Items_Append_Input>;
  _delete_at_path?: Maybe<Gradebook_Items_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Gradebook_Items_Delete_Elem_Input>;
  _delete_key?: Maybe<Gradebook_Items_Delete_Key_Input>;
  _inc?: Maybe<Gradebook_Items_Inc_Input>;
  _prepend?: Maybe<Gradebook_Items_Prepend_Input>;
  _set?: Maybe<Gradebook_Items_Set_Input>;
  pk_columns: Gradebook_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Grading_RubricArgs = {
  _set?: Maybe<Grading_Rubric_Set_Input>;
  where: Grading_Rubric_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Grading_Rubric_By_PkArgs = {
  _set?: Maybe<Grading_Rubric_Set_Input>;
  pk_columns: Grading_Rubric_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_MembershipArgs = {
  _inc?: Maybe<Group_Membership_Inc_Input>;
  _set?: Maybe<Group_Membership_Set_Input>;
  where: Group_Membership_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Membership_By_PkArgs = {
  _inc?: Maybe<Group_Membership_Inc_Input>;
  _set?: Maybe<Group_Membership_Set_Input>;
  pk_columns: Group_Membership_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _set?: Maybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _set?: Maybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ModulesArgs = {
  _inc?: Maybe<Modules_Inc_Input>;
  _set?: Maybe<Modules_Set_Input>;
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Modules_By_PkArgs = {
  _inc?: Maybe<Modules_Inc_Input>;
  _set?: Maybe<Modules_Set_Input>;
  pk_columns: Modules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Prospective_UsersArgs = {
  _inc?: Maybe<Prospective_Users_Inc_Input>;
  _set?: Maybe<Prospective_Users_Set_Input>;
  where: Prospective_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prospective_Users_By_PkArgs = {
  _inc?: Maybe<Prospective_Users_Inc_Input>;
  _set?: Maybe<Prospective_Users_Set_Input>;
  pk_columns: Prospective_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _append?: Maybe<Questions_Append_Input>;
  _delete_at_path?: Maybe<Questions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Questions_Delete_Elem_Input>;
  _delete_key?: Maybe<Questions_Delete_Key_Input>;
  _prepend?: Maybe<Questions_Prepend_Input>;
  _set?: Maybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _append?: Maybe<Questions_Append_Input>;
  _delete_at_path?: Maybe<Questions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Questions_Delete_Elem_Input>;
  _delete_key?: Maybe<Questions_Delete_Key_Input>;
  _prepend?: Maybe<Questions_Prepend_Input>;
  _set?: Maybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SchoolsArgs = {
  _inc?: Maybe<Schools_Inc_Input>;
  _set?: Maybe<Schools_Set_Input>;
  where: Schools_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schools_By_PkArgs = {
  _inc?: Maybe<Schools_Inc_Input>;
  _set?: Maybe<Schools_Set_Input>;
  pk_columns: Schools_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_QuestionsArgs = {
  _inc?: Maybe<Test_Questions_Inc_Input>;
  _set?: Maybe<Test_Questions_Set_Input>;
  where: Test_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Questions_By_PkArgs = {
  _inc?: Maybe<Test_Questions_Inc_Input>;
  _set?: Maybe<Test_Questions_Set_Input>;
  pk_columns: Test_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_SubmissionsArgs = {
  _set?: Maybe<Test_Submissions_Set_Input>;
  where: Test_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Submissions_By_PkArgs = {
  _set?: Maybe<Test_Submissions_Set_Input>;
  pk_columns: Test_Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TestsArgs = {
  _append?: Maybe<Tests_Append_Input>;
  _delete_at_path?: Maybe<Tests_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Tests_Delete_Elem_Input>;
  _delete_key?: Maybe<Tests_Delete_Key_Input>;
  _inc?: Maybe<Tests_Inc_Input>;
  _prepend?: Maybe<Tests_Prepend_Input>;
  _set?: Maybe<Tests_Set_Input>;
  where: Tests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tests_By_PkArgs = {
  _append?: Maybe<Tests_Append_Input>;
  _delete_at_path?: Maybe<Tests_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Tests_Delete_Elem_Input>;
  _delete_key?: Maybe<Tests_Delete_Key_Input>;
  _inc?: Maybe<Tests_Inc_Input>;
  _prepend?: Maybe<Tests_Prepend_Input>;
  _set?: Maybe<Tests_Set_Input>;
  pk_columns: Tests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_AssessmentsArgs = {
  _set?: Maybe<Unit_Assessments_Set_Input>;
  where: Unit_Assessments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_Assessments_By_PkArgs = {
  _set?: Maybe<Unit_Assessments_Set_Input>;
  pk_columns: Unit_Assessments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UnitsArgs = {
  _inc?: Maybe<Units_Inc_Input>;
  _set?: Maybe<Units_Set_Input>;
  where: Units_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Units_By_PkArgs = {
  _inc?: Maybe<Units_Inc_Input>;
  _set?: Maybe<Units_Set_Input>;
  pk_columns: Units_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _inc?: Maybe<Verification_Requests_Inc_Input>;
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _inc?: Maybe<Verification_Requests_Inc_Input>;
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "prospective_users" */
export type Prospective_Users = {
  __typename?: 'prospective_users';
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  last_name: Scalars['String'];
  middle_name?: Maybe<Scalars['String']>;
  registration_step: Scalars['Int'];
  role?: Maybe<Scalars['String']>;
  /** An object relationship */
  school?: Maybe<Schools>;
  school_id: Scalars['Int'];
  student_id: Scalars['String'];
  username: Scalars['String'];
};

/** aggregated selection of "prospective_users" */
export type Prospective_Users_Aggregate = {
  __typename?: 'prospective_users_aggregate';
  aggregate?: Maybe<Prospective_Users_Aggregate_Fields>;
  nodes: Array<Prospective_Users>;
};

/** aggregate fields of "prospective_users" */
export type Prospective_Users_Aggregate_Fields = {
  __typename?: 'prospective_users_aggregate_fields';
  avg?: Maybe<Prospective_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Prospective_Users_Max_Fields>;
  min?: Maybe<Prospective_Users_Min_Fields>;
  stddev?: Maybe<Prospective_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Prospective_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prospective_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Prospective_Users_Sum_Fields>;
  var_pop?: Maybe<Prospective_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Prospective_Users_Var_Samp_Fields>;
  variance?: Maybe<Prospective_Users_Variance_Fields>;
};


/** aggregate fields of "prospective_users" */
export type Prospective_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prospective_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Prospective_Users_Avg_Fields = {
  __typename?: 'prospective_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
  registration_step?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "prospective_users". All fields are combined with a logical 'AND'. */
export type Prospective_Users_Bool_Exp = {
  _and?: Maybe<Array<Prospective_Users_Bool_Exp>>;
  _not?: Maybe<Prospective_Users_Bool_Exp>;
  _or?: Maybe<Array<Prospective_Users_Bool_Exp>>;
  code?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  middle_name?: Maybe<String_Comparison_Exp>;
  registration_step?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  school?: Maybe<Schools_Bool_Exp>;
  school_id?: Maybe<Int_Comparison_Exp>;
  student_id?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "prospective_users" */
export enum Prospective_Users_Constraint {
  /** unique or primary key constraint */
  ProspectiveUsersPkey = 'prospective_users_pkey',
  /** unique or primary key constraint */
  ProspectiveUsersStudentIdKey = 'prospective_users_student_id_key',
  /** unique or primary key constraint */
  ProspectiveUsersUsernameKey = 'prospective_users_username_key'
}

/** input type for incrementing numeric columns in table "prospective_users" */
export type Prospective_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  registration_step?: Maybe<Scalars['Int']>;
  school_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "prospective_users" */
export type Prospective_Users_Insert_Input = {
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  registration_step?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  school?: Maybe<Schools_Obj_Rel_Insert_Input>;
  school_id?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Prospective_Users_Max_Fields = {
  __typename?: 'prospective_users_max_fields';
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  registration_step?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Prospective_Users_Min_Fields = {
  __typename?: 'prospective_users_min_fields';
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  registration_step?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "prospective_users" */
export type Prospective_Users_Mutation_Response = {
  __typename?: 'prospective_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Prospective_Users>;
};

/** on conflict condition type for table "prospective_users" */
export type Prospective_Users_On_Conflict = {
  constraint: Prospective_Users_Constraint;
  update_columns?: Array<Prospective_Users_Update_Column>;
  where?: Maybe<Prospective_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "prospective_users". */
export type Prospective_Users_Order_By = {
  code?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  middle_name?: Maybe<Order_By>;
  registration_step?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  school?: Maybe<Schools_Order_By>;
  school_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: prospective_users */
export type Prospective_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "prospective_users" */
export enum Prospective_Users_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  RegistrationStep = 'registration_step',
  /** column name */
  Role = 'role',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "prospective_users" */
export type Prospective_Users_Set_Input = {
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  registration_step?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Prospective_Users_Stddev_Fields = {
  __typename?: 'prospective_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  registration_step?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Prospective_Users_Stddev_Pop_Fields = {
  __typename?: 'prospective_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  registration_step?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Prospective_Users_Stddev_Samp_Fields = {
  __typename?: 'prospective_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  registration_step?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Prospective_Users_Sum_Fields = {
  __typename?: 'prospective_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
  registration_step?: Maybe<Scalars['Int']>;
  school_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "prospective_users" */
export enum Prospective_Users_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  RegistrationStep = 'registration_step',
  /** column name */
  Role = 'role',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Prospective_Users_Var_Pop_Fields = {
  __typename?: 'prospective_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  registration_step?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Prospective_Users_Var_Samp_Fields = {
  __typename?: 'prospective_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  registration_step?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Prospective_Users_Variance_Fields = {
  __typename?: 'prospective_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
  registration_step?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "announcements" */
  announcements: Array<Announcements>;
  /** fetch aggregated fields from the table: "announcements" */
  announcements_aggregate: Announcements_Aggregate;
  /** fetch data from the table: "announcements" using primary key columns */
  announcements_by_pk?: Maybe<Announcements>;
  /** fetch data from the table: "assignment_submissions" */
  assignment_submissions: Array<Assignment_Submissions>;
  /** fetch aggregated fields from the table: "assignment_submissions" */
  assignment_submissions_aggregate: Assignment_Submissions_Aggregate;
  /** fetch data from the table: "assignment_submissions" using primary key columns */
  assignment_submissions_by_pk?: Maybe<Assignment_Submissions>;
  /** fetch data from the table: "assignments" */
  assignments: Array<Assignments>;
  /** fetch aggregated fields from the table: "assignments" */
  assignments_aggregate: Assignments_Aggregate;
  /** fetch data from the table: "assignments" using primary key columns */
  assignments_by_pk?: Maybe<Assignments>;
  /** fetch data from the table: "contacts" */
  contacts: Array<Contacts>;
  /** fetch aggregated fields from the table: "contacts" */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table: "course_enrollment" */
  course_enrollment: Array<Course_Enrollment>;
  /** fetch aggregated fields from the table: "course_enrollment" */
  course_enrollment_aggregate: Course_Enrollment_Aggregate;
  /** fetch data from the table: "course_enrollment" using primary key columns */
  course_enrollment_by_pk?: Maybe<Course_Enrollment>;
  /** fetch data from the table: "course_management" */
  course_management: Array<Course_Management>;
  /** fetch aggregated fields from the table: "course_management" */
  course_management_aggregate: Course_Management_Aggregate;
  /** fetch data from the table: "course_management" using primary key columns */
  course_management_by_pk?: Maybe<Course_Management>;
  /** fetch data from the table: "courses" */
  courses: Array<Courses>;
  /** fetch aggregated fields from the table: "courses" */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** An array relationship */
  grade_items: Array<Grade_Items>;
  /** An aggregate relationship */
  grade_items_aggregate: Grade_Items_Aggregate;
  /** fetch data from the table: "grade_items" using primary key columns */
  grade_items_by_pk?: Maybe<Grade_Items>;
  /** fetch data from the table: "gradebook_item_submissions" */
  gradebook_item_submissions: Array<Gradebook_Item_Submissions>;
  /** fetch aggregated fields from the table: "gradebook_item_submissions" */
  gradebook_item_submissions_aggregate: Gradebook_Item_Submissions_Aggregate;
  /** fetch data from the table: "gradebook_item_submissions" using primary key columns */
  gradebook_item_submissions_by_pk?: Maybe<Gradebook_Item_Submissions>;
  /** An array relationship */
  gradebook_items: Array<Gradebook_Items>;
  /** An aggregate relationship */
  gradebook_items_aggregate: Gradebook_Items_Aggregate;
  /** fetch data from the table: "gradebook_items" using primary key columns */
  gradebook_items_by_pk?: Maybe<Gradebook_Items>;
  /** fetch data from the table: "grading_rubric" */
  grading_rubric: Array<Grading_Rubric>;
  /** fetch aggregated fields from the table: "grading_rubric" */
  grading_rubric_aggregate: Grading_Rubric_Aggregate;
  /** fetch data from the table: "grading_rubric" using primary key columns */
  grading_rubric_by_pk?: Maybe<Grading_Rubric>;
  /** An array relationship */
  group_membership: Array<Group_Membership>;
  /** An aggregate relationship */
  group_membership_aggregate: Group_Membership_Aggregate;
  /** fetch data from the table: "group_membership" using primary key columns */
  group_membership_by_pk?: Maybe<Group_Membership>;
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "prospective_users" */
  prospective_users: Array<Prospective_Users>;
  /** fetch aggregated fields from the table: "prospective_users" */
  prospective_users_aggregate: Prospective_Users_Aggregate;
  /** fetch data from the table: "prospective_users" using primary key columns */
  prospective_users_by_pk?: Maybe<Prospective_Users>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "schools" */
  schools: Array<Schools>;
  /** fetch aggregated fields from the table: "schools" */
  schools_aggregate: Schools_Aggregate;
  /** fetch data from the table: "schools" using primary key columns */
  schools_by_pk?: Maybe<Schools>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "test_questions" */
  test_questions: Array<Test_Questions>;
  /** fetch aggregated fields from the table: "test_questions" */
  test_questions_aggregate: Test_Questions_Aggregate;
  /** fetch data from the table: "test_questions" using primary key columns */
  test_questions_by_pk?: Maybe<Test_Questions>;
  /** fetch data from the table: "test_submissions" */
  test_submissions: Array<Test_Submissions>;
  /** fetch aggregated fields from the table: "test_submissions" */
  test_submissions_aggregate: Test_Submissions_Aggregate;
  /** fetch data from the table: "test_submissions" using primary key columns */
  test_submissions_by_pk?: Maybe<Test_Submissions>;
  /** fetch data from the table: "tests" */
  tests: Array<Tests>;
  /** fetch aggregated fields from the table: "tests" */
  tests_aggregate: Tests_Aggregate;
  /** fetch data from the table: "tests" using primary key columns */
  tests_by_pk?: Maybe<Tests>;
  /** fetch data from the table: "unit_assessments" */
  unit_assessments: Array<Unit_Assessments>;
  /** fetch aggregated fields from the table: "unit_assessments" */
  unit_assessments_aggregate: Unit_Assessments_Aggregate;
  /** fetch data from the table: "unit_assessments" using primary key columns */
  unit_assessments_by_pk?: Maybe<Unit_Assessments>;
  /** fetch data from the table: "units" */
  units: Array<Units>;
  /** fetch aggregated fields from the table: "units" */
  units_aggregate: Units_Aggregate;
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk?: Maybe<Units>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAnnouncementsArgs = {
  distinct_on?: Maybe<Array<Announcements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcements_Order_By>>;
  where?: Maybe<Announcements_Bool_Exp>;
};


export type Query_RootAnnouncements_AggregateArgs = {
  distinct_on?: Maybe<Array<Announcements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcements_Order_By>>;
  where?: Maybe<Announcements_Bool_Exp>;
};


export type Query_RootAnnouncements_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAssignment_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Assignment_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Submissions_Order_By>>;
  where?: Maybe<Assignment_Submissions_Bool_Exp>;
};


export type Query_RootAssignment_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Assignment_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Submissions_Order_By>>;
  where?: Maybe<Assignment_Submissions_Bool_Exp>;
};


export type Query_RootAssignment_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAssignmentsArgs = {
  distinct_on?: Maybe<Array<Assignments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignments_Order_By>>;
  where?: Maybe<Assignments_Bool_Exp>;
};


export type Query_RootAssignments_AggregateArgs = {
  distinct_on?: Maybe<Array<Assignments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignments_Order_By>>;
  where?: Maybe<Assignments_Bool_Exp>;
};


export type Query_RootAssignments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootContactsArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


export type Query_RootContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


export type Query_RootContacts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCourse_EnrollmentArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


export type Query_RootCourse_Enrollment_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


export type Query_RootCourse_Enrollment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourse_ManagementArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};


export type Query_RootCourse_Management_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};


export type Query_RootCourse_Management_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGrade_ItemsArgs = {
  distinct_on?: Maybe<Array<Grade_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grade_Items_Order_By>>;
  where?: Maybe<Grade_Items_Bool_Exp>;
};


export type Query_RootGrade_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Grade_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grade_Items_Order_By>>;
  where?: Maybe<Grade_Items_Bool_Exp>;
};


export type Query_RootGrade_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGradebook_Item_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Gradebook_Item_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Item_Submissions_Order_By>>;
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
};


export type Query_RootGradebook_Item_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Gradebook_Item_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Item_Submissions_Order_By>>;
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
};


export type Query_RootGradebook_Item_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGradebook_ItemsArgs = {
  distinct_on?: Maybe<Array<Gradebook_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Items_Order_By>>;
  where?: Maybe<Gradebook_Items_Bool_Exp>;
};


export type Query_RootGradebook_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Gradebook_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Items_Order_By>>;
  where?: Maybe<Gradebook_Items_Bool_Exp>;
};


export type Query_RootGradebook_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGrading_RubricArgs = {
  distinct_on?: Maybe<Array<Grading_Rubric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grading_Rubric_Order_By>>;
  where?: Maybe<Grading_Rubric_Bool_Exp>;
};


export type Query_RootGrading_Rubric_AggregateArgs = {
  distinct_on?: Maybe<Array<Grading_Rubric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grading_Rubric_Order_By>>;
  where?: Maybe<Grading_Rubric_Bool_Exp>;
};


export type Query_RootGrading_Rubric_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_MembershipArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};


export type Query_RootGroup_Membership_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};


export type Query_RootGroup_Membership_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootModulesArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Query_RootModules_AggregateArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Query_RootModules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProspective_UsersArgs = {
  distinct_on?: Maybe<Array<Prospective_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prospective_Users_Order_By>>;
  where?: Maybe<Prospective_Users_Bool_Exp>;
};


export type Query_RootProspective_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Prospective_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prospective_Users_Order_By>>;
  where?: Maybe<Prospective_Users_Bool_Exp>;
};


export type Query_RootProspective_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSchoolsArgs = {
  distinct_on?: Maybe<Array<Schools_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schools_Order_By>>;
  where?: Maybe<Schools_Bool_Exp>;
};


export type Query_RootSchools_AggregateArgs = {
  distinct_on?: Maybe<Array<Schools_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schools_Order_By>>;
  where?: Maybe<Schools_Bool_Exp>;
};


export type Query_RootSchools_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTest_QuestionsArgs = {
  distinct_on?: Maybe<Array<Test_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Questions_Order_By>>;
  where?: Maybe<Test_Questions_Bool_Exp>;
};


export type Query_RootTest_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Questions_Order_By>>;
  where?: Maybe<Test_Questions_Bool_Exp>;
};


export type Query_RootTest_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Test_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Submissions_Order_By>>;
  where?: Maybe<Test_Submissions_Bool_Exp>;
};


export type Query_RootTest_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Submissions_Order_By>>;
  where?: Maybe<Test_Submissions_Bool_Exp>;
};


export type Query_RootTest_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestsArgs = {
  distinct_on?: Maybe<Array<Tests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tests_Order_By>>;
  where?: Maybe<Tests_Bool_Exp>;
};


export type Query_RootTests_AggregateArgs = {
  distinct_on?: Maybe<Array<Tests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tests_Order_By>>;
  where?: Maybe<Tests_Bool_Exp>;
};


export type Query_RootTests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUnit_AssessmentsArgs = {
  distinct_on?: Maybe<Array<Unit_Assessments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Assessments_Order_By>>;
  where?: Maybe<Unit_Assessments_Bool_Exp>;
};


export type Query_RootUnit_Assessments_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Assessments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Assessments_Order_By>>;
  where?: Maybe<Unit_Assessments_Bool_Exp>;
};


export type Query_RootUnit_Assessments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUnitsArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Units_Order_By>>;
  where?: Maybe<Units_Bool_Exp>;
};


export type Query_RootUnits_AggregateArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Units_Order_By>>;
  where?: Maybe<Units_Bool_Exp>;
};


export type Query_RootUnits_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  answer_keys: Scalars['jsonb'];
  content: Scalars['jsonb'];
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  id: Scalars['uuid'];
  type: Scalars['String'];
};


/** columns and relationships of "questions" */
export type QuestionsAnswer_KeysArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "questions" */
export type QuestionsContentArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Questions_Append_Input = {
  answer_keys?: Maybe<Scalars['jsonb']>;
  content?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: Maybe<Array<Questions_Bool_Exp>>;
  _not?: Maybe<Questions_Bool_Exp>;
  _or?: Maybe<Array<Questions_Bool_Exp>>;
  answer_keys?: Maybe<Jsonb_Comparison_Exp>;
  content?: Maybe<Jsonb_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint */
  QuestionsPkey = 'questions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Questions_Delete_At_Path_Input = {
  answer_keys?: Maybe<Array<Scalars['String']>>;
  content?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Questions_Delete_Elem_Input = {
  answer_keys?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Questions_Delete_Key_Input = {
  answer_keys?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  answer_keys?: Maybe<Scalars['jsonb']>;
  content?: Maybe<Scalars['jsonb']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Questions_On_Conflict>;
};

/** on conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: Maybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  answer_keys?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Questions_Prepend_Input = {
  answer_keys?: Maybe<Scalars['jsonb']>;
  content?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  AnswerKeys = 'answer_keys',
  /** column name */
  Content = 'content',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  answer_keys?: Maybe<Scalars['jsonb']>;
  content?: Maybe<Scalars['jsonb']>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  AnswerKeys = 'answer_keys',
  /** column name */
  Content = 'content',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** columns and relationships of "schools" */
export type Schools = {
  __typename?: 'schools';
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  short_name: Scalars['String'];
  type: Scalars['Int'];
};

/** aggregated selection of "schools" */
export type Schools_Aggregate = {
  __typename?: 'schools_aggregate';
  aggregate?: Maybe<Schools_Aggregate_Fields>;
  nodes: Array<Schools>;
};

/** aggregate fields of "schools" */
export type Schools_Aggregate_Fields = {
  __typename?: 'schools_aggregate_fields';
  avg?: Maybe<Schools_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Schools_Max_Fields>;
  min?: Maybe<Schools_Min_Fields>;
  stddev?: Maybe<Schools_Stddev_Fields>;
  stddev_pop?: Maybe<Schools_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Schools_Stddev_Samp_Fields>;
  sum?: Maybe<Schools_Sum_Fields>;
  var_pop?: Maybe<Schools_Var_Pop_Fields>;
  var_samp?: Maybe<Schools_Var_Samp_Fields>;
  variance?: Maybe<Schools_Variance_Fields>;
};


/** aggregate fields of "schools" */
export type Schools_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Schools_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Schools_Avg_Fields = {
  __typename?: 'schools_avg_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "schools". All fields are combined with a logical 'AND'. */
export type Schools_Bool_Exp = {
  _and?: Maybe<Array<Schools_Bool_Exp>>;
  _not?: Maybe<Schools_Bool_Exp>;
  _or?: Maybe<Array<Schools_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  short_name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "schools" */
export enum Schools_Constraint {
  /** unique or primary key constraint */
  SchoolsPkey = 'schools_pkey',
  /** unique or primary key constraint */
  SchoolsShortNameKey = 'schools_short_name_key'
}

/** input type for incrementing numeric columns in table "schools" */
export type Schools_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "schools" */
export type Schools_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Schools_Max_Fields = {
  __typename?: 'schools_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Schools_Min_Fields = {
  __typename?: 'schools_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "schools" */
export type Schools_Mutation_Response = {
  __typename?: 'schools_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Schools>;
};

/** input type for inserting object relation for remote table "schools" */
export type Schools_Obj_Rel_Insert_Input = {
  data: Schools_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Schools_On_Conflict>;
};

/** on conflict condition type for table "schools" */
export type Schools_On_Conflict = {
  constraint: Schools_Constraint;
  update_columns?: Array<Schools_Update_Column>;
  where?: Maybe<Schools_Bool_Exp>;
};

/** Ordering options when selecting data from "schools". */
export type Schools_Order_By = {
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: schools */
export type Schools_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "schools" */
export enum Schools_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "schools" */
export type Schools_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Schools_Stddev_Fields = {
  __typename?: 'schools_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Schools_Stddev_Pop_Fields = {
  __typename?: 'schools_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Schools_Stddev_Samp_Fields = {
  __typename?: 'schools_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Schools_Sum_Fields = {
  __typename?: 'schools_sum_fields';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** update columns of table "schools" */
export enum Schools_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Schools_Var_Pop_Fields = {
  __typename?: 'schools_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Schools_Var_Samp_Fields = {
  __typename?: 'schools_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Schools_Variance_Fields = {
  __typename?: 'schools_variance_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  accessToken?: Maybe<Scalars['String']>;
  expires: Scalars['timestamptz'];
  id: Scalars['Int'];
  sessionToken: Scalars['String'];
  userId: Scalars['Int'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  avg?: Maybe<Sessions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
  stddev?: Maybe<Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Sessions_Sum_Fields>;
  var_pop?: Maybe<Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Sessions_Var_Samp_Fields>;
  variance?: Maybe<Sessions_Variance_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sessions_Avg_Fields = {
  __typename?: 'sessions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Bool_Exp>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Sessions_Bool_Exp>>;
  accessToken?: Maybe<String_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sessionToken?: Maybe<String_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionToken = 'session_token',
  /** unique or primary key constraint */
  SessionsPkey = 'sessions_pkey'
}

/** input type for incrementing numeric columns in table "sessions" */
export type Sessions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  accessToken?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  accessToken?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sessionToken?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  accessToken?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Sessions_Stddev_Fields = {
  __typename?: 'sessions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sessions_Stddev_Pop_Fields = {
  __typename?: 'sessions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sessions_Stddev_Samp_Fields = {
  __typename?: 'sessions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sessions_Sum_Fields = {
  __typename?: 'sessions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Sessions_Var_Pop_Fields = {
  __typename?: 'sessions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sessions_Var_Samp_Fields = {
  __typename?: 'sessions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sessions_Variance_Fields = {
  __typename?: 'sessions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "announcements" */
  announcements: Array<Announcements>;
  /** fetch aggregated fields from the table: "announcements" */
  announcements_aggregate: Announcements_Aggregate;
  /** fetch data from the table: "announcements" using primary key columns */
  announcements_by_pk?: Maybe<Announcements>;
  /** fetch data from the table: "assignment_submissions" */
  assignment_submissions: Array<Assignment_Submissions>;
  /** fetch aggregated fields from the table: "assignment_submissions" */
  assignment_submissions_aggregate: Assignment_Submissions_Aggregate;
  /** fetch data from the table: "assignment_submissions" using primary key columns */
  assignment_submissions_by_pk?: Maybe<Assignment_Submissions>;
  /** fetch data from the table: "assignments" */
  assignments: Array<Assignments>;
  /** fetch aggregated fields from the table: "assignments" */
  assignments_aggregate: Assignments_Aggregate;
  /** fetch data from the table: "assignments" using primary key columns */
  assignments_by_pk?: Maybe<Assignments>;
  /** fetch data from the table: "contacts" */
  contacts: Array<Contacts>;
  /** fetch aggregated fields from the table: "contacts" */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table: "course_enrollment" */
  course_enrollment: Array<Course_Enrollment>;
  /** fetch aggregated fields from the table: "course_enrollment" */
  course_enrollment_aggregate: Course_Enrollment_Aggregate;
  /** fetch data from the table: "course_enrollment" using primary key columns */
  course_enrollment_by_pk?: Maybe<Course_Enrollment>;
  /** fetch data from the table: "course_management" */
  course_management: Array<Course_Management>;
  /** fetch aggregated fields from the table: "course_management" */
  course_management_aggregate: Course_Management_Aggregate;
  /** fetch data from the table: "course_management" using primary key columns */
  course_management_by_pk?: Maybe<Course_Management>;
  /** fetch data from the table: "courses" */
  courses: Array<Courses>;
  /** fetch aggregated fields from the table: "courses" */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** An array relationship */
  grade_items: Array<Grade_Items>;
  /** An aggregate relationship */
  grade_items_aggregate: Grade_Items_Aggregate;
  /** fetch data from the table: "grade_items" using primary key columns */
  grade_items_by_pk?: Maybe<Grade_Items>;
  /** fetch data from the table: "gradebook_item_submissions" */
  gradebook_item_submissions: Array<Gradebook_Item_Submissions>;
  /** fetch aggregated fields from the table: "gradebook_item_submissions" */
  gradebook_item_submissions_aggregate: Gradebook_Item_Submissions_Aggregate;
  /** fetch data from the table: "gradebook_item_submissions" using primary key columns */
  gradebook_item_submissions_by_pk?: Maybe<Gradebook_Item_Submissions>;
  /** An array relationship */
  gradebook_items: Array<Gradebook_Items>;
  /** An aggregate relationship */
  gradebook_items_aggregate: Gradebook_Items_Aggregate;
  /** fetch data from the table: "gradebook_items" using primary key columns */
  gradebook_items_by_pk?: Maybe<Gradebook_Items>;
  /** fetch data from the table: "grading_rubric" */
  grading_rubric: Array<Grading_Rubric>;
  /** fetch aggregated fields from the table: "grading_rubric" */
  grading_rubric_aggregate: Grading_Rubric_Aggregate;
  /** fetch data from the table: "grading_rubric" using primary key columns */
  grading_rubric_by_pk?: Maybe<Grading_Rubric>;
  /** An array relationship */
  group_membership: Array<Group_Membership>;
  /** An aggregate relationship */
  group_membership_aggregate: Group_Membership_Aggregate;
  /** fetch data from the table: "group_membership" using primary key columns */
  group_membership_by_pk?: Maybe<Group_Membership>;
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "prospective_users" */
  prospective_users: Array<Prospective_Users>;
  /** fetch aggregated fields from the table: "prospective_users" */
  prospective_users_aggregate: Prospective_Users_Aggregate;
  /** fetch data from the table: "prospective_users" using primary key columns */
  prospective_users_by_pk?: Maybe<Prospective_Users>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "schools" */
  schools: Array<Schools>;
  /** fetch aggregated fields from the table: "schools" */
  schools_aggregate: Schools_Aggregate;
  /** fetch data from the table: "schools" using primary key columns */
  schools_by_pk?: Maybe<Schools>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "test_questions" */
  test_questions: Array<Test_Questions>;
  /** fetch aggregated fields from the table: "test_questions" */
  test_questions_aggregate: Test_Questions_Aggregate;
  /** fetch data from the table: "test_questions" using primary key columns */
  test_questions_by_pk?: Maybe<Test_Questions>;
  /** fetch data from the table: "test_submissions" */
  test_submissions: Array<Test_Submissions>;
  /** fetch aggregated fields from the table: "test_submissions" */
  test_submissions_aggregate: Test_Submissions_Aggregate;
  /** fetch data from the table: "test_submissions" using primary key columns */
  test_submissions_by_pk?: Maybe<Test_Submissions>;
  /** fetch data from the table: "tests" */
  tests: Array<Tests>;
  /** fetch aggregated fields from the table: "tests" */
  tests_aggregate: Tests_Aggregate;
  /** fetch data from the table: "tests" using primary key columns */
  tests_by_pk?: Maybe<Tests>;
  /** fetch data from the table: "unit_assessments" */
  unit_assessments: Array<Unit_Assessments>;
  /** fetch aggregated fields from the table: "unit_assessments" */
  unit_assessments_aggregate: Unit_Assessments_Aggregate;
  /** fetch data from the table: "unit_assessments" using primary key columns */
  unit_assessments_by_pk?: Maybe<Unit_Assessments>;
  /** fetch data from the table: "units" */
  units: Array<Units>;
  /** fetch aggregated fields from the table: "units" */
  units_aggregate: Units_Aggregate;
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk?: Maybe<Units>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAnnouncementsArgs = {
  distinct_on?: Maybe<Array<Announcements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcements_Order_By>>;
  where?: Maybe<Announcements_Bool_Exp>;
};


export type Subscription_RootAnnouncements_AggregateArgs = {
  distinct_on?: Maybe<Array<Announcements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Announcements_Order_By>>;
  where?: Maybe<Announcements_Bool_Exp>;
};


export type Subscription_RootAnnouncements_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAssignment_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Assignment_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Submissions_Order_By>>;
  where?: Maybe<Assignment_Submissions_Bool_Exp>;
};


export type Subscription_RootAssignment_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Assignment_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Submissions_Order_By>>;
  where?: Maybe<Assignment_Submissions_Bool_Exp>;
};


export type Subscription_RootAssignment_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAssignmentsArgs = {
  distinct_on?: Maybe<Array<Assignments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignments_Order_By>>;
  where?: Maybe<Assignments_Bool_Exp>;
};


export type Subscription_RootAssignments_AggregateArgs = {
  distinct_on?: Maybe<Array<Assignments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignments_Order_By>>;
  where?: Maybe<Assignments_Bool_Exp>;
};


export type Subscription_RootAssignments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootContactsArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


export type Subscription_RootContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


export type Subscription_RootContacts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCourse_EnrollmentArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


export type Subscription_RootCourse_Enrollment_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


export type Subscription_RootCourse_Enrollment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourse_ManagementArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};


export type Subscription_RootCourse_Management_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};


export type Subscription_RootCourse_Management_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGrade_ItemsArgs = {
  distinct_on?: Maybe<Array<Grade_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grade_Items_Order_By>>;
  where?: Maybe<Grade_Items_Bool_Exp>;
};


export type Subscription_RootGrade_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Grade_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grade_Items_Order_By>>;
  where?: Maybe<Grade_Items_Bool_Exp>;
};


export type Subscription_RootGrade_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGradebook_Item_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Gradebook_Item_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Item_Submissions_Order_By>>;
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
};


export type Subscription_RootGradebook_Item_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Gradebook_Item_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Item_Submissions_Order_By>>;
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
};


export type Subscription_RootGradebook_Item_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGradebook_ItemsArgs = {
  distinct_on?: Maybe<Array<Gradebook_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Items_Order_By>>;
  where?: Maybe<Gradebook_Items_Bool_Exp>;
};


export type Subscription_RootGradebook_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Gradebook_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gradebook_Items_Order_By>>;
  where?: Maybe<Gradebook_Items_Bool_Exp>;
};


export type Subscription_RootGradebook_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGrading_RubricArgs = {
  distinct_on?: Maybe<Array<Grading_Rubric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grading_Rubric_Order_By>>;
  where?: Maybe<Grading_Rubric_Bool_Exp>;
};


export type Subscription_RootGrading_Rubric_AggregateArgs = {
  distinct_on?: Maybe<Array<Grading_Rubric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grading_Rubric_Order_By>>;
  where?: Maybe<Grading_Rubric_Bool_Exp>;
};


export type Subscription_RootGrading_Rubric_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_MembershipArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};


export type Subscription_RootGroup_Membership_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};


export type Subscription_RootGroup_Membership_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootModulesArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_AggregateArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProspective_UsersArgs = {
  distinct_on?: Maybe<Array<Prospective_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prospective_Users_Order_By>>;
  where?: Maybe<Prospective_Users_Bool_Exp>;
};


export type Subscription_RootProspective_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Prospective_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prospective_Users_Order_By>>;
  where?: Maybe<Prospective_Users_Bool_Exp>;
};


export type Subscription_RootProspective_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSchoolsArgs = {
  distinct_on?: Maybe<Array<Schools_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schools_Order_By>>;
  where?: Maybe<Schools_Bool_Exp>;
};


export type Subscription_RootSchools_AggregateArgs = {
  distinct_on?: Maybe<Array<Schools_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schools_Order_By>>;
  where?: Maybe<Schools_Bool_Exp>;
};


export type Subscription_RootSchools_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTest_QuestionsArgs = {
  distinct_on?: Maybe<Array<Test_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Questions_Order_By>>;
  where?: Maybe<Test_Questions_Bool_Exp>;
};


export type Subscription_RootTest_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Questions_Order_By>>;
  where?: Maybe<Test_Questions_Bool_Exp>;
};


export type Subscription_RootTest_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest_SubmissionsArgs = {
  distinct_on?: Maybe<Array<Test_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Submissions_Order_By>>;
  where?: Maybe<Test_Submissions_Bool_Exp>;
};


export type Subscription_RootTest_Submissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Submissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Submissions_Order_By>>;
  where?: Maybe<Test_Submissions_Bool_Exp>;
};


export type Subscription_RootTest_Submissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestsArgs = {
  distinct_on?: Maybe<Array<Tests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tests_Order_By>>;
  where?: Maybe<Tests_Bool_Exp>;
};


export type Subscription_RootTests_AggregateArgs = {
  distinct_on?: Maybe<Array<Tests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tests_Order_By>>;
  where?: Maybe<Tests_Bool_Exp>;
};


export type Subscription_RootTests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUnit_AssessmentsArgs = {
  distinct_on?: Maybe<Array<Unit_Assessments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Assessments_Order_By>>;
  where?: Maybe<Unit_Assessments_Bool_Exp>;
};


export type Subscription_RootUnit_Assessments_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Assessments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Assessments_Order_By>>;
  where?: Maybe<Unit_Assessments_Bool_Exp>;
};


export type Subscription_RootUnit_Assessments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUnitsArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Units_Order_By>>;
  where?: Maybe<Units_Bool_Exp>;
};


export type Subscription_RootUnits_AggregateArgs = {
  distinct_on?: Maybe<Array<Units_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Units_Order_By>>;
  where?: Maybe<Units_Bool_Exp>;
};


export type Subscription_RootUnits_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "test_questions" */
export type Test_Questions = {
  __typename?: 'test_questions';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  order: Scalars['Int'];
  /** An object relationship */
  question?: Maybe<Questions>;
  question_id: Scalars['uuid'];
  /** An object relationship */
  test?: Maybe<Tests>;
  test_id: Scalars['uuid'];
};

/** aggregated selection of "test_questions" */
export type Test_Questions_Aggregate = {
  __typename?: 'test_questions_aggregate';
  aggregate?: Maybe<Test_Questions_Aggregate_Fields>;
  nodes: Array<Test_Questions>;
};

/** aggregate fields of "test_questions" */
export type Test_Questions_Aggregate_Fields = {
  __typename?: 'test_questions_aggregate_fields';
  avg?: Maybe<Test_Questions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Test_Questions_Max_Fields>;
  min?: Maybe<Test_Questions_Min_Fields>;
  stddev?: Maybe<Test_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Questions_Sum_Fields>;
  var_pop?: Maybe<Test_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Questions_Var_Samp_Fields>;
  variance?: Maybe<Test_Questions_Variance_Fields>;
};


/** aggregate fields of "test_questions" */
export type Test_Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Test_Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Test_Questions_Avg_Fields = {
  __typename?: 'test_questions_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "test_questions". All fields are combined with a logical 'AND'. */
export type Test_Questions_Bool_Exp = {
  _and?: Maybe<Array<Test_Questions_Bool_Exp>>;
  _not?: Maybe<Test_Questions_Bool_Exp>;
  _or?: Maybe<Array<Test_Questions_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  question?: Maybe<Questions_Bool_Exp>;
  question_id?: Maybe<Uuid_Comparison_Exp>;
  test?: Maybe<Tests_Bool_Exp>;
  test_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_questions" */
export enum Test_Questions_Constraint {
  /** unique or primary key constraint */
  TestQuestionsPkey = 'test_questions_pkey'
}

/** input type for incrementing numeric columns in table "test_questions" */
export type Test_Questions_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "test_questions" */
export type Test_Questions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  question?: Maybe<Questions_Obj_Rel_Insert_Input>;
  question_id?: Maybe<Scalars['uuid']>;
  test?: Maybe<Tests_Obj_Rel_Insert_Input>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Test_Questions_Max_Fields = {
  __typename?: 'test_questions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  question_id?: Maybe<Scalars['uuid']>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Test_Questions_Min_Fields = {
  __typename?: 'test_questions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  question_id?: Maybe<Scalars['uuid']>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "test_questions" */
export type Test_Questions_Mutation_Response = {
  __typename?: 'test_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Questions>;
};

/** on conflict condition type for table "test_questions" */
export type Test_Questions_On_Conflict = {
  constraint: Test_Questions_Constraint;
  update_columns?: Array<Test_Questions_Update_Column>;
  where?: Maybe<Test_Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "test_questions". */
export type Test_Questions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  question?: Maybe<Questions_Order_By>;
  question_id?: Maybe<Order_By>;
  test?: Maybe<Tests_Order_By>;
  test_id?: Maybe<Order_By>;
};

/** primary key columns input for table: test_questions */
export type Test_Questions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test_questions" */
export enum Test_Questions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  TestId = 'test_id'
}

/** input type for updating data in table "test_questions" */
export type Test_Questions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  question_id?: Maybe<Scalars['uuid']>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Test_Questions_Stddev_Fields = {
  __typename?: 'test_questions_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Test_Questions_Stddev_Pop_Fields = {
  __typename?: 'test_questions_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Test_Questions_Stddev_Samp_Fields = {
  __typename?: 'test_questions_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Test_Questions_Sum_Fields = {
  __typename?: 'test_questions_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "test_questions" */
export enum Test_Questions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  TestId = 'test_id'
}

/** aggregate var_pop on columns */
export type Test_Questions_Var_Pop_Fields = {
  __typename?: 'test_questions_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Test_Questions_Var_Samp_Fields = {
  __typename?: 'test_questions_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Test_Questions_Variance_Fields = {
  __typename?: 'test_questions_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "test_submissions" */
export type Test_Submissions = {
  __typename?: 'test_submissions';
  content: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  test?: Maybe<Tests>;
  test_id: Scalars['uuid'];
};

/** aggregated selection of "test_submissions" */
export type Test_Submissions_Aggregate = {
  __typename?: 'test_submissions_aggregate';
  aggregate?: Maybe<Test_Submissions_Aggregate_Fields>;
  nodes: Array<Test_Submissions>;
};

/** aggregate fields of "test_submissions" */
export type Test_Submissions_Aggregate_Fields = {
  __typename?: 'test_submissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Submissions_Max_Fields>;
  min?: Maybe<Test_Submissions_Min_Fields>;
};


/** aggregate fields of "test_submissions" */
export type Test_Submissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Test_Submissions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test_submissions". All fields are combined with a logical 'AND'. */
export type Test_Submissions_Bool_Exp = {
  _and?: Maybe<Array<Test_Submissions_Bool_Exp>>;
  _not?: Maybe<Test_Submissions_Bool_Exp>;
  _or?: Maybe<Array<Test_Submissions_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  test?: Maybe<Tests_Bool_Exp>;
  test_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_submissions" */
export enum Test_Submissions_Constraint {
  /** unique or primary key constraint */
  TestSubmissionsPkey = 'test_submissions_pkey'
}

/** input type for inserting data into table "test_submissions" */
export type Test_Submissions_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  test?: Maybe<Tests_Obj_Rel_Insert_Input>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Test_Submissions_Max_Fields = {
  __typename?: 'test_submissions_max_fields';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Test_Submissions_Min_Fields = {
  __typename?: 'test_submissions_min_fields';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "test_submissions" */
export type Test_Submissions_Mutation_Response = {
  __typename?: 'test_submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Submissions>;
};

/** on conflict condition type for table "test_submissions" */
export type Test_Submissions_On_Conflict = {
  constraint: Test_Submissions_Constraint;
  update_columns?: Array<Test_Submissions_Update_Column>;
  where?: Maybe<Test_Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "test_submissions". */
export type Test_Submissions_Order_By = {
  content?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  test?: Maybe<Tests_Order_By>;
  test_id?: Maybe<Order_By>;
};

/** primary key columns input for table: test_submissions */
export type Test_Submissions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test_submissions" */
export enum Test_Submissions_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  TestId = 'test_id'
}

/** input type for updating data in table "test_submissions" */
export type Test_Submissions_Set_Input = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  test_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "test_submissions" */
export enum Test_Submissions_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  TestId = 'test_id'
}

/** columns and relationships of "tests" */
export type Tests = {
  __typename?: 'tests';
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  gradebook_item?: Maybe<Gradebook_Items>;
  gradebook_item_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  settings?: Maybe<Scalars['jsonb']>;
  time_limit: Scalars['Int'];
};


/** columns and relationships of "tests" */
export type TestsSettingsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tests" */
export type Tests_Aggregate = {
  __typename?: 'tests_aggregate';
  aggregate?: Maybe<Tests_Aggregate_Fields>;
  nodes: Array<Tests>;
};

/** aggregate fields of "tests" */
export type Tests_Aggregate_Fields = {
  __typename?: 'tests_aggregate_fields';
  avg?: Maybe<Tests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tests_Max_Fields>;
  min?: Maybe<Tests_Min_Fields>;
  stddev?: Maybe<Tests_Stddev_Fields>;
  stddev_pop?: Maybe<Tests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tests_Stddev_Samp_Fields>;
  sum?: Maybe<Tests_Sum_Fields>;
  var_pop?: Maybe<Tests_Var_Pop_Fields>;
  var_samp?: Maybe<Tests_Var_Samp_Fields>;
  variance?: Maybe<Tests_Variance_Fields>;
};


/** aggregate fields of "tests" */
export type Tests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tests_Append_Input = {
  settings?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Tests_Avg_Fields = {
  __typename?: 'tests_avg_fields';
  time_limit?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tests". All fields are combined with a logical 'AND'. */
export type Tests_Bool_Exp = {
  _and?: Maybe<Array<Tests_Bool_Exp>>;
  _not?: Maybe<Tests_Bool_Exp>;
  _or?: Maybe<Array<Tests_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  gradebook_item?: Maybe<Gradebook_Items_Bool_Exp>;
  gradebook_item_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  settings?: Maybe<Jsonb_Comparison_Exp>;
  time_limit?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "tests" */
export enum Tests_Constraint {
  /** unique or primary key constraint */
  TestsPkey = 'tests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tests_Delete_At_Path_Input = {
  settings?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tests_Delete_Elem_Input = {
  settings?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tests_Delete_Key_Input = {
  settings?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "tests" */
export type Tests_Inc_Input = {
  time_limit?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tests" */
export type Tests_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  gradebook_item?: Maybe<Gradebook_Items_Obj_Rel_Insert_Input>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['jsonb']>;
  time_limit?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Tests_Max_Fields = {
  __typename?: 'tests_max_fields';
  description?: Maybe<Scalars['String']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  time_limit?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Tests_Min_Fields = {
  __typename?: 'tests_min_fields';
  description?: Maybe<Scalars['String']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  time_limit?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "tests" */
export type Tests_Mutation_Response = {
  __typename?: 'tests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tests>;
};

/** input type for inserting object relation for remote table "tests" */
export type Tests_Obj_Rel_Insert_Input = {
  data: Tests_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tests_On_Conflict>;
};

/** on conflict condition type for table "tests" */
export type Tests_On_Conflict = {
  constraint: Tests_Constraint;
  update_columns?: Array<Tests_Update_Column>;
  where?: Maybe<Tests_Bool_Exp>;
};

/** Ordering options when selecting data from "tests". */
export type Tests_Order_By = {
  description?: Maybe<Order_By>;
  gradebook_item?: Maybe<Gradebook_Items_Order_By>;
  gradebook_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  settings?: Maybe<Order_By>;
  time_limit?: Maybe<Order_By>;
};

/** primary key columns input for table: tests */
export type Tests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tests_Prepend_Input = {
  settings?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "tests" */
export enum Tests_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Settings = 'settings',
  /** column name */
  TimeLimit = 'time_limit'
}

/** input type for updating data in table "tests" */
export type Tests_Set_Input = {
  description?: Maybe<Scalars['String']>;
  gradebook_item_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['jsonb']>;
  time_limit?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Tests_Stddev_Fields = {
  __typename?: 'tests_stddev_fields';
  time_limit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tests_Stddev_Pop_Fields = {
  __typename?: 'tests_stddev_pop_fields';
  time_limit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tests_Stddev_Samp_Fields = {
  __typename?: 'tests_stddev_samp_fields';
  time_limit?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tests_Sum_Fields = {
  __typename?: 'tests_sum_fields';
  time_limit?: Maybe<Scalars['Int']>;
};

/** update columns of table "tests" */
export enum Tests_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  GradebookItemId = 'gradebook_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Settings = 'settings',
  /** column name */
  TimeLimit = 'time_limit'
}

/** aggregate var_pop on columns */
export type Tests_Var_Pop_Fields = {
  __typename?: 'tests_var_pop_fields';
  time_limit?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tests_Var_Samp_Fields = {
  __typename?: 'tests_var_samp_fields';
  time_limit?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tests_Variance_Fields = {
  __typename?: 'tests_variance_fields';
  time_limit?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "unit_assessments" */
export type Unit_Assessments = {
  __typename?: 'unit_assessments';
  assessment_id: Scalars['uuid'];
  /** An object relationship */
  assignment?: Maybe<Assignments>;
  id: Scalars['uuid'];
  /** An object relationship */
  test?: Maybe<Tests>;
  type: Scalars['String'];
  unit_id: Scalars['uuid'];
};

/** aggregated selection of "unit_assessments" */
export type Unit_Assessments_Aggregate = {
  __typename?: 'unit_assessments_aggregate';
  aggregate?: Maybe<Unit_Assessments_Aggregate_Fields>;
  nodes: Array<Unit_Assessments>;
};

/** aggregate fields of "unit_assessments" */
export type Unit_Assessments_Aggregate_Fields = {
  __typename?: 'unit_assessments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Unit_Assessments_Max_Fields>;
  min?: Maybe<Unit_Assessments_Min_Fields>;
};


/** aggregate fields of "unit_assessments" */
export type Unit_Assessments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Unit_Assessments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "unit_assessments" */
export type Unit_Assessments_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Unit_Assessments_Max_Order_By>;
  min?: Maybe<Unit_Assessments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "unit_assessments" */
export type Unit_Assessments_Arr_Rel_Insert_Input = {
  data: Array<Unit_Assessments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Unit_Assessments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "unit_assessments". All fields are combined with a logical 'AND'. */
export type Unit_Assessments_Bool_Exp = {
  _and?: Maybe<Array<Unit_Assessments_Bool_Exp>>;
  _not?: Maybe<Unit_Assessments_Bool_Exp>;
  _or?: Maybe<Array<Unit_Assessments_Bool_Exp>>;
  assessment_id?: Maybe<Uuid_Comparison_Exp>;
  assignment?: Maybe<Assignments_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  test?: Maybe<Tests_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  unit_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "unit_assessments" */
export enum Unit_Assessments_Constraint {
  /** unique or primary key constraint */
  UnitAssessmentsPkey = 'unit_assessments_pkey'
}

/** input type for inserting data into table "unit_assessments" */
export type Unit_Assessments_Insert_Input = {
  assessment_id?: Maybe<Scalars['uuid']>;
  assignment?: Maybe<Assignments_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  test?: Maybe<Tests_Obj_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Unit_Assessments_Max_Fields = {
  __typename?: 'unit_assessments_max_fields';
  assessment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "unit_assessments" */
export type Unit_Assessments_Max_Order_By = {
  assessment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  unit_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Unit_Assessments_Min_Fields = {
  __typename?: 'unit_assessments_min_fields';
  assessment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "unit_assessments" */
export type Unit_Assessments_Min_Order_By = {
  assessment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  unit_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "unit_assessments" */
export type Unit_Assessments_Mutation_Response = {
  __typename?: 'unit_assessments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Unit_Assessments>;
};

/** on conflict condition type for table "unit_assessments" */
export type Unit_Assessments_On_Conflict = {
  constraint: Unit_Assessments_Constraint;
  update_columns?: Array<Unit_Assessments_Update_Column>;
  where?: Maybe<Unit_Assessments_Bool_Exp>;
};

/** Ordering options when selecting data from "unit_assessments". */
export type Unit_Assessments_Order_By = {
  assessment_id?: Maybe<Order_By>;
  assignment?: Maybe<Assignments_Order_By>;
  id?: Maybe<Order_By>;
  test?: Maybe<Tests_Order_By>;
  type?: Maybe<Order_By>;
  unit_id?: Maybe<Order_By>;
};

/** primary key columns input for table: unit_assessments */
export type Unit_Assessments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "unit_assessments" */
export enum Unit_Assessments_Select_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "unit_assessments" */
export type Unit_Assessments_Set_Input = {
  assessment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  unit_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "unit_assessments" */
export enum Unit_Assessments_Update_Column {
  /** column name */
  AssessmentId = 'assessment_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UnitId = 'unit_id'
}

/** columns and relationships of "units" */
export type Units = {
  __typename?: 'units';
  archived: Scalars['Boolean'];
  /** An array relationship */
  assessments: Array<Unit_Assessments>;
  /** An aggregate relationship */
  assessments_aggregate: Unit_Assessments_Aggregate;
  available_from?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  course?: Maybe<Courses>;
  course_id: Scalars['uuid'];
  id: Scalars['uuid'];
  number: Scalars['String'];
  order: Scalars['Int'];
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};


/** columns and relationships of "units" */
export type UnitsAssessmentsArgs = {
  distinct_on?: Maybe<Array<Unit_Assessments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Assessments_Order_By>>;
  where?: Maybe<Unit_Assessments_Bool_Exp>;
};


/** columns and relationships of "units" */
export type UnitsAssessments_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Assessments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Assessments_Order_By>>;
  where?: Maybe<Unit_Assessments_Bool_Exp>;
};

/** aggregated selection of "units" */
export type Units_Aggregate = {
  __typename?: 'units_aggregate';
  aggregate?: Maybe<Units_Aggregate_Fields>;
  nodes: Array<Units>;
};

/** aggregate fields of "units" */
export type Units_Aggregate_Fields = {
  __typename?: 'units_aggregate_fields';
  avg?: Maybe<Units_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Units_Max_Fields>;
  min?: Maybe<Units_Min_Fields>;
  stddev?: Maybe<Units_Stddev_Fields>;
  stddev_pop?: Maybe<Units_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Units_Stddev_Samp_Fields>;
  sum?: Maybe<Units_Sum_Fields>;
  var_pop?: Maybe<Units_Var_Pop_Fields>;
  var_samp?: Maybe<Units_Var_Samp_Fields>;
  variance?: Maybe<Units_Variance_Fields>;
};


/** aggregate fields of "units" */
export type Units_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Units_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Units_Avg_Fields = {
  __typename?: 'units_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "units". All fields are combined with a logical 'AND'. */
export type Units_Bool_Exp = {
  _and?: Maybe<Array<Units_Bool_Exp>>;
  _not?: Maybe<Units_Bool_Exp>;
  _or?: Maybe<Array<Units_Bool_Exp>>;
  archived?: Maybe<Boolean_Comparison_Exp>;
  assessments?: Maybe<Unit_Assessments_Bool_Exp>;
  available_from?: Maybe<Timestamp_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  number?: Maybe<String_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "units" */
export enum Units_Constraint {
  /** unique or primary key constraint */
  UnitPkey = 'unit_pkey'
}

/** input type for incrementing numeric columns in table "units" */
export type Units_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "units" */
export type Units_Insert_Input = {
  archived?: Maybe<Scalars['Boolean']>;
  assessments?: Maybe<Unit_Assessments_Arr_Rel_Insert_Input>;
  available_from?: Maybe<Scalars['timestamp']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Units_Max_Fields = {
  __typename?: 'units_max_fields';
  available_from?: Maybe<Scalars['timestamp']>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Units_Min_Fields = {
  __typename?: 'units_min_fields';
  available_from?: Maybe<Scalars['timestamp']>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "units" */
export type Units_Mutation_Response = {
  __typename?: 'units_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Units>;
};

/** input type for inserting object relation for remote table "units" */
export type Units_Obj_Rel_Insert_Input = {
  data: Units_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Units_On_Conflict>;
};

/** on conflict condition type for table "units" */
export type Units_On_Conflict = {
  constraint: Units_Constraint;
  update_columns?: Array<Units_Update_Column>;
  where?: Maybe<Units_Bool_Exp>;
};

/** Ordering options when selecting data from "units". */
export type Units_Order_By = {
  archived?: Maybe<Order_By>;
  assessments_aggregate?: Maybe<Unit_Assessments_Aggregate_Order_By>;
  available_from?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: units */
export type Units_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "units" */
export enum Units_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  AvailableFrom = 'available_from',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  Order = 'order',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "units" */
export type Units_Set_Input = {
  archived?: Maybe<Scalars['Boolean']>;
  available_from?: Maybe<Scalars['timestamp']>;
  course_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Units_Stddev_Fields = {
  __typename?: 'units_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Units_Stddev_Pop_Fields = {
  __typename?: 'units_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Units_Stddev_Samp_Fields = {
  __typename?: 'units_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Units_Sum_Fields = {
  __typename?: 'units_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "units" */
export enum Units_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  AvailableFrom = 'available_from',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  Order = 'order',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Units_Var_Pop_Fields = {
  __typename?: 'units_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Units_Var_Samp_Fields = {
  __typename?: 'units_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Units_Variance_Fields = {
  __typename?: 'units_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  birthdate?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  date_format?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  enrolled_courses: Array<Course_Enrollment>;
  /** An aggregate relationship */
  enrolled_courses_aggregate: Course_Enrollment_Aggregate;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  /** An array relationship */
  group_membership: Array<Group_Membership>;
  /** An aggregate relationship */
  group_membership_aggregate: Group_Membership_Aggregate;
  home_phone?: Maybe<Scalars['String']>;
  hour_format?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  is_active: Scalars['Boolean'];
  job_title?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  managing_courses: Array<Course_Management>;
  /** An aggregate relationship */
  managing_courses_aggregate: Course_Management_Aggregate;
  middle_name?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  other_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  own_courses: Array<Courses>;
  /** An aggregate relationship */
  own_courses_aggregate: Courses_Aggregate;
  password?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  /** An object relationship */
  school?: Maybe<Schools>;
  school_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_1?: Maybe<Scalars['String']>;
  street_2?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
};


/** columns and relationships of "users" */
export type UsersEnrolled_CoursesArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersEnrolled_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Enrollment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Enrollment_Order_By>>;
  where?: Maybe<Course_Enrollment_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGroup_MembershipArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGroup_Membership_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Membership_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Membership_Order_By>>;
  where?: Maybe<Group_Membership_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersManaging_CoursesArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersManaging_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Management_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Management_Order_By>>;
  where?: Maybe<Course_Management_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOwn_CoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOwn_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  education_level?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  birthdate?: Maybe<Date_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  date_format?: Maybe<String_Comparison_Exp>;
  department?: Maybe<String_Comparison_Exp>;
  education_level?: Maybe<Int_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Boolean_Comparison_Exp>;
  enrolled_courses?: Maybe<Course_Enrollment_Bool_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<Int_Comparison_Exp>;
  group_membership?: Maybe<Group_Membership_Bool_Exp>;
  home_phone?: Maybe<String_Comparison_Exp>;
  hour_format?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  job_title?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  managing_courses?: Maybe<Course_Management_Bool_Exp>;
  middle_name?: Maybe<String_Comparison_Exp>;
  mobile_phone?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  other_name?: Maybe<String_Comparison_Exp>;
  own_courses?: Maybe<Courses_Bool_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  school?: Maybe<Schools_Bool_Exp>;
  school_id?: Maybe<Int_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  street_1?: Maybe<String_Comparison_Exp>;
  street_2?: Maybe<String_Comparison_Exp>;
  student_id?: Maybe<String_Comparison_Exp>;
  suffix?: Maybe<String_Comparison_Exp>;
  title?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  work_phone?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  Email = 'email',
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserStudentIdKey = 'user_student_id_key',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  education_level?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  school_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  birthdate?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_format?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  enrolled_courses?: Maybe<Course_Enrollment_Arr_Rel_Insert_Input>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  group_membership?: Maybe<Group_Membership_Arr_Rel_Insert_Input>;
  home_phone?: Maybe<Scalars['String']>;
  hour_format?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  job_title?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  managing_courses?: Maybe<Course_Management_Arr_Rel_Insert_Input>;
  middle_name?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  other_name?: Maybe<Scalars['String']>;
  own_courses?: Maybe<Courses_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  school?: Maybe<Schools_Obj_Rel_Insert_Input>;
  school_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_1?: Maybe<Scalars['String']>;
  street_2?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  birthdate?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_format?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  home_phone?: Maybe<Scalars['String']>;
  hour_format?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  other_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_1?: Maybe<Scalars['String']>;
  street_2?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  birthdate?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_format?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  home_phone?: Maybe<Scalars['String']>;
  hour_format?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  other_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_1?: Maybe<Scalars['String']>;
  street_2?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  birthdate?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  date_format?: Maybe<Order_By>;
  department?: Maybe<Order_By>;
  education_level?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  enrolled_courses_aggregate?: Maybe<Course_Enrollment_Aggregate_Order_By>;
  first_name?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  group_membership_aggregate?: Maybe<Group_Membership_Aggregate_Order_By>;
  home_phone?: Maybe<Order_By>;
  hour_format?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  job_title?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  managing_courses_aggregate?: Maybe<Course_Management_Aggregate_Order_By>;
  middle_name?: Maybe<Order_By>;
  mobile_phone?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  other_name?: Maybe<Order_By>;
  own_courses_aggregate?: Maybe<Courses_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  school?: Maybe<Schools_Order_By>;
  school_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  street_1?: Maybe<Order_By>;
  street_2?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  suffix?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  work_phone?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateFormat = 'date_format',
  /** column name */
  Department = 'department',
  /** column name */
  EducationLevel = 'education_level',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HomePhone = 'home_phone',
  /** column name */
  HourFormat = 'hour_format',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  MobilePhone = 'mobile_phone',
  /** column name */
  Name = 'name',
  /** column name */
  OtherName = 'other_name',
  /** column name */
  Password = 'password',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Role = 'role',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  State = 'state',
  /** column name */
  Street_1 = 'street_1',
  /** column name */
  Street_2 = 'street_2',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Suffix = 'suffix',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username',
  /** column name */
  WorkPhone = 'work_phone'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthdate?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_format?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  home_phone?: Maybe<Scalars['String']>;
  hour_format?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  job_title?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  other_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_1?: Maybe<Scalars['String']>;
  street_2?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  work_phone?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  education_level?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  education_level?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  education_level?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  education_level?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  school_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateFormat = 'date_format',
  /** column name */
  Department = 'department',
  /** column name */
  EducationLevel = 'education_level',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  HomePhone = 'home_phone',
  /** column name */
  HourFormat = 'hour_format',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  MobilePhone = 'mobile_phone',
  /** column name */
  Name = 'name',
  /** column name */
  OtherName = 'other_name',
  /** column name */
  Password = 'password',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Role = 'role',
  /** column name */
  SchoolId = 'school_id',
  /** column name */
  State = 'state',
  /** column name */
  Street_1 = 'street_1',
  /** column name */
  Street_2 = 'street_2',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Suffix = 'suffix',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username',
  /** column name */
  WorkPhone = 'work_phone'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  education_level?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  education_level?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  education_level?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  school_id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires: Scalars['timestamptz'];
  id: Scalars['Int'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  avg?: Maybe<Verification_Requests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
  stddev?: Maybe<Verification_Requests_Stddev_Fields>;
  stddev_pop?: Maybe<Verification_Requests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Verification_Requests_Stddev_Samp_Fields>;
  sum?: Maybe<Verification_Requests_Sum_Fields>;
  var_pop?: Maybe<Verification_Requests_Var_Pop_Fields>;
  var_samp?: Maybe<Verification_Requests_Var_Samp_Fields>;
  variance?: Maybe<Verification_Requests_Variance_Fields>;
};


/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Verification_Requests_Avg_Fields = {
  __typename?: 'verification_requests_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  Token = 'token',
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey'
}

/** input type for incrementing numeric columns in table "verification_requests" */
export type Verification_Requests_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Requests>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns?: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_requests". */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: verification_requests */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Verification_Requests_Stddev_Fields = {
  __typename?: 'verification_requests_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Verification_Requests_Stddev_Pop_Fields = {
  __typename?: 'verification_requests_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Verification_Requests_Stddev_Samp_Fields = {
  __typename?: 'verification_requests_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Verification_Requests_Sum_Fields = {
  __typename?: 'verification_requests_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Verification_Requests_Var_Pop_Fields = {
  __typename?: 'verification_requests_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Verification_Requests_Var_Samp_Fields = {
  __typename?: 'verification_requests_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Verification_Requests_Variance_Fields = {
  __typename?: 'verification_requests_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CreateAnnouncementMutationVariables = Exact<{
  author_id: Scalars['Int'];
  course_id: Scalars['uuid'];
  message: Scalars['String'];
  publish_on?: Maybe<Scalars['timestamp']>;
  is_scheduled: Scalars['Boolean'];
  title: Scalars['String'];
}>;


export type CreateAnnouncementMutation = { __typename?: 'mutation_root', insert_announcements_one?: { __typename?: 'announcements', author_id: number, course_id: any, created_at: any, id: any, message: string, publish_on?: any | null | undefined, is_scheduled: boolean, title: string } | null | undefined };

export type UpdateAnnouncementMutationVariables = Exact<{
  id: Scalars['uuid'];
  is_scheduled?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  publish_on?: Maybe<Scalars['timestamp']>;
  title: Scalars['String'];
}>;


export type UpdateAnnouncementMutation = { __typename?: 'mutation_root', update_announcements?: { __typename?: 'announcements_mutation_response', affected_rows: number } | null | undefined };

export type DeleteAnnouncementMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteAnnouncementMutation = { __typename?: 'mutation_root', delete_announcements_by_pk?: { __typename?: 'announcements', id: any } | null | undefined };

export type GetAnnouncementsQueryVariables = Exact<{
  course_id: Scalars['uuid'];
}>;


export type GetAnnouncementsQuery = { __typename?: 'query_root', announcements: Array<{ __typename?: 'announcements', id: any, is_scheduled: boolean, publish_on?: any | null | undefined, title: string, message: string, created_at: any, course_id: any, author_id: number, author?: { __typename?: 'users', id: number, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, image?: string | null | undefined } | null | undefined }> };

export type UpdateCourseBannerColorMutationVariables = Exact<{
  id: Scalars['uuid'];
  banner_color: Scalars['String'];
}>;


export type UpdateCourseBannerColorMutation = { __typename?: 'mutation_root', update_courses?: { __typename?: 'courses_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'courses', banner_color?: string | null | undefined }> } | null | undefined };

export type UpdateCourseBackgroundColorMutationVariables = Exact<{
  id: Scalars['uuid'];
  background_color: Scalars['String'];
}>;


export type UpdateCourseBackgroundColorMutation = { __typename?: 'mutation_root', update_courses?: { __typename?: 'courses_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'courses', background_color?: string | null | undefined }> } | null | undefined };

export type UpdateCourseAvailabilityMutationVariables = Exact<{
  id: Scalars['uuid'];
  available: Scalars['Boolean'];
}>;


export type UpdateCourseAvailabilityMutation = { __typename?: 'mutation_root', update_courses?: { __typename?: 'courses_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'courses', available: boolean }> } | null | undefined };

export type UpdateCourseCodeMutationVariables = Exact<{
  id: Scalars['uuid'];
  code?: Maybe<Scalars['String']>;
}>;


export type UpdateCourseCodeMutation = { __typename?: 'mutation_root', update_courses?: { __typename?: 'courses_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'courses', access_code?: string | null | undefined }> } | null | undefined };

export type UpdateCourseDurationMutationVariables = Exact<{
  id: Scalars['uuid'];
  duration?: Maybe<Scalars['String']>;
}>;


export type UpdateCourseDurationMutation = { __typename?: 'mutation_root', update_courses?: { __typename?: 'courses_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'courses', duration?: string | null | undefined }> } | null | undefined };

export type UpdateCourseDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  level?: Maybe<Scalars['String']>;
}>;


export type UpdateCourseDetailsMutation = { __typename?: 'mutation_root', update_courses?: { __typename?: 'courses_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'courses', description?: string | null | undefined, name: string, level?: string | null | undefined }> } | null | undefined };

export type OtherUserFragment = { __typename?: 'users', id: number, title?: number | null | undefined, image?: string | null | undefined, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, username?: string | null | undefined };

export type GetCourseByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
  with_details: Scalars['Boolean'];
}>;


export type GetCourseByIdQuery = { __typename?: 'query_root', courses: Array<{ __typename?: 'courses', access_code?: string | null | undefined, available: boolean, banner_color?: string | null | undefined, background_color?: string | null | undefined, banner_image?: string | null | undefined, description?: string | null | undefined, duration?: string | null | undefined, schedule?: string | null | undefined, id: any, instructor_id: number, level?: string | null | undefined, name: string, instructor?: { __typename?: 'users', id: number, title?: number | null | undefined, image?: string | null | undefined, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, username?: string | null | undefined } | null | undefined, enrollments_aggregate?: { __typename?: 'course_enrollment_aggregate', aggregate?: { __typename?: 'course_enrollment_aggregate_fields', count: number } | null | undefined }, management?: Array<{ __typename?: 'course_management', course_id: any, id: any, manager_id: any, manager?: { __typename?: 'users', id: number, title?: number | null | undefined, image?: string | null | undefined, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, username?: string | null | undefined } | null | undefined }>, enrollments?: Array<{ __typename?: 'course_enrollment', authorized: boolean, authorized_at?: any | null | undefined, course_id: any, created_at: any, id: any, student_id: number, student?: { __typename?: 'users', id: number, title?: number | null | undefined, image?: string | null | undefined, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, username?: string | null | undefined } | null | undefined }>, groups: Array<{ __typename?: 'groups', id: any, name: string, membership_aggregate: { __typename?: 'group_membership_aggregate', aggregate?: { __typename?: 'group_membership_aggregate_fields', count: number } | null | undefined }, membership: Array<{ __typename?: 'group_membership', id: any, group_id: any, student_id: number, student?: { __typename?: 'users', id: number, title?: number | null | undefined, image?: string | null | undefined, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, username?: string | null | undefined } | null | undefined }> }> }> };

export type GetAllCourseEnrollmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCourseEnrollmentsQuery = { __typename?: 'query_root', course_enrollment: Array<{ __typename?: 'course_enrollment', id: any, course_id: any, student_id: number, authorized: boolean, created_at: any, authorized_at?: any | null | undefined, course?: { __typename?: 'courses', name: string, access_code?: string | null | undefined, available: boolean, background_color?: string | null | undefined, banner_color?: string | null | undefined, banner_image?: string | null | undefined, description?: string | null | undefined, duration?: string | null | undefined, id: any, schedule?: string | null | undefined, instructor_id: number, level?: string | null | undefined, instructor?: { __typename?: 'users', first_name?: string | null | undefined, middle_name?: string | null | undefined, last_name?: string | null | undefined, image?: string | null | undefined } | null | undefined } | null | undefined }> };

export type GetCourseEnrollmentsQueryVariables = Exact<{
  course_id: Scalars['uuid'];
}>;


export type GetCourseEnrollmentsQuery = { __typename?: 'query_root', course_enrollment: Array<{ __typename?: 'course_enrollment', id: any, course_id: any, student_id: number, authorized: boolean, created_at: any, authorized_at?: any | null | undefined, student?: { __typename?: 'users', id: number, title?: number | null | undefined, image?: string | null | undefined, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, username?: string | null | undefined } | null | undefined }> };

export type GetValidCourseEnrollmentsQueryVariables = Exact<{
  course_id: Scalars['uuid'];
}>;


export type GetValidCourseEnrollmentsQuery = { __typename?: 'query_root', course_enrollment: Array<{ __typename?: 'course_enrollment', id: any, course_id: any, student_id: number, authorized: boolean, created_at: any, authorized_at?: any | null | undefined, student?: { __typename?: 'users', id: number, title?: number | null | undefined, image?: string | null | undefined, first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, username?: string | null | undefined } | null | undefined }> };

export type GetAllCourseManagementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCourseManagementsQuery = { __typename?: 'query_root', course_management: Array<{ __typename?: 'course_management', id: any, manager?: { __typename?: 'users', first_name?: string | null | undefined, middle_name?: string | null | undefined, last_name?: string | null | undefined, image?: string | null | undefined, id: number } | null | undefined, course?: { __typename?: 'courses', access_code?: string | null | undefined, available: boolean, background_color?: string | null | undefined, banner_color?: string | null | undefined, banner_image?: string | null | undefined, description?: string | null | undefined, duration?: string | null | undefined, id: any, instructor_id: number, level?: string | null | undefined, name: string, schedule?: string | null | undefined, instructor?: { __typename?: 'users', first_name?: string | null | undefined, middle_name?: string | null | undefined, last_name?: string | null | undefined, image?: string | null | undefined, id: number } | null | undefined, enrollments: Array<{ __typename?: 'course_enrollment', id: any, student?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, image?: string | null | undefined } | null | undefined }> } | null | undefined }> };

export type GetCourseManagementsQueryVariables = Exact<{
  course_id: Scalars['uuid'];
}>;


export type GetCourseManagementsQuery = { __typename?: 'query_root', course_management: Array<{ __typename?: 'course_management', id: any, manager?: { __typename?: 'users', first_name?: string | null | undefined, middle_name?: string | null | undefined, last_name?: string | null | undefined, image?: string | null | undefined, id: number } | null | undefined, course?: { __typename?: 'courses', access_code?: string | null | undefined, available: boolean, background_color?: string | null | undefined, banner_color?: string | null | undefined, banner_image?: string | null | undefined, description?: string | null | undefined, duration?: string | null | undefined, id: any, instructor_id: number, level?: string | null | undefined, name: string, schedule?: string | null | undefined, instructor?: { __typename?: 'users', first_name?: string | null | undefined, middle_name?: string | null | undefined, last_name?: string | null | undefined, image?: string | null | undefined, id: number } | null | undefined, enrollments: Array<{ __typename?: 'course_enrollment', id: any, student?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, image?: string | null | undefined } | null | undefined }> } | null | undefined }> };

export type GetOwnCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOwnCoursesQuery = { __typename?: 'query_root', courses: Array<{ __typename?: 'courses', access_code?: string | null | undefined, available: boolean, background_color?: string | null | undefined, banner_color?: string | null | undefined, banner_image?: string | null | undefined, description?: string | null | undefined, duration?: string | null | undefined, id: any, level?: string | null | undefined, instructor_id: number, name: string, enrollments: Array<{ __typename?: 'course_enrollment', id: any, student?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, middle_name?: string | null | undefined, image?: string | null | undefined } | null | undefined }> }> };

export type CreateAssignmentMutationVariables = Exact<{
  gradebook_item_id: Scalars['uuid'];
  assign_to?: Maybe<Scalars['jsonb']>;
  assessment_id: Scalars['uuid'];
  assessment_type: Scalars['String'];
  attempts_allowed: Scalars['Int'];
  attempts_grading: Scalars['String'];
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course_id: Scalars['uuid'];
  max_points: Scalars['Int'];
  scoring_type: Scalars['String'];
  status: Scalars['String'];
  submission_type: Scalars['String'];
  accommodations?: Maybe<Scalars['String']>;
  assignment_id: Scalars['uuid'];
  name: Scalars['String'];
  type: Scalars['String'];
  files?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type CreateAssignmentMutation = { __typename?: 'mutation_root', insert_gradebook_items_one?: { __typename?: 'gradebook_items', id: any } | null | undefined, insert_assignments_one?: { __typename?: 'assignments', id: any } | null | undefined };

export type EditAssignmentMutationVariables = Exact<{
  gradebook_item_id: Scalars['uuid'];
  assign_to?: Maybe<Scalars['jsonb']>;
  assessment_id: Scalars['uuid'];
  assessment_type: Scalars['String'];
  attempts_allowed: Scalars['Int'];
  attempts_grading: Scalars['String'];
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course_id: Scalars['uuid'];
  max_points: Scalars['Int'];
  scoring_type: Scalars['String'];
  status: Scalars['String'];
  submission_type: Scalars['String'];
  accommodations?: Maybe<Scalars['String']>;
  assignment_id: Scalars['uuid'];
  name: Scalars['String'];
  type: Scalars['String'];
  files?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type EditAssignmentMutation = { __typename?: 'mutation_root', update_gradebook_items_by_pk?: { __typename?: 'gradebook_items', id: any } | null | undefined, update_assignments_by_pk?: { __typename?: 'assignments', id: any } | null | undefined };

export type CreateTestMutationVariables = Exact<{
  time_limit: Scalars['Int'];
  settings: Scalars['jsonb'];
  gradebook_item_id: Scalars['uuid'];
  assign_to?: Maybe<Scalars['jsonb']>;
  assessment_id: Scalars['uuid'];
  assessment_type: Scalars['String'];
  attempts_allowed: Scalars['Int'];
  attempts_grading: Scalars['String'];
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course_id: Scalars['uuid'];
  max_points: Scalars['Int'];
  scoring_type: Scalars['String'];
  status: Scalars['String'];
  accommodations?: Maybe<Scalars['String']>;
  test_id: Scalars['uuid'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type CreateTestMutation = { __typename?: 'mutation_root', insert_gradebook_items_one?: { __typename?: 'gradebook_items', id: any } | null | undefined, insert_tests_one?: { __typename?: 'tests', id: any } | null | undefined };

export type EditTestMutationVariables = Exact<{
  time_limit: Scalars['Int'];
  settings: Scalars['jsonb'];
  gradebook_item_id: Scalars['uuid'];
  assign_to?: Maybe<Scalars['jsonb']>;
  assessment_id: Scalars['uuid'];
  assessment_type: Scalars['String'];
  attempts_allowed: Scalars['Int'];
  attempts_grading: Scalars['String'];
  available_from?: Maybe<Scalars['timestamp']>;
  available_until?: Maybe<Scalars['timestamp']>;
  course_id: Scalars['uuid'];
  max_points: Scalars['Int'];
  scoring_type: Scalars['String'];
  status: Scalars['String'];
  accommodations?: Maybe<Scalars['String']>;
  test_id: Scalars['uuid'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type EditTestMutation = { __typename?: 'mutation_root', update_gradebook_items_by_pk?: { __typename?: 'gradebook_items', id: any } | null | undefined, update_tests_by_pk?: { __typename?: 'tests', id: any } | null | undefined };

export type CreateAssessmentSubmissionMutationVariables = Exact<{
  content: Scalars['jsonb'];
  group_id?: Maybe<Scalars['uuid']>;
  student_id: Scalars['Int'];
  gradebook_item_id: Scalars['uuid'];
}>;


export type CreateAssessmentSubmissionMutation = { __typename?: 'mutation_root', insert_gradebook_item_submissions_one?: { __typename?: 'gradebook_item_submissions', id: any } | null | undefined };

export type CreateQuestionMutationVariables = Exact<{
  answer_keys: Scalars['jsonb'];
  content: Scalars['jsonb'];
  course_id: Scalars['uuid'];
  type: Scalars['String'];
  order: Scalars['Int'];
  question_id: Scalars['uuid'];
  test_id: Scalars['uuid'];
}>;


export type CreateQuestionMutation = { __typename?: 'mutation_root', insert_questions_one?: { __typename?: 'questions', id: any } | null | undefined, insert_test_questions_one?: { __typename?: 'test_questions', id: any } | null | undefined };

export type UpdateTestQuestionOrderMutationVariables = Exact<{
  objects: Array<Test_Questions_Insert_Input> | Test_Questions_Insert_Input;
}>;


export type UpdateTestQuestionOrderMutation = { __typename?: 'mutation_root', insert_test_questions?: { __typename?: 'test_questions_mutation_response', affected_rows: number } | null | undefined };

export type UpdateQuestionContentMutationVariables = Exact<{
  id: Scalars['uuid'];
  content: Scalars['jsonb'];
  answer_keys: Scalars['jsonb'];
}>;


export type UpdateQuestionContentMutation = { __typename?: 'mutation_root', update_questions_by_pk?: { __typename?: 'questions', id: any } | null | undefined };

export type DeleteQuestionMutationVariables = Exact<{
  test_question_id: Scalars['uuid'];
  question_id: Scalars['uuid'];
}>;


export type DeleteQuestionMutation = { __typename?: 'mutation_root', delete_test_questions_by_pk?: { __typename?: 'test_questions', id: any } | null | undefined, delete_questions_by_pk?: { __typename?: 'questions', id: any } | null | undefined };

export type RemoveTestQuestionMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type RemoveTestQuestionMutation = { __typename?: 'mutation_root', delete_test_questions_by_pk?: { __typename?: 'test_questions', id: any } | null | undefined };

export type GetGradebookItemsQueryVariables = Exact<{
  course_id: Scalars['uuid'];
  student_id: Scalars['Int'];
  is_assigned: Scalars['jsonb'];
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
}>;


export type GetGradebookItemsQuery = { __typename?: 'query_root', gradebook_items: Array<{ __typename?: 'gradebook_items', accommodations?: string | null | undefined, created_at: any, assessment_id: any, assessment_type: string, attempts_allowed: number, attempts_grading: string, available_from?: any | null | undefined, available_until?: any | null | undefined, assign_to: any, course_id: any, grading_rubric_id?: any | null | undefined, id: any, max_points?: number | null | undefined, scoring_type: string, status: string, submission_type: string, assignment?: { __typename?: 'assignments', description: string, files?: string | null | undefined, gradebook_item_id: any, id: any, name: string, type: string } | null | undefined, test?: { __typename?: 'tests', description?: string | null | undefined, gradebook_item_id: any, id: any, time_limit: number, settings?: any | null | undefined, name: string } | null | undefined, submissions_aggregate: { __typename?: 'gradebook_item_submissions_aggregate', aggregate?: { __typename?: 'gradebook_item_submissions_aggregate_fields', count: number } | null | undefined }, total_submissions: { __typename?: 'gradebook_item_submissions_aggregate', aggregate?: { __typename?: 'gradebook_item_submissions_aggregate_fields', count: number } | null | undefined } }> };

export type GetAssignmentQueryVariables = Exact<{
  student_id: Scalars['Int'];
  assignment_id: Scalars['uuid'];
  where?: Maybe<Gradebook_Item_Submissions_Bool_Exp>;
}>;


export type GetAssignmentQuery = { __typename?: 'query_root', assignments: Array<{ __typename?: 'assignments', description: string, files?: string | null | undefined, gradebook_item_id: any, id: any, name: string, type: string, gradebook_item?: { __typename?: 'gradebook_items', id: any, created_at: any, accommodations?: string | null | undefined, assessment_id: any, assessment_type: string, attempts_allowed: number, attempts_grading: string, available_from?: any | null | undefined, available_until?: any | null | undefined, course_id: any, assign_to: any, max_points?: number | null | undefined, grading_rubric_id?: any | null | undefined, scoring_type: string, status: string, submission_type: string, submissions: Array<{ __typename?: 'gradebook_item_submissions', created_at: any, content?: any | null | undefined, group_id?: any | null | undefined, id: any, student_id: number, student?: { __typename?: 'users', id: number, image?: string | null | undefined, first_name?: string | null | undefined, middle_name?: string | null | undefined, last_name?: string | null | undefined } | null | undefined }>, submissions_aggregate: { __typename?: 'gradebook_item_submissions_aggregate', aggregate?: { __typename?: 'gradebook_item_submissions_aggregate_fields', count: number } | null | undefined }, grade_items: Array<{ __typename?: 'grade_items', points: number, status: string, student_id: number }> } | null | undefined }> };

export type GetTestQuestionsQueryVariables = Exact<{
  test_id: Scalars['uuid'];
}>;


export type GetTestQuestionsQuery = { __typename?: 'query_root', test_questions: Array<{ __typename?: 'test_questions', id: any, order: number, question_id: any, test_id: any, question?: { __typename?: 'questions', id: any, type: string, course_id: any, content: any, answer_keys: any } | null | undefined }> };

export type GetTestQuestionsSubscriptionSubscriptionVariables = Exact<{
  test_id: Scalars['uuid'];
}>;


export type GetTestQuestionsSubscriptionSubscription = { __typename?: 'subscription_root', test_questions: Array<{ __typename?: 'test_questions', id: any, order: number, question_id: any, test_id: any, question?: { __typename?: 'questions', id: any, type: string, course_id: any, content: any, answer_keys: any } | null | undefined }> };

export type CreateModuleMutationVariables = Exact<{
  content: Scalars['String'];
  order: Scalars['Int'];
  unit_id: Scalars['uuid'];
  type: Scalars['String'];
  folder_id?: Maybe<Scalars['uuid']>;
  status: Scalars['String'];
}>;


export type CreateModuleMutation = { __typename?: 'mutation_root', insert_modules?: { __typename?: 'modules_mutation_response', affected_rows: number } | null | undefined };

export type GetModulesQueryVariables = Exact<{
  unit_id: Scalars['uuid'];
}>;


export type GetModulesQuery = { __typename?: 'query_root', modules: Array<{ __typename?: 'modules', content: string, id: any, order: number, available_from?: any | null | undefined, status?: string | null | undefined, type: string, unit_id: any, folder_id?: any | null | undefined }> };

export type GetModuleByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetModuleByIdQuery = { __typename?: 'query_root', modules: Array<{ __typename?: 'modules', content: string, id: any, order: number, available_from?: any | null | undefined, status?: string | null | undefined, type: string, unit_id: any, folder_id?: any | null | undefined }> };

export type UpdateModuleOrderMutationVariables = Exact<{
  objects: Array<Modules_Insert_Input> | Modules_Insert_Input;
}>;


export type UpdateModuleOrderMutation = { __typename?: 'mutation_root', insert_modules?: { __typename?: 'modules_mutation_response', affected_rows: number } | null | undefined };

export type MoveModuleMutationVariables = Exact<{
  id: Scalars['uuid'];
  order: Scalars['Int'];
  unit_id: Scalars['uuid'];
}>;


export type MoveModuleMutation = { __typename?: 'mutation_root', update_modules_by_pk?: { __typename?: 'modules', id: any } | null | undefined };

export type ChangeModuleFolderMutationVariables = Exact<{
  id: Scalars['uuid'];
  folder_id?: Maybe<Scalars['uuid']>;
}>;


export type ChangeModuleFolderMutation = { __typename?: 'mutation_root', update_modules_by_pk?: { __typename?: 'modules', id: any } | null | undefined };

export type DeleteModuleMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteModuleMutation = { __typename?: 'mutation_root', delete_modules_by_pk?: { __typename?: 'modules', id: any } | null | undefined };

export type UpdateModuleMutationVariables = Exact<{
  id: Scalars['uuid'];
  content: Scalars['String'];
  status: Scalars['String'];
  available_from: Scalars['timestamp'];
  folder_id?: Maybe<Scalars['uuid']>;
}>;


export type UpdateModuleMutation = { __typename?: 'mutation_root', update_modules_by_pk?: { __typename?: 'modules', id: any } | null | undefined };

export type UpdateProspectiveUserEmailMutationVariables = Exact<{
  student_id: Scalars['String'];
  email: Scalars['String'];
  registration_step: Scalars['Int'];
}>;


export type UpdateProspectiveUserEmailMutation = { __typename?: 'mutation_root', update_prospective_users?: { __typename?: 'prospective_users_mutation_response', affected_rows: number } | null | undefined };

export type ActivateProspectiveUserMutationVariables = Exact<{
  student_id: Scalars['String'];
}>;


export type ActivateProspectiveUserMutation = { __typename?: 'mutation_root', update_prospective_users?: { __typename?: 'prospective_users_mutation_response', affected_rows: number } | null | undefined };

export type GetProspectiveUserByStudentIdAndCodeQueryVariables = Exact<{
  student_id: Scalars['String'];
  code: Scalars['String'];
}>;


export type GetProspectiveUserByStudentIdAndCodeQuery = { __typename?: 'query_root', prospective_users: Array<{ __typename?: 'prospective_users', id: number, registration_step: number, email?: string | null | undefined, code?: string | null | undefined, first_name: string, is_active: boolean, last_name: string, middle_name?: string | null | undefined, role?: string | null | undefined, school_id: number, student_id: string, username: string, school?: { __typename?: 'schools', short_name: string } | null | undefined }> };

export type GetProspectiveUserByStudentIdQueryVariables = Exact<{
  student_id: Scalars['String'];
}>;


export type GetProspectiveUserByStudentIdQuery = { __typename?: 'query_root', prospective_users: Array<{ __typename?: 'prospective_users', code?: string | null | undefined, email?: string | null | undefined, first_name: string, id: number, is_active: boolean, last_name: string, middle_name?: string | null | undefined, school_id: number, student_id: string, username: string, role?: string | null | undefined }> };

export type GetSchoolByShortNameQueryVariables = Exact<{
  short_name: Scalars['String'];
}>;


export type GetSchoolByShortNameQuery = { __typename?: 'query_root', schools: Array<{ __typename?: 'schools', id: number, is_active: boolean, name: string, short_name: string, type: number }> };

export type CreateUnitMutationVariables = Exact<{
  status: Scalars['String'];
  course_id: Scalars['uuid'];
  title?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  order: Scalars['Int'];
  available_from?: Maybe<Scalars['timestamp']>;
  type: Scalars['String'];
}>;


export type CreateUnitMutation = { __typename?: 'mutation_root', insert_units?: { __typename?: 'units_mutation_response', affected_rows: number } | null | undefined };

export type ArchiveUnitMutationVariables = Exact<{
  id: Scalars['uuid'];
  archived: Scalars['Boolean'];
}>;


export type ArchiveUnitMutation = { __typename?: 'mutation_root', update_units_by_pk?: { __typename?: 'units', id: any } | null | undefined };

export type UpdateUnitOrderMutationVariables = Exact<{
  objects: Array<Units_Insert_Input> | Units_Insert_Input;
}>;


export type UpdateUnitOrderMutation = { __typename?: 'mutation_root', insert_units?: { __typename?: 'units_mutation_response', affected_rows: number } | null | undefined };

export type UnarchiveUnitMutationVariables = Exact<{
  id: Scalars['uuid'];
  order: Scalars['Int'];
}>;


export type UnarchiveUnitMutation = { __typename?: 'mutation_root', update_units_by_pk?: { __typename?: 'units', id: any } | null | undefined };

export type UpdateUnitDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  type: Scalars['String'];
  available_from?: Maybe<Scalars['timestamp']>;
  number: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  status: Scalars['String'];
}>;


export type UpdateUnitDetailsMutation = { __typename?: 'mutation_root', update_units_by_pk?: { __typename?: 'units', id: any } | null | undefined };

export type AddAssessmentToUnitMutationVariables = Exact<{
  assessment_id: Scalars['uuid'];
  type: Scalars['String'];
  unit_id: Scalars['uuid'];
}>;


export type AddAssessmentToUnitMutation = { __typename?: 'mutation_root', insert_unit_assessments_one?: { __typename?: 'unit_assessments', id: any } | null | undefined };

export type RemoveAssessmentFromUnitMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type RemoveAssessmentFromUnitMutation = { __typename?: 'mutation_root', delete_unit_assessments_by_pk?: { __typename?: 'unit_assessments', id: any } | null | undefined };

export type ChangeUnitOrderMutationVariables = Exact<{
  id: Scalars['uuid'];
  order: Scalars['Int'];
}>;


export type ChangeUnitOrderMutation = { __typename?: 'mutation_root', update_units_by_pk?: { __typename?: 'units', id: any } | null | undefined };

export type GetUnitByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
  with_gradebook_items: Scalars['Boolean'];
}>;


export type GetUnitByIdQuery = { __typename?: 'query_root', units: Array<{ __typename?: 'units', archived: boolean, status: string, course_id: any, id: any, number: string, order: number, available_from?: any | null | undefined, title?: string | null | undefined, type: string, assessments: Array<{ __typename?: 'unit_assessments', id: any, assignment?: { __typename?: 'assignments', name: string, id: any, gradebook_item?: { __typename?: 'gradebook_items', id: any, status: string, assign_to: any, available_from?: any | null | undefined, submissions_aggregate: { __typename?: 'gradebook_item_submissions_aggregate', aggregate?: { __typename?: 'gradebook_item_submissions_aggregate_fields', count: number } | null | undefined } } | null | undefined } | null | undefined, test?: { __typename?: 'tests', name: string, id: any, gradebook_item?: { __typename?: 'gradebook_items', id: any, status: string, assign_to: any, available_from?: any | null | undefined, submissions_aggregate: { __typename?: 'gradebook_item_submissions_aggregate', aggregate?: { __typename?: 'gradebook_item_submissions_aggregate_fields', count: number } | null | undefined } } | null | undefined } | null | undefined }>, course?: { __typename?: 'courses', gradebook_items?: Array<{ __typename?: 'gradebook_items', id: any, available_from?: any | null | undefined, status: string, assign_to: any, assessment_type: string, assignment?: { __typename?: 'assignments', name: string, id: any } | null | undefined, test?: { __typename?: 'tests', name: string, id: any } | null | undefined }> } | null | undefined }> };

export type GetUnitsQueryVariables = Exact<{
  course_id: Scalars['uuid'];
}>;


export type GetUnitsQuery = { __typename?: 'query_root', units: Array<{ __typename?: 'units', archived: boolean, status: string, course_id: any, id: any, title?: string | null | undefined, number: string, order: number, available_from?: any | null | undefined, type: string }> };

export type UnarchivedUnitCountQueryVariables = Exact<{
  course_id: Scalars['uuid'];
}>;


export type UnarchivedUnitCountQuery = { __typename?: 'query_root', units_aggregate: { __typename?: 'units_aggregate', aggregate?: { __typename?: 'units_aggregate_fields', count: number } | null | undefined } };

export type GetArchivedUnitsQueryVariables = Exact<{
  course_id: Scalars['uuid'];
}>;


export type GetArchivedUnitsQuery = { __typename?: 'query_root', units: Array<{ __typename?: 'units', archived: boolean, status: string, course_id: any, id: any, title?: string | null | undefined, number: string, order: number, available_from?: any | null | undefined, type: string }> };

export type UpdateNewUserMutationVariables = Exact<{
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  middle_name?: Maybe<Scalars['String']>;
  school_id: Scalars['Int'];
  username: Scalars['String'];
  student_id: Scalars['String'];
}>;


export type UpdateNewUserMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', first_name?: string | null | undefined, middle_name?: string | null | undefined, last_name?: string | null | undefined, student_id?: string | null | undefined, username?: string | null | undefined, school_id?: number | null | undefined, email: string, name?: string | null | undefined, image?: string | null | undefined, id: number, role?: string | null | undefined }> } | null | undefined };

export type BaseUserFragment = { __typename?: 'users', id: number, title?: number | null | undefined, created_at: any, email: string, email_verified?: boolean | null | undefined, first_name?: string | null | undefined, image?: string | null | undefined, is_active: boolean, last_name?: string | null | undefined, middle_name?: string | null | undefined, name?: string | null | undefined, role?: string | null | undefined, school_id?: number | null | undefined, student_id?: string | null | undefined, updated_at: any, username?: string | null | undefined, school?: { __typename?: 'schools', id: number, is_active: boolean, name: string, short_name: string, type: number } | null | undefined, group_membership: Array<{ __typename?: 'group_membership', group_id: any, id: any, group?: { __typename?: 'groups', id: any, name: string, course_id: any, membership: Array<{ __typename?: 'group_membership', student?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, id: number, middle_name?: string | null | undefined } | null | undefined }> } | null | undefined }> };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, title?: number | null | undefined, created_at: any, email: string, email_verified?: boolean | null | undefined, first_name?: string | null | undefined, image?: string | null | undefined, is_active: boolean, last_name?: string | null | undefined, middle_name?: string | null | undefined, name?: string | null | undefined, role?: string | null | undefined, school_id?: number | null | undefined, student_id?: string | null | undefined, updated_at: any, username?: string | null | undefined, school?: { __typename?: 'schools', id: number, is_active: boolean, name: string, short_name: string, type: number } | null | undefined, group_membership: Array<{ __typename?: 'group_membership', group_id: any, id: any, group?: { __typename?: 'groups', id: any, name: string, course_id: any, membership: Array<{ __typename?: 'group_membership', student?: { __typename?: 'users', first_name?: string | null | undefined, last_name?: string | null | undefined, id: number, middle_name?: string | null | undefined } | null | undefined }> } | null | undefined }> }> };

export type GetUserSettingsQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserSettingsQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', date_format?: string | null | undefined, hour_format?: string | null | undefined }> };

export const OtherUserFragmentDoc = gql`
    fragment otherUser on users {
  id
  title
  image
  first_name
  last_name
  middle_name
  username
}
    `;
export const BaseUserFragmentDoc = gql`
    fragment baseUser on users {
  id
  title
  created_at
  email
  email_verified
  first_name
  image
  is_active
  last_name
  middle_name
  name
  role
  school_id
  student_id
  updated_at
  username
  school {
    id
    is_active
    name
    short_name
    type
  }
  group_membership {
    group_id
    id
    group {
      id
      name
      course_id
      membership {
        student {
          first_name
          last_name
          id
          middle_name
        }
      }
    }
  }
}
    `;
export const CreateAnnouncementDocument = gql`
    mutation CreateAnnouncement($author_id: Int!, $course_id: uuid!, $message: String!, $publish_on: timestamp, $is_scheduled: Boolean!, $title: String!) {
  insert_announcements_one(
    object: {author_id: $author_id, course_id: $course_id, message: $message, publish_on: $publish_on, is_scheduled: $is_scheduled, title: $title}
  ) {
    author_id
    course_id
    created_at
    id
    message
    publish_on
    is_scheduled
    title
  }
}
    `;
export type CreateAnnouncementMutationFn = Apollo.MutationFunction<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;
export type CreateAnnouncementMutationResult = Apollo.MutationResult<CreateAnnouncementMutation>;
export type CreateAnnouncementMutationOptions = Apollo.BaseMutationOptions<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;
export const UpdateAnnouncementDocument = gql`
    mutation UpdateAnnouncement($id: uuid!, $is_scheduled: Boolean, $message: String!, $publish_on: timestamp, $title: String!) {
  update_announcements(
    where: {id: {_eq: $id}}
    _set: {message: $message, title: $title, publish_on: $publish_on, is_scheduled: $is_scheduled}
  ) {
    affected_rows
  }
}
    `;
export type UpdateAnnouncementMutationFn = Apollo.MutationFunction<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>;
export type UpdateAnnouncementMutationResult = Apollo.MutationResult<UpdateAnnouncementMutation>;
export type UpdateAnnouncementMutationOptions = Apollo.BaseMutationOptions<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>;
export const DeleteAnnouncementDocument = gql`
    mutation DeleteAnnouncement($id: uuid!) {
  delete_announcements_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteAnnouncementMutationFn = Apollo.MutationFunction<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;
export type DeleteAnnouncementMutationResult = Apollo.MutationResult<DeleteAnnouncementMutation>;
export type DeleteAnnouncementMutationOptions = Apollo.BaseMutationOptions<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;
export const GetAnnouncementsDocument = gql`
    query GetAnnouncements($course_id: uuid!) {
  announcements(
    where: {course_id: {_eq: $course_id}}
    order_by: {publish_on: desc}
  ) {
    id
    is_scheduled
    publish_on
    title
    message
    created_at
    course_id
    author_id
    author {
      id
      first_name
      last_name
      middle_name
      image
    }
  }
}
    `;
export type GetAnnouncementsQueryResult = Apollo.QueryResult<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>;
export const UpdateCourseBannerColorDocument = gql`
    mutation UpdateCourseBannerColor($id: uuid!, $banner_color: String!) {
  update_courses(where: {id: {_eq: $id}}, _set: {banner_color: $banner_color}) {
    affected_rows
    returning {
      banner_color
    }
  }
}
    `;
export type UpdateCourseBannerColorMutationFn = Apollo.MutationFunction<UpdateCourseBannerColorMutation, UpdateCourseBannerColorMutationVariables>;
export type UpdateCourseBannerColorMutationResult = Apollo.MutationResult<UpdateCourseBannerColorMutation>;
export type UpdateCourseBannerColorMutationOptions = Apollo.BaseMutationOptions<UpdateCourseBannerColorMutation, UpdateCourseBannerColorMutationVariables>;
export const UpdateCourseBackgroundColorDocument = gql`
    mutation UpdateCourseBackgroundColor($id: uuid!, $background_color: String!) {
  update_courses(
    where: {id: {_eq: $id}}
    _set: {background_color: $background_color}
  ) {
    affected_rows
    returning {
      background_color
    }
  }
}
    `;
export type UpdateCourseBackgroundColorMutationFn = Apollo.MutationFunction<UpdateCourseBackgroundColorMutation, UpdateCourseBackgroundColorMutationVariables>;
export type UpdateCourseBackgroundColorMutationResult = Apollo.MutationResult<UpdateCourseBackgroundColorMutation>;
export type UpdateCourseBackgroundColorMutationOptions = Apollo.BaseMutationOptions<UpdateCourseBackgroundColorMutation, UpdateCourseBackgroundColorMutationVariables>;
export const UpdateCourseAvailabilityDocument = gql`
    mutation UpdateCourseAvailability($id: uuid!, $available: Boolean!) {
  update_courses(where: {id: {_eq: $id}}, _set: {available: $available}) {
    affected_rows
    returning {
      available
    }
  }
}
    `;
export type UpdateCourseAvailabilityMutationFn = Apollo.MutationFunction<UpdateCourseAvailabilityMutation, UpdateCourseAvailabilityMutationVariables>;
export type UpdateCourseAvailabilityMutationResult = Apollo.MutationResult<UpdateCourseAvailabilityMutation>;
export type UpdateCourseAvailabilityMutationOptions = Apollo.BaseMutationOptions<UpdateCourseAvailabilityMutation, UpdateCourseAvailabilityMutationVariables>;
export const UpdateCourseCodeDocument = gql`
    mutation UpdateCourseCode($id: uuid!, $code: String) {
  update_courses(where: {id: {_eq: $id}}, _set: {access_code: $code}) {
    affected_rows
    returning {
      access_code
    }
  }
}
    `;
export type UpdateCourseCodeMutationFn = Apollo.MutationFunction<UpdateCourseCodeMutation, UpdateCourseCodeMutationVariables>;
export type UpdateCourseCodeMutationResult = Apollo.MutationResult<UpdateCourseCodeMutation>;
export type UpdateCourseCodeMutationOptions = Apollo.BaseMutationOptions<UpdateCourseCodeMutation, UpdateCourseCodeMutationVariables>;
export const UpdateCourseDurationDocument = gql`
    mutation UpdateCourseDuration($id: uuid!, $duration: String) {
  update_courses(where: {id: {_eq: $id}}, _set: {duration: $duration}) {
    affected_rows
    returning {
      duration
    }
  }
}
    `;
export type UpdateCourseDurationMutationFn = Apollo.MutationFunction<UpdateCourseDurationMutation, UpdateCourseDurationMutationVariables>;
export type UpdateCourseDurationMutationResult = Apollo.MutationResult<UpdateCourseDurationMutation>;
export type UpdateCourseDurationMutationOptions = Apollo.BaseMutationOptions<UpdateCourseDurationMutation, UpdateCourseDurationMutationVariables>;
export const UpdateCourseDetailsDocument = gql`
    mutation UpdateCourseDetails($id: uuid!, $description: String, $name: String!, $level: String) {
  update_courses(
    where: {id: {_eq: $id}}
    _set: {description: $description, name: $name, level: $level}
  ) {
    affected_rows
    returning {
      description
      name
      level
    }
  }
}
    `;
export type UpdateCourseDetailsMutationFn = Apollo.MutationFunction<UpdateCourseDetailsMutation, UpdateCourseDetailsMutationVariables>;
export type UpdateCourseDetailsMutationResult = Apollo.MutationResult<UpdateCourseDetailsMutation>;
export type UpdateCourseDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateCourseDetailsMutation, UpdateCourseDetailsMutationVariables>;
export const GetCourseByIdDocument = gql`
    query GetCourseById($id: uuid!, $with_details: Boolean!) {
  courses(order_by: {name: asc}, limit: 1, where: {id: {_eq: $id}}) {
    access_code
    available
    banner_color
    background_color
    banner_image
    description
    duration
    schedule
    id
    instructor {
      ...otherUser
    }
    instructor_id
    level
    name
    enrollments_aggregate @include(if: $with_details) {
      aggregate {
        count
      }
    }
    management @include(if: $with_details) {
      course_id
      id
      manager_id
      manager {
        ...otherUser
      }
    }
    enrollments @include(if: $with_details) {
      authorized
      authorized_at
      course_id
      created_at
      id
      student_id
      student {
        ...otherUser
      }
    }
    groups {
      id
      name
      membership_aggregate {
        aggregate {
          count
        }
      }
      membership {
        student {
          ...otherUser
        }
        id
        group_id
        student_id
      }
    }
  }
}
    ${OtherUserFragmentDoc}`;
export type GetCourseByIdQueryResult = Apollo.QueryResult<GetCourseByIdQuery, GetCourseByIdQueryVariables>;
export const GetAllCourseEnrollmentsDocument = gql`
    query GetAllCourseEnrollments {
  course_enrollment {
    id
    course_id
    student_id
    authorized
    created_at
    authorized_at
    course {
      name
      access_code
      available
      background_color
      banner_color
      banner_image
      description
      duration
      id
      schedule
      instructor_id
      level
      instructor {
        first_name
        middle_name
        last_name
        image
      }
    }
  }
}
    `;
export type GetAllCourseEnrollmentsQueryResult = Apollo.QueryResult<GetAllCourseEnrollmentsQuery, GetAllCourseEnrollmentsQueryVariables>;
export const GetCourseEnrollmentsDocument = gql`
    query GetCourseEnrollments($course_id: uuid!) {
  course_enrollment(where: {course_id: {_eq: $course_id}}) {
    id
    course_id
    student_id
    authorized
    created_at
    authorized_at
    student {
      id
      title
      image
      first_name
      last_name
      middle_name
      username
    }
  }
}
    `;
export type GetCourseEnrollmentsQueryResult = Apollo.QueryResult<GetCourseEnrollmentsQuery, GetCourseEnrollmentsQueryVariables>;
export const GetValidCourseEnrollmentsDocument = gql`
    query GetValidCourseEnrollments($course_id: uuid!) {
  course_enrollment(
    where: {_and: {course_id: {_eq: $course_id}, authorized: {_eq: true}}}
  ) {
    id
    course_id
    student_id
    authorized
    created_at
    authorized_at
    student {
      id
      title
      image
      first_name
      last_name
      middle_name
      username
    }
  }
}
    `;
export type GetValidCourseEnrollmentsQueryResult = Apollo.QueryResult<GetValidCourseEnrollmentsQuery, GetValidCourseEnrollmentsQueryVariables>;
export const GetAllCourseManagementsDocument = gql`
    query GetAllCourseManagements {
  course_management {
    id
    manager {
      first_name
      middle_name
      last_name
      image
      id
    }
    course {
      access_code
      available
      background_color
      banner_color
      banner_image
      description
      duration
      id
      instructor_id
      level
      name
      schedule
      instructor {
        first_name
        middle_name
        last_name
        image
        id
      }
      enrollments {
        id
        student {
          first_name
          last_name
          middle_name
          image
        }
      }
    }
  }
}
    `;
export type GetAllCourseManagementsQueryResult = Apollo.QueryResult<GetAllCourseManagementsQuery, GetAllCourseManagementsQueryVariables>;
export const GetCourseManagementsDocument = gql`
    query GetCourseManagements($course_id: uuid!) {
  course_management(where: {course_id: {_eq: $course_id}}) {
    id
    manager {
      first_name
      middle_name
      last_name
      image
      id
    }
    course {
      access_code
      available
      background_color
      banner_color
      banner_image
      description
      duration
      id
      instructor_id
      level
      name
      schedule
      instructor {
        first_name
        middle_name
        last_name
        image
        id
      }
      enrollments {
        id
        student {
          first_name
          last_name
          middle_name
          image
        }
      }
    }
  }
}
    `;
export type GetCourseManagementsQueryResult = Apollo.QueryResult<GetCourseManagementsQuery, GetCourseManagementsQueryVariables>;
export const GetOwnCoursesDocument = gql`
    query GetOwnCourses {
  courses(order_by: {name: asc}) {
    access_code
    available
    background_color
    banner_color
    banner_image
    description
    duration
    id
    level
    instructor_id
    name
    enrollments {
      id
      student {
        first_name
        last_name
        middle_name
        image
      }
    }
  }
}
    `;
export type GetOwnCoursesQueryResult = Apollo.QueryResult<GetOwnCoursesQuery, GetOwnCoursesQueryVariables>;
export const CreateAssignmentDocument = gql`
    mutation CreateAssignment($gradebook_item_id: uuid!, $assign_to: jsonb, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $submission_type: String!, $accommodations: String, $assignment_id: uuid!, $name: String!, $type: String!, $files: String, $description: String) {
  insert_gradebook_items_one(
    object: {id: $gradebook_item_id, assign_to: $assign_to, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, submission_type: $submission_type, accommodations: $accommodations}
  ) {
    id
  }
  insert_assignments_one(
    object: {id: $assignment_id, name: $name, type: $type, gradebook_item_id: $gradebook_item_id, files: $files, description: $description}
  ) {
    id
  }
}
    `;
export type CreateAssignmentMutationFn = Apollo.MutationFunction<CreateAssignmentMutation, CreateAssignmentMutationVariables>;
export type CreateAssignmentMutationResult = Apollo.MutationResult<CreateAssignmentMutation>;
export type CreateAssignmentMutationOptions = Apollo.BaseMutationOptions<CreateAssignmentMutation, CreateAssignmentMutationVariables>;
export const EditAssignmentDocument = gql`
    mutation EditAssignment($gradebook_item_id: uuid!, $assign_to: jsonb, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $submission_type: String!, $accommodations: String, $assignment_id: uuid!, $name: String!, $type: String!, $files: String, $description: String) {
  update_gradebook_items_by_pk(
    _set: {id: $gradebook_item_id, assign_to: $assign_to, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, submission_type: $submission_type, accommodations: $accommodations}
    pk_columns: {id: $gradebook_item_id}
  ) {
    id
  }
  update_assignments_by_pk(
    _set: {id: $assignment_id, name: $name, type: $type, gradebook_item_id: $gradebook_item_id, files: $files, description: $description}
    pk_columns: {id: $assessment_id}
  ) {
    id
  }
}
    `;
export type EditAssignmentMutationFn = Apollo.MutationFunction<EditAssignmentMutation, EditAssignmentMutationVariables>;
export type EditAssignmentMutationResult = Apollo.MutationResult<EditAssignmentMutation>;
export type EditAssignmentMutationOptions = Apollo.BaseMutationOptions<EditAssignmentMutation, EditAssignmentMutationVariables>;
export const CreateTestDocument = gql`
    mutation CreateTest($time_limit: Int!, $settings: jsonb!, $gradebook_item_id: uuid!, $assign_to: jsonb, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $accommodations: String, $test_id: uuid!, $name: String!, $description: String) {
  insert_gradebook_items_one(
    object: {id: $gradebook_item_id, assign_to: $assign_to, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, accommodations: $accommodations}
  ) {
    id
  }
  insert_tests_one(
    object: {id: $test_id, settings: $settings, time_limit: $time_limit, name: $name, gradebook_item_id: $gradebook_item_id, description: $description}
  ) {
    id
  }
}
    `;
export type CreateTestMutationFn = Apollo.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;
export type CreateTestMutationResult = Apollo.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = Apollo.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;
export const EditTestDocument = gql`
    mutation EditTest($time_limit: Int!, $settings: jsonb!, $gradebook_item_id: uuid!, $assign_to: jsonb, $assessment_id: uuid!, $assessment_type: String!, $attempts_allowed: Int!, $attempts_grading: String!, $available_from: timestamp, $available_until: timestamp, $course_id: uuid!, $max_points: Int!, $scoring_type: String!, $status: String!, $accommodations: String, $test_id: uuid!, $name: String!, $description: String) {
  update_gradebook_items_by_pk(
    _set: {id: $gradebook_item_id, assign_to: $assign_to, assessment_id: $assessment_id, assessment_type: $assessment_type, attempts_allowed: $attempts_allowed, attempts_grading: $attempts_grading, available_from: $available_from, available_until: $available_until, course_id: $course_id, max_points: $max_points, status: $status, scoring_type: $scoring_type, accommodations: $accommodations}
    pk_columns: {id: $gradebook_item_id}
  ) {
    id
  }
  update_tests_by_pk(
    _set: {id: $test_id, settings: $settings, time_limit: $time_limit, name: $name, gradebook_item_id: $gradebook_item_id, description: $description}
    pk_columns: {id: $assessment_id}
  ) {
    id
  }
}
    `;
export type EditTestMutationFn = Apollo.MutationFunction<EditTestMutation, EditTestMutationVariables>;
export type EditTestMutationResult = Apollo.MutationResult<EditTestMutation>;
export type EditTestMutationOptions = Apollo.BaseMutationOptions<EditTestMutation, EditTestMutationVariables>;
export const CreateAssessmentSubmissionDocument = gql`
    mutation CreateAssessmentSubmission($content: jsonb!, $group_id: uuid, $student_id: Int!, $gradebook_item_id: uuid!) {
  insert_gradebook_item_submissions_one(
    object: {content: $content, group_id: $group_id, student_id: $student_id, gradebook_item_id: $gradebook_item_id}
  ) {
    id
  }
}
    `;
export type CreateAssessmentSubmissionMutationFn = Apollo.MutationFunction<CreateAssessmentSubmissionMutation, CreateAssessmentSubmissionMutationVariables>;
export type CreateAssessmentSubmissionMutationResult = Apollo.MutationResult<CreateAssessmentSubmissionMutation>;
export type CreateAssessmentSubmissionMutationOptions = Apollo.BaseMutationOptions<CreateAssessmentSubmissionMutation, CreateAssessmentSubmissionMutationVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($answer_keys: jsonb!, $content: jsonb!, $course_id: uuid!, $type: String!, $order: Int!, $question_id: uuid!, $test_id: uuid!) {
  insert_questions_one(
    object: {answer_keys: $answer_keys, content: $content, course_id: $course_id, type: $type, id: $question_id}
  ) {
    id
  }
  insert_test_questions_one(
    object: {order: $order, question_id: $question_id, test_id: $test_id}
  ) {
    id
  }
}
    `;
export type CreateQuestionMutationFn = Apollo.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const UpdateTestQuestionOrderDocument = gql`
    mutation UpdateTestQuestionOrder($objects: [test_questions_insert_input!]!) {
  insert_test_questions(
    objects: $objects
    on_conflict: {constraint: test_questions_pkey, update_columns: order}
  ) {
    affected_rows
  }
}
    `;
export type UpdateTestQuestionOrderMutationFn = Apollo.MutationFunction<UpdateTestQuestionOrderMutation, UpdateTestQuestionOrderMutationVariables>;
export type UpdateTestQuestionOrderMutationResult = Apollo.MutationResult<UpdateTestQuestionOrderMutation>;
export type UpdateTestQuestionOrderMutationOptions = Apollo.BaseMutationOptions<UpdateTestQuestionOrderMutation, UpdateTestQuestionOrderMutationVariables>;
export const UpdateQuestionContentDocument = gql`
    mutation UpdateQuestionContent($id: uuid!, $content: jsonb!, $answer_keys: jsonb!) {
  update_questions_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, answer_keys: $answer_keys}
  ) {
    id
  }
}
    `;
export type UpdateQuestionContentMutationFn = Apollo.MutationFunction<UpdateQuestionContentMutation, UpdateQuestionContentMutationVariables>;
export type UpdateQuestionContentMutationResult = Apollo.MutationResult<UpdateQuestionContentMutation>;
export type UpdateQuestionContentMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionContentMutation, UpdateQuestionContentMutationVariables>;
export const DeleteQuestionDocument = gql`
    mutation DeleteQuestion($test_question_id: uuid!, $question_id: uuid!) {
  delete_test_questions_by_pk(id: $test_question_id) {
    id
  }
  delete_questions_by_pk(id: $question_id) {
    id
  }
}
    `;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const RemoveTestQuestionDocument = gql`
    mutation RemoveTestQuestion($id: uuid!) {
  delete_test_questions_by_pk(id: $id) {
    id
  }
}
    `;
export type RemoveTestQuestionMutationFn = Apollo.MutationFunction<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables>;
export type RemoveTestQuestionMutationResult = Apollo.MutationResult<RemoveTestQuestionMutation>;
export type RemoveTestQuestionMutationOptions = Apollo.BaseMutationOptions<RemoveTestQuestionMutation, RemoveTestQuestionMutationVariables>;
export const GetGradebookItemsDocument = gql`
    query GetGradebookItems($course_id: uuid!, $student_id: Int!, $is_assigned: jsonb!, $where: gradebook_item_submissions_bool_exp) {
  gradebook_items(
    where: {_and: {course_id: {_eq: $course_id}, _or: [{assign_to: {_contains: $is_assigned}}, {course: {instructor: {id: {_eq: $student_id}}}}, {course: {management: {manager: {id: {_eq: $student_id}}}}}]}}
    order_by: {created_at: desc}
  ) {
    accommodations
    created_at
    assessment_id
    assessment_type
    attempts_allowed
    attempts_grading
    available_from
    available_until
    assign_to
    course_id
    grading_rubric_id
    id
    max_points
    scoring_type
    status
    submission_type
    assignment {
      description
      files
      gradebook_item_id
      id
      name
      type
    }
    test {
      description
      gradebook_item_id
      id
      time_limit
      settings
      name
    }
    submissions_aggregate(where: $where, distinct_on: student_id) {
      aggregate {
        count
      }
    }
    total_submissions: submissions_aggregate(distinct_on: student_id) {
      aggregate {
        count
      }
    }
  }
}
    `;
export type GetGradebookItemsQueryResult = Apollo.QueryResult<GetGradebookItemsQuery, GetGradebookItemsQueryVariables>;
export const GetAssignmentDocument = gql`
    query GetAssignment($student_id: Int!, $assignment_id: uuid!, $where: gradebook_item_submissions_bool_exp) {
  assignments(where: {id: {_eq: $assignment_id}}) {
    description
    files
    gradebook_item_id
    id
    name
    type
    gradebook_item {
      id
      created_at
      accommodations
      assessment_id
      assessment_type
      attempts_allowed
      attempts_grading
      available_from
      available_until
      course_id
      assign_to
      max_points
      grading_rubric_id
      scoring_type
      status
      submission_type
      submissions(where: $where, order_by: {created_at: desc}) {
        created_at
        content
        group_id
        id
        student_id
        student {
          id
          image
          first_name
          middle_name
          last_name
        }
      }
      submissions_aggregate(where: $where) {
        aggregate {
          count
        }
      }
      grade_items(
        where: {_and: {student_id: {_eq: $student_id}, status: {_eq: "available"}}}
      ) {
        points
        status
        student_id
      }
    }
  }
}
    `;
export type GetAssignmentQueryResult = Apollo.QueryResult<GetAssignmentQuery, GetAssignmentQueryVariables>;
export const GetTestQuestionsDocument = gql`
    query GetTestQuestions($test_id: uuid!) {
  test_questions(where: {test_id: {_eq: $test_id}}, order_by: {order: asc}) {
    id
    order
    question_id
    test_id
    question {
      id
      type
      course_id
      content
      answer_keys
    }
  }
}
    `;
export type GetTestQuestionsQueryResult = Apollo.QueryResult<GetTestQuestionsQuery, GetTestQuestionsQueryVariables>;
export const GetTestQuestionsSubscriptionDocument = gql`
    subscription GetTestQuestionsSubscription($test_id: uuid!) {
  test_questions(where: {test_id: {_eq: $test_id}}, order_by: {order: asc}) {
    id
    order
    question_id
    test_id
    question {
      id
      type
      course_id
      content
      answer_keys
    }
  }
}
    `;
export type GetTestQuestionsSubscriptionSubscriptionResult = Apollo.SubscriptionResult<GetTestQuestionsSubscriptionSubscription>;
export const CreateModuleDocument = gql`
    mutation CreateModule($content: String!, $order: Int!, $unit_id: uuid!, $type: String!, $folder_id: uuid, $status: String!) {
  insert_modules(
    objects: {content: $content, order: $order, unit_id: $unit_id, type: $type, folder_id: $folder_id, status: $status}
  ) {
    affected_rows
  }
}
    `;
export type CreateModuleMutationFn = Apollo.MutationFunction<CreateModuleMutation, CreateModuleMutationVariables>;
export type CreateModuleMutationResult = Apollo.MutationResult<CreateModuleMutation>;
export type CreateModuleMutationOptions = Apollo.BaseMutationOptions<CreateModuleMutation, CreateModuleMutationVariables>;
export const GetModulesDocument = gql`
    query GetModules($unit_id: uuid!) {
  modules(where: {unit_id: {_eq: $unit_id}}, order_by: {order: asc}) {
    content
    id
    order
    available_from
    status
    type
    unit_id
    folder_id
  }
}
    `;
export type GetModulesQueryResult = Apollo.QueryResult<GetModulesQuery, GetModulesQueryVariables>;
export const GetModuleByIdDocument = gql`
    query GetModuleById($id: uuid!) {
  modules(where: {id: {_eq: $id}}, order_by: {order: asc}) {
    content
    id
    order
    available_from
    status
    type
    unit_id
    folder_id
  }
}
    `;
export type GetModuleByIdQueryResult = Apollo.QueryResult<GetModuleByIdQuery, GetModuleByIdQueryVariables>;
export const UpdateModuleOrderDocument = gql`
    mutation UpdateModuleOrder($objects: [modules_insert_input!]!) {
  insert_modules(
    objects: $objects
    on_conflict: {constraint: module_pkey, update_columns: order}
  ) {
    affected_rows
  }
}
    `;
export type UpdateModuleOrderMutationFn = Apollo.MutationFunction<UpdateModuleOrderMutation, UpdateModuleOrderMutationVariables>;
export type UpdateModuleOrderMutationResult = Apollo.MutationResult<UpdateModuleOrderMutation>;
export type UpdateModuleOrderMutationOptions = Apollo.BaseMutationOptions<UpdateModuleOrderMutation, UpdateModuleOrderMutationVariables>;
export const MoveModuleDocument = gql`
    mutation MoveModule($id: uuid!, $order: Int!, $unit_id: uuid!) {
  update_modules_by_pk(
    pk_columns: {id: $id}
    _set: {order: $order, unit_id: $unit_id, folder_id: null}
  ) {
    id
  }
}
    `;
export type MoveModuleMutationFn = Apollo.MutationFunction<MoveModuleMutation, MoveModuleMutationVariables>;
export type MoveModuleMutationResult = Apollo.MutationResult<MoveModuleMutation>;
export type MoveModuleMutationOptions = Apollo.BaseMutationOptions<MoveModuleMutation, MoveModuleMutationVariables>;
export const ChangeModuleFolderDocument = gql`
    mutation ChangeModuleFolder($id: uuid!, $folder_id: uuid) {
  update_modules_by_pk(
    pk_columns: {id: $id}
    _set: {folder_id: $folder_id, order: 999}
  ) {
    id
  }
}
    `;
export type ChangeModuleFolderMutationFn = Apollo.MutationFunction<ChangeModuleFolderMutation, ChangeModuleFolderMutationVariables>;
export type ChangeModuleFolderMutationResult = Apollo.MutationResult<ChangeModuleFolderMutation>;
export type ChangeModuleFolderMutationOptions = Apollo.BaseMutationOptions<ChangeModuleFolderMutation, ChangeModuleFolderMutationVariables>;
export const DeleteModuleDocument = gql`
    mutation DeleteModule($id: uuid!) {
  delete_modules_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteModuleMutationFn = Apollo.MutationFunction<DeleteModuleMutation, DeleteModuleMutationVariables>;
export type DeleteModuleMutationResult = Apollo.MutationResult<DeleteModuleMutation>;
export type DeleteModuleMutationOptions = Apollo.BaseMutationOptions<DeleteModuleMutation, DeleteModuleMutationVariables>;
export const UpdateModuleDocument = gql`
    mutation UpdateModule($id: uuid!, $content: String!, $status: String!, $available_from: timestamp!, $folder_id: uuid) {
  update_modules_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, status: $status, available_from: $available_from, folder_id: $folder_id}
  ) {
    id
  }
}
    `;
export type UpdateModuleMutationFn = Apollo.MutationFunction<UpdateModuleMutation, UpdateModuleMutationVariables>;
export type UpdateModuleMutationResult = Apollo.MutationResult<UpdateModuleMutation>;
export type UpdateModuleMutationOptions = Apollo.BaseMutationOptions<UpdateModuleMutation, UpdateModuleMutationVariables>;
export const UpdateProspectiveUserEmailDocument = gql`
    mutation UpdateProspectiveUserEmail($student_id: String!, $email: String!, $registration_step: Int!) {
  update_prospective_users(
    where: {student_id: {_eq: $student_id}}
    _set: {email: $email, registration_step: $registration_step}
  ) {
    affected_rows
  }
}
    `;
export type UpdateProspectiveUserEmailMutationFn = Apollo.MutationFunction<UpdateProspectiveUserEmailMutation, UpdateProspectiveUserEmailMutationVariables>;
export type UpdateProspectiveUserEmailMutationResult = Apollo.MutationResult<UpdateProspectiveUserEmailMutation>;
export type UpdateProspectiveUserEmailMutationOptions = Apollo.BaseMutationOptions<UpdateProspectiveUserEmailMutation, UpdateProspectiveUserEmailMutationVariables>;
export const ActivateProspectiveUserDocument = gql`
    mutation ActivateProspectiveUser($student_id: String!) {
  update_prospective_users(
    where: {student_id: {_eq: $student_id}}
    _set: {is_active: true}
  ) {
    affected_rows
  }
}
    `;
export type ActivateProspectiveUserMutationFn = Apollo.MutationFunction<ActivateProspectiveUserMutation, ActivateProspectiveUserMutationVariables>;
export type ActivateProspectiveUserMutationResult = Apollo.MutationResult<ActivateProspectiveUserMutation>;
export type ActivateProspectiveUserMutationOptions = Apollo.BaseMutationOptions<ActivateProspectiveUserMutation, ActivateProspectiveUserMutationVariables>;
export const GetProspectiveUserByStudentIdAndCodeDocument = gql`
    query GetProspectiveUserByStudentIdAndCode($student_id: String!, $code: String!) {
  prospective_users(
    where: {_and: {student_id: {_eq: $student_id}, code: {_eq: $code}}}
  ) {
    id
    registration_step
    email
    code
    first_name
    is_active
    last_name
    middle_name
    role
    school_id
    student_id
    username
    school {
      short_name
    }
  }
}
    `;
export type GetProspectiveUserByStudentIdAndCodeQueryResult = Apollo.QueryResult<GetProspectiveUserByStudentIdAndCodeQuery, GetProspectiveUserByStudentIdAndCodeQueryVariables>;
export const GetProspectiveUserByStudentIdDocument = gql`
    query GetProspectiveUserByStudentId($student_id: String!) {
  prospective_users(limit: 1, where: {student_id: {_eq: $student_id}}) {
    code
    email
    first_name
    id
    is_active
    last_name
    middle_name
    school_id
    student_id
    username
    role
  }
}
    `;
export type GetProspectiveUserByStudentIdQueryResult = Apollo.QueryResult<GetProspectiveUserByStudentIdQuery, GetProspectiveUserByStudentIdQueryVariables>;
export const GetSchoolByShortNameDocument = gql`
    query GetSchoolByShortName($short_name: String!) {
  schools(limit: 1, where: {short_name: {_eq: $short_name}}) {
    id
    is_active
    name
    short_name
    type
  }
}
    `;
export type GetSchoolByShortNameQueryResult = Apollo.QueryResult<GetSchoolByShortNameQuery, GetSchoolByShortNameQueryVariables>;
export const CreateUnitDocument = gql`
    mutation CreateUnit($status: String!, $course_id: uuid!, $title: String, $number: String!, $order: Int!, $available_from: timestamp, $type: String!) {
  insert_units(
    objects: {archived: false, status: $status, course_id: $course_id, title: $title, number: $number, order: $order, available_from: $available_from, type: $type}
  ) {
    affected_rows
  }
}
    `;
export type CreateUnitMutationFn = Apollo.MutationFunction<CreateUnitMutation, CreateUnitMutationVariables>;
export type CreateUnitMutationResult = Apollo.MutationResult<CreateUnitMutation>;
export type CreateUnitMutationOptions = Apollo.BaseMutationOptions<CreateUnitMutation, CreateUnitMutationVariables>;
export const ArchiveUnitDocument = gql`
    mutation ArchiveUnit($id: uuid!, $archived: Boolean!) {
  update_units_by_pk(pk_columns: {id: $id}, _set: {archived: $archived}) {
    id
  }
}
    `;
export type ArchiveUnitMutationFn = Apollo.MutationFunction<ArchiveUnitMutation, ArchiveUnitMutationVariables>;
export type ArchiveUnitMutationResult = Apollo.MutationResult<ArchiveUnitMutation>;
export type ArchiveUnitMutationOptions = Apollo.BaseMutationOptions<ArchiveUnitMutation, ArchiveUnitMutationVariables>;
export const UpdateUnitOrderDocument = gql`
    mutation UpdateUnitOrder($objects: [units_insert_input!]!) {
  insert_units(
    objects: $objects
    on_conflict: {constraint: unit_pkey, update_columns: order}
  ) {
    affected_rows
  }
}
    `;
export type UpdateUnitOrderMutationFn = Apollo.MutationFunction<UpdateUnitOrderMutation, UpdateUnitOrderMutationVariables>;
export type UpdateUnitOrderMutationResult = Apollo.MutationResult<UpdateUnitOrderMutation>;
export type UpdateUnitOrderMutationOptions = Apollo.BaseMutationOptions<UpdateUnitOrderMutation, UpdateUnitOrderMutationVariables>;
export const UnarchiveUnitDocument = gql`
    mutation UnarchiveUnit($id: uuid!, $order: Int!) {
  update_units_by_pk(
    pk_columns: {id: $id}
    _set: {order: $order, archived: false}
  ) {
    id
  }
}
    `;
export type UnarchiveUnitMutationFn = Apollo.MutationFunction<UnarchiveUnitMutation, UnarchiveUnitMutationVariables>;
export type UnarchiveUnitMutationResult = Apollo.MutationResult<UnarchiveUnitMutation>;
export type UnarchiveUnitMutationOptions = Apollo.BaseMutationOptions<UnarchiveUnitMutation, UnarchiveUnitMutationVariables>;
export const UpdateUnitDetailsDocument = gql`
    mutation UpdateUnitDetails($id: uuid!, $type: String!, $available_from: timestamp, $number: String!, $title: String, $status: String!) {
  update_units_by_pk(
    pk_columns: {id: $id}
    _set: {title: $title, number: $number, available_from: $available_from, type: $type, status: $status}
  ) {
    id
  }
}
    `;
export type UpdateUnitDetailsMutationFn = Apollo.MutationFunction<UpdateUnitDetailsMutation, UpdateUnitDetailsMutationVariables>;
export type UpdateUnitDetailsMutationResult = Apollo.MutationResult<UpdateUnitDetailsMutation>;
export type UpdateUnitDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateUnitDetailsMutation, UpdateUnitDetailsMutationVariables>;
export const AddAssessmentToUnitDocument = gql`
    mutation AddAssessmentToUnit($assessment_id: uuid!, $type: String!, $unit_id: uuid!) {
  insert_unit_assessments_one(
    object: {assessment_id: $assessment_id, type: $type, unit_id: $unit_id}
    on_conflict: {constraint: unit_assessments_pkey, where: {_and: {unit_id: {_eq: $unit_id}, assessment_id: {_eq: $assessment_id}}}}
  ) {
    id
  }
}
    `;
export type AddAssessmentToUnitMutationFn = Apollo.MutationFunction<AddAssessmentToUnitMutation, AddAssessmentToUnitMutationVariables>;
export type AddAssessmentToUnitMutationResult = Apollo.MutationResult<AddAssessmentToUnitMutation>;
export type AddAssessmentToUnitMutationOptions = Apollo.BaseMutationOptions<AddAssessmentToUnitMutation, AddAssessmentToUnitMutationVariables>;
export const RemoveAssessmentFromUnitDocument = gql`
    mutation RemoveAssessmentFromUnit($id: uuid!) {
  delete_unit_assessments_by_pk(id: $id) {
    id
  }
}
    `;
export type RemoveAssessmentFromUnitMutationFn = Apollo.MutationFunction<RemoveAssessmentFromUnitMutation, RemoveAssessmentFromUnitMutationVariables>;
export type RemoveAssessmentFromUnitMutationResult = Apollo.MutationResult<RemoveAssessmentFromUnitMutation>;
export type RemoveAssessmentFromUnitMutationOptions = Apollo.BaseMutationOptions<RemoveAssessmentFromUnitMutation, RemoveAssessmentFromUnitMutationVariables>;
export const ChangeUnitOrderDocument = gql`
    mutation ChangeUnitOrder($id: uuid!, $order: Int!) {
  update_units_by_pk(pk_columns: {id: $id}, _set: {order: $order}) {
    id
  }
}
    `;
export type ChangeUnitOrderMutationFn = Apollo.MutationFunction<ChangeUnitOrderMutation, ChangeUnitOrderMutationVariables>;
export type ChangeUnitOrderMutationResult = Apollo.MutationResult<ChangeUnitOrderMutation>;
export type ChangeUnitOrderMutationOptions = Apollo.BaseMutationOptions<ChangeUnitOrderMutation, ChangeUnitOrderMutationVariables>;
export const GetUnitByIdDocument = gql`
    query GetUnitById($id: uuid!, $with_gradebook_items: Boolean!) {
  units(limit: 1, where: {id: {_eq: $id}}, order_by: {available_from: desc}) {
    archived
    status
    course_id
    id
    number
    order
    available_from
    title
    type
    assessments {
      id
      assignment {
        name
        id
        gradebook_item {
          id
          status
          assign_to
          available_from
          submissions_aggregate {
            aggregate {
              count
            }
          }
        }
      }
      test {
        name
        id
        gradebook_item {
          id
          status
          assign_to
          available_from
          submissions_aggregate {
            aggregate {
              count
            }
          }
        }
      }
    }
    course {
      gradebook_items @include(if: $with_gradebook_items) {
        id
        available_from
        status
        assign_to
        assessment_type
        assignment {
          name
          id
        }
        test {
          name
          id
        }
      }
    }
  }
}
    `;
export type GetUnitByIdQueryResult = Apollo.QueryResult<GetUnitByIdQuery, GetUnitByIdQueryVariables>;
export const GetUnitsDocument = gql`
    query GetUnits($course_id: uuid!) {
  units(
    order_by: {order: asc}
    where: {_and: {course_id: {_eq: $course_id}, archived: {_eq: false}}}
  ) {
    archived
    status
    course_id
    id
    title
    number
    order
    available_from
    type
  }
}
    `;
export type GetUnitsQueryResult = Apollo.QueryResult<GetUnitsQuery, GetUnitsQueryVariables>;
export const UnarchivedUnitCountDocument = gql`
    query UnarchivedUnitCount($course_id: uuid!) {
  units_aggregate(
    where: {_and: {course_id: {_eq: $course_id}, archived: {_eq: false}}}
  ) {
    aggregate {
      count
    }
  }
}
    `;
export type UnarchivedUnitCountQueryResult = Apollo.QueryResult<UnarchivedUnitCountQuery, UnarchivedUnitCountQueryVariables>;
export const GetArchivedUnitsDocument = gql`
    query GetArchivedUnits($course_id: uuid!) {
  units(
    order_by: {order: asc}
    where: {_and: {course_id: {_eq: $course_id}, archived: {_eq: true}}}
  ) {
    archived
    status
    course_id
    id
    title
    number
    order
    available_from
    type
  }
}
    `;
export type GetArchivedUnitsQueryResult = Apollo.QueryResult<GetArchivedUnitsQuery, GetArchivedUnitsQueryVariables>;
export const UpdateNewUserDocument = gql`
    mutation UpdateNewUser($email: String!, $first_name: String!, $last_name: String!, $middle_name: String, $school_id: Int!, $username: String!, $student_id: String!) {
  update_users(
    where: {email: {_eq: $email}}
    _set: {first_name: $first_name, last_name: $last_name, middle_name: $middle_name, school_id: $school_id, username: $username, student_id: $student_id, is_active: true}
  ) {
    affected_rows
    returning {
      first_name
      middle_name
      last_name
      student_id
      username
      school_id
      email
      name
      image
      id
      role
    }
  }
}
    `;
export type UpdateNewUserMutationFn = Apollo.MutationFunction<UpdateNewUserMutation, UpdateNewUserMutationVariables>;
export type UpdateNewUserMutationResult = Apollo.MutationResult<UpdateNewUserMutation>;
export type UpdateNewUserMutationOptions = Apollo.BaseMutationOptions<UpdateNewUserMutation, UpdateNewUserMutationVariables>;
export const GetUserByEmailDocument = gql`
    query GetUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}, limit: 1) {
    ...baseUser
  }
}
    ${BaseUserFragmentDoc}`;
export type GetUserByEmailQueryResult = Apollo.QueryResult<GetUserByEmailQuery, GetUserByEmailQueryVariables>;
export const GetUserSettingsDocument = gql`
    query GetUserSettings($email: String!) {
  users(where: {email: {_eq: $email}}, limit: 1) {
    date_format
    hour_format
  }
}
    `;
export type GetUserSettingsQueryResult = Apollo.QueryResult<GetUserSettingsQuery, GetUserSettingsQueryVariables>;
