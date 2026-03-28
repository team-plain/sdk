import type { PlainGraphQLClient } from "./graphql-client.js";
import { PlainConnection } from "./connection.js";
import {
  AcceptWorkspaceInviteDocument,
  ActiveThreadClusterDocument,
  AddAdditionalAssigneesDocument,
  AddCustomerToCustomerGroupsDocument,
  AddCustomerToTenantsDocument,
  AddGeneratedReplyDocument,
  AddLabelsDocument,
  AddLabelsToUserDocument,
  AddMembersToTierDocument,
  AddUserToActiveBillingRotaDocument,
  AddWorkspaceAlternateSupportEmailAddressDocument,
  AiToneRulesDocument,
  ArchiveLabelTypeDocument,
  AssignRolesToUserDocument,
  AssignThreadDocument,
  AutoresponderDocument,
  AutorespondersDocument,
  BillingPlansDocument,
  BulkJoinSlackChannelsDocument,
  BulkUpsertThreadFieldsDocument,
  BulkUpsertWorkflowStepsDocument,
  BusinessHoursDocument,
  BusinessHoursSlotsDocument,
  CalculateRoleChangeCostDocument,
  CancelHyperlineSubscriptionDocument,
  ChangeBillingPlanDocument,
  ChangeKnowledgeGapStatusDocument,
  ChangeThreadCustomerDocument,
  ChangeThreadPriorityDocument,
  ChangeUserStatusDocument,
  ChatAppDocument,
  ChatAppSecretDocument,
  ChatAppsDocument,
  CompaniesDocument,
  CompanyDocument,
  CompleteServiceAuthorizationDocument,
  ConnectedDiscordChannelsDocument,
  ConnectedMsTeamsChannelsDocument,
  ConnectedSlackChannelDocument,
  ConnectedSlackChannelsDocument,
  CreateAiFeatureFeedbackDocument,
  CreateAiFeedbackDocument,
  CreateAiToneRuleDocument,
  CreateApiKeyDocument,
  CreateAttachmentDownloadUrlDocument,
  CreateAttachmentUploadUrlDocument,
  CreateAutoresponderDocument,
  CreateBillingPortalSessionDocument,
  CreateChatAppDocument,
  CreateChatAppSecretDocument,
  CreateCheckoutSessionDocument,
  CreateCustomRoleDocument,
  CreateCustomerCardConfigDocument,
  CreateCustomerEventDocument,
  CreateCustomerGroupDocument,
  CreateCustomerSurveyDocument,
  CreateEmailPreviewUrlDocument,
  CreateEscalationPathDocument,
  CreateGithubUserAuthIntegrationDocument,
  CreateHelpCenterArticleGroupDocument,
  CreateHelpCenterDocument,
  CreateHyperlineBillingPortalSessionDocument,
  CreateHyperlineCheckoutSessionDocument,
  CreateHyperlineComponentsAuthTokenDocument,
  CreateImportSyncDocument,
  CreateIndexedDocumentDocument,
  CreateIssueTrackerIssueDocument,
  CreateKnowledgeSourceDocument,
  CreateLabelTypeDocument,
  CreateMachineUserDocument,
  CreateMyFavoritePageDocument,
  CreateMyLinearIntegrationDocument,
  CreateMyMsTeamsIntegrationDocument,
  CreateMySlackIntegrationDocument,
  CreateNoteDocument,
  CreateSavedThreadsViewDocument,
  CreateServiceLevelAgreementDocument,
  CreateSnippetDocument,
  CreateTaskDocument,
  CreateThreadChannelAssociationDocument,
  CreateThreadDiscussionDocument,
  CreateThreadDocument,
  CreateThreadEventDocument,
  CreateThreadFieldSchemaDocument,
  CreateThreadLinkDocument,
  CreateTierDocument,
  CreateUserAccountDocument,
  CreateUserAuthDiscordChannelIntegrationDocument,
  CreateUserAuthSlackIntegrationDocument,
  CreateWebhookTargetDocument,
  CreateWorkflowDocument,
  CreateWorkflowRuleDocument,
  CreateWorkflowStepDocument,
  CreateWorkspaceCursorIntegrationDocument,
  CreateWorkspaceDiscordChannelIntegrationDocument,
  CreateWorkspaceDiscordIntegrationDocument,
  CreateWorkspaceDocument,
  CreateWorkspaceEmailDomainSettingsDocument,
  CreateWorkspaceFileUploadUrlDocument,
  CreateWorkspaceMsTeamsIntegrationDocument,
  CreateWorkspaceSlackChannelIntegrationDocument,
  CreateWorkspaceSlackIntegrationDocument,
  CursorRepositoriesDocument,
  CustomRoleDocument,
  CustomRolesDocument,
  CustomerByEmailDocument,
  CustomerByExternalIdDocument,
  CustomerCardConfigDocument,
  CustomerCardConfigsDocument,
  CustomerCardInstancesDocument,
  CustomerDocument,
  CustomerGroupDocument,
  CustomerGroupsDocument,
  CustomerSurveyDocument,
  CustomerSurveysDocument,
  CustomersDocument,
  DeleteAiToneRulesDocument,
  DeleteApiKeyDocument,
  DeleteAutoresponderDocument,
  DeleteBusinessHoursDocument,
  DeleteChatAppDocument,
  DeleteChatAppSecretDocument,
  DeleteCompanyDocument,
  DeleteCustomRoleDocument,
  DeleteCustomerCardConfigDocument,
  DeleteCustomerDocument,
  DeleteCustomerGroupDocument,
  DeleteCustomerSurveyDocument,
  DeleteEscalationPathDocument,
  DeleteGithubUserAuthIntegrationDocument,
  DeleteHelpCenterArticleDocument,
  DeleteHelpCenterArticleGroupDocument,
  DeleteHelpCenterDocument,
  DeleteKnowledgeSourceDocument,
  DeleteMachineUserDocument,
  DeleteMyFavoritePageDocument,
  DeleteMyLinearIntegrationDocument,
  DeleteMyMsTeamsIntegrationDocument,
  DeleteMyServiceAuthorizationDocument,
  DeleteMySlackIntegrationDocument,
  DeleteNoteDocument,
  DeleteSavedThreadsViewDocument,
  DeleteServiceAuthorizationDocument,
  DeleteServiceLevelAgreementDocument,
  DeleteSnippetDocument,
  DeleteTaskDocument,
  DeleteTenantDocument,
  DeleteTenantFieldDocument,
  DeleteTenantFieldSchemaDocument,
  DeleteThreadChannelAssociationDocument,
  DeleteThreadDocument,
  DeleteThreadFieldDocument,
  DeleteThreadFieldSchemaDocument,
  DeleteThreadLinkDocument,
  DeleteTierDocument,
  DeleteUserAuthDiscordChannelIntegrationDocument,
  DeleteUserAuthSlackIntegrationDocument,
  DeleteUserDocument,
  DeleteWebhookTargetDocument,
  DeleteWorkflowDocument,
  DeleteWorkflowRuleDocument,
  DeleteWorkflowStepDocument,
  DeleteWorkspaceCursorIntegrationDocument,
  DeleteWorkspaceDiscordChannelIntegrationDocument,
  DeleteWorkspaceDiscordIntegrationDocument,
  DeleteWorkspaceEmailDomainSettingsDocument,
  DeleteWorkspaceFileDocument,
  DeleteWorkspaceInviteDocument,
  DeleteWorkspaceMsTeamsIntegrationDocument,
  DeleteWorkspaceSlackChannelIntegrationDocument,
  DeleteWorkspaceSlackIntegrationDocument,
  DeletedThreadsDocument,
  EnabledAiToneRulesTextDocument,
  EscalateThreadDocument,
  EscalationPathDocument,
  EscalationPathsDocument,
  ForkThreadDocument,
  GenerateAiToneRulesFromDescriptionDocument,
  GenerateHelpCenterArticleDocument,
  GeneratedRepliesDocument,
  GetMsTeamsMembersForChannelDocument,
  GithubUserAuthIntegrationDocument,
  HeatmapMetricDocument,
  HelpCenterArticleBySlugDocument,
  HelpCenterArticleDocument,
  HelpCenterArticleGroupBySlugDocument,
  HelpCenterArticleGroupDocument,
  HelpCenterDocument,
  HelpCenterIndexDocument,
  HelpCentersDocument,
  ImportCustomersDocument,
  ImportRunsDocument,
  ImportTenantFieldSchemasDocument,
  ImportTenantsDocument,
  ImporterTenantListsDocument,
  IndexedDocumentsDocument,
  InviteUserToWorkspaceDocument,
  IssueTrackerFieldsDocument,
  KnowledgeGapDocument,
  KnowledgeGapsDocument,
  KnowledgeSourceDocument,
  KnowledgeSourcesDocument,
  LabelTypeByExternalIdDocument,
  LabelTypeDocument,
  LabelTypesDocument,
  LockThreadDocument,
  MachineUserDocument,
  MachineUsersDocument,
  MarkCustomerAsSpamDocument,
  MarkThreadAsDoneDocument,
  MarkThreadAsTodoDocument,
  MarkThreadDiscussionAsResolvedDocument,
  MoveLabelTypeDocument,
  MyBillingRotaDocument,
  MyBillingSubscriptionDocument,
  MyEmailSignatureDocument,
  MyFavoritePagesDocument,
  MyInternalNotificationsDocument,
  MyJiraIntegrationTokenDocument,
  MyLinearInstallationInfoDocument,
  MyLinearIntegrationDocument,
  MyLinearIntegrationTokenDocument,
  MyMachineUserDocument,
  MyMsTeamsInstallationInfoDocument,
  MyMsTeamsIntegrationDocument,
  MyPaymentMethodDocument,
  MyPermissionsDocument,
  MySlackInstallationInfoDocument,
  MySlackIntegrationDocument,
  MyUserAccountDocument,
  MyUserDocument,
  MyWorkspaceDocument,
  MyWorkspaceInvitesDocument,
  MyWorkspacesDocument,
  PermissionsDocument,
  PreviewBillingPlanChangeDocument,
  RefreshConnectedDiscordChannelsDocument,
  RefreshWorkspaceSlackChannelIntegrationDocument,
  RegenerateWorkspaceHmacDocument,
  ReindexKnowledgeSourceDocument,
  RelatedThreadsDocument,
  ReloadCustomerCardInstanceDocument,
  RemoveAdditionalAssigneesDocument,
  RemoveCustomerFromCustomerGroupsDocument,
  RemoveCustomerFromTenantsDocument,
  RemoveLabelsDocument,
  RemoveLabelsFromUserDocument,
  RemoveMembersFromTierDocument,
  RemoveTenantFieldSchemaMappingDocument,
  RemoveUserFromActiveBillingRotaDocument,
  RemoveWorkspaceAlternateSupportEmailAddressDocument,
  ReorderAutorespondersDocument,
  ReorderCustomerCardConfigsDocument,
  ReorderCustomerSurveysDocument,
  ReorderThreadFieldSchemasDocument,
  ReplyToEmailDocument,
  ReplyToThreadDocument,
  ResolveCustomerForMsTeamsChannelDocument,
  ResolveCustomerForSlackChannelDocument,
  RolesDocument,
  SavedThreadsViewDocument,
  SavedThreadsViewsDocument,
  SearchCompaniesDocument,
  SearchCustomersDocument,
  SearchKnowledgeSourcesDocument,
  SearchSlackUsersDocument,
  SearchTenantsDocument,
  SearchThreadLinkCandidatesDocument,
  SearchThreadSlackUsersDocument,
  SearchThreadsDocument,
  SendBulkEmailDocument,
  SendChatDocument,
  SendCustomerChatDocument,
  SendDiscordMessageDocument,
  SendMsTeamsMessageDocument,
  SendNewEmailDocument,
  SendSlackMessageDocument,
  SendThreadDiscussionMessageDocument,
  ServiceAuthorizationDocument,
  ServiceAuthorizationsDocument,
  SetCustomerTenantsDocument,
  SettingDocument,
  SetupTenantFieldSchemaMappingDocument,
  ShareThreadToUserInSlackDocument,
  SingleValueMetricDocument,
  SlackUserDocument,
  SnippetDocument,
  SnippetsDocument,
  SnoozeThreadDocument,
  StartServiceAuthorizationDocument,
  SubscriptionEventTypesDocument,
  SyncBusinessHoursSlotsDocument,
  SyncUserWorkingHoursDocument,
  TaskByRefDocument,
  TaskDocument,
  TasksDocument,
  TeamSettingsDocument,
  TenantDocument,
  TenantFieldSchemasDocument,
  TenantsDocument,
  ThreadByExternalIdDocument,
  ThreadByRefDocument,
  ThreadBySlackPermalinkDocument,
  ThreadClusterDocument,
  ThreadClustersDocument,
  ThreadClustersPaginatedDocument,
  ThreadDiscussionDocument,
  ThreadDocument,
  ThreadFieldSchemaDocument,
  ThreadFieldSchemasDocument,
  ThreadLinkGroupsDocument,
  ThreadSlackUserDocument,
  ThreadsDocument,
  TierDocument,
  TiersDocument,
  TimeSeriesMetricDocument,
  TimelineEntriesDocument,
  TimelineEntryDocument,
  ToggleSlackMessageReactionDocument,
  ToggleWorkflowRulePublishedDocument,
  TriggerWorkflowDocument,
  TriggerWorkflowRuleDocument,
  UnarchiveLabelTypeDocument,
  UnassignThreadDocument,
  UnmarkCustomerAsSpamDocument,
  UpdateActiveBillingRotaDocument,
  UpdateAiToneRulesDocument,
  UpdateApiKeyDocument,
  UpdateAutoresponderDocument,
  UpdateChatAppDocument,
  UpdateCompanyTierDocument,
  UpdateConnectedDiscordChannelDocument,
  UpdateConnectedSlackChannelDocument,
  UpdateCustomRoleDocument,
  UpdateCustomerCardConfigDocument,
  UpdateCustomerCompanyDocument,
  UpdateCustomerGroupDocument,
  UpdateCustomerSurveyDocument,
  UpdateEscalationPathDocument,
  UpdateGeneratedReplyDocument,
  UpdateHelpCenterArticleGroupDocument,
  UpdateHelpCenterCustomDomainNameDocument,
  UpdateHelpCenterDocument,
  UpdateHelpCenterIndexDocument,
  UpdateInternalNotificationsDocument,
  UpdateLabelTypeDocument,
  UpdateMachineUserDocument,
  UpdateMyUserDocument,
  UpdateNoteDocument,
  UpdateSavedThreadsViewDocument,
  UpdateServiceLevelAgreementDocument,
  UpdateSettingDocument,
  UpdateSnippetDocument,
  UpdateTaskDocument,
  UpdateTenantTierDocument,
  UpdateThreadAgentStatusDocument,
  UpdateThreadEscalationPathDocument,
  UpdateThreadFieldSchemaDocument,
  UpdateThreadSuggestedActionStatusDocument,
  UpdateThreadTenantDocument,
  UpdateThreadTierDocument,
  UpdateThreadTitleDocument,
  UpdateTierDocument,
  UpdateUserDefaultSavedThreadsViewDocument,
  UpdateWebhookTargetDocument,
  UpdateWorkflowDocument,
  UpdateWorkflowRuleDocument,
  UpdateWorkflowStepDocument,
  UpdateWorkspaceDocument,
  UpdateWorkspaceEmailSettingsDocument,
  UpsertBusinessHoursDocument,
  UpsertCompanyDocument,
  UpsertCustomerDocument,
  UpsertCustomerGroupDocument,
  UpsertHelpCenterArticleDocument,
  UpsertMyEmailSignatureDocument,
  UpsertRoleScopesDocument,
  UpsertTeamSettingsDocument,
  UpsertTenantDocument,
  UpsertTenantFieldDocument,
  UpsertTenantFieldSchemaDocument,
  UpsertThreadFieldDocument,
  UserAuthDiscordChannelInstallationInfoDocument,
  UserAuthDiscordChannelIntegrationDocument,
  UserAuthDiscordChannelIntegrationsDocument,
  UserAuthSlackInstallationInfoDocument,
  UserAuthSlackIntegrationByThreadIdDocument,
  UserAuthSlackIntegrationDocument,
  UserByEmailDocument,
  UserDocument,
  UserSlackChannelMembershipsDocument,
  UsersDocument,
  VerifyHelpCenterCustomDomainNameDocument,
  VerifyWorkspaceEmailDnsSettingsDocument,
  VerifyWorkspaceEmailForwardingSettingsDocument,
  WebhookTargetDocument,
  WebhookTargetsDocument,
  WebhookVersionsDocument,
  WorkOsConfigurationDocument,
  WorkflowDocument,
  WorkflowExecutionDocument,
  WorkflowExecutionsByEntityDocument,
  WorkflowExecutionsDocument,
  WorkflowRuleDocument,
  WorkflowRulesDocument,
  WorkflowsDocument,
  WorkspaceChatSettingsDocument,
  WorkspaceCursorIntegrationDocument,
  WorkspaceDiscordChannelInstallationInfoDocument,
  WorkspaceDiscordChannelIntegrationDocument,
  WorkspaceDiscordChannelIntegrationsDocument,
  WorkspaceDiscordIntegrationDocument,
  WorkspaceDiscordIntegrationsDocument,
  WorkspaceDocument,
  WorkspaceEmailSettingsDocument,
  WorkspaceHmacDocument,
  WorkspaceInvitesDocument,
  WorkspaceMsTeamsInstallationInfoDocument,
  WorkspaceMsTeamsIntegrationDocument,
  WorkspaceSlackChannelInstallationInfoDocument,
  WorkspaceSlackChannelIntegrationDocument,
  WorkspaceSlackChannelIntegrationsDocument,
  WorkspaceSlackInstallationInfoDocument,
  WorkspaceSlackIntegrationDocument,
  WorkspaceSlackIntegrationsDocument,
} from "./_generated_documents.js";
import type {
  AcceptWorkspaceInviteMutation,
  AcceptWorkspaceInviteMutationVariables,
  ActiveThreadClusterQuery,
  ActiveThreadClusterQueryVariables,
  AddAdditionalAssigneesMutation,
  AddAdditionalAssigneesMutationVariables,
  AddCustomerToCustomerGroupsMutation,
  AddCustomerToCustomerGroupsMutationVariables,
  AddCustomerToTenantsMutation,
  AddCustomerToTenantsMutationVariables,
  AddGeneratedReplyMutation,
  AddGeneratedReplyMutationVariables,
  AddLabelsMutation,
  AddLabelsMutationVariables,
  AddLabelsToUserMutation,
  AddLabelsToUserMutationVariables,
  AddMembersToTierMutation,
  AddMembersToTierMutationVariables,
  AddUserToActiveBillingRotaMutation,
  AddUserToActiveBillingRotaMutationVariables,
  AddWorkspaceAlternateSupportEmailAddressMutation,
  AddWorkspaceAlternateSupportEmailAddressMutationVariables,
  AiToneRuleFieldsFragment,
  AiToneRulesQuery,
  AiToneRulesQueryVariables,
  ApiKeyFieldsFragment,
  ArchiveLabelTypeMutation,
  ArchiveLabelTypeMutationVariables,
  AssignRolesToUserMutation,
  AssignRolesToUserMutationVariables,
  AssignThreadMutation,
  AssignThreadMutationVariables,
  AttachmentDownloadUrlFieldsFragment,
  AttachmentUploadUrlFieldsFragment,
  AutoresponderFieldsFragment,
  AutoresponderQuery,
  AutoresponderQueryVariables,
  AutorespondersQuery,
  AutorespondersQueryVariables,
  BillingPlanChangePreviewFieldsFragment,
  BillingPlanFieldsFragment,
  BillingPlansQuery,
  BillingPlansQueryVariables,
  BillingSubscriptionFieldsFragment,
  BulkJoinSlackChannelsMutation,
  BulkJoinSlackChannelsMutationVariables,
  BulkUpsertThreadFieldResultFieldsFragment,
  BulkUpsertThreadFieldsMutation,
  BulkUpsertThreadFieldsMutationVariables,
  BulkUpsertWorkflowStepResultItemFieldsFragment,
  BulkUpsertWorkflowStepsMutation,
  BulkUpsertWorkflowStepsMutationVariables,
  BusinessHoursFieldsFragment,
  BusinessHoursQuery,
  BusinessHoursSlotFieldsFragment,
  BusinessHoursSlotsQuery,
  CalculateRoleChangeCostMutation,
  CalculateRoleChangeCostMutationVariables,
  CancelHyperlineSubscriptionMutation,
  ChangeBillingPlanMutation,
  ChangeBillingPlanMutationVariables,
  ChangeKnowledgeGapStatusMutation,
  ChangeKnowledgeGapStatusMutationVariables,
  ChangeThreadCustomerMutation,
  ChangeThreadCustomerMutationVariables,
  ChangeThreadPriorityMutation,
  ChangeThreadPriorityMutationVariables,
  ChangeUserStatusMutation,
  ChangeUserStatusMutationVariables,
  ChatAppFieldsFragment,
  ChatAppHiddenSecretFieldsFragment,
  ChatAppQuery,
  ChatAppQueryVariables,
  ChatAppSecretFieldsFragment,
  ChatAppSecretQuery,
  ChatAppSecretQueryVariables,
  ChatAppsQuery,
  ChatAppsQueryVariables,
  ChatFieldsFragment,
  CompaniesQuery,
  CompaniesQueryVariables,
  CompanyFieldsFragment,
  CompanyQuery,
  CompanyQueryVariables,
  CompanyTierMembershipFieldsFragment,
  CompleteServiceAuthorizationMutation,
  CompleteServiceAuthorizationMutationVariables,
  ConnectedDiscordChannelFieldsFragment,
  ConnectedDiscordChannelsQuery,
  ConnectedDiscordChannelsQueryVariables,
  ConnectedMsTeamsChannelFieldsFragment,
  ConnectedMsTeamsChannelsQuery,
  ConnectedMsTeamsChannelsQueryVariables,
  ConnectedSlackChannelFieldsFragment,
  ConnectedSlackChannelQuery,
  ConnectedSlackChannelQueryVariables,
  ConnectedSlackChannelsQuery,
  ConnectedSlackChannelsQueryVariables,
  CreateAiFeatureFeedbackMutation,
  CreateAiFeatureFeedbackMutationVariables,
  CreateAiFeedbackMutation,
  CreateAiFeedbackMutationVariables,
  CreateAiToneRuleMutation,
  CreateAiToneRuleMutationVariables,
  CreateApiKeyMutation,
  CreateApiKeyMutationVariables,
  CreateAttachmentDownloadUrlMutation,
  CreateAttachmentDownloadUrlMutationVariables,
  CreateAttachmentUploadUrlMutation,
  CreateAttachmentUploadUrlMutationVariables,
  CreateAutoresponderMutation,
  CreateAutoresponderMutationVariables,
  CreateBillingPortalSessionMutation,
  CreateChatAppMutation,
  CreateChatAppMutationVariables,
  CreateChatAppSecretMutation,
  CreateChatAppSecretMutationVariables,
  CreateCheckoutSessionMutation,
  CreateCheckoutSessionMutationVariables,
  CreateCustomRoleMutation,
  CreateCustomRoleMutationVariables,
  CreateCustomerCardConfigMutation,
  CreateCustomerCardConfigMutationVariables,
  CreateCustomerEventMutation,
  CreateCustomerEventMutationVariables,
  CreateCustomerGroupMutation,
  CreateCustomerGroupMutationVariables,
  CreateCustomerSurveyMutation,
  CreateCustomerSurveyMutationVariables,
  CreateEmailPreviewUrlMutation,
  CreateEmailPreviewUrlMutationVariables,
  CreateEscalationPathMutation,
  CreateEscalationPathMutationVariables,
  CreateGithubUserAuthIntegrationMutation,
  CreateGithubUserAuthIntegrationMutationVariables,
  CreateHelpCenterArticleGroupMutation,
  CreateHelpCenterArticleGroupMutationVariables,
  CreateHelpCenterMutation,
  CreateHelpCenterMutationVariables,
  CreateHyperlineBillingPortalSessionMutation,
  CreateHyperlineCheckoutSessionMutation,
  CreateHyperlineCheckoutSessionMutationVariables,
  CreateHyperlineComponentsAuthTokenMutation,
  CreateImportSyncMutation,
  CreateImportSyncMutationVariables,
  CreateIndexedDocumentMutation,
  CreateIndexedDocumentMutationVariables,
  CreateIssueTrackerIssueMutation,
  CreateIssueTrackerIssueMutationVariables,
  CreateKnowledgeSourceMutation,
  CreateKnowledgeSourceMutationVariables,
  CreateLabelTypeMutation,
  CreateLabelTypeMutationVariables,
  CreateMachineUserMutation,
  CreateMachineUserMutationVariables,
  CreateMyFavoritePageMutation,
  CreateMyFavoritePageMutationVariables,
  CreateMyLinearIntegrationMutation,
  CreateMyLinearIntegrationMutationVariables,
  CreateMyMsTeamsIntegrationMutation,
  CreateMyMsTeamsIntegrationMutationVariables,
  CreateMySlackIntegrationMutation,
  CreateMySlackIntegrationMutationVariables,
  CreateNoteMutation,
  CreateNoteMutationVariables,
  CreateSavedThreadsViewMutation,
  CreateSavedThreadsViewMutationVariables,
  CreateServiceLevelAgreementMutation,
  CreateServiceLevelAgreementMutationVariables,
  CreateSnippetMutation,
  CreateSnippetMutationVariables,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  CreateThreadChannelAssociationMutation,
  CreateThreadChannelAssociationMutationVariables,
  CreateThreadDiscussionMutation,
  CreateThreadDiscussionMutationVariables,
  CreateThreadEventMutation,
  CreateThreadEventMutationVariables,
  CreateThreadFieldSchemaMutation,
  CreateThreadFieldSchemaMutationVariables,
  CreateThreadLinkMutation,
  CreateThreadLinkMutationVariables,
  CreateThreadMutation,
  CreateThreadMutationVariables,
  CreateTierMutation,
  CreateTierMutationVariables,
  CreateUserAccountMutation,
  CreateUserAccountMutationVariables,
  CreateUserAuthDiscordChannelIntegrationMutation,
  CreateUserAuthDiscordChannelIntegrationMutationVariables,
  CreateUserAuthSlackIntegrationMutation,
  CreateUserAuthSlackIntegrationMutationVariables,
  CreateWebhookTargetMutation,
  CreateWebhookTargetMutationVariables,
  CreateWorkflowMutation,
  CreateWorkflowMutationVariables,
  CreateWorkflowRuleMutation,
  CreateWorkflowRuleMutationVariables,
  CreateWorkflowStepMutation,
  CreateWorkflowStepMutationVariables,
  CreateWorkspaceCursorIntegrationMutation,
  CreateWorkspaceCursorIntegrationMutationVariables,
  CreateWorkspaceDiscordChannelIntegrationMutation,
  CreateWorkspaceDiscordChannelIntegrationMutationVariables,
  CreateWorkspaceDiscordIntegrationMutation,
  CreateWorkspaceDiscordIntegrationMutationVariables,
  CreateWorkspaceEmailDomainSettingsMutation,
  CreateWorkspaceEmailDomainSettingsMutationVariables,
  CreateWorkspaceFileUploadUrlMutation,
  CreateWorkspaceFileUploadUrlMutationVariables,
  CreateWorkspaceMsTeamsIntegrationMutation,
  CreateWorkspaceMsTeamsIntegrationMutationVariables,
  CreateWorkspaceMutation,
  CreateWorkspaceMutationVariables,
  CreateWorkspaceSlackChannelIntegrationMutation,
  CreateWorkspaceSlackChannelIntegrationMutationVariables,
  CreateWorkspaceSlackIntegrationMutation,
  CreateWorkspaceSlackIntegrationMutationVariables,
  CursorRepositoriesQuery,
  CursorRepositoriesQueryVariables,
  CustomRoleFieldsFragment,
  CustomRoleQuery,
  CustomRoleQueryVariables,
  CustomRolesQuery,
  CustomRolesQueryVariables,
  CustomerByEmailQuery,
  CustomerByEmailQueryVariables,
  CustomerByExternalIdQuery,
  CustomerByExternalIdQueryVariables,
  CustomerCardConfigFieldsFragment,
  CustomerCardConfigQuery,
  CustomerCardConfigQueryVariables,
  CustomerCardConfigsQuery,
  CustomerCardInstancesQuery,
  CustomerCardInstancesQueryVariables,
  CustomerEventFieldsFragment,
  CustomerFieldsFragment,
  CustomerGroupFieldsFragment,
  CustomerGroupMembershipFieldsFragment,
  CustomerGroupQuery,
  CustomerGroupQueryVariables,
  CustomerGroupsQuery,
  CustomerGroupsQueryVariables,
  CustomerQuery,
  CustomerQueryVariables,
  CustomerSurveyFieldsFragment,
  CustomerSurveyQuery,
  CustomerSurveyQueryVariables,
  CustomerSurveysQuery,
  CustomerSurveysQueryVariables,
  CustomersQuery,
  CustomersQueryVariables,
  DeleteAiToneRulesMutation,
  DeleteAiToneRulesMutationVariables,
  DeleteApiKeyMutation,
  DeleteApiKeyMutationVariables,
  DeleteAutoresponderMutation,
  DeleteAutoresponderMutationVariables,
  DeleteBusinessHoursMutation,
  DeleteChatAppMutation,
  DeleteChatAppMutationVariables,
  DeleteChatAppSecretMutation,
  DeleteChatAppSecretMutationVariables,
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables,
  DeleteCustomRoleMutation,
  DeleteCustomRoleMutationVariables,
  DeleteCustomerCardConfigMutation,
  DeleteCustomerCardConfigMutationVariables,
  DeleteCustomerGroupMutation,
  DeleteCustomerGroupMutationVariables,
  DeleteCustomerMutation,
  DeleteCustomerMutationVariables,
  DeleteCustomerSurveyMutation,
  DeleteCustomerSurveyMutationVariables,
  DeleteEscalationPathMutation,
  DeleteEscalationPathMutationVariables,
  DeleteGithubUserAuthIntegrationMutation,
  DeleteHelpCenterArticleGroupMutation,
  DeleteHelpCenterArticleGroupMutationVariables,
  DeleteHelpCenterArticleMutation,
  DeleteHelpCenterArticleMutationVariables,
  DeleteHelpCenterMutation,
  DeleteHelpCenterMutationVariables,
  DeleteKnowledgeSourceMutation,
  DeleteKnowledgeSourceMutationVariables,
  DeleteMachineUserMutation,
  DeleteMachineUserMutationVariables,
  DeleteMyFavoritePageMutation,
  DeleteMyFavoritePageMutationVariables,
  DeleteMyLinearIntegrationMutation,
  DeleteMyMsTeamsIntegrationMutation,
  DeleteMyServiceAuthorizationMutation,
  DeleteMyServiceAuthorizationMutationVariables,
  DeleteMySlackIntegrationMutation,
  DeleteNoteMutation,
  DeleteNoteMutationVariables,
  DeleteSavedThreadsViewMutation,
  DeleteSavedThreadsViewMutationVariables,
  DeleteServiceAuthorizationMutation,
  DeleteServiceAuthorizationMutationVariables,
  DeleteServiceLevelAgreementMutation,
  DeleteServiceLevelAgreementMutationVariables,
  DeleteSnippetMutation,
  DeleteSnippetMutationVariables,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  DeleteTenantFieldMutation,
  DeleteTenantFieldMutationVariables,
  DeleteTenantFieldSchemaMutation,
  DeleteTenantFieldSchemaMutationVariables,
  DeleteTenantMutation,
  DeleteTenantMutationVariables,
  DeleteThreadChannelAssociationMutation,
  DeleteThreadChannelAssociationMutationVariables,
  DeleteThreadFieldMutation,
  DeleteThreadFieldMutationVariables,
  DeleteThreadFieldSchemaMutation,
  DeleteThreadFieldSchemaMutationVariables,
  DeleteThreadLinkMutation,
  DeleteThreadLinkMutationVariables,
  DeleteThreadMutation,
  DeleteThreadMutationVariables,
  DeleteTierMutation,
  DeleteTierMutationVariables,
  DeleteUserAuthDiscordChannelIntegrationMutation,
  DeleteUserAuthDiscordChannelIntegrationMutationVariables,
  DeleteUserAuthSlackIntegrationMutation,
  DeleteUserAuthSlackIntegrationMutationVariables,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteWebhookTargetMutation,
  DeleteWebhookTargetMutationVariables,
  DeleteWorkflowMutation,
  DeleteWorkflowMutationVariables,
  DeleteWorkflowRuleMutation,
  DeleteWorkflowRuleMutationVariables,
  DeleteWorkflowStepMutation,
  DeleteWorkflowStepMutationVariables,
  DeleteWorkspaceCursorIntegrationMutation,
  DeleteWorkspaceCursorIntegrationMutationVariables,
  DeleteWorkspaceDiscordChannelIntegrationMutation,
  DeleteWorkspaceDiscordChannelIntegrationMutationVariables,
  DeleteWorkspaceDiscordIntegrationMutation,
  DeleteWorkspaceDiscordIntegrationMutationVariables,
  DeleteWorkspaceEmailDomainSettingsMutation,
  DeleteWorkspaceFileMutation,
  DeleteWorkspaceFileMutationVariables,
  DeleteWorkspaceInviteMutation,
  DeleteWorkspaceInviteMutationVariables,
  DeleteWorkspaceMsTeamsIntegrationMutation,
  DeleteWorkspaceMsTeamsIntegrationMutationVariables,
  DeleteWorkspaceSlackChannelIntegrationMutation,
  DeleteWorkspaceSlackChannelIntegrationMutationVariables,
  DeleteWorkspaceSlackIntegrationMutation,
  DeleteWorkspaceSlackIntegrationMutationVariables,
  DeletedThreadFieldsFragment,
  DeletedThreadsQuery,
  DeletedThreadsQueryVariables,
  DiscordMessageFieldsFragment,
  EmailFieldsFragment,
  EmailPreviewUrlFieldsFragment,
  EmailSignatureFieldsFragment,
  EnabledAiToneRulesTextQuery,
  EscalateThreadMutation,
  EscalateThreadMutationVariables,
  EscalationPathFieldsFragment,
  EscalationPathQuery,
  EscalationPathQueryVariables,
  EscalationPathsQuery,
  EscalationPathsQueryVariables,
  FavoritePageFieldsFragment,
  ForkThreadMutation,
  ForkThreadMutationVariables,
  GenerateAiToneRulesFromDescriptionMutation,
  GenerateAiToneRulesFromDescriptionMutationVariables,
  GenerateHelpCenterArticleMutation,
  GenerateHelpCenterArticleMutationVariables,
  GeneratedRepliesQuery,
  GeneratedRepliesQueryVariables,
  GeneratedReplyFieldsFragment,
  GetMsTeamsMembersForChannelQuery,
  GetMsTeamsMembersForChannelQueryVariables,
  GithubUserAuthIntegrationFieldsFragment,
  GithubUserAuthIntegrationQuery,
  HeatmapMetricFieldsFragment,
  HeatmapMetricQuery,
  HeatmapMetricQueryVariables,
  HelpCenterArticleBySlugQuery,
  HelpCenterArticleBySlugQueryVariables,
  HelpCenterArticleFieldsFragment,
  HelpCenterArticleGroupBySlugQuery,
  HelpCenterArticleGroupBySlugQueryVariables,
  HelpCenterArticleGroupFieldsFragment,
  HelpCenterArticleGroupQuery,
  HelpCenterArticleGroupQueryVariables,
  HelpCenterArticleQuery,
  HelpCenterArticleQueryVariables,
  HelpCenterFieldsFragment,
  HelpCenterIndexFieldsFragment,
  HelpCenterIndexQuery,
  HelpCenterIndexQueryVariables,
  HelpCenterQuery,
  HelpCenterQueryVariables,
  HelpCentersQuery,
  HelpCentersQueryVariables,
  ImportCustomersMutation,
  ImportCustomersMutationVariables,
  ImportJobDefinitionFieldsFragment,
  ImportRunFieldsFragment,
  ImportRunsQuery,
  ImportRunsQueryVariables,
  ImportTenantFieldSchemasMutation,
  ImportTenantFieldSchemasMutationVariables,
  ImportTenantsMutation,
  ImportTenantsMutationVariables,
  ImporterTenantListsQuery,
  ImporterTenantListsQueryVariables,
  IndexedDocumentFieldsFragment,
  IndexedDocumentsQuery,
  IndexedDocumentsQueryVariables,
  InternalNotificationFieldsFragment,
  InviteUserToWorkspaceMutation,
  InviteUserToWorkspaceMutationVariables,
  IssueTrackerFieldFieldsFragment,
  IssueTrackerFieldsQuery,
  IssueTrackerFieldsQueryVariables,
  JiraIntegrationTokenFieldsFragment,
  KnowledgeGapFieldsFragment,
  KnowledgeGapQuery,
  KnowledgeGapQueryVariables,
  KnowledgeGapsQuery,
  KnowledgeGapsQueryVariables,
  KnowledgeSourceQuery,
  KnowledgeSourceQueryVariables,
  KnowledgeSourcesQuery,
  KnowledgeSourcesQueryVariables,
  LabelFieldsFragment,
  LabelTypeByExternalIdQuery,
  LabelTypeByExternalIdQueryVariables,
  LabelTypeFieldsFragment,
  LabelTypeQuery,
  LabelTypeQueryVariables,
  LabelTypesQuery,
  LabelTypesQueryVariables,
  LockThreadMutation,
  LockThreadMutationVariables,
  MachineUserFieldsFragment,
  MachineUserQuery,
  MachineUserQueryVariables,
  MachineUsersQuery,
  MachineUsersQueryVariables,
  MarkCustomerAsSpamMutation,
  MarkCustomerAsSpamMutationVariables,
  MarkThreadAsDoneMutation,
  MarkThreadAsDoneMutationVariables,
  MarkThreadAsTodoMutation,
  MarkThreadAsTodoMutationVariables,
  MarkThreadDiscussionAsResolvedMutation,
  MarkThreadDiscussionAsResolvedMutationVariables,
  MoveLabelTypeMutation,
  MoveLabelTypeMutationVariables,
  MsTeamsChannelMembersFieldsFragment,
  MsTeamsMessageFieldsFragment,
  MyBillingRotaQuery,
  MyBillingSubscriptionQuery,
  MyEmailSignatureQuery,
  MyFavoritePagesQuery,
  MyFavoritePagesQueryVariables,
  MyInternalNotificationsQuery,
  MyInternalNotificationsQueryVariables,
  MyJiraIntegrationTokenQuery,
  MyLinearInstallationInfoQuery,
  MyLinearInstallationInfoQueryVariables,
  MyLinearIntegrationQuery,
  MyLinearIntegrationTokenQuery,
  MyMachineUserQuery,
  MyMsTeamsInstallationInfoQuery,
  MyMsTeamsInstallationInfoQueryVariables,
  MyMsTeamsIntegrationQuery,
  MyPaymentMethodQuery,
  MyPermissionsQuery,
  MySlackInstallationInfoQuery,
  MySlackInstallationInfoQueryVariables,
  MySlackIntegrationQuery,
  MyUserAccountQuery,
  MyUserQuery,
  MyWorkspaceInvitesQuery,
  MyWorkspaceInvitesQueryVariables,
  MyWorkspaceQuery,
  MyWorkspacesQuery,
  MyWorkspacesQueryVariables,
  NoteFieldsFragment,
  PermissionsQuery,
  PreviewBillingPlanChangeMutation,
  PreviewBillingPlanChangeMutationVariables,
  RefreshConnectedDiscordChannelsMutation,
  RefreshConnectedDiscordChannelsMutationVariables,
  RefreshWorkspaceSlackChannelIntegrationMutation,
  RefreshWorkspaceSlackChannelIntegrationMutationVariables,
  RegenerateWorkspaceHmacMutation,
  ReindexKnowledgeSourceMutation,
  ReindexKnowledgeSourceMutationVariables,
  RelatedThreadsQuery,
  RelatedThreadsQueryVariables,
  ReloadCustomerCardInstanceMutation,
  ReloadCustomerCardInstanceMutationVariables,
  RemoveAdditionalAssigneesMutation,
  RemoveAdditionalAssigneesMutationVariables,
  RemoveCustomerFromCustomerGroupsMutation,
  RemoveCustomerFromCustomerGroupsMutationVariables,
  RemoveCustomerFromTenantsMutation,
  RemoveCustomerFromTenantsMutationVariables,
  RemoveLabelsFromUserMutation,
  RemoveLabelsFromUserMutationVariables,
  RemoveLabelsMutation,
  RemoveLabelsMutationVariables,
  RemoveMembersFromTierMutation,
  RemoveMembersFromTierMutationVariables,
  RemoveTenantFieldSchemaMappingMutation,
  RemoveTenantFieldSchemaMappingMutationVariables,
  RemoveUserFromActiveBillingRotaMutation,
  RemoveUserFromActiveBillingRotaMutationVariables,
  RemoveWorkspaceAlternateSupportEmailAddressMutation,
  RemoveWorkspaceAlternateSupportEmailAddressMutationVariables,
  ReorderAutorespondersMutation,
  ReorderAutorespondersMutationVariables,
  ReorderCustomerCardConfigsMutation,
  ReorderCustomerCardConfigsMutationVariables,
  ReorderCustomerSurveysMutation,
  ReorderCustomerSurveysMutationVariables,
  ReorderThreadFieldSchemasMutation,
  ReorderThreadFieldSchemasMutationVariables,
  ReplyToEmailMutation,
  ReplyToEmailMutationVariables,
  ReplyToThreadMutation,
  ReplyToThreadMutationVariables,
  ResolveCustomerForMsTeamsChannelMutation,
  ResolveCustomerForMsTeamsChannelMutationVariables,
  ResolveCustomerForSlackChannelMutation,
  ResolveCustomerForSlackChannelMutationVariables,
  RoleChangeCostFieldsFragment,
  RoleFieldsFragment,
  RolesQuery,
  RolesQueryVariables,
  SavedThreadsViewFieldsFragment,
  SavedThreadsViewQuery,
  SavedThreadsViewQueryVariables,
  SavedThreadsViewsQuery,
  SavedThreadsViewsQueryVariables,
  SearchCompaniesQuery,
  SearchCompaniesQueryVariables,
  SearchCustomersQuery,
  SearchCustomersQueryVariables,
  SearchKnowledgeSourcesQuery,
  SearchKnowledgeSourcesQueryVariables,
  SearchSlackUsersQuery,
  SearchSlackUsersQueryVariables,
  SearchTenantsQuery,
  SearchTenantsQueryVariables,
  SearchThreadLinkCandidatesQuery,
  SearchThreadLinkCandidatesQueryVariables,
  SearchThreadSlackUsersQuery,
  SearchThreadSlackUsersQueryVariables,
  SearchThreadsQuery,
  SearchThreadsQueryVariables,
  SendBulkEmailMutation,
  SendBulkEmailMutationVariables,
  SendChatMutation,
  SendChatMutationVariables,
  SendCustomerChatMutation,
  SendCustomerChatMutationVariables,
  SendDiscordMessageMutation,
  SendDiscordMessageMutationVariables,
  SendMsTeamsMessageMutation,
  SendMsTeamsMessageMutationVariables,
  SendNewEmailMutation,
  SendNewEmailMutationVariables,
  SendSlackMessageMutation,
  SendSlackMessageMutationVariables,
  SendThreadDiscussionMessageMutation,
  SendThreadDiscussionMessageMutationVariables,
  ServiceAuthorizationFieldsFragment,
  ServiceAuthorizationQuery,
  ServiceAuthorizationQueryVariables,
  ServiceAuthorizationsQuery,
  ServiceAuthorizationsQueryVariables,
  SetCustomerTenantsMutation,
  SetCustomerTenantsMutationVariables,
  SettingQuery,
  SettingQueryVariables,
  SetupTenantFieldSchemaMappingMutation,
  SetupTenantFieldSchemaMappingMutationVariables,
  ShareThreadToUserInSlackMutation,
  ShareThreadToUserInSlackMutationVariables,
  SingleValueMetricQuery,
  SingleValueMetricQueryVariables,
  SlackUserFieldsFragment,
  SlackUserQuery,
  SlackUserQueryVariables,
  SnippetFieldsFragment,
  SnippetQuery,
  SnippetQueryVariables,
  SnippetsQuery,
  SnippetsQueryVariables,
  SnoozeThreadMutation,
  SnoozeThreadMutationVariables,
  StartServiceAuthorizationMutation,
  StartServiceAuthorizationMutationVariables,
  SubscriptionEventTypesQuery,
  SyncBusinessHoursSlotsMutation,
  SyncBusinessHoursSlotsMutationVariables,
  SyncUserWorkingHoursMutation,
  SyncUserWorkingHoursMutationVariables,
  TaskByRefQuery,
  TaskByRefQueryVariables,
  TaskFieldsFragment,
  TaskQuery,
  TaskQueryVariables,
  TasksQuery,
  TasksQueryVariables,
  TeamSettingsFieldsFragment,
  TeamSettingsQuery,
  TeamSettingsQueryVariables,
  TenantFieldFieldsFragment,
  TenantFieldSchemaFieldsFragment,
  TenantFieldSchemasQuery,
  TenantFieldSchemasQueryVariables,
  TenantFieldsFragment,
  TenantQuery,
  TenantQueryVariables,
  TenantTierMembershipFieldsFragment,
  TenantsQuery,
  TenantsQueryVariables,
  ThreadByExternalIdQuery,
  ThreadByExternalIdQueryVariables,
  ThreadByRefQuery,
  ThreadByRefQueryVariables,
  ThreadBySlackPermalinkQuery,
  ThreadBySlackPermalinkQueryVariables,
  ThreadClusterFieldsFragment,
  ThreadClusterQuery,
  ThreadClusterQueryVariables,
  ThreadClustersPaginatedQuery,
  ThreadClustersPaginatedQueryVariables,
  ThreadClustersQuery,
  ThreadClustersQueryVariables,
  ThreadDiscussionFieldsFragment,
  ThreadDiscussionMessageFieldsFragment,
  ThreadDiscussionQuery,
  ThreadDiscussionQueryVariables,
  ThreadEventFieldsFragment,
  ThreadFieldFieldsFragment,
  ThreadFieldSchemaFieldsFragment,
  ThreadFieldSchemaQuery,
  ThreadFieldSchemaQueryVariables,
  ThreadFieldSchemasQuery,
  ThreadFieldSchemasQueryVariables,
  ThreadFieldsFragment,
  ThreadLinkCandidateFieldsFragment,
  ThreadLinkGroupFieldsFragment,
  ThreadLinkGroupsQuery,
  ThreadLinkGroupsQueryVariables,
  ThreadQuery,
  ThreadQueryVariables,
  ThreadSlackUserQuery,
  ThreadSlackUserQueryVariables,
  ThreadWithDistanceFieldsFragment,
  ThreadsQuery,
  ThreadsQueryVariables,
  TierFieldsFragment,
  TierQuery,
  TierQueryVariables,
  TiersQuery,
  TiersQueryVariables,
  TimeSeriesMetricFieldsFragment,
  TimeSeriesMetricQuery,
  TimeSeriesMetricQueryVariables,
  TimelineEntriesQuery,
  TimelineEntriesQueryVariables,
  TimelineEntryFieldsFragment,
  TimelineEntryQuery,
  TimelineEntryQueryVariables,
  ToggleSlackMessageReactionMutation,
  ToggleSlackMessageReactionMutationVariables,
  ToggleWorkflowRulePublishedMutation,
  ToggleWorkflowRulePublishedMutationVariables,
  TriggerWorkflowMutation,
  TriggerWorkflowMutationVariables,
  TriggerWorkflowRuleMutation,
  TriggerWorkflowRuleMutationVariables,
  UnarchiveLabelTypeMutation,
  UnarchiveLabelTypeMutationVariables,
  UnassignThreadMutation,
  UnassignThreadMutationVariables,
  UnmarkCustomerAsSpamMutation,
  UnmarkCustomerAsSpamMutationVariables,
  UpdateActiveBillingRotaMutation,
  UpdateActiveBillingRotaMutationVariables,
  UpdateAiToneRulesMutation,
  UpdateAiToneRulesMutationVariables,
  UpdateApiKeyMutation,
  UpdateApiKeyMutationVariables,
  UpdateAutoresponderMutation,
  UpdateAutoresponderMutationVariables,
  UpdateChatAppMutation,
  UpdateChatAppMutationVariables,
  UpdateCompanyTierMutation,
  UpdateCompanyTierMutationVariables,
  UpdateConnectedDiscordChannelMutation,
  UpdateConnectedDiscordChannelMutationVariables,
  UpdateConnectedSlackChannelMutation,
  UpdateConnectedSlackChannelMutationVariables,
  UpdateCustomRoleMutation,
  UpdateCustomRoleMutationVariables,
  UpdateCustomerCardConfigMutation,
  UpdateCustomerCardConfigMutationVariables,
  UpdateCustomerCompanyMutation,
  UpdateCustomerCompanyMutationVariables,
  UpdateCustomerGroupMutation,
  UpdateCustomerGroupMutationVariables,
  UpdateCustomerSurveyMutation,
  UpdateCustomerSurveyMutationVariables,
  UpdateEscalationPathMutation,
  UpdateEscalationPathMutationVariables,
  UpdateGeneratedReplyMutation,
  UpdateGeneratedReplyMutationVariables,
  UpdateHelpCenterArticleGroupMutation,
  UpdateHelpCenterArticleGroupMutationVariables,
  UpdateHelpCenterCustomDomainNameMutation,
  UpdateHelpCenterCustomDomainNameMutationVariables,
  UpdateHelpCenterIndexMutation,
  UpdateHelpCenterIndexMutationVariables,
  UpdateHelpCenterMutation,
  UpdateHelpCenterMutationVariables,
  UpdateInternalNotificationsMutation,
  UpdateInternalNotificationsMutationVariables,
  UpdateLabelTypeMutation,
  UpdateLabelTypeMutationVariables,
  UpdateMachineUserMutation,
  UpdateMachineUserMutationVariables,
  UpdateMyUserMutation,
  UpdateMyUserMutationVariables,
  UpdateNoteMutation,
  UpdateNoteMutationVariables,
  UpdateSavedThreadsViewMutation,
  UpdateSavedThreadsViewMutationVariables,
  UpdateServiceLevelAgreementMutation,
  UpdateServiceLevelAgreementMutationVariables,
  UpdateSettingMutation,
  UpdateSettingMutationVariables,
  UpdateSnippetMutation,
  UpdateSnippetMutationVariables,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  UpdateTenantTierMutation,
  UpdateTenantTierMutationVariables,
  UpdateThreadAgentStatusMutation,
  UpdateThreadAgentStatusMutationVariables,
  UpdateThreadEscalationPathMutation,
  UpdateThreadEscalationPathMutationVariables,
  UpdateThreadFieldSchemaMutation,
  UpdateThreadFieldSchemaMutationVariables,
  UpdateThreadSuggestedActionStatusMutation,
  UpdateThreadSuggestedActionStatusMutationVariables,
  UpdateThreadTenantMutation,
  UpdateThreadTenantMutationVariables,
  UpdateThreadTierMutation,
  UpdateThreadTierMutationVariables,
  UpdateThreadTitleMutation,
  UpdateThreadTitleMutationVariables,
  UpdateTierMutation,
  UpdateTierMutationVariables,
  UpdateUserDefaultSavedThreadsViewMutation,
  UpdateUserDefaultSavedThreadsViewMutationVariables,
  UpdateWebhookTargetMutation,
  UpdateWebhookTargetMutationVariables,
  UpdateWorkflowMutation,
  UpdateWorkflowMutationVariables,
  UpdateWorkflowRuleMutation,
  UpdateWorkflowRuleMutationVariables,
  UpdateWorkflowStepMutation,
  UpdateWorkflowStepMutationVariables,
  UpdateWorkspaceEmailSettingsMutation,
  UpdateWorkspaceEmailSettingsMutationVariables,
  UpdateWorkspaceMutation,
  UpdateWorkspaceMutationVariables,
  UpsertBusinessHoursMutation,
  UpsertBusinessHoursMutationVariables,
  UpsertCompanyMutation,
  UpsertCompanyMutationVariables,
  UpsertCustomerGroupMutation,
  UpsertCustomerGroupMutationVariables,
  UpsertCustomerMutation,
  UpsertCustomerMutationVariables,
  UpsertHelpCenterArticleMutation,
  UpsertHelpCenterArticleMutationVariables,
  UpsertMyEmailSignatureMutation,
  UpsertMyEmailSignatureMutationVariables,
  UpsertRoleScopesMutation,
  UpsertRoleScopesMutationVariables,
  UpsertTeamSettingsMutation,
  UpsertTeamSettingsMutationVariables,
  UpsertTenantFieldMutation,
  UpsertTenantFieldMutationVariables,
  UpsertTenantFieldSchemaMutation,
  UpsertTenantFieldSchemaMutationVariables,
  UpsertTenantMutation,
  UpsertTenantMutationVariables,
  UpsertThreadFieldMutation,
  UpsertThreadFieldMutationVariables,
  UserAuthDiscordChannelInstallationInfoQuery,
  UserAuthDiscordChannelInstallationInfoQueryVariables,
  UserAuthDiscordChannelIntegrationFieldsFragment,
  UserAuthDiscordChannelIntegrationQuery,
  UserAuthDiscordChannelIntegrationQueryVariables,
  UserAuthDiscordChannelIntegrationsQuery,
  UserAuthDiscordChannelIntegrationsQueryVariables,
  UserAuthSlackInstallationInfoQuery,
  UserAuthSlackInstallationInfoQueryVariables,
  UserAuthSlackIntegrationByThreadIdQuery,
  UserAuthSlackIntegrationByThreadIdQueryVariables,
  UserAuthSlackIntegrationFieldsFragment,
  UserAuthSlackIntegrationQuery,
  UserAuthSlackIntegrationQueryVariables,
  UserByEmailQuery,
  UserByEmailQueryVariables,
  UserFieldsFragment,
  UserLinearIntegrationFieldsFragment,
  UserMsTeamsIntegrationFieldsFragment,
  UserQuery,
  UserQueryVariables,
  UserSlackChannelMembershipsQuery,
  UserSlackChannelMembershipsQueryVariables,
  UserSlackIntegrationFieldsFragment,
  UserWorkingHoursFieldsFragment,
  UsersQuery,
  UsersQueryVariables,
  VerifyHelpCenterCustomDomainNameMutation,
  VerifyHelpCenterCustomDomainNameMutationVariables,
  VerifyWorkspaceEmailDnsSettingsMutation,
  VerifyWorkspaceEmailForwardingSettingsMutation,
  VerifyWorkspaceEmailForwardingSettingsMutationVariables,
  WebhookTargetFieldsFragment,
  WebhookTargetQuery,
  WebhookTargetQueryVariables,
  WebhookTargetsQuery,
  WebhookTargetsQueryVariables,
  WebhookVersionsQuery,
  WebhookVersionsQueryVariables,
  WorkOsConfigurationQuery,
  WorkflowExecutionFieldsFragment,
  WorkflowExecutionQuery,
  WorkflowExecutionQueryVariables,
  WorkflowExecutionsByEntityQuery,
  WorkflowExecutionsByEntityQueryVariables,
  WorkflowExecutionsQuery,
  WorkflowExecutionsQueryVariables,
  WorkflowFieldsFragment,
  WorkflowQuery,
  WorkflowQueryVariables,
  WorkflowRuleFieldsFragment,
  WorkflowRuleQuery,
  WorkflowRuleQueryVariables,
  WorkflowRulesQuery,
  WorkflowRulesQueryVariables,
  WorkflowStepFieldsFragment,
  WorkflowsQuery,
  WorkflowsQueryVariables,
  WorkspaceChatSettingsQuery,
  WorkspaceCursorIntegrationFieldsFragment,
  WorkspaceCursorIntegrationQuery,
  WorkspaceDiscordChannelInstallationInfoQuery,
  WorkspaceDiscordChannelInstallationInfoQueryVariables,
  WorkspaceDiscordChannelIntegrationFieldsFragment,
  WorkspaceDiscordChannelIntegrationQuery,
  WorkspaceDiscordChannelIntegrationQueryVariables,
  WorkspaceDiscordChannelIntegrationsQuery,
  WorkspaceDiscordChannelIntegrationsQueryVariables,
  WorkspaceDiscordIntegrationFieldsFragment,
  WorkspaceDiscordIntegrationQuery,
  WorkspaceDiscordIntegrationQueryVariables,
  WorkspaceDiscordIntegrationsQuery,
  WorkspaceDiscordIntegrationsQueryVariables,
  WorkspaceEmailDomainSettingsFieldsFragment,
  WorkspaceEmailSettingsFieldsFragment,
  WorkspaceEmailSettingsQuery,
  WorkspaceFieldsFragment,
  WorkspaceFileUploadUrlFieldsFragment,
  WorkspaceHmacFieldsFragment,
  WorkspaceHmacQuery,
  WorkspaceInviteFieldsFragment,
  WorkspaceInvitesQuery,
  WorkspaceInvitesQueryVariables,
  WorkspaceMsTeamsInstallationInfoQuery,
  WorkspaceMsTeamsInstallationInfoQueryVariables,
  WorkspaceMsTeamsIntegrationFieldsFragment,
  WorkspaceMsTeamsIntegrationQuery,
  WorkspaceQuery,
  WorkspaceQueryVariables,
  WorkspaceSlackChannelInstallationInfoQuery,
  WorkspaceSlackChannelInstallationInfoQueryVariables,
  WorkspaceSlackChannelIntegrationFieldsFragment,
  WorkspaceSlackChannelIntegrationQuery,
  WorkspaceSlackChannelIntegrationQueryVariables,
  WorkspaceSlackChannelIntegrationsQuery,
  WorkspaceSlackChannelIntegrationsQueryVariables,
  WorkspaceSlackInstallationInfoQuery,
  WorkspaceSlackInstallationInfoQueryVariables,
  WorkspaceSlackIntegrationFieldsFragment,
  WorkspaceSlackIntegrationQuery,
  WorkspaceSlackIntegrationQueryVariables,
  WorkspaceSlackIntegrationsQuery,
  WorkspaceSlackIntegrationsQueryVariables,
} from "./_generated_documents.js";

export class AiToneRuleModel {
  protected _client: PlainGraphQLClient;
  protected _data: AiToneRuleFieldsFragment;

  public readonly category: AiToneRuleFieldsFragment["category"];
  public readonly createdAt: AiToneRuleFieldsFragment["createdAt"];
  public readonly description: AiToneRuleFieldsFragment["description"];
  public readonly id: AiToneRuleFieldsFragment["id"];
  public readonly isEnabled: AiToneRuleFieldsFragment["isEnabled"];
  public readonly updatedAt: AiToneRuleFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: AiToneRuleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.category = data.category;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.updatedAt = data.updatedAt;
  }
}

export class ApiKeyModel {
  protected _client: PlainGraphQLClient;
  protected _data: ApiKeyFieldsFragment;

  public readonly createdAt: ApiKeyFieldsFragment["createdAt"];
  public readonly deletedAt: ApiKeyFieldsFragment["deletedAt"];
  public readonly description: ApiKeyFieldsFragment["description"];
  public readonly id: ApiKeyFieldsFragment["id"];
  public readonly isDeleted: ApiKeyFieldsFragment["isDeleted"];
  public readonly permissions: ApiKeyFieldsFragment["permissions"];
  public readonly updatedAt: ApiKeyFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ApiKeyFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.description = data.description;
    this.id = data.id;
    this.isDeleted = data.isDeleted;
    this.permissions = data.permissions;
    this.updatedAt = data.updatedAt;
  }
}

export class AttachmentDownloadUrlModel {
  protected _client: PlainGraphQLClient;
  protected _data: AttachmentDownloadUrlFieldsFragment;

  public readonly downloadUrl: AttachmentDownloadUrlFieldsFragment["downloadUrl"];
  public readonly expiresAt: AttachmentDownloadUrlFieldsFragment["expiresAt"];
  constructor(client: PlainGraphQLClient, data: AttachmentDownloadUrlFieldsFragment) {
    this._client = client;
    this._data = data;
    this.downloadUrl = data.downloadUrl;
    this.expiresAt = data.expiresAt;
  }
}

export class AttachmentUploadUrlModel {
  protected _client: PlainGraphQLClient;
  protected _data: AttachmentUploadUrlFieldsFragment;

  public readonly expiresAt: AttachmentUploadUrlFieldsFragment["expiresAt"];
  public readonly uploadFormData: AttachmentUploadUrlFieldsFragment["uploadFormData"];
  public readonly uploadFormUrl: AttachmentUploadUrlFieldsFragment["uploadFormUrl"];
  constructor(client: PlainGraphQLClient, data: AttachmentUploadUrlFieldsFragment) {
    this._client = client;
    this._data = data;
    this.expiresAt = data.expiresAt;
    this.uploadFormData = data.uploadFormData;
    this.uploadFormUrl = data.uploadFormUrl;
  }
}

export class AutoresponderModel {
  protected _client: PlainGraphQLClient;
  protected _data: AutoresponderFieldsFragment;

  public readonly createdAt: AutoresponderFieldsFragment["createdAt"];
  public readonly id: AutoresponderFieldsFragment["id"];
  public readonly isEnabled: AutoresponderFieldsFragment["isEnabled"];
  public readonly markdownContent: AutoresponderFieldsFragment["markdownContent"];
  public readonly messageSources: AutoresponderFieldsFragment["messageSources"];
  public readonly name: AutoresponderFieldsFragment["name"];
  public readonly order: AutoresponderFieldsFragment["order"];
  public readonly responseDelaySeconds: AutoresponderFieldsFragment["responseDelaySeconds"];
  public readonly textContent: AutoresponderFieldsFragment["textContent"];
  public readonly updatedAt: AutoresponderFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: AutoresponderFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.markdownContent = data.markdownContent;
    this.messageSources = data.messageSources;
    this.name = data.name;
    this.order = data.order;
    this.responseDelaySeconds = data.responseDelaySeconds;
    this.textContent = data.textContent;
    this.updatedAt = data.updatedAt;
  }
}

export class BillingPlanModel {
  protected _client: PlainGraphQLClient;
  protected _data: BillingPlanFieldsFragment;

  public readonly description: BillingPlanFieldsFragment["description"];
  public readonly features: BillingPlanFieldsFragment["features"];
  public readonly highlightedLabel: BillingPlanFieldsFragment["highlightedLabel"];
  public readonly isSelfCheckoutEligible: BillingPlanFieldsFragment["isSelfCheckoutEligible"];
  public readonly key: BillingPlanFieldsFragment["key"];
  public readonly monthlyPrice: BillingPlanFieldsFragment["monthlyPrice"];
  public readonly name: BillingPlanFieldsFragment["name"];
  public readonly yearlyPrice: BillingPlanFieldsFragment["yearlyPrice"];
  constructor(client: PlainGraphQLClient, data: BillingPlanFieldsFragment) {
    this._client = client;
    this._data = data;
    this.description = data.description;
    this.features = data.features;
    this.highlightedLabel = data.highlightedLabel;
    this.isSelfCheckoutEligible = data.isSelfCheckoutEligible;
    this.key = data.key;
    this.monthlyPrice = data.monthlyPrice;
    this.name = data.name;
    this.yearlyPrice = data.yearlyPrice;
  }
}

export class BillingPlanChangePreviewModel {
  protected _client: PlainGraphQLClient;
  protected _data: BillingPlanChangePreviewFieldsFragment;

  public readonly earliestEffectiveAt: BillingPlanChangePreviewFieldsFragment["earliestEffectiveAt"];
  public readonly immediateCost: BillingPlanChangePreviewFieldsFragment["immediateCost"];
  constructor(client: PlainGraphQLClient, data: BillingPlanChangePreviewFieldsFragment) {
    this._client = client;
    this._data = data;
    this.earliestEffectiveAt = data.earliestEffectiveAt;
    this.immediateCost = data.immediateCost;
  }
}

export class BillingSubscriptionModel {
  protected _client: PlainGraphQLClient;
  protected _data: BillingSubscriptionFieldsFragment;

  public readonly cancelsAt: BillingSubscriptionFieldsFragment["cancelsAt"];
  public readonly checkoutSession: BillingSubscriptionFieldsFragment["checkoutSession"];
  public readonly endedAt: BillingSubscriptionFieldsFragment["endedAt"];
  public readonly interval: BillingSubscriptionFieldsFragment["interval"];
  public readonly planCode: BillingSubscriptionFieldsFragment["planCode"];
  public readonly planKey: BillingSubscriptionFieldsFragment["planKey"];
  public readonly planName: BillingSubscriptionFieldsFragment["planName"];
  public readonly status: BillingSubscriptionFieldsFragment["status"];
  public readonly trialEndsAt: BillingSubscriptionFieldsFragment["trialEndsAt"];
  constructor(client: PlainGraphQLClient, data: BillingSubscriptionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.cancelsAt = data.cancelsAt;
    this.checkoutSession = data.checkoutSession;
    this.endedAt = data.endedAt;
    this.interval = data.interval;
    this.planCode = data.planCode;
    this.planKey = data.planKey;
    this.planName = data.planName;
    this.status = data.status;
    this.trialEndsAt = data.trialEndsAt;
  }
}

export class BulkUpsertThreadFieldResultModel {
  protected _client: PlainGraphQLClient;
  protected _data: BulkUpsertThreadFieldResultFieldsFragment;

  public readonly result: BulkUpsertThreadFieldResultFieldsFragment["result"];
  constructor(client: PlainGraphQLClient, data: BulkUpsertThreadFieldResultFieldsFragment) {
    this._client = client;
    this._data = data;
    this.result = data.result;
  }
}

export class BulkUpsertWorkflowStepResultItemModel {
  protected _client: PlainGraphQLClient;
  protected _data: BulkUpsertWorkflowStepResultItemFieldsFragment;

  public readonly result: BulkUpsertWorkflowStepResultItemFieldsFragment["result"];
  constructor(client: PlainGraphQLClient, data: BulkUpsertWorkflowStepResultItemFieldsFragment) {
    this._client = client;
    this._data = data;
    this.result = data.result;
  }
}

export class BusinessHoursModel {
  protected _client: PlainGraphQLClient;
  protected _data: BusinessHoursFieldsFragment;

  public readonly createdAt: BusinessHoursFieldsFragment["createdAt"];
  public readonly updatedAt: BusinessHoursFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: BusinessHoursFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

export class BusinessHoursSlotModel {
  protected _client: PlainGraphQLClient;
  protected _data: BusinessHoursSlotFieldsFragment;

  public readonly closesAt: BusinessHoursSlotFieldsFragment["closesAt"];
  public readonly opensAt: BusinessHoursSlotFieldsFragment["opensAt"];
  public readonly timezone: BusinessHoursSlotFieldsFragment["timezone"];
  public readonly weekday: BusinessHoursSlotFieldsFragment["weekday"];
  constructor(client: PlainGraphQLClient, data: BusinessHoursSlotFieldsFragment) {
    this._client = client;
    this._data = data;
    this.closesAt = data.closesAt;
    this.opensAt = data.opensAt;
    this.timezone = data.timezone;
    this.weekday = data.weekday;
  }
}

export class ChatModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatFieldsFragment;

  public readonly createdAt: ChatFieldsFragment["createdAt"];
  public readonly customerReadAt: ChatFieldsFragment["customerReadAt"];
  public readonly id: ChatFieldsFragment["id"];
  public readonly text: ChatFieldsFragment["text"];
  public readonly updatedAt: ChatFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ChatFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerReadAt = data.customerReadAt;
    this.id = data.id;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
  }
}

export class ChatAppModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatAppFieldsFragment;

  public readonly createdAt: ChatAppFieldsFragment["createdAt"];
  public readonly id: ChatAppFieldsFragment["id"];
  public readonly name: ChatAppFieldsFragment["name"];
  public readonly updatedAt: ChatAppFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ChatAppFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
  }
}

export class ChatAppHiddenSecretModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatAppHiddenSecretFieldsFragment;

  public readonly chatAppId: ChatAppHiddenSecretFieldsFragment["chatAppId"];
  public readonly createdAt: ChatAppHiddenSecretFieldsFragment["createdAt"];
  public readonly updatedAt: ChatAppHiddenSecretFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ChatAppHiddenSecretFieldsFragment) {
    this._client = client;
    this._data = data;
    this.chatAppId = data.chatAppId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

export class ChatAppSecretModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatAppSecretFieldsFragment;

  public readonly chatAppId: ChatAppSecretFieldsFragment["chatAppId"];
  public readonly createdAt: ChatAppSecretFieldsFragment["createdAt"];
  public readonly secret: ChatAppSecretFieldsFragment["secret"];
  public readonly updatedAt: ChatAppSecretFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ChatAppSecretFieldsFragment) {
    this._client = client;
    this._data = data;
    this.chatAppId = data.chatAppId;
    this.createdAt = data.createdAt;
    this.secret = data.secret;
    this.updatedAt = data.updatedAt;
  }
}

export class CompanyModel {
  protected _client: PlainGraphQLClient;
  protected _data: CompanyFieldsFragment;

  public readonly contractValue: CompanyFieldsFragment["contractValue"];
  public readonly createdAt: CompanyFieldsFragment["createdAt"];
  public readonly deletedAt: CompanyFieldsFragment["deletedAt"];
  public readonly domainName: CompanyFieldsFragment["domainName"];
  public readonly id: CompanyFieldsFragment["id"];
  public readonly isDeleted: CompanyFieldsFragment["isDeleted"];
  public readonly logoUrl: CompanyFieldsFragment["logoUrl"];
  public readonly name: CompanyFieldsFragment["name"];
  public readonly updatedAt: CompanyFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: CompanyFieldsFragment) {
    this._client = client;
    this._data = data;
    this.contractValue = data.contractValue;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.domainName = data.domainName;
    this.id = data.id;
    this.isDeleted = data.isDeleted;
    this.logoUrl = data.logoUrl;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
  }

  public get accountOwner(): Promise<UserModel | undefined> {
    const id = this._data.accountOwner?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<UserQuery, UserQueryVariables>(
      UserDocument,
      { userId: id } as UserQueryVariables
    ).then(r => r.user ? new UserModel(this._client, r.user) : undefined);
  }

  public get tier(): Promise<TierModel | undefined> {
    const id = this._data.tier?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<TierQuery, TierQueryVariables>(
      TierDocument,
      { tierId: id } as TierQueryVariables
    ).then(r => r.tier ? new TierModel(this._client, r.tier) : undefined);
  }
}

export class CompanyTierMembershipModel {
  protected _client: PlainGraphQLClient;
  protected _data: CompanyTierMembershipFieldsFragment;

  public readonly companyId: CompanyTierMembershipFieldsFragment["companyId"];
  public readonly createdAt: CompanyTierMembershipFieldsFragment["createdAt"];
  public readonly id: CompanyTierMembershipFieldsFragment["id"];
  public readonly tierId: CompanyTierMembershipFieldsFragment["tierId"];
  public readonly updatedAt: CompanyTierMembershipFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: CompanyTierMembershipFieldsFragment) {
    this._client = client;
    this._data = data;
    this.companyId = data.companyId;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.tierId = data.tierId;
    this.updatedAt = data.updatedAt;
  }
}

export class ConnectedDiscordChannelModel {
  protected _client: PlainGraphQLClient;
  protected _data: ConnectedDiscordChannelFieldsFragment;

  public readonly createdAt: ConnectedDiscordChannelFieldsFragment["createdAt"];
  public readonly discordChannelId: ConnectedDiscordChannelFieldsFragment["discordChannelId"];
  public readonly discordGuildId: ConnectedDiscordChannelFieldsFragment["discordGuildId"];
  public readonly id: ConnectedDiscordChannelFieldsFragment["id"];
  public readonly isEnabled: ConnectedDiscordChannelFieldsFragment["isEnabled"];
  public readonly name: ConnectedDiscordChannelFieldsFragment["name"];
  public readonly updatedAt: ConnectedDiscordChannelFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ConnectedDiscordChannelFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.discordChannelId = data.discordChannelId;
    this.discordGuildId = data.discordGuildId;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
  }
}

export class ConnectedMSTeamsChannelModel {
  protected _client: PlainGraphQLClient;
  protected _data: ConnectedMsTeamsChannelFieldsFragment;

  public readonly createdAt: ConnectedMsTeamsChannelFieldsFragment["createdAt"];
  public readonly id: ConnectedMsTeamsChannelFieldsFragment["id"];
  public readonly msTeamsChannelId: ConnectedMsTeamsChannelFieldsFragment["msTeamsChannelId"];
  public readonly msTeamsTeamId: ConnectedMsTeamsChannelFieldsFragment["msTeamsTeamId"];
  public readonly msTeamsTenantId: ConnectedMsTeamsChannelFieldsFragment["msTeamsTenantId"];
  public readonly name: ConnectedMsTeamsChannelFieldsFragment["name"];
  public readonly teamName: ConnectedMsTeamsChannelFieldsFragment["teamName"];
  public readonly updatedAt: ConnectedMsTeamsChannelFieldsFragment["updatedAt"];
  public readonly workspaceId: ConnectedMsTeamsChannelFieldsFragment["workspaceId"];
  constructor(client: PlainGraphQLClient, data: ConnectedMsTeamsChannelFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.msTeamsChannelId = data.msTeamsChannelId;
    this.msTeamsTeamId = data.msTeamsTeamId;
    this.msTeamsTenantId = data.msTeamsTenantId;
    this.name = data.name;
    this.teamName = data.teamName;
    this.updatedAt = data.updatedAt;
    this.workspaceId = data.workspaceId;
  }
}

export class ConnectedSlackChannelModel {
  protected _client: PlainGraphQLClient;
  protected _data: ConnectedSlackChannelFieldsFragment;

  public readonly channelType: ConnectedSlackChannelFieldsFragment["channelType"];
  public readonly createdAt: ConnectedSlackChannelFieldsFragment["createdAt"];
  public readonly id: ConnectedSlackChannelFieldsFragment["id"];
  public readonly isEnabled: ConnectedSlackChannelFieldsFragment["isEnabled"];
  public readonly isPrivate: ConnectedSlackChannelFieldsFragment["isPrivate"];
  public readonly name: ConnectedSlackChannelFieldsFragment["name"];
  public readonly slackChannelId: ConnectedSlackChannelFieldsFragment["slackChannelId"];
  public readonly slackTeamId: ConnectedSlackChannelFieldsFragment["slackTeamId"];
  public readonly updatedAt: ConnectedSlackChannelFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ConnectedSlackChannelFieldsFragment) {
    this._client = client;
    this._data = data;
    this.channelType = data.channelType;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.isPrivate = data.isPrivate;
    this.name = data.name;
    this.slackChannelId = data.slackChannelId;
    this.slackTeamId = data.slackTeamId;
    this.updatedAt = data.updatedAt;
  }
}

export class CustomerModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerFieldsFragment;

  public readonly assignedAt: CustomerFieldsFragment["assignedAt"];
  public readonly avatarUrl: CustomerFieldsFragment["avatarUrl"];
  public readonly createdAt: CustomerFieldsFragment["createdAt"];
  public readonly externalId: CustomerFieldsFragment["externalId"];
  public readonly fullName: CustomerFieldsFragment["fullName"];
  public readonly id: CustomerFieldsFragment["id"];
  public readonly isAnonymous: CustomerFieldsFragment["isAnonymous"];
  public readonly lastIdleAt: CustomerFieldsFragment["lastIdleAt"];
  public readonly markedAsSpamAt: CustomerFieldsFragment["markedAsSpamAt"];
  public readonly shortName: CustomerFieldsFragment["shortName"];
  public readonly status: CustomerFieldsFragment["status"];
  public readonly statusChangedAt: CustomerFieldsFragment["statusChangedAt"];
  public readonly updatedAt: CustomerFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: CustomerFieldsFragment) {
    this._client = client;
    this._data = data;
    this.assignedAt = data.assignedAt;
    this.avatarUrl = data.avatarUrl;
    this.createdAt = data.createdAt;
    this.externalId = data.externalId;
    this.fullName = data.fullName;
    this.id = data.id;
    this.isAnonymous = data.isAnonymous;
    this.lastIdleAt = data.lastIdleAt;
    this.markedAsSpamAt = data.markedAsSpamAt;
    this.shortName = data.shortName;
    this.status = data.status;
    this.statusChangedAt = data.statusChangedAt;
    this.updatedAt = data.updatedAt;
  }

  public get company(): Promise<CompanyModel | undefined> {
    const id = this._data.company?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CompanyQuery, CompanyQueryVariables>(
      CompanyDocument,
      { companyId: id } as CompanyQueryVariables
    ).then(r => r.company ? new CompanyModel(this._client, r.company) : undefined);
  }
}

export class CustomerCardConfigModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerCardConfigFieldsFragment;

  public readonly apiHeaders: CustomerCardConfigFieldsFragment["apiHeaders"];
  public readonly apiUrl: CustomerCardConfigFieldsFragment["apiUrl"];
  public readonly createdAt: CustomerCardConfigFieldsFragment["createdAt"];
  public readonly defaultTimeToLiveSeconds: CustomerCardConfigFieldsFragment["defaultTimeToLiveSeconds"];
  public readonly id: CustomerCardConfigFieldsFragment["id"];
  public readonly isEnabled: CustomerCardConfigFieldsFragment["isEnabled"];
  public readonly key: CustomerCardConfigFieldsFragment["key"];
  public readonly order: CustomerCardConfigFieldsFragment["order"];
  public readonly title: CustomerCardConfigFieldsFragment["title"];
  public readonly updatedAt: CustomerCardConfigFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: CustomerCardConfigFieldsFragment) {
    this._client = client;
    this._data = data;
    this.apiHeaders = data.apiHeaders;
    this.apiUrl = data.apiUrl;
    this.createdAt = data.createdAt;
    this.defaultTimeToLiveSeconds = data.defaultTimeToLiveSeconds;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.key = data.key;
    this.order = data.order;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }
}

export class CustomerEventModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerEventFieldsFragment;

  public readonly createdAt: CustomerEventFieldsFragment["createdAt"];
  public readonly customerId: CustomerEventFieldsFragment["customerId"];
  public readonly id: CustomerEventFieldsFragment["id"];
  public readonly title: CustomerEventFieldsFragment["title"];
  public readonly updatedAt: CustomerEventFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: CustomerEventFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerId = data.customerId;
    this.id = data.id;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }
}

export class CustomerGroupModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerGroupFieldsFragment;

  public readonly color: CustomerGroupFieldsFragment["color"];
  public readonly createdAt: CustomerGroupFieldsFragment["createdAt"];
  public readonly externalId: CustomerGroupFieldsFragment["externalId"];
  public readonly id: CustomerGroupFieldsFragment["id"];
  public readonly key: CustomerGroupFieldsFragment["key"];
  public readonly name: CustomerGroupFieldsFragment["name"];
  public readonly updatedAt: CustomerGroupFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: CustomerGroupFieldsFragment) {
    this._client = client;
    this._data = data;
    this.color = data.color;
    this.createdAt = data.createdAt;
    this.externalId = data.externalId;
    this.id = data.id;
    this.key = data.key;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
  }
}

export class CustomerGroupMembershipModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerGroupMembershipFieldsFragment;

  public readonly createdAt: CustomerGroupMembershipFieldsFragment["createdAt"];
  public readonly customerId: CustomerGroupMembershipFieldsFragment["customerId"];
  public readonly updatedAt: CustomerGroupMembershipFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: CustomerGroupMembershipFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerId = data.customerId;
    this.updatedAt = data.updatedAt;
  }

  public get customerGroup(): Promise<CustomerGroupModel | undefined> {
    const id = this._data.customerGroup?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CustomerGroupQuery, CustomerGroupQueryVariables>(
      CustomerGroupDocument,
      { customerGroupId: id } as CustomerGroupQueryVariables
    ).then(r => r.customerGroup ? new CustomerGroupModel(this._client, r.customerGroup) : undefined);
  }
}

export class CustomerSurveyModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerSurveyFieldsFragment;

  public readonly createdAt: CustomerSurveyFieldsFragment["createdAt"];
  public readonly customerIntervalDays: CustomerSurveyFieldsFragment["customerIntervalDays"];
  public readonly id: CustomerSurveyFieldsFragment["id"];
  public readonly isEnabled: CustomerSurveyFieldsFragment["isEnabled"];
  public readonly name: CustomerSurveyFieldsFragment["name"];
  public readonly order: CustomerSurveyFieldsFragment["order"];
  public readonly responseDelayMinutes: CustomerSurveyFieldsFragment["responseDelayMinutes"];
  public readonly updatedAt: CustomerSurveyFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: CustomerSurveyFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerIntervalDays = data.customerIntervalDays;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.name = data.name;
    this.order = data.order;
    this.responseDelayMinutes = data.responseDelayMinutes;
    this.updatedAt = data.updatedAt;
  }
}

export class CustomRoleModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomRoleFieldsFragment;

  public readonly createdAt: CustomRoleFieldsFragment["createdAt"];
  public readonly description: CustomRoleFieldsFragment["description"];
  public readonly id: CustomRoleFieldsFragment["id"];
  public readonly name: CustomRoleFieldsFragment["name"];
  public readonly permissionsPreset: CustomRoleFieldsFragment["permissionsPreset"];
  public readonly updatedAt: CustomRoleFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: CustomRoleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.name = data.name;
    this.permissionsPreset = data.permissionsPreset;
    this.updatedAt = data.updatedAt;
  }
}

export class DeletedThreadModel {
  protected _client: PlainGraphQLClient;
  protected _data: DeletedThreadFieldsFragment;

  public readonly deletedAt: DeletedThreadFieldsFragment["deletedAt"];
  public readonly threadId: DeletedThreadFieldsFragment["threadId"];
  constructor(client: PlainGraphQLClient, data: DeletedThreadFieldsFragment) {
    this._client = client;
    this._data = data;
    this.deletedAt = data.deletedAt;
    this.threadId = data.threadId;
  }
}

export class DiscordMessageModel {
  protected _client: PlainGraphQLClient;
  protected _data: DiscordMessageFieldsFragment;

  public readonly createdAt: DiscordMessageFieldsFragment["createdAt"];
  public readonly deletedOnDiscordAt: DiscordMessageFieldsFragment["deletedOnDiscordAt"];
  public readonly discordMessageId: DiscordMessageFieldsFragment["discordMessageId"];
  public readonly discordMessageLink: DiscordMessageFieldsFragment["discordMessageLink"];
  public readonly lastEditedOnDiscordAt: DiscordMessageFieldsFragment["lastEditedOnDiscordAt"];
  public readonly markdownContent: DiscordMessageFieldsFragment["markdownContent"];
  public readonly updatedAt: DiscordMessageFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: DiscordMessageFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.deletedOnDiscordAt = data.deletedOnDiscordAt;
    this.discordMessageId = data.discordMessageId;
    this.discordMessageLink = data.discordMessageLink;
    this.lastEditedOnDiscordAt = data.lastEditedOnDiscordAt;
    this.markdownContent = data.markdownContent;
    this.updatedAt = data.updatedAt;
  }
}

export class EmailModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailFieldsFragment;

  public readonly category: EmailFieldsFragment["category"];
  public readonly createdAt: EmailFieldsFragment["createdAt"];
  public readonly id: EmailFieldsFragment["id"];
  public readonly inReplyToEmailId: EmailFieldsFragment["inReplyToEmailId"];
  public readonly markdownContent: EmailFieldsFragment["markdownContent"];
  public readonly subject: EmailFieldsFragment["subject"];
  public readonly textContent: EmailFieldsFragment["textContent"];
  public readonly threadDiscussionId: EmailFieldsFragment["threadDiscussionId"];
  public readonly updatedAt: EmailFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: EmailFieldsFragment) {
    this._client = client;
    this._data = data;
    this.category = data.category;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.inReplyToEmailId = data.inReplyToEmailId;
    this.markdownContent = data.markdownContent;
    this.subject = data.subject;
    this.textContent = data.textContent;
    this.threadDiscussionId = data.threadDiscussionId;
    this.updatedAt = data.updatedAt;
  }

  public get customer(): Promise<CustomerModel | undefined> {
    const id = this._data.customer?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CustomerQuery, CustomerQueryVariables>(
      CustomerDocument,
      { customerId: id } as CustomerQueryVariables
    ).then(r => r.customer ? new CustomerModel(this._client, r.customer) : undefined);
  }

  public get thread(): Promise<ThreadModel | undefined> {
    const id = this._data.thread?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<ThreadQuery, ThreadQueryVariables>(
      ThreadDocument,
      { threadId: id } as ThreadQueryVariables
    ).then(r => r.thread ? new ThreadModel(this._client, r.thread) : undefined);
  }
}

export class EmailPreviewUrlModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailPreviewUrlFieldsFragment;

  public readonly expiresAt: EmailPreviewUrlFieldsFragment["expiresAt"];
  public readonly previewUrl: EmailPreviewUrlFieldsFragment["previewUrl"];
  constructor(client: PlainGraphQLClient, data: EmailPreviewUrlFieldsFragment) {
    this._client = client;
    this._data = data;
    this.expiresAt = data.expiresAt;
    this.previewUrl = data.previewUrl;
  }
}

export class EmailSignatureModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailSignatureFieldsFragment;

  public readonly createdAt: EmailSignatureFieldsFragment["createdAt"];
  public readonly markdown: EmailSignatureFieldsFragment["markdown"];
  public readonly text: EmailSignatureFieldsFragment["text"];
  public readonly updatedAt: EmailSignatureFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: EmailSignatureFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.markdown = data.markdown;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
  }
}

export class EscalationPathModel {
  protected _client: PlainGraphQLClient;
  protected _data: EscalationPathFieldsFragment;

  public readonly createdAt: EscalationPathFieldsFragment["createdAt"];
  public readonly description: EscalationPathFieldsFragment["description"];
  public readonly id: EscalationPathFieldsFragment["id"];
  public readonly name: EscalationPathFieldsFragment["name"];
  public readonly updatedAt: EscalationPathFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: EscalationPathFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
  }
}

export class FavoritePageModel {
  protected _client: PlainGraphQLClient;
  protected _data: FavoritePageFieldsFragment;

  public readonly createdAt: FavoritePageFieldsFragment["createdAt"];
  public readonly id: FavoritePageFieldsFragment["id"];
  public readonly key: FavoritePageFieldsFragment["key"];
  public readonly updatedAt: FavoritePageFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: FavoritePageFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.key = data.key;
    this.updatedAt = data.updatedAt;
  }
}

export class GeneratedReplyModel {
  protected _client: PlainGraphQLClient;
  protected _data: GeneratedReplyFieldsFragment;

  public readonly createdAt: GeneratedReplyFieldsFragment["createdAt"];
  public readonly id: GeneratedReplyFieldsFragment["id"];
  public readonly markdown: GeneratedReplyFieldsFragment["markdown"];
  public readonly text: GeneratedReplyFieldsFragment["text"];
  public readonly timelineEntryId: GeneratedReplyFieldsFragment["timelineEntryId"];
  public readonly updatedAt: GeneratedReplyFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: GeneratedReplyFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.markdown = data.markdown;
    this.text = data.text;
    this.timelineEntryId = data.timelineEntryId;
    this.updatedAt = data.updatedAt;
  }
}

export class GithubUserAuthIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: GithubUserAuthIntegrationFieldsFragment;

  public readonly createdAt: GithubUserAuthIntegrationFieldsFragment["createdAt"];
  public readonly githubUsername: GithubUserAuthIntegrationFieldsFragment["githubUsername"];
  public readonly id: GithubUserAuthIntegrationFieldsFragment["id"];
  public readonly updatedAt: GithubUserAuthIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: GithubUserAuthIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.githubUsername = data.githubUsername;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
  }
}

export class HeatmapMetricModel {
  protected _client: PlainGraphQLClient;
  protected _data: HeatmapMetricFieldsFragment;

  public readonly days: HeatmapMetricFieldsFragment["days"];
  constructor(client: PlainGraphQLClient, data: HeatmapMetricFieldsFragment) {
    this._client = client;
    this._data = data;
    this.days = data.days;
  }
}

export class HelpCenterModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterFieldsFragment;

  public readonly access: HelpCenterFieldsFragment["access"];
  public readonly bodyCustomJs: HelpCenterFieldsFragment["bodyCustomJs"];
  public readonly color: HelpCenterFieldsFragment["color"];
  public readonly createdAt: HelpCenterFieldsFragment["createdAt"];
  public readonly deletedAt: HelpCenterFieldsFragment["deletedAt"];
  public readonly description: HelpCenterFieldsFragment["description"];
  public readonly headCustomJs: HelpCenterFieldsFragment["headCustomJs"];
  public readonly id: HelpCenterFieldsFragment["id"];
  public readonly internalName: HelpCenterFieldsFragment["internalName"];
  public readonly isChatEnabled: HelpCenterFieldsFragment["isChatEnabled"];
  public readonly isCustomerFacingAiEnabled: HelpCenterFieldsFragment["isCustomerFacingAiEnabled"];
  public readonly isDeleted: HelpCenterFieldsFragment["isDeleted"];
  public readonly publicName: HelpCenterFieldsFragment["publicName"];
  public readonly publishedAt: HelpCenterFieldsFragment["publishedAt"];
  public readonly type: HelpCenterFieldsFragment["type"];
  public readonly updatedAt: HelpCenterFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: HelpCenterFieldsFragment) {
    this._client = client;
    this._data = data;
    this.access = data.access;
    this.bodyCustomJs = data.bodyCustomJs;
    this.color = data.color;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.description = data.description;
    this.headCustomJs = data.headCustomJs;
    this.id = data.id;
    this.internalName = data.internalName;
    this.isChatEnabled = data.isChatEnabled;
    this.isCustomerFacingAiEnabled = data.isCustomerFacingAiEnabled;
    this.isDeleted = data.isDeleted;
    this.publicName = data.publicName;
    this.publishedAt = data.publishedAt;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
  }
}

export class HelpCenterArticleModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterArticleFieldsFragment;

  public readonly contentHtml: HelpCenterArticleFieldsFragment["contentHtml"];
  public readonly createdAt: HelpCenterArticleFieldsFragment["createdAt"];
  public readonly description: HelpCenterArticleFieldsFragment["description"];
  public readonly id: HelpCenterArticleFieldsFragment["id"];
  public readonly slug: HelpCenterArticleFieldsFragment["slug"];
  public readonly status: HelpCenterArticleFieldsFragment["status"];
  public readonly statusChangedAt: HelpCenterArticleFieldsFragment["statusChangedAt"];
  public readonly title: HelpCenterArticleFieldsFragment["title"];
  public readonly updatedAt: HelpCenterArticleFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: HelpCenterArticleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.contentHtml = data.contentHtml;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.slug = data.slug;
    this.status = data.status;
    this.statusChangedAt = data.statusChangedAt;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }

  public get articleGroup(): Promise<HelpCenterArticleGroupModel | undefined> {
    const id = this._data.articleGroup?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<HelpCenterArticleGroupQuery, HelpCenterArticleGroupQueryVariables>(
      HelpCenterArticleGroupDocument,
      { id: id } as HelpCenterArticleGroupQueryVariables
    ).then(r => r.helpCenterArticleGroup ? new HelpCenterArticleGroupModel(this._client, r.helpCenterArticleGroup) : undefined);
  }
}

export class HelpCenterArticleGroupModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterArticleGroupFieldsFragment;

  public readonly createdAt: HelpCenterArticleGroupFieldsFragment["createdAt"];
  public readonly id: HelpCenterArticleGroupFieldsFragment["id"];
  public readonly name: HelpCenterArticleGroupFieldsFragment["name"];
  public readonly slug: HelpCenterArticleGroupFieldsFragment["slug"];
  public readonly updatedAt: HelpCenterArticleGroupFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: HelpCenterArticleGroupFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
    this.updatedAt = data.updatedAt;
  }

  public get parentArticleGroup(): Promise<HelpCenterArticleGroupModel | undefined> {
    const id = this._data.parentArticleGroup?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<HelpCenterArticleGroupQuery, HelpCenterArticleGroupQueryVariables>(
      HelpCenterArticleGroupDocument,
      { id: id } as HelpCenterArticleGroupQueryVariables
    ).then(r => r.helpCenterArticleGroup ? new HelpCenterArticleGroupModel(this._client, r.helpCenterArticleGroup) : undefined);
  }
}

export class HelpCenterIndexModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterIndexFieldsFragment;

  public readonly createdAt: HelpCenterIndexFieldsFragment["createdAt"];
  public readonly hash: HelpCenterIndexFieldsFragment["hash"];
  public readonly helpCenterId: HelpCenterIndexFieldsFragment["helpCenterId"];
  public readonly navIndex: HelpCenterIndexFieldsFragment["navIndex"];
  public readonly updatedAt: HelpCenterIndexFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: HelpCenterIndexFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.hash = data.hash;
    this.helpCenterId = data.helpCenterId;
    this.navIndex = data.navIndex;
    this.updatedAt = data.updatedAt;
  }
}

export class ImportJobDefinitionModel {
  protected _client: PlainGraphQLClient;
  protected _data: ImportJobDefinitionFieldsFragment;

  public readonly createdAt: ImportJobDefinitionFieldsFragment["createdAt"];
  public readonly enabledAt: ImportJobDefinitionFieldsFragment["enabledAt"];
  public readonly entityTypes: ImportJobDefinitionFieldsFragment["entityTypes"];
  public readonly id: ImportJobDefinitionFieldsFragment["id"];
  public readonly mode: ImportJobDefinitionFieldsFragment["mode"];
  public readonly updatedAt: ImportJobDefinitionFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ImportJobDefinitionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.enabledAt = data.enabledAt;
    this.entityTypes = data.entityTypes;
    this.id = data.id;
    this.mode = data.mode;
    this.updatedAt = data.updatedAt;
  }
}

export class ImportRunModel {
  protected _client: PlainGraphQLClient;
  protected _data: ImportRunFieldsFragment;

  public readonly completedAt: ImportRunFieldsFragment["completedAt"];
  public readonly downloadedRecords: ImportRunFieldsFragment["downloadedRecords"];
  public readonly entityType: ImportRunFieldsFragment["entityType"];
  public readonly savedRecords: ImportRunFieldsFragment["savedRecords"];
  public readonly startedAt: ImportRunFieldsFragment["startedAt"];
  public readonly status: ImportRunFieldsFragment["status"];
  constructor(client: PlainGraphQLClient, data: ImportRunFieldsFragment) {
    this._client = client;
    this._data = data;
    this.completedAt = data.completedAt;
    this.downloadedRecords = data.downloadedRecords;
    this.entityType = data.entityType;
    this.savedRecords = data.savedRecords;
    this.startedAt = data.startedAt;
    this.status = data.status;
  }
}

export class IndexedDocumentModel {
  protected _client: PlainGraphQLClient;
  protected _data: IndexedDocumentFieldsFragment;

  public readonly createdAt: IndexedDocumentFieldsFragment["createdAt"];
  public readonly id: IndexedDocumentFieldsFragment["id"];
  public readonly updatedAt: IndexedDocumentFieldsFragment["updatedAt"];
  public readonly url: IndexedDocumentFieldsFragment["url"];
  constructor(client: PlainGraphQLClient, data: IndexedDocumentFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
  }
}

export class InternalNotificationModel {
  protected _client: PlainGraphQLClient;
  protected _data: InternalNotificationFieldsFragment;

  public readonly archivedAt: InternalNotificationFieldsFragment["archivedAt"];
  public readonly createdAt: InternalNotificationFieldsFragment["createdAt"];
  public readonly description: InternalNotificationFieldsFragment["description"];
  public readonly id: InternalNotificationFieldsFragment["id"];
  public readonly readAt: InternalNotificationFieldsFragment["readAt"];
  public readonly title: InternalNotificationFieldsFragment["title"];
  public readonly type: InternalNotificationFieldsFragment["type"];
  public readonly updatedAt: InternalNotificationFieldsFragment["updatedAt"];
  public readonly userId: InternalNotificationFieldsFragment["userId"];
  constructor(client: PlainGraphQLClient, data: InternalNotificationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.archivedAt = data.archivedAt;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.readAt = data.readAt;
    this.title = data.title;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
    this.userId = data.userId;
  }
}

export class IssueTrackerFieldModel {
  protected _client: PlainGraphQLClient;
  protected _data: IssueTrackerFieldFieldsFragment;

  public readonly isRequired: IssueTrackerFieldFieldsFragment["isRequired"];
  public readonly key: IssueTrackerFieldFieldsFragment["key"];
  public readonly name: IssueTrackerFieldFieldsFragment["name"];
  public readonly options: IssueTrackerFieldFieldsFragment["options"];
  public readonly parentFieldKey: IssueTrackerFieldFieldsFragment["parentFieldKey"];
  public readonly selectedValue: IssueTrackerFieldFieldsFragment["selectedValue"];
  public readonly type: IssueTrackerFieldFieldsFragment["type"];
  constructor(client: PlainGraphQLClient, data: IssueTrackerFieldFieldsFragment) {
    this._client = client;
    this._data = data;
    this.isRequired = data.isRequired;
    this.key = data.key;
    this.name = data.name;
    this.options = data.options;
    this.parentFieldKey = data.parentFieldKey;
    this.selectedValue = data.selectedValue;
    this.type = data.type;
  }
}

export class JiraIntegrationTokenModel {
  protected _client: PlainGraphQLClient;
  protected _data: JiraIntegrationTokenFieldsFragment;

  public readonly createdAt: JiraIntegrationTokenFieldsFragment["createdAt"];
  public readonly token: JiraIntegrationTokenFieldsFragment["token"];
  constructor(client: PlainGraphQLClient, data: JiraIntegrationTokenFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.token = data.token;
  }
}

export class KnowledgeGapModel {
  protected _client: PlainGraphQLClient;
  protected _data: KnowledgeGapFieldsFragment;

  public readonly createdAt: KnowledgeGapFieldsFragment["createdAt"];
  public readonly description: KnowledgeGapFieldsFragment["description"];
  public readonly firstSeenAt: KnowledgeGapFieldsFragment["firstSeenAt"];
  public readonly id: KnowledgeGapFieldsFragment["id"];
  public readonly lastSeenAt: KnowledgeGapFieldsFragment["lastSeenAt"];
  public readonly status: KnowledgeGapFieldsFragment["status"];
  public readonly statusChangedAt: KnowledgeGapFieldsFragment["statusChangedAt"];
  public readonly title: KnowledgeGapFieldsFragment["title"];
  public readonly updatedAt: KnowledgeGapFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: KnowledgeGapFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.firstSeenAt = data.firstSeenAt;
    this.id = data.id;
    this.lastSeenAt = data.lastSeenAt;
    this.status = data.status;
    this.statusChangedAt = data.statusChangedAt;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }
}

export class LabelModel {
  protected _client: PlainGraphQLClient;
  protected _data: LabelFieldsFragment;

  public readonly createdAt: LabelFieldsFragment["createdAt"];
  public readonly id: LabelFieldsFragment["id"];
  public readonly updatedAt: LabelFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: LabelFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
  }

  public get labelType(): Promise<LabelTypeModel | undefined> {
    const id = this._data.labelType?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<LabelTypeQuery, LabelTypeQueryVariables>(
      LabelTypeDocument,
      { labelTypeId: id } as LabelTypeQueryVariables
    ).then(r => r.labelType ? new LabelTypeModel(this._client, r.labelType) : undefined);
  }
}

export class LabelTypeModel {
  protected _client: PlainGraphQLClient;
  protected _data: LabelTypeFieldsFragment;

  public readonly archivedAt: LabelTypeFieldsFragment["archivedAt"];
  public readonly color: LabelTypeFieldsFragment["color"];
  public readonly createdAt: LabelTypeFieldsFragment["createdAt"];
  public readonly description: LabelTypeFieldsFragment["description"];
  public readonly externalId: LabelTypeFieldsFragment["externalId"];
  public readonly icon: LabelTypeFieldsFragment["icon"];
  public readonly id: LabelTypeFieldsFragment["id"];
  public readonly isArchived: LabelTypeFieldsFragment["isArchived"];
  public readonly isExcludedFromAi: LabelTypeFieldsFragment["isExcludedFromAi"];
  public readonly name: LabelTypeFieldsFragment["name"];
  public readonly position: LabelTypeFieldsFragment["position"];
  public readonly type: LabelTypeFieldsFragment["type"];
  public readonly updatedAt: LabelTypeFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: LabelTypeFieldsFragment) {
    this._client = client;
    this._data = data;
    this.archivedAt = data.archivedAt;
    this.color = data.color;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.externalId = data.externalId;
    this.icon = data.icon;
    this.id = data.id;
    this.isArchived = data.isArchived;
    this.isExcludedFromAi = data.isExcludedFromAi;
    this.name = data.name;
    this.position = data.position;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
  }

  public get parentLabelType(): Promise<LabelTypeModel | undefined> {
    const id = this._data.parentLabelType?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<LabelTypeQuery, LabelTypeQueryVariables>(
      LabelTypeDocument,
      { labelTypeId: id } as LabelTypeQueryVariables
    ).then(r => r.labelType ? new LabelTypeModel(this._client, r.labelType) : undefined);
  }
}

export class MachineUserModel {
  protected _client: PlainGraphQLClient;
  protected _data: MachineUserFieldsFragment;

  public readonly createdAt: MachineUserFieldsFragment["createdAt"];
  public readonly deletedAt: MachineUserFieldsFragment["deletedAt"];
  public readonly description: MachineUserFieldsFragment["description"];
  public readonly fullName: MachineUserFieldsFragment["fullName"];
  public readonly id: MachineUserFieldsFragment["id"];
  public readonly isDeleted: MachineUserFieldsFragment["isDeleted"];
  public readonly publicName: MachineUserFieldsFragment["publicName"];
  public readonly type: MachineUserFieldsFragment["type"];
  public readonly updatedAt: MachineUserFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: MachineUserFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.description = data.description;
    this.fullName = data.fullName;
    this.id = data.id;
    this.isDeleted = data.isDeleted;
    this.publicName = data.publicName;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
  }
}

export class MSTeamsChannelMembersModel {
  protected _client: PlainGraphQLClient;
  protected _data: MsTeamsChannelMembersFieldsFragment;

  public readonly members: MsTeamsChannelMembersFieldsFragment["members"];
  constructor(client: PlainGraphQLClient, data: MsTeamsChannelMembersFieldsFragment) {
    this._client = client;
    this._data = data;
    this.members = data.members;
  }
}

export class MSTeamsMessageModel {
  protected _client: PlainGraphQLClient;
  protected _data: MsTeamsMessageFieldsFragment;

  public readonly createdAt: MsTeamsMessageFieldsFragment["createdAt"];
  public readonly deletedOnMsTeamsAt: MsTeamsMessageFieldsFragment["deletedOnMsTeamsAt"];
  public readonly hasUnprocessedAttachments: MsTeamsMessageFieldsFragment["hasUnprocessedAttachments"];
  public readonly id: MsTeamsMessageFieldsFragment["id"];
  public readonly lastEditedOnMsTeamsAt: MsTeamsMessageFieldsFragment["lastEditedOnMsTeamsAt"];
  public readonly markdownContent: MsTeamsMessageFieldsFragment["markdownContent"];
  public readonly msTeamsConversationId: MsTeamsMessageFieldsFragment["msTeamsConversationId"];
  public readonly msTeamsMessageId: MsTeamsMessageFieldsFragment["msTeamsMessageId"];
  public readonly msTeamsMessageLink: MsTeamsMessageFieldsFragment["msTeamsMessageLink"];
  public readonly msTeamsTeamId: MsTeamsMessageFieldsFragment["msTeamsTeamId"];
  public readonly msTeamsTenantId: MsTeamsMessageFieldsFragment["msTeamsTenantId"];
  public readonly parentMessageId: MsTeamsMessageFieldsFragment["parentMessageId"];
  public readonly text: MsTeamsMessageFieldsFragment["text"];
  public readonly threadId: MsTeamsMessageFieldsFragment["threadId"];
  public readonly updatedAt: MsTeamsMessageFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: MsTeamsMessageFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.deletedOnMsTeamsAt = data.deletedOnMsTeamsAt;
    this.hasUnprocessedAttachments = data.hasUnprocessedAttachments;
    this.id = data.id;
    this.lastEditedOnMsTeamsAt = data.lastEditedOnMsTeamsAt;
    this.markdownContent = data.markdownContent;
    this.msTeamsConversationId = data.msTeamsConversationId;
    this.msTeamsMessageId = data.msTeamsMessageId;
    this.msTeamsMessageLink = data.msTeamsMessageLink;
    this.msTeamsTeamId = data.msTeamsTeamId;
    this.msTeamsTenantId = data.msTeamsTenantId;
    this.parentMessageId = data.parentMessageId;
    this.text = data.text;
    this.threadId = data.threadId;
    this.updatedAt = data.updatedAt;
  }
}

export class NoteModel {
  protected _client: PlainGraphQLClient;
  protected _data: NoteFieldsFragment;

  public readonly createdAt: NoteFieldsFragment["createdAt"];
  public readonly deletedAt: NoteFieldsFragment["deletedAt"];
  public readonly editedAt: NoteFieldsFragment["editedAt"];
  public readonly id: NoteFieldsFragment["id"];
  public readonly isDeleted: NoteFieldsFragment["isDeleted"];
  public readonly isEdited: NoteFieldsFragment["isEdited"];
  public readonly markdown: NoteFieldsFragment["markdown"];
  public readonly text: NoteFieldsFragment["text"];
  public readonly updatedAt: NoteFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: NoteFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.editedAt = data.editedAt;
    this.id = data.id;
    this.isDeleted = data.isDeleted;
    this.isEdited = data.isEdited;
    this.markdown = data.markdown;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
  }

  public get customer(): Promise<CustomerModel | undefined> {
    const id = this._data.customer?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CustomerQuery, CustomerQueryVariables>(
      CustomerDocument,
      { customerId: id } as CustomerQueryVariables
    ).then(r => r.customer ? new CustomerModel(this._client, r.customer) : undefined);
  }
}

export class RoleModel {
  protected _client: PlainGraphQLClient;
  protected _data: RoleFieldsFragment;

  public readonly assignableBillingSeats: RoleFieldsFragment["assignableBillingSeats"];
  public readonly customRoleId: RoleFieldsFragment["customRoleId"];
  public readonly description: RoleFieldsFragment["description"];
  public readonly id: RoleFieldsFragment["id"];
  public readonly isAssignableToCustomer: RoleFieldsFragment["isAssignableToCustomer"];
  public readonly isAssignableToThread: RoleFieldsFragment["isAssignableToThread"];
  public readonly key: RoleFieldsFragment["key"];
  public readonly name: RoleFieldsFragment["name"];
  public readonly permissions: RoleFieldsFragment["permissions"];
  public readonly requiresBillableSeat: RoleFieldsFragment["requiresBillableSeat"];

  constructor(client: PlainGraphQLClient, data: RoleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.assignableBillingSeats = data.assignableBillingSeats;
    this.customRoleId = data.customRoleId;
    this.description = data.description;
    this.id = data.id;
    this.isAssignableToCustomer = data.isAssignableToCustomer;
    this.isAssignableToThread = data.isAssignableToThread;
    this.key = data.key;
    this.name = data.name;
    this.permissions = data.permissions;
    this.requiresBillableSeat = data.requiresBillableSeat;
  }

  public get customRole(): Promise<CustomRoleModel | undefined> {
    const id = this._data.customRole?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CustomRoleQuery, CustomRoleQueryVariables>(
      CustomRoleDocument,
      { customRoleId: id } as CustomRoleQueryVariables
    ).then(r => r.customRole ? new CustomRoleModel(this._client, r.customRole) : undefined);
  }
}

export class RoleChangeCostModel {
  protected _client: PlainGraphQLClient;
  protected _data: RoleChangeCostFieldsFragment;

  public readonly addingSeatType: RoleChangeCostFieldsFragment["addingSeatType"];
  public readonly adjustedPrice: RoleChangeCostFieldsFragment["adjustedPrice"];
  public readonly dueNowPrice: RoleChangeCostFieldsFragment["dueNowPrice"];
  public readonly fullPrice: RoleChangeCostFieldsFragment["fullPrice"];
  public readonly intervalCount: RoleChangeCostFieldsFragment["intervalCount"];
  public readonly intervalUnit: RoleChangeCostFieldsFragment["intervalUnit"];
  public readonly quantity: RoleChangeCostFieldsFragment["quantity"];
  public readonly removingSeatType: RoleChangeCostFieldsFragment["removingSeatType"];
  public readonly totalPrice: RoleChangeCostFieldsFragment["totalPrice"];
  constructor(client: PlainGraphQLClient, data: RoleChangeCostFieldsFragment) {
    this._client = client;
    this._data = data;
    this.addingSeatType = data.addingSeatType;
    this.adjustedPrice = data.adjustedPrice;
    this.dueNowPrice = data.dueNowPrice;
    this.fullPrice = data.fullPrice;
    this.intervalCount = data.intervalCount;
    this.intervalUnit = data.intervalUnit;
    this.quantity = data.quantity;
    this.removingSeatType = data.removingSeatType;
    this.totalPrice = data.totalPrice;
  }
}

export class SavedThreadsViewModel {
  protected _client: PlainGraphQLClient;
  protected _data: SavedThreadsViewFieldsFragment;

  public readonly color: SavedThreadsViewFieldsFragment["color"];
  public readonly createdAt: SavedThreadsViewFieldsFragment["createdAt"];
  public readonly icon: SavedThreadsViewFieldsFragment["icon"];
  public readonly id: SavedThreadsViewFieldsFragment["id"];
  public readonly isHidden: SavedThreadsViewFieldsFragment["isHidden"];
  public readonly name: SavedThreadsViewFieldsFragment["name"];
  public readonly updatedAt: SavedThreadsViewFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: SavedThreadsViewFieldsFragment) {
    this._client = client;
    this._data = data;
    this.color = data.color;
    this.createdAt = data.createdAt;
    this.icon = data.icon;
    this.id = data.id;
    this.isHidden = data.isHidden;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
  }
}

export class ServiceAuthorizationModel {
  protected _client: PlainGraphQLClient;
  protected _data: ServiceAuthorizationFieldsFragment;

  public readonly connectedAt: ServiceAuthorizationFieldsFragment["connectedAt"];
  public readonly createdAt: ServiceAuthorizationFieldsFragment["createdAt"];
  public readonly id: ServiceAuthorizationFieldsFragment["id"];
  public readonly status: ServiceAuthorizationFieldsFragment["status"];
  public readonly updatedAt: ServiceAuthorizationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ServiceAuthorizationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.connectedAt = data.connectedAt;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.status = data.status;
    this.updatedAt = data.updatedAt;
  }
}

export class SlackUserModel {
  protected _client: PlainGraphQLClient;
  protected _data: SlackUserFieldsFragment;

  public readonly createdAt: SlackUserFieldsFragment["createdAt"];
  public readonly fullName: SlackUserFieldsFragment["fullName"];
  public readonly id: SlackUserFieldsFragment["id"];
  public readonly isInChannel: SlackUserFieldsFragment["isInChannel"];
  public readonly slackAvatarUrl72px: SlackUserFieldsFragment["slackAvatarUrl72px"];
  public readonly slackHandle: SlackUserFieldsFragment["slackHandle"];
  public readonly slackUserId: SlackUserFieldsFragment["slackUserId"];
  public readonly updatedAt: SlackUserFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: SlackUserFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.fullName = data.fullName;
    this.id = data.id;
    this.isInChannel = data.isInChannel;
    this.slackAvatarUrl72px = data.slackAvatarUrl72px;
    this.slackHandle = data.slackHandle;
    this.slackUserId = data.slackUserId;
    this.updatedAt = data.updatedAt;
  }
}

export class SnippetModel {
  protected _client: PlainGraphQLClient;
  protected _data: SnippetFieldsFragment;

  public readonly createdAt: SnippetFieldsFragment["createdAt"];
  public readonly deletedAt: SnippetFieldsFragment["deletedAt"];
  public readonly id: SnippetFieldsFragment["id"];
  public readonly isDeleted: SnippetFieldsFragment["isDeleted"];
  public readonly markdown: SnippetFieldsFragment["markdown"];
  public readonly name: SnippetFieldsFragment["name"];
  public readonly path: SnippetFieldsFragment["path"];
  public readonly text: SnippetFieldsFragment["text"];
  public readonly updatedAt: SnippetFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: SnippetFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.id = data.id;
    this.isDeleted = data.isDeleted;
    this.markdown = data.markdown;
    this.name = data.name;
    this.path = data.path;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
  }
}

export class TaskModel {
  protected _client: PlainGraphQLClient;
  protected _data: TaskFieldsFragment;

  public readonly assignedAt: TaskFieldsFragment["assignedAt"];
  public readonly createdAt: TaskFieldsFragment["createdAt"];
  public readonly deletedAt: TaskFieldsFragment["deletedAt"];
  public readonly description: TaskFieldsFragment["description"];
  public readonly id: TaskFieldsFragment["id"];
  public readonly isDeleted: TaskFieldsFragment["isDeleted"];
  public readonly priority: TaskFieldsFragment["priority"];
  public readonly ref: TaskFieldsFragment["ref"];
  public readonly status: TaskFieldsFragment["status"];
  public readonly title: TaskFieldsFragment["title"];
  public readonly updatedAt: TaskFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: TaskFieldsFragment) {
    this._client = client;
    this._data = data;
    this.assignedAt = data.assignedAt;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.description = data.description;
    this.id = data.id;
    this.isDeleted = data.isDeleted;
    this.priority = data.priority;
    this.ref = data.ref;
    this.status = data.status;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }

  public get company(): Promise<CompanyModel | undefined> {
    const id = this._data.company?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CompanyQuery, CompanyQueryVariables>(
      CompanyDocument,
      { companyId: id } as CompanyQueryVariables
    ).then(r => r.company ? new CompanyModel(this._client, r.company) : undefined);
  }

  public get tenant(): Promise<TenantModel | undefined> {
    const id = this._data.tenant?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<TenantQuery, TenantQueryVariables>(
      TenantDocument,
      { tenantId: id } as TenantQueryVariables
    ).then(r => r.tenant ? new TenantModel(this._client, r.tenant) : undefined);
  }
}

export class TeamSettingsModel {
  protected _client: PlainGraphQLClient;
  protected _data: TeamSettingsFieldsFragment;

  public readonly createdAt: TeamSettingsFieldsFragment["createdAt"];
  public readonly id: TeamSettingsFieldsFragment["id"];
  public readonly isRoundRobinEnabled: TeamSettingsFieldsFragment["isRoundRobinEnabled"];
  public readonly labelTypeId: TeamSettingsFieldsFragment["labelTypeId"];
  public readonly roundRobinMaxCapacity: TeamSettingsFieldsFragment["roundRobinMaxCapacity"];
  public readonly updatedAt: TeamSettingsFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: TeamSettingsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isRoundRobinEnabled = data.isRoundRobinEnabled;
    this.labelTypeId = data.labelTypeId;
    this.roundRobinMaxCapacity = data.roundRobinMaxCapacity;
    this.updatedAt = data.updatedAt;
  }
}

export class TenantModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldsFragment;

  public readonly createdAt: TenantFieldsFragment["createdAt"];
  public readonly externalId: TenantFieldsFragment["externalId"];
  public readonly id: TenantFieldsFragment["id"];
  public readonly name: TenantFieldsFragment["name"];
  public readonly source: TenantFieldsFragment["source"];
  public readonly updatedAt: TenantFieldsFragment["updatedAt"];
  public readonly url: TenantFieldsFragment["url"];

  constructor(client: PlainGraphQLClient, data: TenantFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.externalId = data.externalId;
    this.id = data.id;
    this.name = data.name;
    this.source = data.source;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
  }

  public get tier(): Promise<TierModel | undefined> {
    const id = this._data.tier?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<TierQuery, TierQueryVariables>(
      TierDocument,
      { tierId: id } as TierQueryVariables
    ).then(r => r.tier ? new TierModel(this._client, r.tier) : undefined);
  }
}

export class TenantFieldModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldFieldsFragment;

  public readonly createdAt: TenantFieldFieldsFragment["createdAt"];
  public readonly externalFieldId: TenantFieldFieldsFragment["externalFieldId"];
  public readonly id: TenantFieldFieldsFragment["id"];
  public readonly updatedAt: TenantFieldFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: TenantFieldFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.externalFieldId = data.externalFieldId;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
  }
}

export class TenantFieldSchemaModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldSchemaFieldsFragment;

  public readonly createdAt: TenantFieldSchemaFieldsFragment["createdAt"];
  public readonly externalFieldId: TenantFieldSchemaFieldsFragment["externalFieldId"];
  public readonly id: TenantFieldSchemaFieldsFragment["id"];
  public readonly isVisible: TenantFieldSchemaFieldsFragment["isVisible"];
  public readonly label: TenantFieldSchemaFieldsFragment["label"];
  public readonly mapsTo: TenantFieldSchemaFieldsFragment["mapsTo"];
  public readonly options: TenantFieldSchemaFieldsFragment["options"];
  public readonly order: TenantFieldSchemaFieldsFragment["order"];
  public readonly source: TenantFieldSchemaFieldsFragment["source"];
  public readonly type: TenantFieldSchemaFieldsFragment["type"];
  public readonly updatedAt: TenantFieldSchemaFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: TenantFieldSchemaFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.externalFieldId = data.externalFieldId;
    this.id = data.id;
    this.isVisible = data.isVisible;
    this.label = data.label;
    this.mapsTo = data.mapsTo;
    this.options = data.options;
    this.order = data.order;
    this.source = data.source;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
  }
}

export class TenantTierMembershipModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantTierMembershipFieldsFragment;

  public readonly createdAt: TenantTierMembershipFieldsFragment["createdAt"];
  public readonly id: TenantTierMembershipFieldsFragment["id"];
  public readonly tenantId: TenantTierMembershipFieldsFragment["tenantId"];
  public readonly tierId: TenantTierMembershipFieldsFragment["tierId"];
  public readonly updatedAt: TenantTierMembershipFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: TenantTierMembershipFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.tenantId = data.tenantId;
    this.tierId = data.tierId;
    this.updatedAt = data.updatedAt;
  }
}

export class ThreadModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadFieldsFragment;

  public readonly agentStatus: ThreadFieldsFragment["agentStatus"];
  public readonly agentStatusUpdatedAt: ThreadFieldsFragment["agentStatusUpdatedAt"];
  public readonly assignedAt: ThreadFieldsFragment["assignedAt"];
  public readonly channel: ThreadFieldsFragment["channel"];
  public readonly createdAt: ThreadFieldsFragment["createdAt"];
  public readonly description: ThreadFieldsFragment["description"];
  public readonly externalId: ThreadFieldsFragment["externalId"];
  public readonly id: ThreadFieldsFragment["id"];
  public readonly lockedAt: ThreadFieldsFragment["lockedAt"];
  public readonly previewText: ThreadFieldsFragment["previewText"];
  public readonly priority: ThreadFieldsFragment["priority"];
  public readonly ref: ThreadFieldsFragment["ref"];
  public readonly status: ThreadFieldsFragment["status"];
  public readonly statusChangedAt: ThreadFieldsFragment["statusChangedAt"];
  public readonly supportEmailAddresses: ThreadFieldsFragment["supportEmailAddresses"];
  public readonly title: ThreadFieldsFragment["title"];
  public readonly updatedAt: ThreadFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadFieldsFragment) {
    this._client = client;
    this._data = data;
    this.agentStatus = data.agentStatus;
    this.agentStatusUpdatedAt = data.agentStatusUpdatedAt;
    this.assignedAt = data.assignedAt;
    this.channel = data.channel;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.externalId = data.externalId;
    this.id = data.id;
    this.lockedAt = data.lockedAt;
    this.previewText = data.previewText;
    this.priority = data.priority;
    this.ref = data.ref;
    this.status = data.status;
    this.statusChangedAt = data.statusChangedAt;
    this.supportEmailAddresses = data.supportEmailAddresses;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }

  public get customer(): Promise<CustomerModel | undefined> {
    const id = this._data.customer?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CustomerQuery, CustomerQueryVariables>(
      CustomerDocument,
      { customerId: id } as CustomerQueryVariables
    ).then(r => r.customer ? new CustomerModel(this._client, r.customer) : undefined);
  }

  public get tenant(): Promise<TenantModel | undefined> {
    const id = this._data.tenant?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<TenantQuery, TenantQueryVariables>(
      TenantDocument,
      { tenantId: id } as TenantQueryVariables
    ).then(r => r.tenant ? new TenantModel(this._client, r.tenant) : undefined);
  }

  public get tier(): Promise<TierModel | undefined> {
    const id = this._data.tier?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<TierQuery, TierQueryVariables>(
      TierDocument,
      { tierId: id } as TierQueryVariables
    ).then(r => r.tier ? new TierModel(this._client, r.tier) : undefined);
  }
}

export class ThreadClusterModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadClusterFieldsFragment;

  public readonly category: ThreadClusterFieldsFragment["category"];
  public readonly confidence: ThreadClusterFieldsFragment["confidence"];
  public readonly createdAt: ThreadClusterFieldsFragment["createdAt"];
  public readonly description: ThreadClusterFieldsFragment["description"];
  public readonly emoji: ThreadClusterFieldsFragment["emoji"];
  public readonly id: ThreadClusterFieldsFragment["id"];
  public readonly sentiment: ThreadClusterFieldsFragment["sentiment"];
  public readonly threads: ThreadClusterFieldsFragment["threads"];
  public readonly title: ThreadClusterFieldsFragment["title"];
  public readonly updatedAt: ThreadClusterFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ThreadClusterFieldsFragment) {
    this._client = client;
    this._data = data;
    this.category = data.category;
    this.confidence = data.confidence;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.emoji = data.emoji;
    this.id = data.id;
    this.sentiment = data.sentiment;
    this.threads = data.threads;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }
}

export class ThreadDiscussionModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionFieldsFragment;

  public readonly createdAt: ThreadDiscussionFieldsFragment["createdAt"];
  public readonly emailRecipients: ThreadDiscussionFieldsFragment["emailRecipients"];
  public readonly id: ThreadDiscussionFieldsFragment["id"];
  public readonly resolvedAt: ThreadDiscussionFieldsFragment["resolvedAt"];
  public readonly slackChannelId: ThreadDiscussionFieldsFragment["slackChannelId"];
  public readonly slackChannelName: ThreadDiscussionFieldsFragment["slackChannelName"];
  public readonly slackMessageLink: ThreadDiscussionFieldsFragment["slackMessageLink"];
  public readonly slackTeamId: ThreadDiscussionFieldsFragment["slackTeamId"];
  public readonly threadId: ThreadDiscussionFieldsFragment["threadId"];
  public readonly title: ThreadDiscussionFieldsFragment["title"];
  public readonly type: ThreadDiscussionFieldsFragment["type"];
  public readonly updatedAt: ThreadDiscussionFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ThreadDiscussionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.emailRecipients = data.emailRecipients;
    this.id = data.id;
    this.resolvedAt = data.resolvedAt;
    this.slackChannelId = data.slackChannelId;
    this.slackChannelName = data.slackChannelName;
    this.slackMessageLink = data.slackMessageLink;
    this.slackTeamId = data.slackTeamId;
    this.threadId = data.threadId;
    this.title = data.title;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
  }
}

export class ThreadDiscussionMessageModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionMessageFieldsFragment;

  public readonly createdAt: ThreadDiscussionMessageFieldsFragment["createdAt"];
  public readonly deletedOnSlackAt: ThreadDiscussionMessageFieldsFragment["deletedOnSlackAt"];
  public readonly id: ThreadDiscussionMessageFieldsFragment["id"];
  public readonly lastEditedOnSlackAt: ThreadDiscussionMessageFieldsFragment["lastEditedOnSlackAt"];
  public readonly slackMessageLink: ThreadDiscussionMessageFieldsFragment["slackMessageLink"];
  public readonly text: ThreadDiscussionMessageFieldsFragment["text"];
  public readonly threadDiscussionId: ThreadDiscussionMessageFieldsFragment["threadDiscussionId"];
  public readonly updatedAt: ThreadDiscussionMessageFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ThreadDiscussionMessageFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.deletedOnSlackAt = data.deletedOnSlackAt;
    this.id = data.id;
    this.lastEditedOnSlackAt = data.lastEditedOnSlackAt;
    this.slackMessageLink = data.slackMessageLink;
    this.text = data.text;
    this.threadDiscussionId = data.threadDiscussionId;
    this.updatedAt = data.updatedAt;
  }
}

export class ThreadEventModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadEventFieldsFragment;

  public readonly createdAt: ThreadEventFieldsFragment["createdAt"];
  public readonly customerId: ThreadEventFieldsFragment["customerId"];
  public readonly id: ThreadEventFieldsFragment["id"];
  public readonly threadId: ThreadEventFieldsFragment["threadId"];
  public readonly title: ThreadEventFieldsFragment["title"];
  public readonly updatedAt: ThreadEventFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ThreadEventFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerId = data.customerId;
    this.id = data.id;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
  }
}

export class ThreadFieldModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadFieldFieldsFragment;

  public readonly booleanValue: ThreadFieldFieldsFragment["booleanValue"];
  public readonly createdAt: ThreadFieldFieldsFragment["createdAt"];
  public readonly dateValue: ThreadFieldFieldsFragment["dateValue"];
  public readonly id: ThreadFieldFieldsFragment["id"];
  public readonly isAiGenerated: ThreadFieldFieldsFragment["isAiGenerated"];
  public readonly key: ThreadFieldFieldsFragment["key"];
  public readonly numberValue: ThreadFieldFieldsFragment["numberValue"];
  public readonly stringValue: ThreadFieldFieldsFragment["stringValue"];
  public readonly threadId: ThreadFieldFieldsFragment["threadId"];
  public readonly type: ThreadFieldFieldsFragment["type"];
  public readonly updatedAt: ThreadFieldFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ThreadFieldFieldsFragment) {
    this._client = client;
    this._data = data;
    this.booleanValue = data.booleanValue;
    this.createdAt = data.createdAt;
    this.dateValue = data.dateValue;
    this.id = data.id;
    this.isAiGenerated = data.isAiGenerated;
    this.key = data.key;
    this.numberValue = data.numberValue;
    this.stringValue = data.stringValue;
    this.threadId = data.threadId;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
  }
}

export class ThreadFieldSchemaModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadFieldSchemaFieldsFragment;

  public readonly createdAt: ThreadFieldSchemaFieldsFragment["createdAt"];
  public readonly defaultBooleanValue: ThreadFieldSchemaFieldsFragment["defaultBooleanValue"];
  public readonly defaultDateValue: ThreadFieldSchemaFieldsFragment["defaultDateValue"];
  public readonly defaultNumberValue: ThreadFieldSchemaFieldsFragment["defaultNumberValue"];
  public readonly defaultStringValue: ThreadFieldSchemaFieldsFragment["defaultStringValue"];
  public readonly dependsOnLabels: ThreadFieldSchemaFieldsFragment["dependsOnLabels"];
  public readonly dependsOnThreadField: ThreadFieldSchemaFieldsFragment["dependsOnThreadField"];
  public readonly description: ThreadFieldSchemaFieldsFragment["description"];
  public readonly enumValues: ThreadFieldSchemaFieldsFragment["enumValues"];
  public readonly id: ThreadFieldSchemaFieldsFragment["id"];
  public readonly isAiAutoFillEnabled: ThreadFieldSchemaFieldsFragment["isAiAutoFillEnabled"];
  public readonly isClientReadonly: ThreadFieldSchemaFieldsFragment["isClientReadonly"];
  public readonly isRequired: ThreadFieldSchemaFieldsFragment["isRequired"];
  public readonly key: ThreadFieldSchemaFieldsFragment["key"];
  public readonly label: ThreadFieldSchemaFieldsFragment["label"];
  public readonly order: ThreadFieldSchemaFieldsFragment["order"];
  public readonly type: ThreadFieldSchemaFieldsFragment["type"];
  public readonly updatedAt: ThreadFieldSchemaFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: ThreadFieldSchemaFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.defaultBooleanValue = data.defaultBooleanValue;
    this.defaultDateValue = data.defaultDateValue;
    this.defaultNumberValue = data.defaultNumberValue;
    this.defaultStringValue = data.defaultStringValue;
    this.dependsOnLabels = data.dependsOnLabels;
    this.dependsOnThreadField = data.dependsOnThreadField;
    this.description = data.description;
    this.enumValues = data.enumValues;
    this.id = data.id;
    this.isAiAutoFillEnabled = data.isAiAutoFillEnabled;
    this.isClientReadonly = data.isClientReadonly;
    this.isRequired = data.isRequired;
    this.key = data.key;
    this.label = data.label;
    this.order = data.order;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
  }
}

export class ThreadLinkCandidateModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadLinkCandidateFieldsFragment;

  public readonly description: ThreadLinkCandidateFieldsFragment["description"];
  public readonly sourceId: ThreadLinkCandidateFieldsFragment["sourceId"];
  public readonly sourceStatus: ThreadLinkCandidateFieldsFragment["sourceStatus"];
  public readonly sourceType: ThreadLinkCandidateFieldsFragment["sourceType"];
  public readonly status: ThreadLinkCandidateFieldsFragment["status"];
  public readonly title: ThreadLinkCandidateFieldsFragment["title"];
  public readonly url: ThreadLinkCandidateFieldsFragment["url"];
  constructor(client: PlainGraphQLClient, data: ThreadLinkCandidateFieldsFragment) {
    this._client = client;
    this._data = data;
    this.description = data.description;
    this.sourceId = data.sourceId;
    this.sourceStatus = data.sourceStatus;
    this.sourceType = data.sourceType;
    this.status = data.status;
    this.title = data.title;
    this.url = data.url;
  }
}

export class ThreadLinkGroupModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadLinkGroupFieldsFragment;

  public readonly currentViewRank: ThreadLinkGroupFieldsFragment["currentViewRank"];
  public readonly defaultViewRank: ThreadLinkGroupFieldsFragment["defaultViewRank"];
  public readonly id: ThreadLinkGroupFieldsFragment["id"];
  constructor(client: PlainGraphQLClient, data: ThreadLinkGroupFieldsFragment) {
    this._client = client;
    this._data = data;
    this.currentViewRank = data.currentViewRank;
    this.defaultViewRank = data.defaultViewRank;
    this.id = data.id;
  }
}

export class ThreadWithDistanceModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadWithDistanceFieldsFragment;

  public readonly distance: ThreadWithDistanceFieldsFragment["distance"];

  constructor(client: PlainGraphQLClient, data: ThreadWithDistanceFieldsFragment) {
    this._client = client;
    this._data = data;
    this.distance = data.distance;
  }

  public get thread(): Promise<ThreadModel | undefined> {
    const id = this._data.thread?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<ThreadQuery, ThreadQueryVariables>(
      ThreadDocument,
      { threadId: id } as ThreadQueryVariables
    ).then(r => r.thread ? new ThreadModel(this._client, r.thread) : undefined);
  }
}

export class TierModel {
  protected _client: PlainGraphQLClient;
  protected _data: TierFieldsFragment;

  public readonly color: TierFieldsFragment["color"];
  public readonly createdAt: TierFieldsFragment["createdAt"];
  public readonly defaultPriority: TierFieldsFragment["defaultPriority"];
  public readonly defaultThreadPriority: TierFieldsFragment["defaultThreadPriority"];
  public readonly externalId: TierFieldsFragment["externalId"];
  public readonly id: TierFieldsFragment["id"];
  public readonly isDefault: TierFieldsFragment["isDefault"];
  public readonly isMachineTier: TierFieldsFragment["isMachineTier"];
  public readonly name: TierFieldsFragment["name"];
  public readonly updatedAt: TierFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: TierFieldsFragment) {
    this._client = client;
    this._data = data;
    this.color = data.color;
    this.createdAt = data.createdAt;
    this.defaultPriority = data.defaultPriority;
    this.defaultThreadPriority = data.defaultThreadPriority;
    this.externalId = data.externalId;
    this.id = data.id;
    this.isDefault = data.isDefault;
    this.isMachineTier = data.isMachineTier;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
  }
}

export class TimelineEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: TimelineEntryFieldsFragment;

  public readonly customerId: TimelineEntryFieldsFragment["customerId"];
  public readonly id: TimelineEntryFieldsFragment["id"];
  public readonly llmText: TimelineEntryFieldsFragment["llmText"];
  public readonly threadId: TimelineEntryFieldsFragment["threadId"];
  public readonly timestamp: TimelineEntryFieldsFragment["timestamp"];
  constructor(client: PlainGraphQLClient, data: TimelineEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.id = data.id;
    this.llmText = data.llmText;
    this.threadId = data.threadId;
    this.timestamp = data.timestamp;
  }
}

export class TimeSeriesMetricModel {
  protected _client: PlainGraphQLClient;
  protected _data: TimeSeriesMetricFieldsFragment;

  public readonly timestamps: TimeSeriesMetricFieldsFragment["timestamps"];
  constructor(client: PlainGraphQLClient, data: TimeSeriesMetricFieldsFragment) {
    this._client = client;
    this._data = data;
    this.timestamps = data.timestamps;
  }
}

export class UserModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserFieldsFragment;

  public readonly avatarUrl: UserFieldsFragment["avatarUrl"];
  public readonly createdAt: UserFieldsFragment["createdAt"];
  public readonly deletedAt: UserFieldsFragment["deletedAt"];
  public readonly email: UserFieldsFragment["email"];
  public readonly fullName: UserFieldsFragment["fullName"];
  public readonly id: UserFieldsFragment["id"];
  public readonly isDeleted: UserFieldsFragment["isDeleted"];
  public readonly publicName: UserFieldsFragment["publicName"];
  public readonly slackIdentities: UserFieldsFragment["slackIdentities"];
  public readonly status: UserFieldsFragment["status"];
  public readonly statusChangedAt: UserFieldsFragment["statusChangedAt"];
  public readonly updatedAt: UserFieldsFragment["updatedAt"];

  constructor(client: PlainGraphQLClient, data: UserFieldsFragment) {
    this._client = client;
    this._data = data;
    this.avatarUrl = data.avatarUrl;
    this.createdAt = data.createdAt;
    this.deletedAt = data.deletedAt;
    this.email = data.email;
    this.fullName = data.fullName;
    this.id = data.id;
    this.isDeleted = data.isDeleted;
    this.publicName = data.publicName;
    this.slackIdentities = data.slackIdentities;
    this.status = data.status;
    this.statusChangedAt = data.statusChangedAt;
    this.updatedAt = data.updatedAt;
  }

  public get defaultSavedThreadsView(): Promise<SavedThreadsViewModel | undefined> {
    const id = this._data.defaultSavedThreadsView?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<SavedThreadsViewQuery, SavedThreadsViewQueryVariables>(
      SavedThreadsViewDocument,
      { savedThreadsViewId: id } as SavedThreadsViewQueryVariables
    ).then(r => r.savedThreadsView ? new SavedThreadsViewModel(this._client, r.savedThreadsView) : undefined);
  }
}

export class UserAuthDiscordChannelIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserAuthDiscordChannelIntegrationFieldsFragment;

  public readonly createdAt: UserAuthDiscordChannelIntegrationFieldsFragment["createdAt"];
  public readonly discordGlobalName: UserAuthDiscordChannelIntegrationFieldsFragment["discordGlobalName"];
  public readonly discordGuildId: UserAuthDiscordChannelIntegrationFieldsFragment["discordGuildId"];
  public readonly discordUserEmail: UserAuthDiscordChannelIntegrationFieldsFragment["discordUserEmail"];
  public readonly discordUserId: UserAuthDiscordChannelIntegrationFieldsFragment["discordUserId"];
  public readonly discordUsername: UserAuthDiscordChannelIntegrationFieldsFragment["discordUsername"];
  public readonly id: UserAuthDiscordChannelIntegrationFieldsFragment["id"];
  public readonly updatedAt: UserAuthDiscordChannelIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: UserAuthDiscordChannelIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.discordGlobalName = data.discordGlobalName;
    this.discordGuildId = data.discordGuildId;
    this.discordUserEmail = data.discordUserEmail;
    this.discordUserId = data.discordUserId;
    this.discordUsername = data.discordUsername;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
  }
}

export class UserAuthSlackIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserAuthSlackIntegrationFieldsFragment;

  public readonly createdAt: UserAuthSlackIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: UserAuthSlackIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: UserAuthSlackIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackTeamId: UserAuthSlackIntegrationFieldsFragment["slackTeamId"];
  public readonly slackTeamName: UserAuthSlackIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: UserAuthSlackIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: UserAuthSlackIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.isReinstallRequired = data.isReinstallRequired;
    this.slackTeamId = data.slackTeamId;
    this.slackTeamName = data.slackTeamName;
    this.updatedAt = data.updatedAt;
  }
}

export class UserLinearIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserLinearIntegrationFieldsFragment;

  public readonly createdAt: UserLinearIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: UserLinearIntegrationFieldsFragment["integrationId"];
  public readonly linearOrganisationId: UserLinearIntegrationFieldsFragment["linearOrganisationId"];
  public readonly linearOrganisationName: UserLinearIntegrationFieldsFragment["linearOrganisationName"];
  public readonly updatedAt: UserLinearIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: UserLinearIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.linearOrganisationId = data.linearOrganisationId;
    this.linearOrganisationName = data.linearOrganisationName;
    this.updatedAt = data.updatedAt;
  }
}

export class UserMSTeamsIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserMsTeamsIntegrationFieldsFragment;

  public readonly createdAt: UserMsTeamsIntegrationFieldsFragment["createdAt"];
  public readonly id: UserMsTeamsIntegrationFieldsFragment["id"];
  public readonly isReinstallRequired: UserMsTeamsIntegrationFieldsFragment["isReinstallRequired"];
  public readonly msTeamsPreferredUsername: UserMsTeamsIntegrationFieldsFragment["msTeamsPreferredUsername"];
  public readonly msTeamsTenantId: UserMsTeamsIntegrationFieldsFragment["msTeamsTenantId"];
  public readonly updatedAt: UserMsTeamsIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: UserMsTeamsIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isReinstallRequired = data.isReinstallRequired;
    this.msTeamsPreferredUsername = data.msTeamsPreferredUsername;
    this.msTeamsTenantId = data.msTeamsTenantId;
    this.updatedAt = data.updatedAt;
  }
}

export class UserSlackIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserSlackIntegrationFieldsFragment;

  public readonly createdAt: UserSlackIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: UserSlackIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: UserSlackIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackTeamName: UserSlackIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: UserSlackIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: UserSlackIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.isReinstallRequired = data.isReinstallRequired;
    this.slackTeamName = data.slackTeamName;
    this.updatedAt = data.updatedAt;
  }
}

export class UserWorkingHoursModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserWorkingHoursFieldsFragment;

  public readonly createdAt: UserWorkingHoursFieldsFragment["createdAt"];
  public readonly id: UserWorkingHoursFieldsFragment["id"];
  public readonly isEnabled: UserWorkingHoursFieldsFragment["isEnabled"];
  public readonly nextStatusTransitionAt: UserWorkingHoursFieldsFragment["nextStatusTransitionAt"];
  public readonly nextStatusTransitionTo: UserWorkingHoursFieldsFragment["nextStatusTransitionTo"];
  public readonly slots: UserWorkingHoursFieldsFragment["slots"];
  public readonly timezone: UserWorkingHoursFieldsFragment["timezone"];
  public readonly updatedAt: UserWorkingHoursFieldsFragment["updatedAt"];
  public readonly userId: UserWorkingHoursFieldsFragment["userId"];
  constructor(client: PlainGraphQLClient, data: UserWorkingHoursFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.nextStatusTransitionAt = data.nextStatusTransitionAt;
    this.nextStatusTransitionTo = data.nextStatusTransitionTo;
    this.slots = data.slots;
    this.timezone = data.timezone;
    this.updatedAt = data.updatedAt;
    this.userId = data.userId;
  }
}

export class WebhookTargetModel {
  protected _client: PlainGraphQLClient;
  protected _data: WebhookTargetFieldsFragment;

  public readonly createdAt: WebhookTargetFieldsFragment["createdAt"];
  public readonly description: WebhookTargetFieldsFragment["description"];
  public readonly eventSubscriptions: WebhookTargetFieldsFragment["eventSubscriptions"];
  public readonly id: WebhookTargetFieldsFragment["id"];
  public readonly isEnabled: WebhookTargetFieldsFragment["isEnabled"];
  public readonly updatedAt: WebhookTargetFieldsFragment["updatedAt"];
  public readonly url: WebhookTargetFieldsFragment["url"];
  public readonly version: WebhookTargetFieldsFragment["version"];
  constructor(client: PlainGraphQLClient, data: WebhookTargetFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.eventSubscriptions = data.eventSubscriptions;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
    this.version = data.version;
  }
}

export class WorkflowModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkflowFieldsFragment;

  public readonly createdAt: WorkflowFieldsFragment["createdAt"];
  public readonly id: WorkflowFieldsFragment["id"];
  public readonly name: WorkflowFieldsFragment["name"];
  public readonly order: WorkflowFieldsFragment["order"];
  public readonly publishedAt: WorkflowFieldsFragment["publishedAt"];
  public readonly startStepId: WorkflowFieldsFragment["startStepId"];
  public readonly trigger: WorkflowFieldsFragment["trigger"];
  public readonly updatedAt: WorkflowFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkflowFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.name = data.name;
    this.order = data.order;
    this.publishedAt = data.publishedAt;
    this.startStepId = data.startStepId;
    this.trigger = data.trigger;
    this.updatedAt = data.updatedAt;
  }
}

export class WorkflowExecutionModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkflowExecutionFieldsFragment;

  public readonly completedAt: WorkflowExecutionFieldsFragment["completedAt"];
  public readonly entityId: WorkflowExecutionFieldsFragment["entityId"];
  public readonly entityType: WorkflowExecutionFieldsFragment["entityType"];
  public readonly errorMessage: WorkflowExecutionFieldsFragment["errorMessage"];
  public readonly executionDurationMs: WorkflowExecutionFieldsFragment["executionDurationMs"];
  public readonly executionStatus: WorkflowExecutionFieldsFragment["executionStatus"];
  public readonly id: WorkflowExecutionFieldsFragment["id"];
  public readonly startedAt: WorkflowExecutionFieldsFragment["startedAt"];
  public readonly triggeredBy: WorkflowExecutionFieldsFragment["triggeredBy"];
  public readonly workflowId: WorkflowExecutionFieldsFragment["workflowId"];
  constructor(client: PlainGraphQLClient, data: WorkflowExecutionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.completedAt = data.completedAt;
    this.entityId = data.entityId;
    this.entityType = data.entityType;
    this.errorMessage = data.errorMessage;
    this.executionDurationMs = data.executionDurationMs;
    this.executionStatus = data.executionStatus;
    this.id = data.id;
    this.startedAt = data.startedAt;
    this.triggeredBy = data.triggeredBy;
    this.workflowId = data.workflowId;
  }
}

export class WorkflowRuleModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkflowRuleFieldsFragment;

  public readonly createdAt: WorkflowRuleFieldsFragment["createdAt"];
  public readonly id: WorkflowRuleFieldsFragment["id"];
  public readonly name: WorkflowRuleFieldsFragment["name"];
  public readonly order: WorkflowRuleFieldsFragment["order"];
  public readonly payload: WorkflowRuleFieldsFragment["payload"];
  public readonly publishedAt: WorkflowRuleFieldsFragment["publishedAt"];
  public readonly updatedAt: WorkflowRuleFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkflowRuleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.name = data.name;
    this.order = data.order;
    this.payload = data.payload;
    this.publishedAt = data.publishedAt;
    this.updatedAt = data.updatedAt;
  }
}

export class WorkflowStepModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkflowStepFieldsFragment;

  public readonly createdAt: WorkflowStepFieldsFragment["createdAt"];
  public readonly id: WorkflowStepFieldsFragment["id"];
  public readonly name: WorkflowStepFieldsFragment["name"];
  public readonly payload: WorkflowStepFieldsFragment["payload"];
  public readonly positionX: WorkflowStepFieldsFragment["positionX"];
  public readonly positionY: WorkflowStepFieldsFragment["positionY"];
  public readonly transitions: WorkflowStepFieldsFragment["transitions"];
  public readonly type: WorkflowStepFieldsFragment["type"];
  public readonly updatedAt: WorkflowStepFieldsFragment["updatedAt"];
  public readonly workflowId: WorkflowStepFieldsFragment["workflowId"];
  constructor(client: PlainGraphQLClient, data: WorkflowStepFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.name = data.name;
    this.payload = data.payload;
    this.positionX = data.positionX;
    this.positionY = data.positionY;
    this.transitions = data.transitions;
    this.type = data.type;
    this.updatedAt = data.updatedAt;
    this.workflowId = data.workflowId;
  }
}

export class WorkspaceModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceFieldsFragment;

  public readonly createdAt: WorkspaceFieldsFragment["createdAt"];
  public readonly domainName: WorkspaceFieldsFragment["domainName"];
  public readonly domainNames: WorkspaceFieldsFragment["domainNames"];
  public readonly id: WorkspaceFieldsFragment["id"];
  public readonly isDemoWorkspace: WorkspaceFieldsFragment["isDemoWorkspace"];
  public readonly name: WorkspaceFieldsFragment["name"];
  public readonly publicName: WorkspaceFieldsFragment["publicName"];
  public readonly updatedAt: WorkspaceFieldsFragment["updatedAt"];
  public readonly workOSOrganizationId: WorkspaceFieldsFragment["workOSOrganizationId"];
  public readonly workspaceChatSettings: WorkspaceFieldsFragment["workspaceChatSettings"];
  constructor(client: PlainGraphQLClient, data: WorkspaceFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.domainName = data.domainName;
    this.domainNames = data.domainNames;
    this.id = data.id;
    this.isDemoWorkspace = data.isDemoWorkspace;
    this.name = data.name;
    this.publicName = data.publicName;
    this.updatedAt = data.updatedAt;
    this.workOSOrganizationId = data.workOSOrganizationId;
    this.workspaceChatSettings = data.workspaceChatSettings;
  }
}

export class WorkspaceCursorIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceCursorIntegrationFieldsFragment;

  public readonly createdAt: WorkspaceCursorIntegrationFieldsFragment["createdAt"];
  public readonly id: WorkspaceCursorIntegrationFieldsFragment["id"];
  public readonly token: WorkspaceCursorIntegrationFieldsFragment["token"];
  public readonly updatedAt: WorkspaceCursorIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkspaceCursorIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.token = data.token;
    this.updatedAt = data.updatedAt;
  }
}

export class WorkspaceDiscordChannelIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceDiscordChannelIntegrationFieldsFragment;

  public readonly createdAt: WorkspaceDiscordChannelIntegrationFieldsFragment["createdAt"];
  public readonly discordGuildId: WorkspaceDiscordChannelIntegrationFieldsFragment["discordGuildId"];
  public readonly discordGuildName: WorkspaceDiscordChannelIntegrationFieldsFragment["discordGuildName"];
  public readonly id: WorkspaceDiscordChannelIntegrationFieldsFragment["id"];
  public readonly updatedAt: WorkspaceDiscordChannelIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkspaceDiscordChannelIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.discordGuildId = data.discordGuildId;
    this.discordGuildName = data.discordGuildName;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
  }
}

export class WorkspaceDiscordIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceDiscordIntegrationFieldsFragment;

  public readonly createdAt: WorkspaceDiscordIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: WorkspaceDiscordIntegrationFieldsFragment["integrationId"];
  public readonly name: WorkspaceDiscordIntegrationFieldsFragment["name"];
  public readonly updatedAt: WorkspaceDiscordIntegrationFieldsFragment["updatedAt"];
  public readonly webhookUrl: WorkspaceDiscordIntegrationFieldsFragment["webhookUrl"];
  constructor(client: PlainGraphQLClient, data: WorkspaceDiscordIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
    this.webhookUrl = data.webhookUrl;
  }
}

export class WorkspaceEmailDomainSettingsModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceEmailDomainSettingsFieldsFragment;

  public readonly alternateSupportEmailAddresses: WorkspaceEmailDomainSettingsFieldsFragment["alternateSupportEmailAddresses"];
  public readonly domainName: WorkspaceEmailDomainSettingsFieldsFragment["domainName"];
  public readonly inboundForwardingEmail: WorkspaceEmailDomainSettingsFieldsFragment["inboundForwardingEmail"];
  public readonly isDomainConfigured: WorkspaceEmailDomainSettingsFieldsFragment["isDomainConfigured"];
  public readonly isForwardingConfigured: WorkspaceEmailDomainSettingsFieldsFragment["isForwardingConfigured"];
  public readonly supportEmailAddress: WorkspaceEmailDomainSettingsFieldsFragment["supportEmailAddress"];
  constructor(client: PlainGraphQLClient, data: WorkspaceEmailDomainSettingsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.alternateSupportEmailAddresses = data.alternateSupportEmailAddresses;
    this.domainName = data.domainName;
    this.inboundForwardingEmail = data.inboundForwardingEmail;
    this.isDomainConfigured = data.isDomainConfigured;
    this.isForwardingConfigured = data.isForwardingConfigured;
    this.supportEmailAddress = data.supportEmailAddress;
  }
}

export class WorkspaceEmailSettingsModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceEmailSettingsFieldsFragment;

  public readonly bccEmailAddresses: WorkspaceEmailSettingsFieldsFragment["bccEmailAddresses"];
  public readonly isEnabled: WorkspaceEmailSettingsFieldsFragment["isEnabled"];
  constructor(client: PlainGraphQLClient, data: WorkspaceEmailSettingsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.bccEmailAddresses = data.bccEmailAddresses;
    this.isEnabled = data.isEnabled;
  }
}

export class WorkspaceFileUploadUrlModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceFileUploadUrlFieldsFragment;

  public readonly expiresAt: WorkspaceFileUploadUrlFieldsFragment["expiresAt"];
  public readonly uploadFormData: WorkspaceFileUploadUrlFieldsFragment["uploadFormData"];
  public readonly uploadFormUrl: WorkspaceFileUploadUrlFieldsFragment["uploadFormUrl"];
  constructor(client: PlainGraphQLClient, data: WorkspaceFileUploadUrlFieldsFragment) {
    this._client = client;
    this._data = data;
    this.expiresAt = data.expiresAt;
    this.uploadFormData = data.uploadFormData;
    this.uploadFormUrl = data.uploadFormUrl;
  }
}

export class WorkspaceHmacModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceHmacFieldsFragment;

  public readonly createdAt: WorkspaceHmacFieldsFragment["createdAt"];
  public readonly hmacSecret: WorkspaceHmacFieldsFragment["hmacSecret"];
  public readonly updatedAt: WorkspaceHmacFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkspaceHmacFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.hmacSecret = data.hmacSecret;
    this.updatedAt = data.updatedAt;
  }
}

export class WorkspaceInviteModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceInviteFieldsFragment;

  public readonly createdAt: WorkspaceInviteFieldsFragment["createdAt"];
  public readonly email: WorkspaceInviteFieldsFragment["email"];
  public readonly id: WorkspaceInviteFieldsFragment["id"];
  public readonly isAccepted: WorkspaceInviteFieldsFragment["isAccepted"];
  public readonly updatedAt: WorkspaceInviteFieldsFragment["updatedAt"];
  public readonly usingBillingRotaSeat: WorkspaceInviteFieldsFragment["usingBillingRotaSeat"];

  constructor(client: PlainGraphQLClient, data: WorkspaceInviteFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.email = data.email;
    this.id = data.id;
    this.isAccepted = data.isAccepted;
    this.updatedAt = data.updatedAt;
    this.usingBillingRotaSeat = data.usingBillingRotaSeat;
  }

  public get customRole(): Promise<CustomRoleModel | undefined> {
    const id = this._data.customRole?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CustomRoleQuery, CustomRoleQueryVariables>(
      CustomRoleDocument,
      { customRoleId: id } as CustomRoleQueryVariables
    ).then(r => r.customRole ? new CustomRoleModel(this._client, r.customRole) : undefined);
  }

  public get workspace(): Promise<WorkspaceModel | undefined> {
    const id = this._data.workspace?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<WorkspaceQuery, WorkspaceQueryVariables>(
      WorkspaceDocument,
      { workspaceId: id } as WorkspaceQueryVariables
    ).then(r => r.workspace ? new WorkspaceModel(this._client, r.workspace) : undefined);
  }
}

export class WorkspaceMSTeamsIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceMsTeamsIntegrationFieldsFragment;

  public readonly createdAt: WorkspaceMsTeamsIntegrationFieldsFragment["createdAt"];
  public readonly id: WorkspaceMsTeamsIntegrationFieldsFragment["id"];
  public readonly isReinstallRequired: WorkspaceMsTeamsIntegrationFieldsFragment["isReinstallRequired"];
  public readonly msTeamsTenantId: WorkspaceMsTeamsIntegrationFieldsFragment["msTeamsTenantId"];
  public readonly updatedAt: WorkspaceMsTeamsIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkspaceMsTeamsIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isReinstallRequired = data.isReinstallRequired;
    this.msTeamsTenantId = data.msTeamsTenantId;
    this.updatedAt = data.updatedAt;
  }
}

export class WorkspaceSlackChannelIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceSlackChannelIntegrationFieldsFragment;

  public readonly createdAt: WorkspaceSlackChannelIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: WorkspaceSlackChannelIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: WorkspaceSlackChannelIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackTeamId: WorkspaceSlackChannelIntegrationFieldsFragment["slackTeamId"];
  public readonly slackTeamImageUrl68px: WorkspaceSlackChannelIntegrationFieldsFragment["slackTeamImageUrl68px"];
  public readonly slackTeamName: WorkspaceSlackChannelIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: WorkspaceSlackChannelIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkspaceSlackChannelIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.isReinstallRequired = data.isReinstallRequired;
    this.slackTeamId = data.slackTeamId;
    this.slackTeamImageUrl68px = data.slackTeamImageUrl68px;
    this.slackTeamName = data.slackTeamName;
    this.updatedAt = data.updatedAt;
  }
}

export class WorkspaceSlackIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceSlackIntegrationFieldsFragment;

  public readonly createdAt: WorkspaceSlackIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: WorkspaceSlackIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: WorkspaceSlackIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackChannelName: WorkspaceSlackIntegrationFieldsFragment["slackChannelName"];
  public readonly slackTeamId: WorkspaceSlackIntegrationFieldsFragment["slackTeamId"];
  public readonly slackTeamImageUrl68px: WorkspaceSlackIntegrationFieldsFragment["slackTeamImageUrl68px"];
  public readonly slackTeamName: WorkspaceSlackIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: WorkspaceSlackIntegrationFieldsFragment["updatedAt"];
  constructor(client: PlainGraphQLClient, data: WorkspaceSlackIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.isReinstallRequired = data.isReinstallRequired;
    this.slackChannelName = data.slackChannelName;
    this.slackTeamId = data.slackTeamId;
    this.slackTeamImageUrl68px = data.slackTeamImageUrl68px;
    this.slackTeamName = data.slackTeamName;
    this.updatedAt = data.updatedAt;
  }
}

export class PlainSdk {
  protected _client: PlainGraphQLClient;

  constructor(client: PlainGraphQLClient) {
    this._client = client;
  }

  async activeThreadCluster(variables: ActiveThreadClusterQueryVariables): Promise<ThreadClusterModel> {
    const response = await this._client.request<ActiveThreadClusterQuery, ActiveThreadClusterQueryVariables>(
      ActiveThreadClusterDocument, variables
    );
    if (!response.activeThreadCluster) {
      throw new Error("activeThreadCluster not found");
    }
    return new ThreadClusterModel(this._client, response.activeThreadCluster);
  }

  async aiToneRules(variables: AiToneRulesQueryVariables): Promise<PlainConnection<AiToneRuleModel>> {
    const response = await this._client.request<AiToneRulesQuery, AiToneRulesQueryVariables>(
      AiToneRulesDocument, variables
    );
    const conn = response.aiToneRules;
    return new PlainConnection<AiToneRuleModel>({
      nodes: conn.edges.map(e => new AiToneRuleModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.aiToneRules({ ...variables, ...cursor } as AiToneRulesQueryVariables),
    });
  }

  async autoresponder(variables: AutoresponderQueryVariables): Promise<AutoresponderModel> {
    const response = await this._client.request<AutoresponderQuery, AutoresponderQueryVariables>(
      AutoresponderDocument, variables
    );
    if (!response.autoresponder) {
      throw new Error("autoresponder not found");
    }
    return new AutoresponderModel(this._client, response.autoresponder);
  }

  async autoresponders(variables: AutorespondersQueryVariables): Promise<PlainConnection<AutoresponderModel>> {
    const response = await this._client.request<AutorespondersQuery, AutorespondersQueryVariables>(
      AutorespondersDocument, variables
    );
    const conn = response.autoresponders;
    return new PlainConnection<AutoresponderModel>({
      nodes: conn.edges.map(e => new AutoresponderModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.autoresponders({ ...variables, ...cursor } as AutorespondersQueryVariables),
    });
  }

  async billingPlans(variables: BillingPlansQueryVariables): Promise<PlainConnection<BillingPlanModel>> {
    const response = await this._client.request<BillingPlansQuery, BillingPlansQueryVariables>(
      BillingPlansDocument, variables
    );
    const conn = response.billingPlans;
    return new PlainConnection<BillingPlanModel>({
      nodes: conn.edges.map(e => new BillingPlanModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.billingPlans({ ...variables, ...cursor } as BillingPlansQueryVariables),
    });
  }

  async businessHours(): Promise<BusinessHoursModel> {
    const response = await this._client.request<BusinessHoursQuery, Record<string, never>>(
      BusinessHoursDocument
    );
    if (!response.businessHours) {
      throw new Error("businessHours not found");
    }
    return new BusinessHoursModel(this._client, response.businessHours);
  }

  async businessHoursSlots(): Promise<BusinessHoursSlotModel[]> {
    const response = await this._client.request<BusinessHoursSlotsQuery, Record<string, never>>(
      BusinessHoursSlotsDocument
    );
    return (response.businessHoursSlots ?? []).map(d => new BusinessHoursSlotModel(this._client, d));
  }

  async chatApp(variables: ChatAppQueryVariables): Promise<ChatAppModel> {
    const response = await this._client.request<ChatAppQuery, ChatAppQueryVariables>(
      ChatAppDocument, variables
    );
    if (!response.chatApp) {
      throw new Error("chatApp not found");
    }
    return new ChatAppModel(this._client, response.chatApp);
  }

  async chatAppSecret(variables: ChatAppSecretQueryVariables): Promise<ChatAppHiddenSecretModel> {
    const response = await this._client.request<ChatAppSecretQuery, ChatAppSecretQueryVariables>(
      ChatAppSecretDocument, variables
    );
    if (!response.chatAppSecret) {
      throw new Error("chatAppSecret not found");
    }
    return new ChatAppHiddenSecretModel(this._client, response.chatAppSecret);
  }

  async chatApps(variables: ChatAppsQueryVariables): Promise<PlainConnection<ChatAppModel>> {
    const response = await this._client.request<ChatAppsQuery, ChatAppsQueryVariables>(
      ChatAppsDocument, variables
    );
    const conn = response.chatApps;
    return new PlainConnection<ChatAppModel>({
      nodes: conn.edges.map(e => new ChatAppModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.chatApps({ ...variables, ...cursor } as ChatAppsQueryVariables),
    });
  }

  async companies(variables: CompaniesQueryVariables): Promise<PlainConnection<CompanyModel>> {
    const response = await this._client.request<CompaniesQuery, CompaniesQueryVariables>(
      CompaniesDocument, variables
    );
    const conn = response.companies;
    return new PlainConnection<CompanyModel>({
      nodes: conn.edges.map(e => new CompanyModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.companies({ ...variables, ...cursor } as CompaniesQueryVariables),
    });
  }

  async company(variables: CompanyQueryVariables): Promise<CompanyModel> {
    const response = await this._client.request<CompanyQuery, CompanyQueryVariables>(
      CompanyDocument, variables
    );
    if (!response.company) {
      throw new Error("company not found");
    }
    return new CompanyModel(this._client, response.company);
  }

  async connectedDiscordChannels(variables: ConnectedDiscordChannelsQueryVariables): Promise<PlainConnection<ConnectedDiscordChannelModel>> {
    const response = await this._client.request<ConnectedDiscordChannelsQuery, ConnectedDiscordChannelsQueryVariables>(
      ConnectedDiscordChannelsDocument, variables
    );
    const conn = response.connectedDiscordChannels;
    return new PlainConnection<ConnectedDiscordChannelModel>({
      nodes: conn.edges.map(e => new ConnectedDiscordChannelModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.connectedDiscordChannels({ ...variables, ...cursor } as ConnectedDiscordChannelsQueryVariables),
    });
  }

  async connectedMSTeamsChannels(variables: ConnectedMsTeamsChannelsQueryVariables): Promise<PlainConnection<ConnectedMSTeamsChannelModel>> {
    const response = await this._client.request<ConnectedMsTeamsChannelsQuery, ConnectedMsTeamsChannelsQueryVariables>(
      ConnectedMsTeamsChannelsDocument, variables
    );
    const conn = response.connectedMSTeamsChannels;
    return new PlainConnection<ConnectedMSTeamsChannelModel>({
      nodes: conn.edges.map(e => new ConnectedMSTeamsChannelModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      totalCount: conn.totalCount,
      fetch: (cursor) => this.connectedMSTeamsChannels({ ...variables, ...cursor } as ConnectedMsTeamsChannelsQueryVariables),
    });
  }

  async connectedSlackChannel(variables: ConnectedSlackChannelQueryVariables): Promise<ConnectedSlackChannelModel> {
    const response = await this._client.request<ConnectedSlackChannelQuery, ConnectedSlackChannelQueryVariables>(
      ConnectedSlackChannelDocument, variables
    );
    if (!response.connectedSlackChannel) {
      throw new Error("connectedSlackChannel not found");
    }
    return new ConnectedSlackChannelModel(this._client, response.connectedSlackChannel);
  }

  async connectedSlackChannels(variables: ConnectedSlackChannelsQueryVariables): Promise<PlainConnection<ConnectedSlackChannelModel>> {
    const response = await this._client.request<ConnectedSlackChannelsQuery, ConnectedSlackChannelsQueryVariables>(
      ConnectedSlackChannelsDocument, variables
    );
    const conn = response.connectedSlackChannels;
    return new PlainConnection<ConnectedSlackChannelModel>({
      nodes: conn.edges.map(e => new ConnectedSlackChannelModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      totalCount: conn.totalCount,
      fetch: (cursor) => this.connectedSlackChannels({ ...variables, ...cursor } as ConnectedSlackChannelsQueryVariables),
    });
  }

  async cursorRepositories(variables: CursorRepositoriesQueryVariables): Promise<CursorRepositoriesQuery["cursorRepositories"]> {
    const response = await this._client.request<CursorRepositoriesQuery, CursorRepositoriesQueryVariables>(
      CursorRepositoriesDocument, variables
    );
    return response.cursorRepositories;
  }

  async customRole(variables: CustomRoleQueryVariables): Promise<CustomRoleModel> {
    const response = await this._client.request<CustomRoleQuery, CustomRoleQueryVariables>(
      CustomRoleDocument, variables
    );
    if (!response.customRole) {
      throw new Error("customRole not found");
    }
    return new CustomRoleModel(this._client, response.customRole);
  }

  async customRoles(variables: CustomRolesQueryVariables): Promise<PlainConnection<CustomRoleModel>> {
    const response = await this._client.request<CustomRolesQuery, CustomRolesQueryVariables>(
      CustomRolesDocument, variables
    );
    const conn = response.customRoles;
    return new PlainConnection<CustomRoleModel>({
      nodes: conn.edges.map(e => new CustomRoleModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.customRoles({ ...variables, ...cursor } as CustomRolesQueryVariables),
    });
  }

  async customer(variables: CustomerQueryVariables): Promise<CustomerModel> {
    const response = await this._client.request<CustomerQuery, CustomerQueryVariables>(
      CustomerDocument, variables
    );
    if (!response.customer) {
      throw new Error("customer not found");
    }
    return new CustomerModel(this._client, response.customer);
  }

  async customerByEmail(variables: CustomerByEmailQueryVariables): Promise<CustomerModel> {
    const response = await this._client.request<CustomerByEmailQuery, CustomerByEmailQueryVariables>(
      CustomerByEmailDocument, variables
    );
    if (!response.customerByEmail) {
      throw new Error("customerByEmail not found");
    }
    return new CustomerModel(this._client, response.customerByEmail);
  }

  async customerByExternalId(variables: CustomerByExternalIdQueryVariables): Promise<CustomerModel> {
    const response = await this._client.request<CustomerByExternalIdQuery, CustomerByExternalIdQueryVariables>(
      CustomerByExternalIdDocument, variables
    );
    if (!response.customerByExternalId) {
      throw new Error("customerByExternalId not found");
    }
    return new CustomerModel(this._client, response.customerByExternalId);
  }

  async customerCardConfig(variables: CustomerCardConfigQueryVariables): Promise<CustomerCardConfigModel> {
    const response = await this._client.request<CustomerCardConfigQuery, CustomerCardConfigQueryVariables>(
      CustomerCardConfigDocument, variables
    );
    if (!response.customerCardConfig) {
      throw new Error("customerCardConfig not found");
    }
    return new CustomerCardConfigModel(this._client, response.customerCardConfig);
  }

  async customerCardConfigs(): Promise<CustomerCardConfigModel[]> {
    const response = await this._client.request<CustomerCardConfigsQuery, Record<string, never>>(
      CustomerCardConfigsDocument
    );
    return (response.customerCardConfigs ?? []).map(d => new CustomerCardConfigModel(this._client, d));
  }

  async customerCardInstances(variables: CustomerCardInstancesQueryVariables): Promise<CustomerCardInstancesQuery["customerCardInstances"]> {
    const response = await this._client.request<CustomerCardInstancesQuery, CustomerCardInstancesQueryVariables>(
      CustomerCardInstancesDocument, variables
    );
    return response.customerCardInstances;
  }

  async customerGroup(variables: CustomerGroupQueryVariables): Promise<CustomerGroupModel> {
    const response = await this._client.request<CustomerGroupQuery, CustomerGroupQueryVariables>(
      CustomerGroupDocument, variables
    );
    if (!response.customerGroup) {
      throw new Error("customerGroup not found");
    }
    return new CustomerGroupModel(this._client, response.customerGroup);
  }

  async customerGroups(variables: CustomerGroupsQueryVariables): Promise<PlainConnection<CustomerGroupModel>> {
    const response = await this._client.request<CustomerGroupsQuery, CustomerGroupsQueryVariables>(
      CustomerGroupsDocument, variables
    );
    const conn = response.customerGroups;
    return new PlainConnection<CustomerGroupModel>({
      nodes: conn.edges.map(e => new CustomerGroupModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.customerGroups({ ...variables, ...cursor } as CustomerGroupsQueryVariables),
    });
  }

  async customerSurvey(variables: CustomerSurveyQueryVariables): Promise<CustomerSurveyModel> {
    const response = await this._client.request<CustomerSurveyQuery, CustomerSurveyQueryVariables>(
      CustomerSurveyDocument, variables
    );
    if (!response.customerSurvey) {
      throw new Error("customerSurvey not found");
    }
    return new CustomerSurveyModel(this._client, response.customerSurvey);
  }

  async customerSurveys(variables: CustomerSurveysQueryVariables): Promise<PlainConnection<CustomerSurveyModel>> {
    const response = await this._client.request<CustomerSurveysQuery, CustomerSurveysQueryVariables>(
      CustomerSurveysDocument, variables
    );
    const conn = response.customerSurveys;
    return new PlainConnection<CustomerSurveyModel>({
      nodes: conn.edges.map(e => new CustomerSurveyModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.customerSurveys({ ...variables, ...cursor } as CustomerSurveysQueryVariables),
    });
  }

  async customers(variables: CustomersQueryVariables): Promise<PlainConnection<CustomerModel>> {
    const response = await this._client.request<CustomersQuery, CustomersQueryVariables>(
      CustomersDocument, variables
    );
    const conn = response.customers;
    return new PlainConnection<CustomerModel>({
      nodes: conn.edges.map(e => new CustomerModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      totalCount: conn.totalCount,
      fetch: (cursor) => this.customers({ ...variables, ...cursor } as CustomersQueryVariables),
    });
  }

  async deletedThreads(variables: DeletedThreadsQueryVariables): Promise<PlainConnection<DeletedThreadModel>> {
    const response = await this._client.request<DeletedThreadsQuery, DeletedThreadsQueryVariables>(
      DeletedThreadsDocument, variables
    );
    const conn = response.deletedThreads;
    return new PlainConnection<DeletedThreadModel>({
      nodes: conn.edges.map(e => new DeletedThreadModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.deletedThreads({ ...variables, ...cursor } as DeletedThreadsQueryVariables),
    });
  }

  async enabledAiToneRulesText(): Promise<NonNullable<EnabledAiToneRulesTextQuery["enabledAiToneRulesText"]>> {
    const response = await this._client.request<EnabledAiToneRulesTextQuery, Record<string, never>>(
      EnabledAiToneRulesTextDocument
    );
    if (!response.enabledAiToneRulesText) {
      throw new Error("enabledAiToneRulesText not found");
    }
    return response.enabledAiToneRulesText;
  }

  async escalationPath(variables: EscalationPathQueryVariables): Promise<EscalationPathModel> {
    const response = await this._client.request<EscalationPathQuery, EscalationPathQueryVariables>(
      EscalationPathDocument, variables
    );
    if (!response.escalationPath) {
      throw new Error("escalationPath not found");
    }
    return new EscalationPathModel(this._client, response.escalationPath);
  }

  async escalationPaths(variables: EscalationPathsQueryVariables): Promise<PlainConnection<EscalationPathModel>> {
    const response = await this._client.request<EscalationPathsQuery, EscalationPathsQueryVariables>(
      EscalationPathsDocument, variables
    );
    const conn = response.escalationPaths;
    return new PlainConnection<EscalationPathModel>({
      nodes: conn.edges.map(e => new EscalationPathModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.escalationPaths({ ...variables, ...cursor } as EscalationPathsQueryVariables),
    });
  }

  async generatedReplies(variables: GeneratedRepliesQueryVariables): Promise<GeneratedReplyModel[]> {
    const response = await this._client.request<GeneratedRepliesQuery, GeneratedRepliesQueryVariables>(
      GeneratedRepliesDocument, variables
    );
    return (response.generatedReplies ?? []).map(d => new GeneratedReplyModel(this._client, d));
  }

  async getMSTeamsMembersForChannel(variables: GetMsTeamsMembersForChannelQueryVariables): Promise<MSTeamsChannelMembersModel> {
    const response = await this._client.request<GetMsTeamsMembersForChannelQuery, GetMsTeamsMembersForChannelQueryVariables>(
      GetMsTeamsMembersForChannelDocument, variables
    );
    return new MSTeamsChannelMembersModel(this._client, response.getMSTeamsMembersForChannel);
  }

  async githubUserAuthIntegration(): Promise<GithubUserAuthIntegrationModel> {
    const response = await this._client.request<GithubUserAuthIntegrationQuery, Record<string, never>>(
      GithubUserAuthIntegrationDocument
    );
    if (!response.githubUserAuthIntegration) {
      throw new Error("githubUserAuthIntegration not found");
    }
    return new GithubUserAuthIntegrationModel(this._client, response.githubUserAuthIntegration);
  }

  async heatmapMetric(variables: HeatmapMetricQueryVariables): Promise<HeatmapMetricModel> {
    const response = await this._client.request<HeatmapMetricQuery, HeatmapMetricQueryVariables>(
      HeatmapMetricDocument, variables
    );
    if (!response.heatmapMetric) {
      throw new Error("heatmapMetric not found");
    }
    return new HeatmapMetricModel(this._client, response.heatmapMetric);
  }

  async helpCenter(variables: HelpCenterQueryVariables): Promise<HelpCenterModel> {
    const response = await this._client.request<HelpCenterQuery, HelpCenterQueryVariables>(
      HelpCenterDocument, variables
    );
    if (!response.helpCenter) {
      throw new Error("helpCenter not found");
    }
    return new HelpCenterModel(this._client, response.helpCenter);
  }

  async helpCenterArticle(variables: HelpCenterArticleQueryVariables): Promise<HelpCenterArticleModel> {
    const response = await this._client.request<HelpCenterArticleQuery, HelpCenterArticleQueryVariables>(
      HelpCenterArticleDocument, variables
    );
    if (!response.helpCenterArticle) {
      throw new Error("helpCenterArticle not found");
    }
    return new HelpCenterArticleModel(this._client, response.helpCenterArticle);
  }

  async helpCenterArticleBySlug(variables: HelpCenterArticleBySlugQueryVariables): Promise<HelpCenterArticleModel> {
    const response = await this._client.request<HelpCenterArticleBySlugQuery, HelpCenterArticleBySlugQueryVariables>(
      HelpCenterArticleBySlugDocument, variables
    );
    if (!response.helpCenterArticleBySlug) {
      throw new Error("helpCenterArticleBySlug not found");
    }
    return new HelpCenterArticleModel(this._client, response.helpCenterArticleBySlug);
  }

  async helpCenterArticleGroup(variables: HelpCenterArticleGroupQueryVariables): Promise<HelpCenterArticleGroupModel> {
    const response = await this._client.request<HelpCenterArticleGroupQuery, HelpCenterArticleGroupQueryVariables>(
      HelpCenterArticleGroupDocument, variables
    );
    if (!response.helpCenterArticleGroup) {
      throw new Error("helpCenterArticleGroup not found");
    }
    return new HelpCenterArticleGroupModel(this._client, response.helpCenterArticleGroup);
  }

  async helpCenterArticleGroupBySlug(variables: HelpCenterArticleGroupBySlugQueryVariables): Promise<HelpCenterArticleGroupModel> {
    const response = await this._client.request<HelpCenterArticleGroupBySlugQuery, HelpCenterArticleGroupBySlugQueryVariables>(
      HelpCenterArticleGroupBySlugDocument, variables
    );
    if (!response.helpCenterArticleGroupBySlug) {
      throw new Error("helpCenterArticleGroupBySlug not found");
    }
    return new HelpCenterArticleGroupModel(this._client, response.helpCenterArticleGroupBySlug);
  }

  async helpCenterIndex(variables: HelpCenterIndexQueryVariables): Promise<HelpCenterIndexModel> {
    const response = await this._client.request<HelpCenterIndexQuery, HelpCenterIndexQueryVariables>(
      HelpCenterIndexDocument, variables
    );
    if (!response.helpCenterIndex) {
      throw new Error("helpCenterIndex not found");
    }
    return new HelpCenterIndexModel(this._client, response.helpCenterIndex);
  }

  async helpCenters(variables: HelpCentersQueryVariables): Promise<PlainConnection<HelpCenterModel>> {
    const response = await this._client.request<HelpCentersQuery, HelpCentersQueryVariables>(
      HelpCentersDocument, variables
    );
    const conn = response.helpCenters;
    return new PlainConnection<HelpCenterModel>({
      nodes: conn.edges.map(e => new HelpCenterModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.helpCenters({ ...variables, ...cursor } as HelpCentersQueryVariables),
    });
  }

  async importRuns(variables: ImportRunsQueryVariables): Promise<PlainConnection<ImportRunModel>> {
    const response = await this._client.request<ImportRunsQuery, ImportRunsQueryVariables>(
      ImportRunsDocument, variables
    );
    const conn = response.importRuns;
    return new PlainConnection<ImportRunModel>({
      nodes: conn.edges.map(e => new ImportRunModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.importRuns({ ...variables, ...cursor } as ImportRunsQueryVariables),
    });
  }

  async importerTenantLists(variables: ImporterTenantListsQueryVariables): Promise<ImporterTenantListsQuery["importerTenantLists"]> {
    const response = await this._client.request<ImporterTenantListsQuery, ImporterTenantListsQueryVariables>(
      ImporterTenantListsDocument, variables
    );
    return response.importerTenantLists;
  }

  async indexedDocuments(variables: IndexedDocumentsQueryVariables): Promise<PlainConnection<IndexedDocumentModel>> {
    const response = await this._client.request<IndexedDocumentsQuery, IndexedDocumentsQueryVariables>(
      IndexedDocumentsDocument, variables
    );
    const conn = response.indexedDocuments;
    return new PlainConnection<IndexedDocumentModel>({
      nodes: conn.edges.map(e => new IndexedDocumentModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.indexedDocuments({ ...variables, ...cursor } as IndexedDocumentsQueryVariables),
    });
  }

  async issueTrackerFields(variables: IssueTrackerFieldsQueryVariables): Promise<IssueTrackerFieldModel[]> {
    const response = await this._client.request<IssueTrackerFieldsQuery, IssueTrackerFieldsQueryVariables>(
      IssueTrackerFieldsDocument, variables
    );
    return (response.issueTrackerFields ?? []).map(d => new IssueTrackerFieldModel(this._client, d));
  }

  async knowledgeGap(variables: KnowledgeGapQueryVariables): Promise<KnowledgeGapModel> {
    const response = await this._client.request<KnowledgeGapQuery, KnowledgeGapQueryVariables>(
      KnowledgeGapDocument, variables
    );
    if (!response.knowledgeGap) {
      throw new Error("knowledgeGap not found");
    }
    return new KnowledgeGapModel(this._client, response.knowledgeGap);
  }

  async knowledgeGaps(variables: KnowledgeGapsQueryVariables): Promise<PlainConnection<KnowledgeGapModel>> {
    const response = await this._client.request<KnowledgeGapsQuery, KnowledgeGapsQueryVariables>(
      KnowledgeGapsDocument, variables
    );
    const conn = response.knowledgeGaps;
    return new PlainConnection<KnowledgeGapModel>({
      nodes: conn.edges.map(e => new KnowledgeGapModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      totalCount: conn.totalCount,
      fetch: (cursor) => this.knowledgeGaps({ ...variables, ...cursor } as KnowledgeGapsQueryVariables),
    });
  }

  async knowledgeSource(variables: KnowledgeSourceQueryVariables): Promise<NonNullable<KnowledgeSourceQuery["knowledgeSource"]>> {
    const response = await this._client.request<KnowledgeSourceQuery, KnowledgeSourceQueryVariables>(
      KnowledgeSourceDocument, variables
    );
    if (!response.knowledgeSource) {
      throw new Error("knowledgeSource not found");
    }
    return response.knowledgeSource;
  }

  async knowledgeSources(variables: KnowledgeSourcesQueryVariables): Promise<KnowledgeSourcesQuery["knowledgeSources"]> {
    const response = await this._client.request<KnowledgeSourcesQuery, KnowledgeSourcesQueryVariables>(
      KnowledgeSourcesDocument, variables
    );
    return response.knowledgeSources;
  }

  async labelType(variables: LabelTypeQueryVariables): Promise<LabelTypeModel> {
    const response = await this._client.request<LabelTypeQuery, LabelTypeQueryVariables>(
      LabelTypeDocument, variables
    );
    if (!response.labelType) {
      throw new Error("labelType not found");
    }
    return new LabelTypeModel(this._client, response.labelType);
  }

  async labelTypeByExternalId(variables: LabelTypeByExternalIdQueryVariables): Promise<LabelTypeModel> {
    const response = await this._client.request<LabelTypeByExternalIdQuery, LabelTypeByExternalIdQueryVariables>(
      LabelTypeByExternalIdDocument, variables
    );
    if (!response.labelTypeByExternalId) {
      throw new Error("labelTypeByExternalId not found");
    }
    return new LabelTypeModel(this._client, response.labelTypeByExternalId);
  }

  async labelTypes(variables: LabelTypesQueryVariables): Promise<PlainConnection<LabelTypeModel>> {
    const response = await this._client.request<LabelTypesQuery, LabelTypesQueryVariables>(
      LabelTypesDocument, variables
    );
    const conn = response.labelTypes;
    return new PlainConnection<LabelTypeModel>({
      nodes: conn.edges.map(e => new LabelTypeModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.labelTypes({ ...variables, ...cursor } as LabelTypesQueryVariables),
    });
  }

  async machineUser(variables: MachineUserQueryVariables): Promise<MachineUserModel> {
    const response = await this._client.request<MachineUserQuery, MachineUserQueryVariables>(
      MachineUserDocument, variables
    );
    if (!response.machineUser) {
      throw new Error("machineUser not found");
    }
    return new MachineUserModel(this._client, response.machineUser);
  }

  async machineUsers(variables: MachineUsersQueryVariables): Promise<PlainConnection<MachineUserModel>> {
    const response = await this._client.request<MachineUsersQuery, MachineUsersQueryVariables>(
      MachineUsersDocument, variables
    );
    const conn = response.machineUsers;
    return new PlainConnection<MachineUserModel>({
      nodes: conn.edges.map(e => new MachineUserModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.machineUsers({ ...variables, ...cursor } as MachineUsersQueryVariables),
    });
  }

  async myBillingRota(): Promise<NonNullable<MyBillingRotaQuery["myBillingRota"]>> {
    const response = await this._client.request<MyBillingRotaQuery, Record<string, never>>(
      MyBillingRotaDocument
    );
    if (!response.myBillingRota) {
      throw new Error("myBillingRota not found");
    }
    return response.myBillingRota;
  }

  async myBillingSubscription(): Promise<BillingSubscriptionModel> {
    const response = await this._client.request<MyBillingSubscriptionQuery, Record<string, never>>(
      MyBillingSubscriptionDocument
    );
    if (!response.myBillingSubscription) {
      throw new Error("myBillingSubscription not found");
    }
    return new BillingSubscriptionModel(this._client, response.myBillingSubscription);
  }

  async myEmailSignature(): Promise<EmailSignatureModel> {
    const response = await this._client.request<MyEmailSignatureQuery, Record<string, never>>(
      MyEmailSignatureDocument
    );
    if (!response.myEmailSignature) {
      throw new Error("myEmailSignature not found");
    }
    return new EmailSignatureModel(this._client, response.myEmailSignature);
  }

  async myFavoritePages(variables: MyFavoritePagesQueryVariables): Promise<PlainConnection<FavoritePageModel>> {
    const response = await this._client.request<MyFavoritePagesQuery, MyFavoritePagesQueryVariables>(
      MyFavoritePagesDocument, variables
    );
    const conn = response.myFavoritePages;
    return new PlainConnection<FavoritePageModel>({
      nodes: conn.edges.map(e => new FavoritePageModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.myFavoritePages({ ...variables, ...cursor } as MyFavoritePagesQueryVariables),
    });
  }

  async myInternalNotifications(variables: MyInternalNotificationsQueryVariables): Promise<PlainConnection<InternalNotificationModel>> {
    const response = await this._client.request<MyInternalNotificationsQuery, MyInternalNotificationsQueryVariables>(
      MyInternalNotificationsDocument, variables
    );
    const conn = response.myInternalNotifications;
    return new PlainConnection<InternalNotificationModel>({
      nodes: conn.edges.map(e => new InternalNotificationModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      totalCount: conn.totalCount,
      fetch: (cursor) => this.myInternalNotifications({ ...variables, ...cursor } as MyInternalNotificationsQueryVariables),
    });
  }

  async myJiraIntegrationToken(): Promise<JiraIntegrationTokenModel> {
    const response = await this._client.request<MyJiraIntegrationTokenQuery, Record<string, never>>(
      MyJiraIntegrationTokenDocument
    );
    if (!response.myJiraIntegrationToken) {
      throw new Error("myJiraIntegrationToken not found");
    }
    return new JiraIntegrationTokenModel(this._client, response.myJiraIntegrationToken);
  }

  async myLinearInstallationInfo(variables: MyLinearInstallationInfoQueryVariables): Promise<MyLinearInstallationInfoQuery["myLinearInstallationInfo"]> {
    const response = await this._client.request<MyLinearInstallationInfoQuery, MyLinearInstallationInfoQueryVariables>(
      MyLinearInstallationInfoDocument, variables
    );
    return response.myLinearInstallationInfo;
  }

  async myLinearIntegration(): Promise<UserLinearIntegrationModel> {
    const response = await this._client.request<MyLinearIntegrationQuery, Record<string, never>>(
      MyLinearIntegrationDocument
    );
    if (!response.myLinearIntegration) {
      throw new Error("myLinearIntegration not found");
    }
    return new UserLinearIntegrationModel(this._client, response.myLinearIntegration);
  }

  async myLinearIntegrationToken(): Promise<NonNullable<MyLinearIntegrationTokenQuery["myLinearIntegrationToken"]>> {
    const response = await this._client.request<MyLinearIntegrationTokenQuery, Record<string, never>>(
      MyLinearIntegrationTokenDocument
    );
    if (!response.myLinearIntegrationToken) {
      throw new Error("myLinearIntegrationToken not found");
    }
    return response.myLinearIntegrationToken;
  }

  async myMSTeamsInstallationInfo(variables: MyMsTeamsInstallationInfoQueryVariables): Promise<MyMsTeamsInstallationInfoQuery["myMSTeamsInstallationInfo"]> {
    const response = await this._client.request<MyMsTeamsInstallationInfoQuery, MyMsTeamsInstallationInfoQueryVariables>(
      MyMsTeamsInstallationInfoDocument, variables
    );
    return response.myMSTeamsInstallationInfo;
  }

  async myMSTeamsIntegration(): Promise<UserMSTeamsIntegrationModel> {
    const response = await this._client.request<MyMsTeamsIntegrationQuery, Record<string, never>>(
      MyMsTeamsIntegrationDocument
    );
    if (!response.myMSTeamsIntegration) {
      throw new Error("myMSTeamsIntegration not found");
    }
    return new UserMSTeamsIntegrationModel(this._client, response.myMSTeamsIntegration);
  }

  async myMachineUser(): Promise<MachineUserModel> {
    const response = await this._client.request<MyMachineUserQuery, Record<string, never>>(
      MyMachineUserDocument
    );
    if (!response.myMachineUser) {
      throw new Error("myMachineUser not found");
    }
    return new MachineUserModel(this._client, response.myMachineUser);
  }

  async myPaymentMethod(): Promise<NonNullable<MyPaymentMethodQuery["myPaymentMethod"]>> {
    const response = await this._client.request<MyPaymentMethodQuery, Record<string, never>>(
      MyPaymentMethodDocument
    );
    if (!response.myPaymentMethod) {
      throw new Error("myPaymentMethod not found");
    }
    return response.myPaymentMethod;
  }

  async myPermissions(): Promise<MyPermissionsQuery["myPermissions"]> {
    const response = await this._client.request<MyPermissionsQuery, Record<string, never>>(
      MyPermissionsDocument
    );
    return response.myPermissions;
  }

  async mySlackInstallationInfo(variables: MySlackInstallationInfoQueryVariables): Promise<MySlackInstallationInfoQuery["mySlackInstallationInfo"]> {
    const response = await this._client.request<MySlackInstallationInfoQuery, MySlackInstallationInfoQueryVariables>(
      MySlackInstallationInfoDocument, variables
    );
    return response.mySlackInstallationInfo;
  }

  async mySlackIntegration(): Promise<UserSlackIntegrationModel> {
    const response = await this._client.request<MySlackIntegrationQuery, Record<string, never>>(
      MySlackIntegrationDocument
    );
    if (!response.mySlackIntegration) {
      throw new Error("mySlackIntegration not found");
    }
    return new UserSlackIntegrationModel(this._client, response.mySlackIntegration);
  }

  async myUser(): Promise<UserModel> {
    const response = await this._client.request<MyUserQuery, Record<string, never>>(
      MyUserDocument
    );
    if (!response.myUser) {
      throw new Error("myUser not found");
    }
    return new UserModel(this._client, response.myUser);
  }

  async myUserAccount(): Promise<NonNullable<MyUserAccountQuery["myUserAccount"]>> {
    const response = await this._client.request<MyUserAccountQuery, Record<string, never>>(
      MyUserAccountDocument
    );
    if (!response.myUserAccount) {
      throw new Error("myUserAccount not found");
    }
    return response.myUserAccount;
  }

  async myWorkspace(): Promise<WorkspaceModel> {
    const response = await this._client.request<MyWorkspaceQuery, Record<string, never>>(
      MyWorkspaceDocument
    );
    if (!response.myWorkspace) {
      throw new Error("myWorkspace not found");
    }
    return new WorkspaceModel(this._client, response.myWorkspace);
  }

  async myWorkspaceInvites(variables: MyWorkspaceInvitesQueryVariables): Promise<PlainConnection<WorkspaceInviteModel>> {
    const response = await this._client.request<MyWorkspaceInvitesQuery, MyWorkspaceInvitesQueryVariables>(
      MyWorkspaceInvitesDocument, variables
    );
    const conn = response.myWorkspaceInvites;
    return new PlainConnection<WorkspaceInviteModel>({
      nodes: conn.edges.map(e => new WorkspaceInviteModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.myWorkspaceInvites({ ...variables, ...cursor } as MyWorkspaceInvitesQueryVariables),
    });
  }

  async myWorkspaces(variables: MyWorkspacesQueryVariables): Promise<PlainConnection<WorkspaceModel>> {
    const response = await this._client.request<MyWorkspacesQuery, MyWorkspacesQueryVariables>(
      MyWorkspacesDocument, variables
    );
    const conn = response.myWorkspaces;
    return new PlainConnection<WorkspaceModel>({
      nodes: conn.edges.map(e => new WorkspaceModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.myWorkspaces({ ...variables, ...cursor } as MyWorkspacesQueryVariables),
    });
  }

  async permissions(): Promise<PermissionsQuery["permissions"]> {
    const response = await this._client.request<PermissionsQuery, Record<string, never>>(
      PermissionsDocument
    );
    return response.permissions;
  }

  async relatedThreads(variables: RelatedThreadsQueryVariables): Promise<ThreadWithDistanceModel[]> {
    const response = await this._client.request<RelatedThreadsQuery, RelatedThreadsQueryVariables>(
      RelatedThreadsDocument, variables
    );
    return (response.relatedThreads ?? []).map(d => new ThreadWithDistanceModel(this._client, d));
  }

  async roles(variables: RolesQueryVariables): Promise<PlainConnection<RoleModel>> {
    const response = await this._client.request<RolesQuery, RolesQueryVariables>(
      RolesDocument, variables
    );
    const conn = response.roles;
    return new PlainConnection<RoleModel>({
      nodes: conn.edges.map(e => new RoleModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.roles({ ...variables, ...cursor } as RolesQueryVariables),
    });
  }

  async savedThreadsView(variables: SavedThreadsViewQueryVariables): Promise<SavedThreadsViewModel> {
    const response = await this._client.request<SavedThreadsViewQuery, SavedThreadsViewQueryVariables>(
      SavedThreadsViewDocument, variables
    );
    if (!response.savedThreadsView) {
      throw new Error("savedThreadsView not found");
    }
    return new SavedThreadsViewModel(this._client, response.savedThreadsView);
  }

  async savedThreadsViews(variables: SavedThreadsViewsQueryVariables): Promise<PlainConnection<SavedThreadsViewModel>> {
    const response = await this._client.request<SavedThreadsViewsQuery, SavedThreadsViewsQueryVariables>(
      SavedThreadsViewsDocument, variables
    );
    const conn = response.savedThreadsViews;
    return new PlainConnection<SavedThreadsViewModel>({
      nodes: conn.edges.map(e => new SavedThreadsViewModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.savedThreadsViews({ ...variables, ...cursor } as SavedThreadsViewsQueryVariables),
    });
  }

  async searchCompanies(variables: SearchCompaniesQueryVariables): Promise<SearchCompaniesQuery["searchCompanies"]> {
    const response = await this._client.request<SearchCompaniesQuery, SearchCompaniesQueryVariables>(
      SearchCompaniesDocument, variables
    );
    return response.searchCompanies;
  }

  async searchCustomers(variables: SearchCustomersQueryVariables): Promise<PlainConnection<CustomerModel>> {
    const response = await this._client.request<SearchCustomersQuery, SearchCustomersQueryVariables>(
      SearchCustomersDocument, variables
    );
    const conn = response.searchCustomers;
    return new PlainConnection<CustomerModel>({
      nodes: conn.edges.map(e => new CustomerModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.searchCustomers({ ...variables, ...cursor } as SearchCustomersQueryVariables),
    });
  }

  async searchKnowledgeSources(variables: SearchKnowledgeSourcesQueryVariables): Promise<SearchKnowledgeSourcesQuery["searchKnowledgeSources"]> {
    const response = await this._client.request<SearchKnowledgeSourcesQuery, SearchKnowledgeSourcesQueryVariables>(
      SearchKnowledgeSourcesDocument, variables
    );
    return response.searchKnowledgeSources;
  }

  async searchSlackUsers(variables: SearchSlackUsersQueryVariables): Promise<PlainConnection<SlackUserModel>> {
    const response = await this._client.request<SearchSlackUsersQuery, SearchSlackUsersQueryVariables>(
      SearchSlackUsersDocument, variables
    );
    const conn = response.searchSlackUsers;
    return new PlainConnection<SlackUserModel>({
      nodes: conn.edges.map(e => new SlackUserModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.searchSlackUsers({ ...variables, ...cursor } as SearchSlackUsersQueryVariables),
    });
  }

  async searchTenants(variables: SearchTenantsQueryVariables): Promise<SearchTenantsQuery["searchTenants"]> {
    const response = await this._client.request<SearchTenantsQuery, SearchTenantsQueryVariables>(
      SearchTenantsDocument, variables
    );
    return response.searchTenants;
  }

  async searchThreadLinkCandidates(variables: SearchThreadLinkCandidatesQueryVariables): Promise<PlainConnection<ThreadLinkCandidateModel>> {
    const response = await this._client.request<SearchThreadLinkCandidatesQuery, SearchThreadLinkCandidatesQueryVariables>(
      SearchThreadLinkCandidatesDocument, variables
    );
    const conn = response.searchThreadLinkCandidates;
    return new PlainConnection<ThreadLinkCandidateModel>({
      nodes: conn.edges.map(e => new ThreadLinkCandidateModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.searchThreadLinkCandidates({ ...variables, ...cursor } as SearchThreadLinkCandidatesQueryVariables),
    });
  }

  async searchThreadSlackUsers(variables: SearchThreadSlackUsersQueryVariables): Promise<PlainConnection<SlackUserModel>> {
    const response = await this._client.request<SearchThreadSlackUsersQuery, SearchThreadSlackUsersQueryVariables>(
      SearchThreadSlackUsersDocument, variables
    );
    const conn = response.searchThreadSlackUsers;
    return new PlainConnection<SlackUserModel>({
      nodes: conn.edges.map(e => new SlackUserModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.searchThreadSlackUsers({ ...variables, ...cursor } as SearchThreadSlackUsersQueryVariables),
    });
  }

  async searchThreads(variables: SearchThreadsQueryVariables): Promise<SearchThreadsQuery["searchThreads"]> {
    const response = await this._client.request<SearchThreadsQuery, SearchThreadsQueryVariables>(
      SearchThreadsDocument, variables
    );
    return response.searchThreads;
  }

  async serviceAuthorization(variables: ServiceAuthorizationQueryVariables): Promise<ServiceAuthorizationModel> {
    const response = await this._client.request<ServiceAuthorizationQuery, ServiceAuthorizationQueryVariables>(
      ServiceAuthorizationDocument, variables
    );
    if (!response.serviceAuthorization) {
      throw new Error("serviceAuthorization not found");
    }
    return new ServiceAuthorizationModel(this._client, response.serviceAuthorization);
  }

  async serviceAuthorizations(variables: ServiceAuthorizationsQueryVariables): Promise<PlainConnection<ServiceAuthorizationModel>> {
    const response = await this._client.request<ServiceAuthorizationsQuery, ServiceAuthorizationsQueryVariables>(
      ServiceAuthorizationsDocument, variables
    );
    const conn = response.serviceAuthorizations;
    return new PlainConnection<ServiceAuthorizationModel>({
      nodes: conn.edges.map(e => new ServiceAuthorizationModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.serviceAuthorizations({ ...variables, ...cursor } as ServiceAuthorizationsQueryVariables),
    });
  }

  async setting(variables: SettingQueryVariables): Promise<NonNullable<SettingQuery["setting"]>> {
    const response = await this._client.request<SettingQuery, SettingQueryVariables>(
      SettingDocument, variables
    );
    if (!response.setting) {
      throw new Error("setting not found");
    }
    return response.setting;
  }

  async singleValueMetric(variables: SingleValueMetricQueryVariables): Promise<NonNullable<SingleValueMetricQuery["singleValueMetric"]>> {
    const response = await this._client.request<SingleValueMetricQuery, SingleValueMetricQueryVariables>(
      SingleValueMetricDocument, variables
    );
    if (!response.singleValueMetric) {
      throw new Error("singleValueMetric not found");
    }
    return response.singleValueMetric;
  }

  async slackUser(variables: SlackUserQueryVariables): Promise<SlackUserModel> {
    const response = await this._client.request<SlackUserQuery, SlackUserQueryVariables>(
      SlackUserDocument, variables
    );
    if (!response.slackUser) {
      throw new Error("slackUser not found");
    }
    return new SlackUserModel(this._client, response.slackUser);
  }

  async snippet(variables: SnippetQueryVariables): Promise<SnippetModel> {
    const response = await this._client.request<SnippetQuery, SnippetQueryVariables>(
      SnippetDocument, variables
    );
    if (!response.snippet) {
      throw new Error("snippet not found");
    }
    return new SnippetModel(this._client, response.snippet);
  }

  async snippets(variables: SnippetsQueryVariables): Promise<PlainConnection<SnippetModel>> {
    const response = await this._client.request<SnippetsQuery, SnippetsQueryVariables>(
      SnippetsDocument, variables
    );
    const conn = response.snippets;
    return new PlainConnection<SnippetModel>({
      nodes: conn.edges.map(e => new SnippetModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.snippets({ ...variables, ...cursor } as SnippetsQueryVariables),
    });
  }

  async subscriptionEventTypes(): Promise<SubscriptionEventTypesQuery["subscriptionEventTypes"]> {
    const response = await this._client.request<SubscriptionEventTypesQuery, Record<string, never>>(
      SubscriptionEventTypesDocument
    );
    return response.subscriptionEventTypes;
  }

  async task(variables: TaskQueryVariables): Promise<TaskModel> {
    const response = await this._client.request<TaskQuery, TaskQueryVariables>(
      TaskDocument, variables
    );
    if (!response.task) {
      throw new Error("task not found");
    }
    return new TaskModel(this._client, response.task);
  }

  async taskByRef(variables: TaskByRefQueryVariables): Promise<TaskModel> {
    const response = await this._client.request<TaskByRefQuery, TaskByRefQueryVariables>(
      TaskByRefDocument, variables
    );
    if (!response.taskByRef) {
      throw new Error("taskByRef not found");
    }
    return new TaskModel(this._client, response.taskByRef);
  }

  async tasks(variables: TasksQueryVariables): Promise<PlainConnection<TaskModel>> {
    const response = await this._client.request<TasksQuery, TasksQueryVariables>(
      TasksDocument, variables
    );
    const conn = response.tasks;
    return new PlainConnection<TaskModel>({
      nodes: conn.edges.map(e => new TaskModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      totalCount: conn.totalCount,
      fetch: (cursor) => this.tasks({ ...variables, ...cursor } as TasksQueryVariables),
    });
  }

  async teamSettings(variables: TeamSettingsQueryVariables): Promise<TeamSettingsModel> {
    const response = await this._client.request<TeamSettingsQuery, TeamSettingsQueryVariables>(
      TeamSettingsDocument, variables
    );
    if (!response.teamSettings) {
      throw new Error("teamSettings not found");
    }
    return new TeamSettingsModel(this._client, response.teamSettings);
  }

  async tenant(variables: TenantQueryVariables): Promise<TenantModel> {
    const response = await this._client.request<TenantQuery, TenantQueryVariables>(
      TenantDocument, variables
    );
    if (!response.tenant) {
      throw new Error("tenant not found");
    }
    return new TenantModel(this._client, response.tenant);
  }

  async tenantFieldSchemas(variables: TenantFieldSchemasQueryVariables): Promise<PlainConnection<TenantFieldSchemaModel>> {
    const response = await this._client.request<TenantFieldSchemasQuery, TenantFieldSchemasQueryVariables>(
      TenantFieldSchemasDocument, variables
    );
    const conn = response.tenantFieldSchemas;
    return new PlainConnection<TenantFieldSchemaModel>({
      nodes: conn.edges.map(e => new TenantFieldSchemaModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.tenantFieldSchemas({ ...variables, ...cursor } as TenantFieldSchemasQueryVariables),
    });
  }

  async tenants(variables: TenantsQueryVariables): Promise<PlainConnection<TenantModel>> {
    const response = await this._client.request<TenantsQuery, TenantsQueryVariables>(
      TenantsDocument, variables
    );
    const conn = response.tenants;
    return new PlainConnection<TenantModel>({
      nodes: conn.edges.map(e => new TenantModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.tenants({ ...variables, ...cursor } as TenantsQueryVariables),
    });
  }

  async thread(variables: ThreadQueryVariables): Promise<ThreadModel> {
    const response = await this._client.request<ThreadQuery, ThreadQueryVariables>(
      ThreadDocument, variables
    );
    if (!response.thread) {
      throw new Error("thread not found");
    }
    return new ThreadModel(this._client, response.thread);
  }

  async threadByExternalId(variables: ThreadByExternalIdQueryVariables): Promise<ThreadModel> {
    const response = await this._client.request<ThreadByExternalIdQuery, ThreadByExternalIdQueryVariables>(
      ThreadByExternalIdDocument, variables
    );
    if (!response.threadByExternalId) {
      throw new Error("threadByExternalId not found");
    }
    return new ThreadModel(this._client, response.threadByExternalId);
  }

  async threadByRef(variables: ThreadByRefQueryVariables): Promise<ThreadModel> {
    const response = await this._client.request<ThreadByRefQuery, ThreadByRefQueryVariables>(
      ThreadByRefDocument, variables
    );
    if (!response.threadByRef) {
      throw new Error("threadByRef not found");
    }
    return new ThreadModel(this._client, response.threadByRef);
  }

  async threadBySlackPermalink(variables: ThreadBySlackPermalinkQueryVariables): Promise<ThreadModel> {
    const response = await this._client.request<ThreadBySlackPermalinkQuery, ThreadBySlackPermalinkQueryVariables>(
      ThreadBySlackPermalinkDocument, variables
    );
    if (!response.threadBySlackPermalink) {
      throw new Error("threadBySlackPermalink not found");
    }
    return new ThreadModel(this._client, response.threadBySlackPermalink);
  }

  async threadCluster(variables: ThreadClusterQueryVariables): Promise<ThreadClusterModel> {
    const response = await this._client.request<ThreadClusterQuery, ThreadClusterQueryVariables>(
      ThreadClusterDocument, variables
    );
    if (!response.threadCluster) {
      throw new Error("threadCluster not found");
    }
    return new ThreadClusterModel(this._client, response.threadCluster);
  }

  async threadClusters(variables: ThreadClustersQueryVariables): Promise<ThreadClusterModel[]> {
    const response = await this._client.request<ThreadClustersQuery, ThreadClustersQueryVariables>(
      ThreadClustersDocument, variables
    );
    return (response.threadClusters ?? []).map(d => new ThreadClusterModel(this._client, d));
  }

  async threadClustersPaginated(variables: ThreadClustersPaginatedQueryVariables): Promise<PlainConnection<ThreadClusterModel>> {
    const response = await this._client.request<ThreadClustersPaginatedQuery, ThreadClustersPaginatedQueryVariables>(
      ThreadClustersPaginatedDocument, variables
    );
    const conn = response.threadClustersPaginated;
    return new PlainConnection<ThreadClusterModel>({
      nodes: conn.edges.map(e => new ThreadClusterModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.threadClustersPaginated({ ...variables, ...cursor } as ThreadClustersPaginatedQueryVariables),
    });
  }

  async threadDiscussion(variables: ThreadDiscussionQueryVariables): Promise<ThreadDiscussionModel> {
    const response = await this._client.request<ThreadDiscussionQuery, ThreadDiscussionQueryVariables>(
      ThreadDiscussionDocument, variables
    );
    if (!response.threadDiscussion) {
      throw new Error("threadDiscussion not found");
    }
    return new ThreadDiscussionModel(this._client, response.threadDiscussion);
  }

  async threadFieldSchema(variables: ThreadFieldSchemaQueryVariables): Promise<ThreadFieldSchemaModel> {
    const response = await this._client.request<ThreadFieldSchemaQuery, ThreadFieldSchemaQueryVariables>(
      ThreadFieldSchemaDocument, variables
    );
    if (!response.threadFieldSchema) {
      throw new Error("threadFieldSchema not found");
    }
    return new ThreadFieldSchemaModel(this._client, response.threadFieldSchema);
  }

  async threadFieldSchemas(variables: ThreadFieldSchemasQueryVariables): Promise<PlainConnection<ThreadFieldSchemaModel>> {
    const response = await this._client.request<ThreadFieldSchemasQuery, ThreadFieldSchemasQueryVariables>(
      ThreadFieldSchemasDocument, variables
    );
    const conn = response.threadFieldSchemas;
    return new PlainConnection<ThreadFieldSchemaModel>({
      nodes: conn.edges.map(e => new ThreadFieldSchemaModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.threadFieldSchemas({ ...variables, ...cursor } as ThreadFieldSchemasQueryVariables),
    });
  }

  async threadLinkGroups(variables: ThreadLinkGroupsQueryVariables): Promise<PlainConnection<ThreadLinkGroupModel>> {
    const response = await this._client.request<ThreadLinkGroupsQuery, ThreadLinkGroupsQueryVariables>(
      ThreadLinkGroupsDocument, variables
    );
    const conn = response.threadLinkGroups;
    return new PlainConnection<ThreadLinkGroupModel>({
      nodes: conn.edges.map(e => new ThreadLinkGroupModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.threadLinkGroups({ ...variables, ...cursor } as ThreadLinkGroupsQueryVariables),
    });
  }

  async threadSlackUser(variables: ThreadSlackUserQueryVariables): Promise<SlackUserModel> {
    const response = await this._client.request<ThreadSlackUserQuery, ThreadSlackUserQueryVariables>(
      ThreadSlackUserDocument, variables
    );
    if (!response.threadSlackUser) {
      throw new Error("threadSlackUser not found");
    }
    return new SlackUserModel(this._client, response.threadSlackUser);
  }

  async threads(variables: ThreadsQueryVariables): Promise<PlainConnection<ThreadModel>> {
    const response = await this._client.request<ThreadsQuery, ThreadsQueryVariables>(
      ThreadsDocument, variables
    );
    const conn = response.threads;
    return new PlainConnection<ThreadModel>({
      nodes: conn.edges.map(e => new ThreadModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      totalCount: conn.totalCount,
      fetch: (cursor) => this.threads({ ...variables, ...cursor } as ThreadsQueryVariables),
    });
  }

  async tier(variables: TierQueryVariables): Promise<TierModel> {
    const response = await this._client.request<TierQuery, TierQueryVariables>(
      TierDocument, variables
    );
    if (!response.tier) {
      throw new Error("tier not found");
    }
    return new TierModel(this._client, response.tier);
  }

  async tiers(variables: TiersQueryVariables): Promise<PlainConnection<TierModel>> {
    const response = await this._client.request<TiersQuery, TiersQueryVariables>(
      TiersDocument, variables
    );
    const conn = response.tiers;
    return new PlainConnection<TierModel>({
      nodes: conn.edges.map(e => new TierModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.tiers({ ...variables, ...cursor } as TiersQueryVariables),
    });
  }

  async timeSeriesMetric(variables: TimeSeriesMetricQueryVariables): Promise<TimeSeriesMetricModel> {
    const response = await this._client.request<TimeSeriesMetricQuery, TimeSeriesMetricQueryVariables>(
      TimeSeriesMetricDocument, variables
    );
    if (!response.timeSeriesMetric) {
      throw new Error("timeSeriesMetric not found");
    }
    return new TimeSeriesMetricModel(this._client, response.timeSeriesMetric);
  }

  async timelineEntries(variables: TimelineEntriesQueryVariables): Promise<PlainConnection<TimelineEntryModel>> {
    const response = await this._client.request<TimelineEntriesQuery, TimelineEntriesQueryVariables>(
      TimelineEntriesDocument, variables
    );
    const conn = response.timelineEntries;
    return new PlainConnection<TimelineEntryModel>({
      nodes: conn.edges.map(e => new TimelineEntryModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.timelineEntries({ ...variables, ...cursor } as TimelineEntriesQueryVariables),
    });
  }

  async timelineEntry(variables: TimelineEntryQueryVariables): Promise<TimelineEntryModel> {
    const response = await this._client.request<TimelineEntryQuery, TimelineEntryQueryVariables>(
      TimelineEntryDocument, variables
    );
    if (!response.timelineEntry) {
      throw new Error("timelineEntry not found");
    }
    return new TimelineEntryModel(this._client, response.timelineEntry);
  }

  async user(variables: UserQueryVariables): Promise<UserModel> {
    const response = await this._client.request<UserQuery, UserQueryVariables>(
      UserDocument, variables
    );
    if (!response.user) {
      throw new Error("user not found");
    }
    return new UserModel(this._client, response.user);
  }

  async userAuthDiscordChannelInstallationInfo(variables: UserAuthDiscordChannelInstallationInfoQueryVariables): Promise<UserAuthDiscordChannelInstallationInfoQuery["userAuthDiscordChannelInstallationInfo"]> {
    const response = await this._client.request<UserAuthDiscordChannelInstallationInfoQuery, UserAuthDiscordChannelInstallationInfoQueryVariables>(
      UserAuthDiscordChannelInstallationInfoDocument, variables
    );
    return response.userAuthDiscordChannelInstallationInfo;
  }

  async userAuthDiscordChannelIntegration(variables: UserAuthDiscordChannelIntegrationQueryVariables): Promise<UserAuthDiscordChannelIntegrationModel> {
    const response = await this._client.request<UserAuthDiscordChannelIntegrationQuery, UserAuthDiscordChannelIntegrationQueryVariables>(
      UserAuthDiscordChannelIntegrationDocument, variables
    );
    if (!response.userAuthDiscordChannelIntegration) {
      throw new Error("userAuthDiscordChannelIntegration not found");
    }
    return new UserAuthDiscordChannelIntegrationModel(this._client, response.userAuthDiscordChannelIntegration);
  }

  async userAuthDiscordChannelIntegrations(variables: UserAuthDiscordChannelIntegrationsQueryVariables): Promise<PlainConnection<UserAuthDiscordChannelIntegrationModel>> {
    const response = await this._client.request<UserAuthDiscordChannelIntegrationsQuery, UserAuthDiscordChannelIntegrationsQueryVariables>(
      UserAuthDiscordChannelIntegrationsDocument, variables
    );
    const conn = response.userAuthDiscordChannelIntegrations;
    return new PlainConnection<UserAuthDiscordChannelIntegrationModel>({
      nodes: conn.edges.map(e => new UserAuthDiscordChannelIntegrationModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.userAuthDiscordChannelIntegrations({ ...variables, ...cursor } as UserAuthDiscordChannelIntegrationsQueryVariables),
    });
  }

  async userAuthSlackInstallationInfo(variables: UserAuthSlackInstallationInfoQueryVariables): Promise<UserAuthSlackInstallationInfoQuery["userAuthSlackInstallationInfo"]> {
    const response = await this._client.request<UserAuthSlackInstallationInfoQuery, UserAuthSlackInstallationInfoQueryVariables>(
      UserAuthSlackInstallationInfoDocument, variables
    );
    return response.userAuthSlackInstallationInfo;
  }

  async userAuthSlackIntegration(variables: UserAuthSlackIntegrationQueryVariables): Promise<UserAuthSlackIntegrationModel> {
    const response = await this._client.request<UserAuthSlackIntegrationQuery, UserAuthSlackIntegrationQueryVariables>(
      UserAuthSlackIntegrationDocument, variables
    );
    if (!response.userAuthSlackIntegration) {
      throw new Error("userAuthSlackIntegration not found");
    }
    return new UserAuthSlackIntegrationModel(this._client, response.userAuthSlackIntegration);
  }

  async userAuthSlackIntegrationByThreadId(variables: UserAuthSlackIntegrationByThreadIdQueryVariables): Promise<UserAuthSlackIntegrationModel> {
    const response = await this._client.request<UserAuthSlackIntegrationByThreadIdQuery, UserAuthSlackIntegrationByThreadIdQueryVariables>(
      UserAuthSlackIntegrationByThreadIdDocument, variables
    );
    if (!response.userAuthSlackIntegrationByThreadId) {
      throw new Error("userAuthSlackIntegrationByThreadId not found");
    }
    return new UserAuthSlackIntegrationModel(this._client, response.userAuthSlackIntegrationByThreadId);
  }

  async userByEmail(variables: UserByEmailQueryVariables): Promise<UserModel> {
    const response = await this._client.request<UserByEmailQuery, UserByEmailQueryVariables>(
      UserByEmailDocument, variables
    );
    if (!response.userByEmail) {
      throw new Error("userByEmail not found");
    }
    return new UserModel(this._client, response.userByEmail);
  }

  async userSlackChannelMemberships(variables: UserSlackChannelMembershipsQueryVariables): Promise<UserSlackChannelMembershipsQuery["userSlackChannelMemberships"]> {
    const response = await this._client.request<UserSlackChannelMembershipsQuery, UserSlackChannelMembershipsQueryVariables>(
      UserSlackChannelMembershipsDocument, variables
    );
    return response.userSlackChannelMemberships;
  }

  async users(variables: UsersQueryVariables): Promise<PlainConnection<UserModel>> {
    const response = await this._client.request<UsersQuery, UsersQueryVariables>(
      UsersDocument, variables
    );
    const conn = response.users;
    return new PlainConnection<UserModel>({
      nodes: conn.edges.map(e => new UserModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.users({ ...variables, ...cursor } as UsersQueryVariables),
    });
  }

  async webhookTarget(variables: WebhookTargetQueryVariables): Promise<WebhookTargetModel> {
    const response = await this._client.request<WebhookTargetQuery, WebhookTargetQueryVariables>(
      WebhookTargetDocument, variables
    );
    if (!response.webhookTarget) {
      throw new Error("webhookTarget not found");
    }
    return new WebhookTargetModel(this._client, response.webhookTarget);
  }

  async webhookTargets(variables: WebhookTargetsQueryVariables): Promise<PlainConnection<WebhookTargetModel>> {
    const response = await this._client.request<WebhookTargetsQuery, WebhookTargetsQueryVariables>(
      WebhookTargetsDocument, variables
    );
    const conn = response.webhookTargets;
    return new PlainConnection<WebhookTargetModel>({
      nodes: conn.edges.map(e => new WebhookTargetModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.webhookTargets({ ...variables, ...cursor } as WebhookTargetsQueryVariables),
    });
  }

  async webhookVersions(variables: WebhookVersionsQueryVariables): Promise<WebhookVersionsQuery["webhookVersions"]> {
    const response = await this._client.request<WebhookVersionsQuery, WebhookVersionsQueryVariables>(
      WebhookVersionsDocument, variables
    );
    return response.webhookVersions;
  }

  async workOSConfiguration(): Promise<NonNullable<WorkOsConfigurationQuery["workOSConfiguration"]>> {
    const response = await this._client.request<WorkOsConfigurationQuery, Record<string, never>>(
      WorkOsConfigurationDocument
    );
    if (!response.workOSConfiguration) {
      throw new Error("workOSConfiguration not found");
    }
    return response.workOSConfiguration;
  }

  async workflow(variables: WorkflowQueryVariables): Promise<WorkflowModel> {
    const response = await this._client.request<WorkflowQuery, WorkflowQueryVariables>(
      WorkflowDocument, variables
    );
    if (!response.workflow) {
      throw new Error("workflow not found");
    }
    return new WorkflowModel(this._client, response.workflow);
  }

  async workflowExecution(variables: WorkflowExecutionQueryVariables): Promise<WorkflowExecutionModel> {
    const response = await this._client.request<WorkflowExecutionQuery, WorkflowExecutionQueryVariables>(
      WorkflowExecutionDocument, variables
    );
    if (!response.workflowExecution) {
      throw new Error("workflowExecution not found");
    }
    return new WorkflowExecutionModel(this._client, response.workflowExecution);
  }

  async workflowExecutions(variables: WorkflowExecutionsQueryVariables): Promise<PlainConnection<WorkflowExecutionModel>> {
    const response = await this._client.request<WorkflowExecutionsQuery, WorkflowExecutionsQueryVariables>(
      WorkflowExecutionsDocument, variables
    );
    const conn = response.workflowExecutions;
    return new PlainConnection<WorkflowExecutionModel>({
      nodes: conn.edges.map(e => new WorkflowExecutionModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workflowExecutions({ ...variables, ...cursor } as WorkflowExecutionsQueryVariables),
    });
  }

  async workflowExecutionsByEntity(variables: WorkflowExecutionsByEntityQueryVariables): Promise<PlainConnection<WorkflowExecutionModel>> {
    const response = await this._client.request<WorkflowExecutionsByEntityQuery, WorkflowExecutionsByEntityQueryVariables>(
      WorkflowExecutionsByEntityDocument, variables
    );
    const conn = response.workflowExecutionsByEntity;
    return new PlainConnection<WorkflowExecutionModel>({
      nodes: conn.edges.map(e => new WorkflowExecutionModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workflowExecutionsByEntity({ ...variables, ...cursor } as WorkflowExecutionsByEntityQueryVariables),
    });
  }

  async workflowRule(variables: WorkflowRuleQueryVariables): Promise<WorkflowRuleModel> {
    const response = await this._client.request<WorkflowRuleQuery, WorkflowRuleQueryVariables>(
      WorkflowRuleDocument, variables
    );
    if (!response.workflowRule) {
      throw new Error("workflowRule not found");
    }
    return new WorkflowRuleModel(this._client, response.workflowRule);
  }

  async workflowRules(variables: WorkflowRulesQueryVariables): Promise<PlainConnection<WorkflowRuleModel>> {
    const response = await this._client.request<WorkflowRulesQuery, WorkflowRulesQueryVariables>(
      WorkflowRulesDocument, variables
    );
    const conn = response.workflowRules;
    return new PlainConnection<WorkflowRuleModel>({
      nodes: conn.edges.map(e => new WorkflowRuleModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workflowRules({ ...variables, ...cursor } as WorkflowRulesQueryVariables),
    });
  }

  async workflows(variables: WorkflowsQueryVariables): Promise<PlainConnection<WorkflowModel>> {
    const response = await this._client.request<WorkflowsQuery, WorkflowsQueryVariables>(
      WorkflowsDocument, variables
    );
    const conn = response.workflows;
    return new PlainConnection<WorkflowModel>({
      nodes: conn.edges.map(e => new WorkflowModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workflows({ ...variables, ...cursor } as WorkflowsQueryVariables),
    });
  }

  async workspace(variables: WorkspaceQueryVariables): Promise<WorkspaceModel> {
    const response = await this._client.request<WorkspaceQuery, WorkspaceQueryVariables>(
      WorkspaceDocument, variables
    );
    if (!response.workspace) {
      throw new Error("workspace not found");
    }
    return new WorkspaceModel(this._client, response.workspace);
  }

  async workspaceChatSettings(): Promise<WorkspaceChatSettingsQuery["workspaceChatSettings"]> {
    const response = await this._client.request<WorkspaceChatSettingsQuery, Record<string, never>>(
      WorkspaceChatSettingsDocument
    );
    return response.workspaceChatSettings;
  }

  async workspaceCursorIntegration(): Promise<WorkspaceCursorIntegrationModel> {
    const response = await this._client.request<WorkspaceCursorIntegrationQuery, Record<string, never>>(
      WorkspaceCursorIntegrationDocument
    );
    if (!response.workspaceCursorIntegration) {
      throw new Error("workspaceCursorIntegration not found");
    }
    return new WorkspaceCursorIntegrationModel(this._client, response.workspaceCursorIntegration);
  }

  async workspaceDiscordChannelInstallationInfo(variables: WorkspaceDiscordChannelInstallationInfoQueryVariables): Promise<WorkspaceDiscordChannelInstallationInfoQuery["workspaceDiscordChannelInstallationInfo"]> {
    const response = await this._client.request<WorkspaceDiscordChannelInstallationInfoQuery, WorkspaceDiscordChannelInstallationInfoQueryVariables>(
      WorkspaceDiscordChannelInstallationInfoDocument, variables
    );
    return response.workspaceDiscordChannelInstallationInfo;
  }

  async workspaceDiscordChannelIntegration(variables: WorkspaceDiscordChannelIntegrationQueryVariables): Promise<WorkspaceDiscordChannelIntegrationModel> {
    const response = await this._client.request<WorkspaceDiscordChannelIntegrationQuery, WorkspaceDiscordChannelIntegrationQueryVariables>(
      WorkspaceDiscordChannelIntegrationDocument, variables
    );
    if (!response.workspaceDiscordChannelIntegration) {
      throw new Error("workspaceDiscordChannelIntegration not found");
    }
    return new WorkspaceDiscordChannelIntegrationModel(this._client, response.workspaceDiscordChannelIntegration);
  }

  async workspaceDiscordChannelIntegrations(variables: WorkspaceDiscordChannelIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceDiscordChannelIntegrationModel>> {
    const response = await this._client.request<WorkspaceDiscordChannelIntegrationsQuery, WorkspaceDiscordChannelIntegrationsQueryVariables>(
      WorkspaceDiscordChannelIntegrationsDocument, variables
    );
    const conn = response.workspaceDiscordChannelIntegrations;
    return new PlainConnection<WorkspaceDiscordChannelIntegrationModel>({
      nodes: conn.edges.map(e => new WorkspaceDiscordChannelIntegrationModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workspaceDiscordChannelIntegrations({ ...variables, ...cursor } as WorkspaceDiscordChannelIntegrationsQueryVariables),
    });
  }

  async workspaceDiscordIntegration(variables: WorkspaceDiscordIntegrationQueryVariables): Promise<WorkspaceDiscordIntegrationModel> {
    const response = await this._client.request<WorkspaceDiscordIntegrationQuery, WorkspaceDiscordIntegrationQueryVariables>(
      WorkspaceDiscordIntegrationDocument, variables
    );
    if (!response.workspaceDiscordIntegration) {
      throw new Error("workspaceDiscordIntegration not found");
    }
    return new WorkspaceDiscordIntegrationModel(this._client, response.workspaceDiscordIntegration);
  }

  async workspaceDiscordIntegrations(variables: WorkspaceDiscordIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceDiscordIntegrationModel>> {
    const response = await this._client.request<WorkspaceDiscordIntegrationsQuery, WorkspaceDiscordIntegrationsQueryVariables>(
      WorkspaceDiscordIntegrationsDocument, variables
    );
    const conn = response.workspaceDiscordIntegrations;
    return new PlainConnection<WorkspaceDiscordIntegrationModel>({
      nodes: conn.edges.map(e => new WorkspaceDiscordIntegrationModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workspaceDiscordIntegrations({ ...variables, ...cursor } as WorkspaceDiscordIntegrationsQueryVariables),
    });
  }

  async workspaceEmailSettings(): Promise<WorkspaceEmailSettingsModel> {
    const response = await this._client.request<WorkspaceEmailSettingsQuery, Record<string, never>>(
      WorkspaceEmailSettingsDocument
    );
    return new WorkspaceEmailSettingsModel(this._client, response.workspaceEmailSettings);
  }

  async workspaceHmac(): Promise<WorkspaceHmacModel> {
    const response = await this._client.request<WorkspaceHmacQuery, Record<string, never>>(
      WorkspaceHmacDocument
    );
    if (!response.workspaceHmac) {
      throw new Error("workspaceHmac not found");
    }
    return new WorkspaceHmacModel(this._client, response.workspaceHmac);
  }

  async workspaceInvites(variables: WorkspaceInvitesQueryVariables): Promise<PlainConnection<WorkspaceInviteModel>> {
    const response = await this._client.request<WorkspaceInvitesQuery, WorkspaceInvitesQueryVariables>(
      WorkspaceInvitesDocument, variables
    );
    const conn = response.workspaceInvites;
    return new PlainConnection<WorkspaceInviteModel>({
      nodes: conn.edges.map(e => new WorkspaceInviteModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workspaceInvites({ ...variables, ...cursor } as WorkspaceInvitesQueryVariables),
    });
  }

  async workspaceMSTeamsInstallationInfo(variables: WorkspaceMsTeamsInstallationInfoQueryVariables): Promise<WorkspaceMsTeamsInstallationInfoQuery["workspaceMSTeamsInstallationInfo"]> {
    const response = await this._client.request<WorkspaceMsTeamsInstallationInfoQuery, WorkspaceMsTeamsInstallationInfoQueryVariables>(
      WorkspaceMsTeamsInstallationInfoDocument, variables
    );
    return response.workspaceMSTeamsInstallationInfo;
  }

  async workspaceMSTeamsIntegration(): Promise<WorkspaceMSTeamsIntegrationModel> {
    const response = await this._client.request<WorkspaceMsTeamsIntegrationQuery, Record<string, never>>(
      WorkspaceMsTeamsIntegrationDocument
    );
    if (!response.workspaceMSTeamsIntegration) {
      throw new Error("workspaceMSTeamsIntegration not found");
    }
    return new WorkspaceMSTeamsIntegrationModel(this._client, response.workspaceMSTeamsIntegration);
  }

  async workspaceSlackChannelInstallationInfo(variables: WorkspaceSlackChannelInstallationInfoQueryVariables): Promise<WorkspaceSlackChannelInstallationInfoQuery["workspaceSlackChannelInstallationInfo"]> {
    const response = await this._client.request<WorkspaceSlackChannelInstallationInfoQuery, WorkspaceSlackChannelInstallationInfoQueryVariables>(
      WorkspaceSlackChannelInstallationInfoDocument, variables
    );
    return response.workspaceSlackChannelInstallationInfo;
  }

  async workspaceSlackChannelIntegration(variables: WorkspaceSlackChannelIntegrationQueryVariables): Promise<WorkspaceSlackChannelIntegrationModel> {
    const response = await this._client.request<WorkspaceSlackChannelIntegrationQuery, WorkspaceSlackChannelIntegrationQueryVariables>(
      WorkspaceSlackChannelIntegrationDocument, variables
    );
    if (!response.workspaceSlackChannelIntegration) {
      throw new Error("workspaceSlackChannelIntegration not found");
    }
    return new WorkspaceSlackChannelIntegrationModel(this._client, response.workspaceSlackChannelIntegration);
  }

  async workspaceSlackChannelIntegrations(variables: WorkspaceSlackChannelIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceSlackChannelIntegrationModel>> {
    const response = await this._client.request<WorkspaceSlackChannelIntegrationsQuery, WorkspaceSlackChannelIntegrationsQueryVariables>(
      WorkspaceSlackChannelIntegrationsDocument, variables
    );
    const conn = response.workspaceSlackChannelIntegrations;
    return new PlainConnection<WorkspaceSlackChannelIntegrationModel>({
      nodes: conn.edges.map(e => new WorkspaceSlackChannelIntegrationModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workspaceSlackChannelIntegrations({ ...variables, ...cursor } as WorkspaceSlackChannelIntegrationsQueryVariables),
    });
  }

  async workspaceSlackInstallationInfo(variables: WorkspaceSlackInstallationInfoQueryVariables): Promise<WorkspaceSlackInstallationInfoQuery["workspaceSlackInstallationInfo"]> {
    const response = await this._client.request<WorkspaceSlackInstallationInfoQuery, WorkspaceSlackInstallationInfoQueryVariables>(
      WorkspaceSlackInstallationInfoDocument, variables
    );
    return response.workspaceSlackInstallationInfo;
  }

  async workspaceSlackIntegration(variables: WorkspaceSlackIntegrationQueryVariables): Promise<WorkspaceSlackIntegrationModel> {
    const response = await this._client.request<WorkspaceSlackIntegrationQuery, WorkspaceSlackIntegrationQueryVariables>(
      WorkspaceSlackIntegrationDocument, variables
    );
    if (!response.workspaceSlackIntegration) {
      throw new Error("workspaceSlackIntegration not found");
    }
    return new WorkspaceSlackIntegrationModel(this._client, response.workspaceSlackIntegration);
  }

  async workspaceSlackIntegrations(variables: WorkspaceSlackIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceSlackIntegrationModel>> {
    const response = await this._client.request<WorkspaceSlackIntegrationsQuery, WorkspaceSlackIntegrationsQueryVariables>(
      WorkspaceSlackIntegrationsDocument, variables
    );
    const conn = response.workspaceSlackIntegrations;
    return new PlainConnection<WorkspaceSlackIntegrationModel>({
      nodes: conn.edges.map(e => new WorkspaceSlackIntegrationModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.workspaceSlackIntegrations({ ...variables, ...cursor } as WorkspaceSlackIntegrationsQueryVariables),
    });
  }

  async acceptWorkspaceInvite(variables: AcceptWorkspaceInviteMutationVariables): Promise<AcceptWorkspaceInviteMutation["acceptWorkspaceInvite"]> {
    const response = await this._client.request<AcceptWorkspaceInviteMutation, AcceptWorkspaceInviteMutationVariables>(
      AcceptWorkspaceInviteDocument, variables
    );
    return response.acceptWorkspaceInvite;
  }

  async addAdditionalAssignees(variables: AddAdditionalAssigneesMutationVariables): Promise<AddAdditionalAssigneesMutation["addAdditionalAssignees"]> {
    const response = await this._client.request<AddAdditionalAssigneesMutation, AddAdditionalAssigneesMutationVariables>(
      AddAdditionalAssigneesDocument, variables
    );
    return response.addAdditionalAssignees;
  }

  async addCustomerToCustomerGroups(variables: AddCustomerToCustomerGroupsMutationVariables): Promise<AddCustomerToCustomerGroupsMutation["addCustomerToCustomerGroups"]> {
    const response = await this._client.request<AddCustomerToCustomerGroupsMutation, AddCustomerToCustomerGroupsMutationVariables>(
      AddCustomerToCustomerGroupsDocument, variables
    );
    return response.addCustomerToCustomerGroups;
  }

  async addCustomerToTenants(variables: AddCustomerToTenantsMutationVariables): Promise<AddCustomerToTenantsMutation["addCustomerToTenants"]> {
    const response = await this._client.request<AddCustomerToTenantsMutation, AddCustomerToTenantsMutationVariables>(
      AddCustomerToTenantsDocument, variables
    );
    return response.addCustomerToTenants;
  }

  async addGeneratedReply(variables: AddGeneratedReplyMutationVariables): Promise<AddGeneratedReplyMutation["addGeneratedReply"]> {
    const response = await this._client.request<AddGeneratedReplyMutation, AddGeneratedReplyMutationVariables>(
      AddGeneratedReplyDocument, variables
    );
    return response.addGeneratedReply;
  }

  async addLabels(variables: AddLabelsMutationVariables): Promise<AddLabelsMutation["addLabels"]> {
    const response = await this._client.request<AddLabelsMutation, AddLabelsMutationVariables>(
      AddLabelsDocument, variables
    );
    return response.addLabels;
  }

  async addLabelsToUser(variables: AddLabelsToUserMutationVariables): Promise<AddLabelsToUserMutation["addLabelsToUser"]> {
    const response = await this._client.request<AddLabelsToUserMutation, AddLabelsToUserMutationVariables>(
      AddLabelsToUserDocument, variables
    );
    return response.addLabelsToUser;
  }

  async addMembersToTier(variables: AddMembersToTierMutationVariables): Promise<AddMembersToTierMutation["addMembersToTier"]> {
    const response = await this._client.request<AddMembersToTierMutation, AddMembersToTierMutationVariables>(
      AddMembersToTierDocument, variables
    );
    return response.addMembersToTier;
  }

  async addUserToActiveBillingRota(variables: AddUserToActiveBillingRotaMutationVariables): Promise<AddUserToActiveBillingRotaMutation["addUserToActiveBillingRota"]> {
    const response = await this._client.request<AddUserToActiveBillingRotaMutation, AddUserToActiveBillingRotaMutationVariables>(
      AddUserToActiveBillingRotaDocument, variables
    );
    return response.addUserToActiveBillingRota;
  }

  async addWorkspaceAlternateSupportEmailAddress(variables: AddWorkspaceAlternateSupportEmailAddressMutationVariables): Promise<AddWorkspaceAlternateSupportEmailAddressMutation["addWorkspaceAlternateSupportEmailAddress"]> {
    const response = await this._client.request<AddWorkspaceAlternateSupportEmailAddressMutation, AddWorkspaceAlternateSupportEmailAddressMutationVariables>(
      AddWorkspaceAlternateSupportEmailAddressDocument, variables
    );
    return response.addWorkspaceAlternateSupportEmailAddress;
  }

  async archiveLabelType(variables: ArchiveLabelTypeMutationVariables): Promise<ArchiveLabelTypeMutation["archiveLabelType"]> {
    const response = await this._client.request<ArchiveLabelTypeMutation, ArchiveLabelTypeMutationVariables>(
      ArchiveLabelTypeDocument, variables
    );
    return response.archiveLabelType;
  }

  async assignRolesToUser(variables: AssignRolesToUserMutationVariables): Promise<AssignRolesToUserMutation["assignRolesToUser"]> {
    const response = await this._client.request<AssignRolesToUserMutation, AssignRolesToUserMutationVariables>(
      AssignRolesToUserDocument, variables
    );
    return response.assignRolesToUser;
  }

  async assignThread(variables: AssignThreadMutationVariables): Promise<AssignThreadMutation["assignThread"]> {
    const response = await this._client.request<AssignThreadMutation, AssignThreadMutationVariables>(
      AssignThreadDocument, variables
    );
    return response.assignThread;
  }

  async bulkJoinSlackChannels(variables: BulkJoinSlackChannelsMutationVariables): Promise<BulkJoinSlackChannelsMutation["bulkJoinSlackChannels"]> {
    const response = await this._client.request<BulkJoinSlackChannelsMutation, BulkJoinSlackChannelsMutationVariables>(
      BulkJoinSlackChannelsDocument, variables
    );
    return response.bulkJoinSlackChannels;
  }

  async bulkUpsertThreadFields(variables: BulkUpsertThreadFieldsMutationVariables): Promise<BulkUpsertThreadFieldsMutation["bulkUpsertThreadFields"]> {
    const response = await this._client.request<BulkUpsertThreadFieldsMutation, BulkUpsertThreadFieldsMutationVariables>(
      BulkUpsertThreadFieldsDocument, variables
    );
    return response.bulkUpsertThreadFields;
  }

  async bulkUpsertWorkflowSteps(variables: BulkUpsertWorkflowStepsMutationVariables): Promise<BulkUpsertWorkflowStepsMutation["bulkUpsertWorkflowSteps"]> {
    const response = await this._client.request<BulkUpsertWorkflowStepsMutation, BulkUpsertWorkflowStepsMutationVariables>(
      BulkUpsertWorkflowStepsDocument, variables
    );
    return response.bulkUpsertWorkflowSteps;
  }

  async calculateRoleChangeCost(variables: CalculateRoleChangeCostMutationVariables): Promise<CalculateRoleChangeCostMutation["calculateRoleChangeCost"]> {
    const response = await this._client.request<CalculateRoleChangeCostMutation, CalculateRoleChangeCostMutationVariables>(
      CalculateRoleChangeCostDocument, variables
    );
    return response.calculateRoleChangeCost;
  }

  async cancelHyperlineSubscription(): Promise<CancelHyperlineSubscriptionMutation["cancelHyperlineSubscription"]> {
    const response = await this._client.request<CancelHyperlineSubscriptionMutation, Record<string, never>>(
      CancelHyperlineSubscriptionDocument
    );
    return response.cancelHyperlineSubscription;
  }

  async changeBillingPlan(variables: ChangeBillingPlanMutationVariables): Promise<ChangeBillingPlanMutation["changeBillingPlan"]> {
    const response = await this._client.request<ChangeBillingPlanMutation, ChangeBillingPlanMutationVariables>(
      ChangeBillingPlanDocument, variables
    );
    return response.changeBillingPlan;
  }

  async changeKnowledgeGapStatus(variables: ChangeKnowledgeGapStatusMutationVariables): Promise<ChangeKnowledgeGapStatusMutation["changeKnowledgeGapStatus"]> {
    const response = await this._client.request<ChangeKnowledgeGapStatusMutation, ChangeKnowledgeGapStatusMutationVariables>(
      ChangeKnowledgeGapStatusDocument, variables
    );
    return response.changeKnowledgeGapStatus;
  }

  async changeThreadCustomer(variables: ChangeThreadCustomerMutationVariables): Promise<ChangeThreadCustomerMutation["changeThreadCustomer"]> {
    const response = await this._client.request<ChangeThreadCustomerMutation, ChangeThreadCustomerMutationVariables>(
      ChangeThreadCustomerDocument, variables
    );
    return response.changeThreadCustomer;
  }

  async changeThreadPriority(variables: ChangeThreadPriorityMutationVariables): Promise<ChangeThreadPriorityMutation["changeThreadPriority"]> {
    const response = await this._client.request<ChangeThreadPriorityMutation, ChangeThreadPriorityMutationVariables>(
      ChangeThreadPriorityDocument, variables
    );
    return response.changeThreadPriority;
  }

  async changeUserStatus(variables: ChangeUserStatusMutationVariables): Promise<ChangeUserStatusMutation["changeUserStatus"]> {
    const response = await this._client.request<ChangeUserStatusMutation, ChangeUserStatusMutationVariables>(
      ChangeUserStatusDocument, variables
    );
    return response.changeUserStatus;
  }

  async completeServiceAuthorization(variables: CompleteServiceAuthorizationMutationVariables): Promise<CompleteServiceAuthorizationMutation["completeServiceAuthorization"]> {
    const response = await this._client.request<CompleteServiceAuthorizationMutation, CompleteServiceAuthorizationMutationVariables>(
      CompleteServiceAuthorizationDocument, variables
    );
    return response.completeServiceAuthorization;
  }

  async createAiFeatureFeedback(variables: CreateAiFeatureFeedbackMutationVariables): Promise<CreateAiFeatureFeedbackMutation["createAiFeatureFeedback"]> {
    const response = await this._client.request<CreateAiFeatureFeedbackMutation, CreateAiFeatureFeedbackMutationVariables>(
      CreateAiFeatureFeedbackDocument, variables
    );
    return response.createAiFeatureFeedback;
  }

  async createAiFeedback(variables: CreateAiFeedbackMutationVariables): Promise<CreateAiFeedbackMutation["createAiFeedback"]> {
    const response = await this._client.request<CreateAiFeedbackMutation, CreateAiFeedbackMutationVariables>(
      CreateAiFeedbackDocument, variables
    );
    return response.createAiFeedback;
  }

  async createAiToneRule(variables: CreateAiToneRuleMutationVariables): Promise<CreateAiToneRuleMutation["createAiToneRule"]> {
    const response = await this._client.request<CreateAiToneRuleMutation, CreateAiToneRuleMutationVariables>(
      CreateAiToneRuleDocument, variables
    );
    return response.createAiToneRule;
  }

  async createApiKey(variables: CreateApiKeyMutationVariables): Promise<CreateApiKeyMutation["createApiKey"]> {
    const response = await this._client.request<CreateApiKeyMutation, CreateApiKeyMutationVariables>(
      CreateApiKeyDocument, variables
    );
    return response.createApiKey;
  }

  async createAttachmentDownloadUrl(variables: CreateAttachmentDownloadUrlMutationVariables): Promise<CreateAttachmentDownloadUrlMutation["createAttachmentDownloadUrl"]> {
    const response = await this._client.request<CreateAttachmentDownloadUrlMutation, CreateAttachmentDownloadUrlMutationVariables>(
      CreateAttachmentDownloadUrlDocument, variables
    );
    return response.createAttachmentDownloadUrl;
  }

  async createAttachmentUploadUrl(variables: CreateAttachmentUploadUrlMutationVariables): Promise<CreateAttachmentUploadUrlMutation["createAttachmentUploadUrl"]> {
    const response = await this._client.request<CreateAttachmentUploadUrlMutation, CreateAttachmentUploadUrlMutationVariables>(
      CreateAttachmentUploadUrlDocument, variables
    );
    return response.createAttachmentUploadUrl;
  }

  async createAutoresponder(variables: CreateAutoresponderMutationVariables): Promise<CreateAutoresponderMutation["createAutoresponder"]> {
    const response = await this._client.request<CreateAutoresponderMutation, CreateAutoresponderMutationVariables>(
      CreateAutoresponderDocument, variables
    );
    return response.createAutoresponder;
  }

  async createBillingPortalSession(): Promise<CreateBillingPortalSessionMutation["createBillingPortalSession"]> {
    const response = await this._client.request<CreateBillingPortalSessionMutation, Record<string, never>>(
      CreateBillingPortalSessionDocument
    );
    return response.createBillingPortalSession;
  }

  async createChatApp(variables: CreateChatAppMutationVariables): Promise<CreateChatAppMutation["createChatApp"]> {
    const response = await this._client.request<CreateChatAppMutation, CreateChatAppMutationVariables>(
      CreateChatAppDocument, variables
    );
    return response.createChatApp;
  }

  async createChatAppSecret(variables: CreateChatAppSecretMutationVariables): Promise<CreateChatAppSecretMutation["createChatAppSecret"]> {
    const response = await this._client.request<CreateChatAppSecretMutation, CreateChatAppSecretMutationVariables>(
      CreateChatAppSecretDocument, variables
    );
    return response.createChatAppSecret;
  }

  async createCheckoutSession(variables: CreateCheckoutSessionMutationVariables): Promise<CreateCheckoutSessionMutation["createCheckoutSession"]> {
    const response = await this._client.request<CreateCheckoutSessionMutation, CreateCheckoutSessionMutationVariables>(
      CreateCheckoutSessionDocument, variables
    );
    return response.createCheckoutSession;
  }

  async createCustomRole(variables: CreateCustomRoleMutationVariables): Promise<CreateCustomRoleMutation["createCustomRole"]> {
    const response = await this._client.request<CreateCustomRoleMutation, CreateCustomRoleMutationVariables>(
      CreateCustomRoleDocument, variables
    );
    return response.createCustomRole;
  }

  async createCustomerCardConfig(variables: CreateCustomerCardConfigMutationVariables): Promise<CreateCustomerCardConfigMutation["createCustomerCardConfig"]> {
    const response = await this._client.request<CreateCustomerCardConfigMutation, CreateCustomerCardConfigMutationVariables>(
      CreateCustomerCardConfigDocument, variables
    );
    return response.createCustomerCardConfig;
  }

  async createCustomerEvent(variables: CreateCustomerEventMutationVariables): Promise<CreateCustomerEventMutation["createCustomerEvent"]> {
    const response = await this._client.request<CreateCustomerEventMutation, CreateCustomerEventMutationVariables>(
      CreateCustomerEventDocument, variables
    );
    return response.createCustomerEvent;
  }

  async createCustomerGroup(variables: CreateCustomerGroupMutationVariables): Promise<CreateCustomerGroupMutation["createCustomerGroup"]> {
    const response = await this._client.request<CreateCustomerGroupMutation, CreateCustomerGroupMutationVariables>(
      CreateCustomerGroupDocument, variables
    );
    return response.createCustomerGroup;
  }

  async createCustomerSurvey(variables: CreateCustomerSurveyMutationVariables): Promise<CreateCustomerSurveyMutation["createCustomerSurvey"]> {
    const response = await this._client.request<CreateCustomerSurveyMutation, CreateCustomerSurveyMutationVariables>(
      CreateCustomerSurveyDocument, variables
    );
    return response.createCustomerSurvey;
  }

  async createEmailPreviewUrl(variables: CreateEmailPreviewUrlMutationVariables): Promise<CreateEmailPreviewUrlMutation["createEmailPreviewUrl"]> {
    const response = await this._client.request<CreateEmailPreviewUrlMutation, CreateEmailPreviewUrlMutationVariables>(
      CreateEmailPreviewUrlDocument, variables
    );
    return response.createEmailPreviewUrl;
  }

  async createEscalationPath(variables: CreateEscalationPathMutationVariables): Promise<CreateEscalationPathMutation["createEscalationPath"]> {
    const response = await this._client.request<CreateEscalationPathMutation, CreateEscalationPathMutationVariables>(
      CreateEscalationPathDocument, variables
    );
    return response.createEscalationPath;
  }

  async createGithubUserAuthIntegration(variables: CreateGithubUserAuthIntegrationMutationVariables): Promise<CreateGithubUserAuthIntegrationMutation["createGithubUserAuthIntegration"]> {
    const response = await this._client.request<CreateGithubUserAuthIntegrationMutation, CreateGithubUserAuthIntegrationMutationVariables>(
      CreateGithubUserAuthIntegrationDocument, variables
    );
    return response.createGithubUserAuthIntegration;
  }

  async createHelpCenter(variables: CreateHelpCenterMutationVariables): Promise<CreateHelpCenterMutation["createHelpCenter"]> {
    const response = await this._client.request<CreateHelpCenterMutation, CreateHelpCenterMutationVariables>(
      CreateHelpCenterDocument, variables
    );
    return response.createHelpCenter;
  }

  async createHelpCenterArticleGroup(variables: CreateHelpCenterArticleGroupMutationVariables): Promise<CreateHelpCenterArticleGroupMutation["createHelpCenterArticleGroup"]> {
    const response = await this._client.request<CreateHelpCenterArticleGroupMutation, CreateHelpCenterArticleGroupMutationVariables>(
      CreateHelpCenterArticleGroupDocument, variables
    );
    return response.createHelpCenterArticleGroup;
  }

  async createHyperlineBillingPortalSession(): Promise<CreateHyperlineBillingPortalSessionMutation["createHyperlineBillingPortalSession"]> {
    const response = await this._client.request<CreateHyperlineBillingPortalSessionMutation, Record<string, never>>(
      CreateHyperlineBillingPortalSessionDocument
    );
    return response.createHyperlineBillingPortalSession;
  }

  async createHyperlineCheckoutSession(variables: CreateHyperlineCheckoutSessionMutationVariables): Promise<CreateHyperlineCheckoutSessionMutation["createHyperlineCheckoutSession"]> {
    const response = await this._client.request<CreateHyperlineCheckoutSessionMutation, CreateHyperlineCheckoutSessionMutationVariables>(
      CreateHyperlineCheckoutSessionDocument, variables
    );
    return response.createHyperlineCheckoutSession;
  }

  async createHyperlineComponentsAuthToken(): Promise<CreateHyperlineComponentsAuthTokenMutation["createHyperlineComponentsAuthToken"]> {
    const response = await this._client.request<CreateHyperlineComponentsAuthTokenMutation, Record<string, never>>(
      CreateHyperlineComponentsAuthTokenDocument
    );
    return response.createHyperlineComponentsAuthToken;
  }

  async createImportSync(variables: CreateImportSyncMutationVariables): Promise<CreateImportSyncMutation["createImportSync"]> {
    const response = await this._client.request<CreateImportSyncMutation, CreateImportSyncMutationVariables>(
      CreateImportSyncDocument, variables
    );
    return response.createImportSync;
  }

  async createIndexedDocument(variables: CreateIndexedDocumentMutationVariables): Promise<CreateIndexedDocumentMutation["createIndexedDocument"]> {
    const response = await this._client.request<CreateIndexedDocumentMutation, CreateIndexedDocumentMutationVariables>(
      CreateIndexedDocumentDocument, variables
    );
    return response.createIndexedDocument;
  }

  async createIssueTrackerIssue(variables: CreateIssueTrackerIssueMutationVariables): Promise<CreateIssueTrackerIssueMutation["createIssueTrackerIssue"]> {
    const response = await this._client.request<CreateIssueTrackerIssueMutation, CreateIssueTrackerIssueMutationVariables>(
      CreateIssueTrackerIssueDocument, variables
    );
    return response.createIssueTrackerIssue;
  }

  async createKnowledgeSource(variables: CreateKnowledgeSourceMutationVariables): Promise<CreateKnowledgeSourceMutation["createKnowledgeSource"]> {
    const response = await this._client.request<CreateKnowledgeSourceMutation, CreateKnowledgeSourceMutationVariables>(
      CreateKnowledgeSourceDocument, variables
    );
    return response.createKnowledgeSource;
  }

  async createLabelType(variables: CreateLabelTypeMutationVariables): Promise<CreateLabelTypeMutation["createLabelType"]> {
    const response = await this._client.request<CreateLabelTypeMutation, CreateLabelTypeMutationVariables>(
      CreateLabelTypeDocument, variables
    );
    return response.createLabelType;
  }

  async createMachineUser(variables: CreateMachineUserMutationVariables): Promise<CreateMachineUserMutation["createMachineUser"]> {
    const response = await this._client.request<CreateMachineUserMutation, CreateMachineUserMutationVariables>(
      CreateMachineUserDocument, variables
    );
    return response.createMachineUser;
  }

  async createMyFavoritePage(variables: CreateMyFavoritePageMutationVariables): Promise<CreateMyFavoritePageMutation["createMyFavoritePage"]> {
    const response = await this._client.request<CreateMyFavoritePageMutation, CreateMyFavoritePageMutationVariables>(
      CreateMyFavoritePageDocument, variables
    );
    return response.createMyFavoritePage;
  }

  async createMyLinearIntegration(variables: CreateMyLinearIntegrationMutationVariables): Promise<CreateMyLinearIntegrationMutation["createMyLinearIntegration"]> {
    const response = await this._client.request<CreateMyLinearIntegrationMutation, CreateMyLinearIntegrationMutationVariables>(
      CreateMyLinearIntegrationDocument, variables
    );
    return response.createMyLinearIntegration;
  }

  async createMyMSTeamsIntegration(variables: CreateMyMsTeamsIntegrationMutationVariables): Promise<CreateMyMsTeamsIntegrationMutation["createMyMSTeamsIntegration"]> {
    const response = await this._client.request<CreateMyMsTeamsIntegrationMutation, CreateMyMsTeamsIntegrationMutationVariables>(
      CreateMyMsTeamsIntegrationDocument, variables
    );
    return response.createMyMSTeamsIntegration;
  }

  async createMySlackIntegration(variables: CreateMySlackIntegrationMutationVariables): Promise<CreateMySlackIntegrationMutation["createMySlackIntegration"]> {
    const response = await this._client.request<CreateMySlackIntegrationMutation, CreateMySlackIntegrationMutationVariables>(
      CreateMySlackIntegrationDocument, variables
    );
    return response.createMySlackIntegration;
  }

  async createNote(variables: CreateNoteMutationVariables): Promise<CreateNoteMutation["createNote"]> {
    const response = await this._client.request<CreateNoteMutation, CreateNoteMutationVariables>(
      CreateNoteDocument, variables
    );
    return response.createNote;
  }

  async createSavedThreadsView(variables: CreateSavedThreadsViewMutationVariables): Promise<CreateSavedThreadsViewMutation["createSavedThreadsView"]> {
    const response = await this._client.request<CreateSavedThreadsViewMutation, CreateSavedThreadsViewMutationVariables>(
      CreateSavedThreadsViewDocument, variables
    );
    return response.createSavedThreadsView;
  }

  async createServiceLevelAgreement(variables: CreateServiceLevelAgreementMutationVariables): Promise<CreateServiceLevelAgreementMutation["createServiceLevelAgreement"]> {
    const response = await this._client.request<CreateServiceLevelAgreementMutation, CreateServiceLevelAgreementMutationVariables>(
      CreateServiceLevelAgreementDocument, variables
    );
    return response.createServiceLevelAgreement;
  }

  async createSnippet(variables: CreateSnippetMutationVariables): Promise<CreateSnippetMutation["createSnippet"]> {
    const response = await this._client.request<CreateSnippetMutation, CreateSnippetMutationVariables>(
      CreateSnippetDocument, variables
    );
    return response.createSnippet;
  }

  async createTask(variables: CreateTaskMutationVariables): Promise<CreateTaskMutation["createTask"]> {
    const response = await this._client.request<CreateTaskMutation, CreateTaskMutationVariables>(
      CreateTaskDocument, variables
    );
    return response.createTask;
  }

  async createThread(variables: CreateThreadMutationVariables): Promise<CreateThreadMutation["createThread"]> {
    const response = await this._client.request<CreateThreadMutation, CreateThreadMutationVariables>(
      CreateThreadDocument, variables
    );
    return response.createThread;
  }

  async createThreadChannelAssociation(variables: CreateThreadChannelAssociationMutationVariables): Promise<CreateThreadChannelAssociationMutation["createThreadChannelAssociation"]> {
    const response = await this._client.request<CreateThreadChannelAssociationMutation, CreateThreadChannelAssociationMutationVariables>(
      CreateThreadChannelAssociationDocument, variables
    );
    return response.createThreadChannelAssociation;
  }

  async createThreadDiscussion(variables: CreateThreadDiscussionMutationVariables): Promise<CreateThreadDiscussionMutation["createThreadDiscussion"]> {
    const response = await this._client.request<CreateThreadDiscussionMutation, CreateThreadDiscussionMutationVariables>(
      CreateThreadDiscussionDocument, variables
    );
    return response.createThreadDiscussion;
  }

  async createThreadEvent(variables: CreateThreadEventMutationVariables): Promise<CreateThreadEventMutation["createThreadEvent"]> {
    const response = await this._client.request<CreateThreadEventMutation, CreateThreadEventMutationVariables>(
      CreateThreadEventDocument, variables
    );
    return response.createThreadEvent;
  }

  async createThreadFieldSchema(variables: CreateThreadFieldSchemaMutationVariables): Promise<CreateThreadFieldSchemaMutation["createThreadFieldSchema"]> {
    const response = await this._client.request<CreateThreadFieldSchemaMutation, CreateThreadFieldSchemaMutationVariables>(
      CreateThreadFieldSchemaDocument, variables
    );
    return response.createThreadFieldSchema;
  }

  async createThreadLink(variables: CreateThreadLinkMutationVariables): Promise<CreateThreadLinkMutation["createThreadLink"]> {
    const response = await this._client.request<CreateThreadLinkMutation, CreateThreadLinkMutationVariables>(
      CreateThreadLinkDocument, variables
    );
    return response.createThreadLink;
  }

  async createTier(variables: CreateTierMutationVariables): Promise<CreateTierMutation["createTier"]> {
    const response = await this._client.request<CreateTierMutation, CreateTierMutationVariables>(
      CreateTierDocument, variables
    );
    return response.createTier;
  }

  async createUserAccount(variables: CreateUserAccountMutationVariables): Promise<CreateUserAccountMutation["createUserAccount"]> {
    const response = await this._client.request<CreateUserAccountMutation, CreateUserAccountMutationVariables>(
      CreateUserAccountDocument, variables
    );
    return response.createUserAccount;
  }

  async createUserAuthDiscordChannelIntegration(variables: CreateUserAuthDiscordChannelIntegrationMutationVariables): Promise<CreateUserAuthDiscordChannelIntegrationMutation["createUserAuthDiscordChannelIntegration"]> {
    const response = await this._client.request<CreateUserAuthDiscordChannelIntegrationMutation, CreateUserAuthDiscordChannelIntegrationMutationVariables>(
      CreateUserAuthDiscordChannelIntegrationDocument, variables
    );
    return response.createUserAuthDiscordChannelIntegration;
  }

  async createUserAuthSlackIntegration(variables: CreateUserAuthSlackIntegrationMutationVariables): Promise<CreateUserAuthSlackIntegrationMutation["createUserAuthSlackIntegration"]> {
    const response = await this._client.request<CreateUserAuthSlackIntegrationMutation, CreateUserAuthSlackIntegrationMutationVariables>(
      CreateUserAuthSlackIntegrationDocument, variables
    );
    return response.createUserAuthSlackIntegration;
  }

  async createWebhookTarget(variables: CreateWebhookTargetMutationVariables): Promise<CreateWebhookTargetMutation["createWebhookTarget"]> {
    const response = await this._client.request<CreateWebhookTargetMutation, CreateWebhookTargetMutationVariables>(
      CreateWebhookTargetDocument, variables
    );
    return response.createWebhookTarget;
  }

  async createWorkflow(variables: CreateWorkflowMutationVariables): Promise<CreateWorkflowMutation["createWorkflow"]> {
    const response = await this._client.request<CreateWorkflowMutation, CreateWorkflowMutationVariables>(
      CreateWorkflowDocument, variables
    );
    return response.createWorkflow;
  }

  async createWorkflowRule(variables: CreateWorkflowRuleMutationVariables): Promise<CreateWorkflowRuleMutation["createWorkflowRule"]> {
    const response = await this._client.request<CreateWorkflowRuleMutation, CreateWorkflowRuleMutationVariables>(
      CreateWorkflowRuleDocument, variables
    );
    return response.createWorkflowRule;
  }

  async createWorkflowStep(variables: CreateWorkflowStepMutationVariables): Promise<CreateWorkflowStepMutation["createWorkflowStep"]> {
    const response = await this._client.request<CreateWorkflowStepMutation, CreateWorkflowStepMutationVariables>(
      CreateWorkflowStepDocument, variables
    );
    return response.createWorkflowStep;
  }

  async createWorkspace(variables: CreateWorkspaceMutationVariables): Promise<CreateWorkspaceMutation["createWorkspace"]> {
    const response = await this._client.request<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(
      CreateWorkspaceDocument, variables
    );
    return response.createWorkspace;
  }

  async createWorkspaceCursorIntegration(variables: CreateWorkspaceCursorIntegrationMutationVariables): Promise<CreateWorkspaceCursorIntegrationMutation["createWorkspaceCursorIntegration"]> {
    const response = await this._client.request<CreateWorkspaceCursorIntegrationMutation, CreateWorkspaceCursorIntegrationMutationVariables>(
      CreateWorkspaceCursorIntegrationDocument, variables
    );
    return response.createWorkspaceCursorIntegration;
  }

  async createWorkspaceDiscordChannelIntegration(variables: CreateWorkspaceDiscordChannelIntegrationMutationVariables): Promise<CreateWorkspaceDiscordChannelIntegrationMutation["createWorkspaceDiscordChannelIntegration"]> {
    const response = await this._client.request<CreateWorkspaceDiscordChannelIntegrationMutation, CreateWorkspaceDiscordChannelIntegrationMutationVariables>(
      CreateWorkspaceDiscordChannelIntegrationDocument, variables
    );
    return response.createWorkspaceDiscordChannelIntegration;
  }

  async createWorkspaceDiscordIntegration(variables: CreateWorkspaceDiscordIntegrationMutationVariables): Promise<CreateWorkspaceDiscordIntegrationMutation["createWorkspaceDiscordIntegration"]> {
    const response = await this._client.request<CreateWorkspaceDiscordIntegrationMutation, CreateWorkspaceDiscordIntegrationMutationVariables>(
      CreateWorkspaceDiscordIntegrationDocument, variables
    );
    return response.createWorkspaceDiscordIntegration;
  }

  async createWorkspaceEmailDomainSettings(variables: CreateWorkspaceEmailDomainSettingsMutationVariables): Promise<CreateWorkspaceEmailDomainSettingsMutation["createWorkspaceEmailDomainSettings"]> {
    const response = await this._client.request<CreateWorkspaceEmailDomainSettingsMutation, CreateWorkspaceEmailDomainSettingsMutationVariables>(
      CreateWorkspaceEmailDomainSettingsDocument, variables
    );
    return response.createWorkspaceEmailDomainSettings;
  }

  async createWorkspaceFileUploadUrl(variables: CreateWorkspaceFileUploadUrlMutationVariables): Promise<CreateWorkspaceFileUploadUrlMutation["createWorkspaceFileUploadUrl"]> {
    const response = await this._client.request<CreateWorkspaceFileUploadUrlMutation, CreateWorkspaceFileUploadUrlMutationVariables>(
      CreateWorkspaceFileUploadUrlDocument, variables
    );
    return response.createWorkspaceFileUploadUrl;
  }

  async createWorkspaceMSTeamsIntegration(variables: CreateWorkspaceMsTeamsIntegrationMutationVariables): Promise<CreateWorkspaceMsTeamsIntegrationMutation["createWorkspaceMSTeamsIntegration"]> {
    const response = await this._client.request<CreateWorkspaceMsTeamsIntegrationMutation, CreateWorkspaceMsTeamsIntegrationMutationVariables>(
      CreateWorkspaceMsTeamsIntegrationDocument, variables
    );
    return response.createWorkspaceMSTeamsIntegration;
  }

  async createWorkspaceSlackChannelIntegration(variables: CreateWorkspaceSlackChannelIntegrationMutationVariables): Promise<CreateWorkspaceSlackChannelIntegrationMutation["createWorkspaceSlackChannelIntegration"]> {
    const response = await this._client.request<CreateWorkspaceSlackChannelIntegrationMutation, CreateWorkspaceSlackChannelIntegrationMutationVariables>(
      CreateWorkspaceSlackChannelIntegrationDocument, variables
    );
    return response.createWorkspaceSlackChannelIntegration;
  }

  async createWorkspaceSlackIntegration(variables: CreateWorkspaceSlackIntegrationMutationVariables): Promise<CreateWorkspaceSlackIntegrationMutation["createWorkspaceSlackIntegration"]> {
    const response = await this._client.request<CreateWorkspaceSlackIntegrationMutation, CreateWorkspaceSlackIntegrationMutationVariables>(
      CreateWorkspaceSlackIntegrationDocument, variables
    );
    return response.createWorkspaceSlackIntegration;
  }

  async deleteAiToneRules(variables: DeleteAiToneRulesMutationVariables): Promise<DeleteAiToneRulesMutation["deleteAiToneRules"]> {
    const response = await this._client.request<DeleteAiToneRulesMutation, DeleteAiToneRulesMutationVariables>(
      DeleteAiToneRulesDocument, variables
    );
    return response.deleteAiToneRules;
  }

  async deleteApiKey(variables: DeleteApiKeyMutationVariables): Promise<DeleteApiKeyMutation["deleteApiKey"]> {
    const response = await this._client.request<DeleteApiKeyMutation, DeleteApiKeyMutationVariables>(
      DeleteApiKeyDocument, variables
    );
    return response.deleteApiKey;
  }

  async deleteAutoresponder(variables: DeleteAutoresponderMutationVariables): Promise<DeleteAutoresponderMutation["deleteAutoresponder"]> {
    const response = await this._client.request<DeleteAutoresponderMutation, DeleteAutoresponderMutationVariables>(
      DeleteAutoresponderDocument, variables
    );
    return response.deleteAutoresponder;
  }

  async deleteBusinessHours(): Promise<DeleteBusinessHoursMutation["deleteBusinessHours"]> {
    const response = await this._client.request<DeleteBusinessHoursMutation, Record<string, never>>(
      DeleteBusinessHoursDocument
    );
    return response.deleteBusinessHours;
  }

  async deleteChatApp(variables: DeleteChatAppMutationVariables): Promise<DeleteChatAppMutation["deleteChatApp"]> {
    const response = await this._client.request<DeleteChatAppMutation, DeleteChatAppMutationVariables>(
      DeleteChatAppDocument, variables
    );
    return response.deleteChatApp;
  }

  async deleteChatAppSecret(variables: DeleteChatAppSecretMutationVariables): Promise<DeleteChatAppSecretMutation["deleteChatAppSecret"]> {
    const response = await this._client.request<DeleteChatAppSecretMutation, DeleteChatAppSecretMutationVariables>(
      DeleteChatAppSecretDocument, variables
    );
    return response.deleteChatAppSecret;
  }

  async deleteCompany(variables: DeleteCompanyMutationVariables): Promise<DeleteCompanyMutation["deleteCompany"]> {
    const response = await this._client.request<DeleteCompanyMutation, DeleteCompanyMutationVariables>(
      DeleteCompanyDocument, variables
    );
    return response.deleteCompany;
  }

  async deleteCustomRole(variables: DeleteCustomRoleMutationVariables): Promise<DeleteCustomRoleMutation["deleteCustomRole"]> {
    const response = await this._client.request<DeleteCustomRoleMutation, DeleteCustomRoleMutationVariables>(
      DeleteCustomRoleDocument, variables
    );
    return response.deleteCustomRole;
  }

  async deleteCustomer(variables: DeleteCustomerMutationVariables): Promise<DeleteCustomerMutation["deleteCustomer"]> {
    const response = await this._client.request<DeleteCustomerMutation, DeleteCustomerMutationVariables>(
      DeleteCustomerDocument, variables
    );
    return response.deleteCustomer;
  }

  async deleteCustomerCardConfig(variables: DeleteCustomerCardConfigMutationVariables): Promise<DeleteCustomerCardConfigMutation["deleteCustomerCardConfig"]> {
    const response = await this._client.request<DeleteCustomerCardConfigMutation, DeleteCustomerCardConfigMutationVariables>(
      DeleteCustomerCardConfigDocument, variables
    );
    return response.deleteCustomerCardConfig;
  }

  async deleteCustomerGroup(variables: DeleteCustomerGroupMutationVariables): Promise<DeleteCustomerGroupMutation["deleteCustomerGroup"]> {
    const response = await this._client.request<DeleteCustomerGroupMutation, DeleteCustomerGroupMutationVariables>(
      DeleteCustomerGroupDocument, variables
    );
    return response.deleteCustomerGroup;
  }

  async deleteCustomerSurvey(variables: DeleteCustomerSurveyMutationVariables): Promise<DeleteCustomerSurveyMutation["deleteCustomerSurvey"]> {
    const response = await this._client.request<DeleteCustomerSurveyMutation, DeleteCustomerSurveyMutationVariables>(
      DeleteCustomerSurveyDocument, variables
    );
    return response.deleteCustomerSurvey;
  }

  async deleteEscalationPath(variables: DeleteEscalationPathMutationVariables): Promise<DeleteEscalationPathMutation["deleteEscalationPath"]> {
    const response = await this._client.request<DeleteEscalationPathMutation, DeleteEscalationPathMutationVariables>(
      DeleteEscalationPathDocument, variables
    );
    return response.deleteEscalationPath;
  }

  async deleteGithubUserAuthIntegration(): Promise<DeleteGithubUserAuthIntegrationMutation["deleteGithubUserAuthIntegration"]> {
    const response = await this._client.request<DeleteGithubUserAuthIntegrationMutation, Record<string, never>>(
      DeleteGithubUserAuthIntegrationDocument
    );
    return response.deleteGithubUserAuthIntegration;
  }

  async deleteHelpCenter(variables: DeleteHelpCenterMutationVariables): Promise<DeleteHelpCenterMutation["deleteHelpCenter"]> {
    const response = await this._client.request<DeleteHelpCenterMutation, DeleteHelpCenterMutationVariables>(
      DeleteHelpCenterDocument, variables
    );
    return response.deleteHelpCenter;
  }

  async deleteHelpCenterArticle(variables: DeleteHelpCenterArticleMutationVariables): Promise<DeleteHelpCenterArticleMutation["deleteHelpCenterArticle"]> {
    const response = await this._client.request<DeleteHelpCenterArticleMutation, DeleteHelpCenterArticleMutationVariables>(
      DeleteHelpCenterArticleDocument, variables
    );
    return response.deleteHelpCenterArticle;
  }

  async deleteHelpCenterArticleGroup(variables: DeleteHelpCenterArticleGroupMutationVariables): Promise<DeleteHelpCenterArticleGroupMutation["deleteHelpCenterArticleGroup"]> {
    const response = await this._client.request<DeleteHelpCenterArticleGroupMutation, DeleteHelpCenterArticleGroupMutationVariables>(
      DeleteHelpCenterArticleGroupDocument, variables
    );
    return response.deleteHelpCenterArticleGroup;
  }

  async deleteKnowledgeSource(variables: DeleteKnowledgeSourceMutationVariables): Promise<DeleteKnowledgeSourceMutation["deleteKnowledgeSource"]> {
    const response = await this._client.request<DeleteKnowledgeSourceMutation, DeleteKnowledgeSourceMutationVariables>(
      DeleteKnowledgeSourceDocument, variables
    );
    return response.deleteKnowledgeSource;
  }

  async deleteMachineUser(variables: DeleteMachineUserMutationVariables): Promise<DeleteMachineUserMutation["deleteMachineUser"]> {
    const response = await this._client.request<DeleteMachineUserMutation, DeleteMachineUserMutationVariables>(
      DeleteMachineUserDocument, variables
    );
    return response.deleteMachineUser;
  }

  async deleteMyFavoritePage(variables: DeleteMyFavoritePageMutationVariables): Promise<DeleteMyFavoritePageMutation["deleteMyFavoritePage"]> {
    const response = await this._client.request<DeleteMyFavoritePageMutation, DeleteMyFavoritePageMutationVariables>(
      DeleteMyFavoritePageDocument, variables
    );
    return response.deleteMyFavoritePage;
  }

  async deleteMyLinearIntegration(): Promise<DeleteMyLinearIntegrationMutation["deleteMyLinearIntegration"]> {
    const response = await this._client.request<DeleteMyLinearIntegrationMutation, Record<string, never>>(
      DeleteMyLinearIntegrationDocument
    );
    return response.deleteMyLinearIntegration;
  }

  async deleteMyMSTeamsIntegration(): Promise<DeleteMyMsTeamsIntegrationMutation["deleteMyMSTeamsIntegration"]> {
    const response = await this._client.request<DeleteMyMsTeamsIntegrationMutation, Record<string, never>>(
      DeleteMyMsTeamsIntegrationDocument
    );
    return response.deleteMyMSTeamsIntegration;
  }

  async deleteMyServiceAuthorization(variables: DeleteMyServiceAuthorizationMutationVariables): Promise<DeleteMyServiceAuthorizationMutation["deleteMyServiceAuthorization"]> {
    const response = await this._client.request<DeleteMyServiceAuthorizationMutation, DeleteMyServiceAuthorizationMutationVariables>(
      DeleteMyServiceAuthorizationDocument, variables
    );
    return response.deleteMyServiceAuthorization;
  }

  async deleteMySlackIntegration(): Promise<DeleteMySlackIntegrationMutation["deleteMySlackIntegration"]> {
    const response = await this._client.request<DeleteMySlackIntegrationMutation, Record<string, never>>(
      DeleteMySlackIntegrationDocument
    );
    return response.deleteMySlackIntegration;
  }

  async deleteNote(variables: DeleteNoteMutationVariables): Promise<DeleteNoteMutation["deleteNote"]> {
    const response = await this._client.request<DeleteNoteMutation, DeleteNoteMutationVariables>(
      DeleteNoteDocument, variables
    );
    return response.deleteNote;
  }

  async deleteSavedThreadsView(variables: DeleteSavedThreadsViewMutationVariables): Promise<DeleteSavedThreadsViewMutation["deleteSavedThreadsView"]> {
    const response = await this._client.request<DeleteSavedThreadsViewMutation, DeleteSavedThreadsViewMutationVariables>(
      DeleteSavedThreadsViewDocument, variables
    );
    return response.deleteSavedThreadsView;
  }

  async deleteServiceAuthorization(variables: DeleteServiceAuthorizationMutationVariables): Promise<DeleteServiceAuthorizationMutation["deleteServiceAuthorization"]> {
    const response = await this._client.request<DeleteServiceAuthorizationMutation, DeleteServiceAuthorizationMutationVariables>(
      DeleteServiceAuthorizationDocument, variables
    );
    return response.deleteServiceAuthorization;
  }

  async deleteServiceLevelAgreement(variables: DeleteServiceLevelAgreementMutationVariables): Promise<DeleteServiceLevelAgreementMutation["deleteServiceLevelAgreement"]> {
    const response = await this._client.request<DeleteServiceLevelAgreementMutation, DeleteServiceLevelAgreementMutationVariables>(
      DeleteServiceLevelAgreementDocument, variables
    );
    return response.deleteServiceLevelAgreement;
  }

  async deleteSnippet(variables: DeleteSnippetMutationVariables): Promise<DeleteSnippetMutation["deleteSnippet"]> {
    const response = await this._client.request<DeleteSnippetMutation, DeleteSnippetMutationVariables>(
      DeleteSnippetDocument, variables
    );
    return response.deleteSnippet;
  }

  async deleteTask(variables: DeleteTaskMutationVariables): Promise<DeleteTaskMutation["deleteTask"]> {
    const response = await this._client.request<DeleteTaskMutation, DeleteTaskMutationVariables>(
      DeleteTaskDocument, variables
    );
    return response.deleteTask;
  }

  async deleteTenant(variables: DeleteTenantMutationVariables): Promise<DeleteTenantMutation["deleteTenant"]> {
    const response = await this._client.request<DeleteTenantMutation, DeleteTenantMutationVariables>(
      DeleteTenantDocument, variables
    );
    return response.deleteTenant;
  }

  async deleteTenantField(variables: DeleteTenantFieldMutationVariables): Promise<DeleteTenantFieldMutation["deleteTenantField"]> {
    const response = await this._client.request<DeleteTenantFieldMutation, DeleteTenantFieldMutationVariables>(
      DeleteTenantFieldDocument, variables
    );
    return response.deleteTenantField;
  }

  async deleteTenantFieldSchema(variables: DeleteTenantFieldSchemaMutationVariables): Promise<DeleteTenantFieldSchemaMutation["deleteTenantFieldSchema"]> {
    const response = await this._client.request<DeleteTenantFieldSchemaMutation, DeleteTenantFieldSchemaMutationVariables>(
      DeleteTenantFieldSchemaDocument, variables
    );
    return response.deleteTenantFieldSchema;
  }

  async deleteThread(variables: DeleteThreadMutationVariables): Promise<DeleteThreadMutation["deleteThread"]> {
    const response = await this._client.request<DeleteThreadMutation, DeleteThreadMutationVariables>(
      DeleteThreadDocument, variables
    );
    return response.deleteThread;
  }

  async deleteThreadChannelAssociation(variables: DeleteThreadChannelAssociationMutationVariables): Promise<DeleteThreadChannelAssociationMutation["deleteThreadChannelAssociation"]> {
    const response = await this._client.request<DeleteThreadChannelAssociationMutation, DeleteThreadChannelAssociationMutationVariables>(
      DeleteThreadChannelAssociationDocument, variables
    );
    return response.deleteThreadChannelAssociation;
  }

  async deleteThreadField(variables: DeleteThreadFieldMutationVariables): Promise<DeleteThreadFieldMutation["deleteThreadField"]> {
    const response = await this._client.request<DeleteThreadFieldMutation, DeleteThreadFieldMutationVariables>(
      DeleteThreadFieldDocument, variables
    );
    return response.deleteThreadField;
  }

  async deleteThreadFieldSchema(variables: DeleteThreadFieldSchemaMutationVariables): Promise<DeleteThreadFieldSchemaMutation["deleteThreadFieldSchema"]> {
    const response = await this._client.request<DeleteThreadFieldSchemaMutation, DeleteThreadFieldSchemaMutationVariables>(
      DeleteThreadFieldSchemaDocument, variables
    );
    return response.deleteThreadFieldSchema;
  }

  async deleteThreadLink(variables: DeleteThreadLinkMutationVariables): Promise<DeleteThreadLinkMutation["deleteThreadLink"]> {
    const response = await this._client.request<DeleteThreadLinkMutation, DeleteThreadLinkMutationVariables>(
      DeleteThreadLinkDocument, variables
    );
    return response.deleteThreadLink;
  }

  async deleteTier(variables: DeleteTierMutationVariables): Promise<DeleteTierMutation["deleteTier"]> {
    const response = await this._client.request<DeleteTierMutation, DeleteTierMutationVariables>(
      DeleteTierDocument, variables
    );
    return response.deleteTier;
  }

  async deleteUser(variables: DeleteUserMutationVariables): Promise<DeleteUserMutation["deleteUser"]> {
    const response = await this._client.request<DeleteUserMutation, DeleteUserMutationVariables>(
      DeleteUserDocument, variables
    );
    return response.deleteUser;
  }

  async deleteUserAuthDiscordChannelIntegration(variables: DeleteUserAuthDiscordChannelIntegrationMutationVariables): Promise<DeleteUserAuthDiscordChannelIntegrationMutation["deleteUserAuthDiscordChannelIntegration"]> {
    const response = await this._client.request<DeleteUserAuthDiscordChannelIntegrationMutation, DeleteUserAuthDiscordChannelIntegrationMutationVariables>(
      DeleteUserAuthDiscordChannelIntegrationDocument, variables
    );
    return response.deleteUserAuthDiscordChannelIntegration;
  }

  async deleteUserAuthSlackIntegration(variables: DeleteUserAuthSlackIntegrationMutationVariables): Promise<DeleteUserAuthSlackIntegrationMutation["deleteUserAuthSlackIntegration"]> {
    const response = await this._client.request<DeleteUserAuthSlackIntegrationMutation, DeleteUserAuthSlackIntegrationMutationVariables>(
      DeleteUserAuthSlackIntegrationDocument, variables
    );
    return response.deleteUserAuthSlackIntegration;
  }

  async deleteWebhookTarget(variables: DeleteWebhookTargetMutationVariables): Promise<DeleteWebhookTargetMutation["deleteWebhookTarget"]> {
    const response = await this._client.request<DeleteWebhookTargetMutation, DeleteWebhookTargetMutationVariables>(
      DeleteWebhookTargetDocument, variables
    );
    return response.deleteWebhookTarget;
  }

  async deleteWorkflow(variables: DeleteWorkflowMutationVariables): Promise<DeleteWorkflowMutation["deleteWorkflow"]> {
    const response = await this._client.request<DeleteWorkflowMutation, DeleteWorkflowMutationVariables>(
      DeleteWorkflowDocument, variables
    );
    return response.deleteWorkflow;
  }

  async deleteWorkflowRule(variables: DeleteWorkflowRuleMutationVariables): Promise<DeleteWorkflowRuleMutation["deleteWorkflowRule"]> {
    const response = await this._client.request<DeleteWorkflowRuleMutation, DeleteWorkflowRuleMutationVariables>(
      DeleteWorkflowRuleDocument, variables
    );
    return response.deleteWorkflowRule;
  }

  async deleteWorkflowStep(variables: DeleteWorkflowStepMutationVariables): Promise<DeleteWorkflowStepMutation["deleteWorkflowStep"]> {
    const response = await this._client.request<DeleteWorkflowStepMutation, DeleteWorkflowStepMutationVariables>(
      DeleteWorkflowStepDocument, variables
    );
    return response.deleteWorkflowStep;
  }

  async deleteWorkspaceCursorIntegration(variables: DeleteWorkspaceCursorIntegrationMutationVariables): Promise<DeleteWorkspaceCursorIntegrationMutation["deleteWorkspaceCursorIntegration"]> {
    const response = await this._client.request<DeleteWorkspaceCursorIntegrationMutation, DeleteWorkspaceCursorIntegrationMutationVariables>(
      DeleteWorkspaceCursorIntegrationDocument, variables
    );
    return response.deleteWorkspaceCursorIntegration;
  }

  async deleteWorkspaceDiscordChannelIntegration(variables: DeleteWorkspaceDiscordChannelIntegrationMutationVariables): Promise<DeleteWorkspaceDiscordChannelIntegrationMutation["deleteWorkspaceDiscordChannelIntegration"]> {
    const response = await this._client.request<DeleteWorkspaceDiscordChannelIntegrationMutation, DeleteWorkspaceDiscordChannelIntegrationMutationVariables>(
      DeleteWorkspaceDiscordChannelIntegrationDocument, variables
    );
    return response.deleteWorkspaceDiscordChannelIntegration;
  }

  async deleteWorkspaceDiscordIntegration(variables: DeleteWorkspaceDiscordIntegrationMutationVariables): Promise<DeleteWorkspaceDiscordIntegrationMutation["deleteWorkspaceDiscordIntegration"]> {
    const response = await this._client.request<DeleteWorkspaceDiscordIntegrationMutation, DeleteWorkspaceDiscordIntegrationMutationVariables>(
      DeleteWorkspaceDiscordIntegrationDocument, variables
    );
    return response.deleteWorkspaceDiscordIntegration;
  }

  async deleteWorkspaceEmailDomainSettings(): Promise<DeleteWorkspaceEmailDomainSettingsMutation["deleteWorkspaceEmailDomainSettings"]> {
    const response = await this._client.request<DeleteWorkspaceEmailDomainSettingsMutation, Record<string, never>>(
      DeleteWorkspaceEmailDomainSettingsDocument
    );
    return response.deleteWorkspaceEmailDomainSettings;
  }

  async deleteWorkspaceFile(variables: DeleteWorkspaceFileMutationVariables): Promise<DeleteWorkspaceFileMutation["deleteWorkspaceFile"]> {
    const response = await this._client.request<DeleteWorkspaceFileMutation, DeleteWorkspaceFileMutationVariables>(
      DeleteWorkspaceFileDocument, variables
    );
    return response.deleteWorkspaceFile;
  }

  async deleteWorkspaceInvite(variables: DeleteWorkspaceInviteMutationVariables): Promise<DeleteWorkspaceInviteMutation["deleteWorkspaceInvite"]> {
    const response = await this._client.request<DeleteWorkspaceInviteMutation, DeleteWorkspaceInviteMutationVariables>(
      DeleteWorkspaceInviteDocument, variables
    );
    return response.deleteWorkspaceInvite;
  }

  async deleteWorkspaceMSTeamsIntegration(variables: DeleteWorkspaceMsTeamsIntegrationMutationVariables): Promise<DeleteWorkspaceMsTeamsIntegrationMutation["deleteWorkspaceMSTeamsIntegration"]> {
    const response = await this._client.request<DeleteWorkspaceMsTeamsIntegrationMutation, DeleteWorkspaceMsTeamsIntegrationMutationVariables>(
      DeleteWorkspaceMsTeamsIntegrationDocument, variables
    );
    return response.deleteWorkspaceMSTeamsIntegration;
  }

  async deleteWorkspaceSlackChannelIntegration(variables: DeleteWorkspaceSlackChannelIntegrationMutationVariables): Promise<DeleteWorkspaceSlackChannelIntegrationMutation["deleteWorkspaceSlackChannelIntegration"]> {
    const response = await this._client.request<DeleteWorkspaceSlackChannelIntegrationMutation, DeleteWorkspaceSlackChannelIntegrationMutationVariables>(
      DeleteWorkspaceSlackChannelIntegrationDocument, variables
    );
    return response.deleteWorkspaceSlackChannelIntegration;
  }

  async deleteWorkspaceSlackIntegration(variables: DeleteWorkspaceSlackIntegrationMutationVariables): Promise<DeleteWorkspaceSlackIntegrationMutation["deleteWorkspaceSlackIntegration"]> {
    const response = await this._client.request<DeleteWorkspaceSlackIntegrationMutation, DeleteWorkspaceSlackIntegrationMutationVariables>(
      DeleteWorkspaceSlackIntegrationDocument, variables
    );
    return response.deleteWorkspaceSlackIntegration;
  }

  async escalateThread(variables: EscalateThreadMutationVariables): Promise<EscalateThreadMutation["escalateThread"]> {
    const response = await this._client.request<EscalateThreadMutation, EscalateThreadMutationVariables>(
      EscalateThreadDocument, variables
    );
    return response.escalateThread;
  }

  async forkThread(variables: ForkThreadMutationVariables): Promise<ForkThreadMutation["forkThread"]> {
    const response = await this._client.request<ForkThreadMutation, ForkThreadMutationVariables>(
      ForkThreadDocument, variables
    );
    return response.forkThread;
  }

  async generateAiToneRulesFromDescription(variables: GenerateAiToneRulesFromDescriptionMutationVariables): Promise<GenerateAiToneRulesFromDescriptionMutation["generateAiToneRulesFromDescription"]> {
    const response = await this._client.request<GenerateAiToneRulesFromDescriptionMutation, GenerateAiToneRulesFromDescriptionMutationVariables>(
      GenerateAiToneRulesFromDescriptionDocument, variables
    );
    return response.generateAiToneRulesFromDescription;
  }

  async generateHelpCenterArticle(variables: GenerateHelpCenterArticleMutationVariables): Promise<GenerateHelpCenterArticleMutation["generateHelpCenterArticle"]> {
    const response = await this._client.request<GenerateHelpCenterArticleMutation, GenerateHelpCenterArticleMutationVariables>(
      GenerateHelpCenterArticleDocument, variables
    );
    return response.generateHelpCenterArticle;
  }

  async importCustomers(variables: ImportCustomersMutationVariables): Promise<ImportCustomersMutation["importCustomers"]> {
    const response = await this._client.request<ImportCustomersMutation, ImportCustomersMutationVariables>(
      ImportCustomersDocument, variables
    );
    return response.importCustomers;
  }

  async importTenantFieldSchemas(variables: ImportTenantFieldSchemasMutationVariables): Promise<ImportTenantFieldSchemasMutation["importTenantFieldSchemas"]> {
    const response = await this._client.request<ImportTenantFieldSchemasMutation, ImportTenantFieldSchemasMutationVariables>(
      ImportTenantFieldSchemasDocument, variables
    );
    return response.importTenantFieldSchemas;
  }

  async importTenants(variables: ImportTenantsMutationVariables): Promise<ImportTenantsMutation["importTenants"]> {
    const response = await this._client.request<ImportTenantsMutation, ImportTenantsMutationVariables>(
      ImportTenantsDocument, variables
    );
    return response.importTenants;
  }

  async inviteUserToWorkspace(variables: InviteUserToWorkspaceMutationVariables): Promise<InviteUserToWorkspaceMutation["inviteUserToWorkspace"]> {
    const response = await this._client.request<InviteUserToWorkspaceMutation, InviteUserToWorkspaceMutationVariables>(
      InviteUserToWorkspaceDocument, variables
    );
    return response.inviteUserToWorkspace;
  }

  async lockThread(variables: LockThreadMutationVariables): Promise<LockThreadMutation["lockThread"]> {
    const response = await this._client.request<LockThreadMutation, LockThreadMutationVariables>(
      LockThreadDocument, variables
    );
    return response.lockThread;
  }

  async markCustomerAsSpam(variables: MarkCustomerAsSpamMutationVariables): Promise<MarkCustomerAsSpamMutation["markCustomerAsSpam"]> {
    const response = await this._client.request<MarkCustomerAsSpamMutation, MarkCustomerAsSpamMutationVariables>(
      MarkCustomerAsSpamDocument, variables
    );
    return response.markCustomerAsSpam;
  }

  async markThreadAsDone(variables: MarkThreadAsDoneMutationVariables): Promise<MarkThreadAsDoneMutation["markThreadAsDone"]> {
    const response = await this._client.request<MarkThreadAsDoneMutation, MarkThreadAsDoneMutationVariables>(
      MarkThreadAsDoneDocument, variables
    );
    return response.markThreadAsDone;
  }

  async markThreadAsTodo(variables: MarkThreadAsTodoMutationVariables): Promise<MarkThreadAsTodoMutation["markThreadAsTodo"]> {
    const response = await this._client.request<MarkThreadAsTodoMutation, MarkThreadAsTodoMutationVariables>(
      MarkThreadAsTodoDocument, variables
    );
    return response.markThreadAsTodo;
  }

  async markThreadDiscussionAsResolved(variables: MarkThreadDiscussionAsResolvedMutationVariables): Promise<MarkThreadDiscussionAsResolvedMutation["markThreadDiscussionAsResolved"]> {
    const response = await this._client.request<MarkThreadDiscussionAsResolvedMutation, MarkThreadDiscussionAsResolvedMutationVariables>(
      MarkThreadDiscussionAsResolvedDocument, variables
    );
    return response.markThreadDiscussionAsResolved;
  }

  async moveLabelType(variables: MoveLabelTypeMutationVariables): Promise<MoveLabelTypeMutation["moveLabelType"]> {
    const response = await this._client.request<MoveLabelTypeMutation, MoveLabelTypeMutationVariables>(
      MoveLabelTypeDocument, variables
    );
    return response.moveLabelType;
  }

  async previewBillingPlanChange(variables: PreviewBillingPlanChangeMutationVariables): Promise<PreviewBillingPlanChangeMutation["previewBillingPlanChange"]> {
    const response = await this._client.request<PreviewBillingPlanChangeMutation, PreviewBillingPlanChangeMutationVariables>(
      PreviewBillingPlanChangeDocument, variables
    );
    return response.previewBillingPlanChange;
  }

  async refreshConnectedDiscordChannels(variables: RefreshConnectedDiscordChannelsMutationVariables): Promise<RefreshConnectedDiscordChannelsMutation["refreshConnectedDiscordChannels"]> {
    const response = await this._client.request<RefreshConnectedDiscordChannelsMutation, RefreshConnectedDiscordChannelsMutationVariables>(
      RefreshConnectedDiscordChannelsDocument, variables
    );
    return response.refreshConnectedDiscordChannels;
  }

  async refreshWorkspaceSlackChannelIntegration(variables: RefreshWorkspaceSlackChannelIntegrationMutationVariables): Promise<RefreshWorkspaceSlackChannelIntegrationMutation["refreshWorkspaceSlackChannelIntegration"]> {
    const response = await this._client.request<RefreshWorkspaceSlackChannelIntegrationMutation, RefreshWorkspaceSlackChannelIntegrationMutationVariables>(
      RefreshWorkspaceSlackChannelIntegrationDocument, variables
    );
    return response.refreshWorkspaceSlackChannelIntegration;
  }

  async regenerateWorkspaceHmac(): Promise<RegenerateWorkspaceHmacMutation["regenerateWorkspaceHmac"]> {
    const response = await this._client.request<RegenerateWorkspaceHmacMutation, Record<string, never>>(
      RegenerateWorkspaceHmacDocument
    );
    return response.regenerateWorkspaceHmac;
  }

  async reindexKnowledgeSource(variables: ReindexKnowledgeSourceMutationVariables): Promise<ReindexKnowledgeSourceMutation["reindexKnowledgeSource"]> {
    const response = await this._client.request<ReindexKnowledgeSourceMutation, ReindexKnowledgeSourceMutationVariables>(
      ReindexKnowledgeSourceDocument, variables
    );
    return response.reindexKnowledgeSource;
  }

  async reloadCustomerCardInstance(variables: ReloadCustomerCardInstanceMutationVariables): Promise<ReloadCustomerCardInstanceMutation["reloadCustomerCardInstance"]> {
    const response = await this._client.request<ReloadCustomerCardInstanceMutation, ReloadCustomerCardInstanceMutationVariables>(
      ReloadCustomerCardInstanceDocument, variables
    );
    return response.reloadCustomerCardInstance;
  }

  async removeAdditionalAssignees(variables: RemoveAdditionalAssigneesMutationVariables): Promise<RemoveAdditionalAssigneesMutation["removeAdditionalAssignees"]> {
    const response = await this._client.request<RemoveAdditionalAssigneesMutation, RemoveAdditionalAssigneesMutationVariables>(
      RemoveAdditionalAssigneesDocument, variables
    );
    return response.removeAdditionalAssignees;
  }

  async removeCustomerFromCustomerGroups(variables: RemoveCustomerFromCustomerGroupsMutationVariables): Promise<RemoveCustomerFromCustomerGroupsMutation["removeCustomerFromCustomerGroups"]> {
    const response = await this._client.request<RemoveCustomerFromCustomerGroupsMutation, RemoveCustomerFromCustomerGroupsMutationVariables>(
      RemoveCustomerFromCustomerGroupsDocument, variables
    );
    return response.removeCustomerFromCustomerGroups;
  }

  async removeCustomerFromTenants(variables: RemoveCustomerFromTenantsMutationVariables): Promise<RemoveCustomerFromTenantsMutation["removeCustomerFromTenants"]> {
    const response = await this._client.request<RemoveCustomerFromTenantsMutation, RemoveCustomerFromTenantsMutationVariables>(
      RemoveCustomerFromTenantsDocument, variables
    );
    return response.removeCustomerFromTenants;
  }

  async removeLabels(variables: RemoveLabelsMutationVariables): Promise<RemoveLabelsMutation["removeLabels"]> {
    const response = await this._client.request<RemoveLabelsMutation, RemoveLabelsMutationVariables>(
      RemoveLabelsDocument, variables
    );
    return response.removeLabels;
  }

  async removeLabelsFromUser(variables: RemoveLabelsFromUserMutationVariables): Promise<RemoveLabelsFromUserMutation["removeLabelsFromUser"]> {
    const response = await this._client.request<RemoveLabelsFromUserMutation, RemoveLabelsFromUserMutationVariables>(
      RemoveLabelsFromUserDocument, variables
    );
    return response.removeLabelsFromUser;
  }

  async removeMembersFromTier(variables: RemoveMembersFromTierMutationVariables): Promise<RemoveMembersFromTierMutation["removeMembersFromTier"]> {
    const response = await this._client.request<RemoveMembersFromTierMutation, RemoveMembersFromTierMutationVariables>(
      RemoveMembersFromTierDocument, variables
    );
    return response.removeMembersFromTier;
  }

  async removeTenantFieldSchemaMapping(variables: RemoveTenantFieldSchemaMappingMutationVariables): Promise<RemoveTenantFieldSchemaMappingMutation["removeTenantFieldSchemaMapping"]> {
    const response = await this._client.request<RemoveTenantFieldSchemaMappingMutation, RemoveTenantFieldSchemaMappingMutationVariables>(
      RemoveTenantFieldSchemaMappingDocument, variables
    );
    return response.removeTenantFieldSchemaMapping;
  }

  async removeUserFromActiveBillingRota(variables: RemoveUserFromActiveBillingRotaMutationVariables): Promise<RemoveUserFromActiveBillingRotaMutation["removeUserFromActiveBillingRota"]> {
    const response = await this._client.request<RemoveUserFromActiveBillingRotaMutation, RemoveUserFromActiveBillingRotaMutationVariables>(
      RemoveUserFromActiveBillingRotaDocument, variables
    );
    return response.removeUserFromActiveBillingRota;
  }

  async removeWorkspaceAlternateSupportEmailAddress(variables: RemoveWorkspaceAlternateSupportEmailAddressMutationVariables): Promise<RemoveWorkspaceAlternateSupportEmailAddressMutation["removeWorkspaceAlternateSupportEmailAddress"]> {
    const response = await this._client.request<RemoveWorkspaceAlternateSupportEmailAddressMutation, RemoveWorkspaceAlternateSupportEmailAddressMutationVariables>(
      RemoveWorkspaceAlternateSupportEmailAddressDocument, variables
    );
    return response.removeWorkspaceAlternateSupportEmailAddress;
  }

  async reorderAutoresponders(variables: ReorderAutorespondersMutationVariables): Promise<ReorderAutorespondersMutation["reorderAutoresponders"]> {
    const response = await this._client.request<ReorderAutorespondersMutation, ReorderAutorespondersMutationVariables>(
      ReorderAutorespondersDocument, variables
    );
    return response.reorderAutoresponders;
  }

  async reorderCustomerCardConfigs(variables: ReorderCustomerCardConfigsMutationVariables): Promise<ReorderCustomerCardConfigsMutation["reorderCustomerCardConfigs"]> {
    const response = await this._client.request<ReorderCustomerCardConfigsMutation, ReorderCustomerCardConfigsMutationVariables>(
      ReorderCustomerCardConfigsDocument, variables
    );
    return response.reorderCustomerCardConfigs;
  }

  async reorderCustomerSurveys(variables: ReorderCustomerSurveysMutationVariables): Promise<ReorderCustomerSurveysMutation["reorderCustomerSurveys"]> {
    const response = await this._client.request<ReorderCustomerSurveysMutation, ReorderCustomerSurveysMutationVariables>(
      ReorderCustomerSurveysDocument, variables
    );
    return response.reorderCustomerSurveys;
  }

  async reorderThreadFieldSchemas(variables: ReorderThreadFieldSchemasMutationVariables): Promise<ReorderThreadFieldSchemasMutation["reorderThreadFieldSchemas"]> {
    const response = await this._client.request<ReorderThreadFieldSchemasMutation, ReorderThreadFieldSchemasMutationVariables>(
      ReorderThreadFieldSchemasDocument, variables
    );
    return response.reorderThreadFieldSchemas;
  }

  async replyToEmail(variables: ReplyToEmailMutationVariables): Promise<ReplyToEmailMutation["replyToEmail"]> {
    const response = await this._client.request<ReplyToEmailMutation, ReplyToEmailMutationVariables>(
      ReplyToEmailDocument, variables
    );
    return response.replyToEmail;
  }

  async replyToThread(variables: ReplyToThreadMutationVariables): Promise<ReplyToThreadMutation["replyToThread"]> {
    const response = await this._client.request<ReplyToThreadMutation, ReplyToThreadMutationVariables>(
      ReplyToThreadDocument, variables
    );
    return response.replyToThread;
  }

  async resolveCustomerForMSTeamsChannel(variables: ResolveCustomerForMsTeamsChannelMutationVariables): Promise<ResolveCustomerForMsTeamsChannelMutation["resolveCustomerForMSTeamsChannel"]> {
    const response = await this._client.request<ResolveCustomerForMsTeamsChannelMutation, ResolveCustomerForMsTeamsChannelMutationVariables>(
      ResolveCustomerForMsTeamsChannelDocument, variables
    );
    return response.resolveCustomerForMSTeamsChannel;
  }

  async resolveCustomerForSlackChannel(variables: ResolveCustomerForSlackChannelMutationVariables): Promise<ResolveCustomerForSlackChannelMutation["resolveCustomerForSlackChannel"]> {
    const response = await this._client.request<ResolveCustomerForSlackChannelMutation, ResolveCustomerForSlackChannelMutationVariables>(
      ResolveCustomerForSlackChannelDocument, variables
    );
    return response.resolveCustomerForSlackChannel;
  }

  async sendBulkEmail(variables: SendBulkEmailMutationVariables): Promise<SendBulkEmailMutation["sendBulkEmail"]> {
    const response = await this._client.request<SendBulkEmailMutation, SendBulkEmailMutationVariables>(
      SendBulkEmailDocument, variables
    );
    return response.sendBulkEmail;
  }

  async sendChat(variables: SendChatMutationVariables): Promise<SendChatMutation["sendChat"]> {
    const response = await this._client.request<SendChatMutation, SendChatMutationVariables>(
      SendChatDocument, variables
    );
    return response.sendChat;
  }

  async sendCustomerChat(variables: SendCustomerChatMutationVariables): Promise<SendCustomerChatMutation["sendCustomerChat"]> {
    const response = await this._client.request<SendCustomerChatMutation, SendCustomerChatMutationVariables>(
      SendCustomerChatDocument, variables
    );
    return response.sendCustomerChat;
  }

  async sendDiscordMessage(variables: SendDiscordMessageMutationVariables): Promise<SendDiscordMessageMutation["sendDiscordMessage"]> {
    const response = await this._client.request<SendDiscordMessageMutation, SendDiscordMessageMutationVariables>(
      SendDiscordMessageDocument, variables
    );
    return response.sendDiscordMessage;
  }

  async sendMSTeamsMessage(variables: SendMsTeamsMessageMutationVariables): Promise<SendMsTeamsMessageMutation["sendMSTeamsMessage"]> {
    const response = await this._client.request<SendMsTeamsMessageMutation, SendMsTeamsMessageMutationVariables>(
      SendMsTeamsMessageDocument, variables
    );
    return response.sendMSTeamsMessage;
  }

  async sendNewEmail(variables: SendNewEmailMutationVariables): Promise<SendNewEmailMutation["sendNewEmail"]> {
    const response = await this._client.request<SendNewEmailMutation, SendNewEmailMutationVariables>(
      SendNewEmailDocument, variables
    );
    return response.sendNewEmail;
  }

  async sendSlackMessage(variables: SendSlackMessageMutationVariables): Promise<SendSlackMessageMutation["sendSlackMessage"]> {
    const response = await this._client.request<SendSlackMessageMutation, SendSlackMessageMutationVariables>(
      SendSlackMessageDocument, variables
    );
    return response.sendSlackMessage;
  }

  async sendThreadDiscussionMessage(variables: SendThreadDiscussionMessageMutationVariables): Promise<SendThreadDiscussionMessageMutation["sendThreadDiscussionMessage"]> {
    const response = await this._client.request<SendThreadDiscussionMessageMutation, SendThreadDiscussionMessageMutationVariables>(
      SendThreadDiscussionMessageDocument, variables
    );
    return response.sendThreadDiscussionMessage;
  }

  async setCustomerTenants(variables: SetCustomerTenantsMutationVariables): Promise<SetCustomerTenantsMutation["setCustomerTenants"]> {
    const response = await this._client.request<SetCustomerTenantsMutation, SetCustomerTenantsMutationVariables>(
      SetCustomerTenantsDocument, variables
    );
    return response.setCustomerTenants;
  }

  async setupTenantFieldSchemaMapping(variables: SetupTenantFieldSchemaMappingMutationVariables): Promise<SetupTenantFieldSchemaMappingMutation["setupTenantFieldSchemaMapping"]> {
    const response = await this._client.request<SetupTenantFieldSchemaMappingMutation, SetupTenantFieldSchemaMappingMutationVariables>(
      SetupTenantFieldSchemaMappingDocument, variables
    );
    return response.setupTenantFieldSchemaMapping;
  }

  async shareThreadToUserInSlack(variables: ShareThreadToUserInSlackMutationVariables): Promise<ShareThreadToUserInSlackMutation["shareThreadToUserInSlack"]> {
    const response = await this._client.request<ShareThreadToUserInSlackMutation, ShareThreadToUserInSlackMutationVariables>(
      ShareThreadToUserInSlackDocument, variables
    );
    return response.shareThreadToUserInSlack;
  }

  async snoozeThread(variables: SnoozeThreadMutationVariables): Promise<SnoozeThreadMutation["snoozeThread"]> {
    const response = await this._client.request<SnoozeThreadMutation, SnoozeThreadMutationVariables>(
      SnoozeThreadDocument, variables
    );
    return response.snoozeThread;
  }

  async startServiceAuthorization(variables: StartServiceAuthorizationMutationVariables): Promise<StartServiceAuthorizationMutation["startServiceAuthorization"]> {
    const response = await this._client.request<StartServiceAuthorizationMutation, StartServiceAuthorizationMutationVariables>(
      StartServiceAuthorizationDocument, variables
    );
    return response.startServiceAuthorization;
  }

  async syncBusinessHoursSlots(variables: SyncBusinessHoursSlotsMutationVariables): Promise<SyncBusinessHoursSlotsMutation["syncBusinessHoursSlots"]> {
    const response = await this._client.request<SyncBusinessHoursSlotsMutation, SyncBusinessHoursSlotsMutationVariables>(
      SyncBusinessHoursSlotsDocument, variables
    );
    return response.syncBusinessHoursSlots;
  }

  async syncUserWorkingHours(variables: SyncUserWorkingHoursMutationVariables): Promise<SyncUserWorkingHoursMutation["syncUserWorkingHours"]> {
    const response = await this._client.request<SyncUserWorkingHoursMutation, SyncUserWorkingHoursMutationVariables>(
      SyncUserWorkingHoursDocument, variables
    );
    return response.syncUserWorkingHours;
  }

  async toggleSlackMessageReaction(variables: ToggleSlackMessageReactionMutationVariables): Promise<ToggleSlackMessageReactionMutation["toggleSlackMessageReaction"]> {
    const response = await this._client.request<ToggleSlackMessageReactionMutation, ToggleSlackMessageReactionMutationVariables>(
      ToggleSlackMessageReactionDocument, variables
    );
    return response.toggleSlackMessageReaction;
  }

  async toggleWorkflowRulePublished(variables: ToggleWorkflowRulePublishedMutationVariables): Promise<ToggleWorkflowRulePublishedMutation["toggleWorkflowRulePublished"]> {
    const response = await this._client.request<ToggleWorkflowRulePublishedMutation, ToggleWorkflowRulePublishedMutationVariables>(
      ToggleWorkflowRulePublishedDocument, variables
    );
    return response.toggleWorkflowRulePublished;
  }

  async triggerWorkflow(variables: TriggerWorkflowMutationVariables): Promise<TriggerWorkflowMutation["triggerWorkflow"]> {
    const response = await this._client.request<TriggerWorkflowMutation, TriggerWorkflowMutationVariables>(
      TriggerWorkflowDocument, variables
    );
    return response.triggerWorkflow;
  }

  async triggerWorkflowRule(variables: TriggerWorkflowRuleMutationVariables): Promise<TriggerWorkflowRuleMutation["triggerWorkflowRule"]> {
    const response = await this._client.request<TriggerWorkflowRuleMutation, TriggerWorkflowRuleMutationVariables>(
      TriggerWorkflowRuleDocument, variables
    );
    return response.triggerWorkflowRule;
  }

  async unarchiveLabelType(variables: UnarchiveLabelTypeMutationVariables): Promise<UnarchiveLabelTypeMutation["unarchiveLabelType"]> {
    const response = await this._client.request<UnarchiveLabelTypeMutation, UnarchiveLabelTypeMutationVariables>(
      UnarchiveLabelTypeDocument, variables
    );
    return response.unarchiveLabelType;
  }

  async unassignThread(variables: UnassignThreadMutationVariables): Promise<UnassignThreadMutation["unassignThread"]> {
    const response = await this._client.request<UnassignThreadMutation, UnassignThreadMutationVariables>(
      UnassignThreadDocument, variables
    );
    return response.unassignThread;
  }

  async unmarkCustomerAsSpam(variables: UnmarkCustomerAsSpamMutationVariables): Promise<UnmarkCustomerAsSpamMutation["unmarkCustomerAsSpam"]> {
    const response = await this._client.request<UnmarkCustomerAsSpamMutation, UnmarkCustomerAsSpamMutationVariables>(
      UnmarkCustomerAsSpamDocument, variables
    );
    return response.unmarkCustomerAsSpam;
  }

  async updateActiveBillingRota(variables: UpdateActiveBillingRotaMutationVariables): Promise<UpdateActiveBillingRotaMutation["updateActiveBillingRota"]> {
    const response = await this._client.request<UpdateActiveBillingRotaMutation, UpdateActiveBillingRotaMutationVariables>(
      UpdateActiveBillingRotaDocument, variables
    );
    return response.updateActiveBillingRota;
  }

  async updateAiToneRules(variables: UpdateAiToneRulesMutationVariables): Promise<UpdateAiToneRulesMutation["updateAiToneRules"]> {
    const response = await this._client.request<UpdateAiToneRulesMutation, UpdateAiToneRulesMutationVariables>(
      UpdateAiToneRulesDocument, variables
    );
    return response.updateAiToneRules;
  }

  async updateApiKey(variables: UpdateApiKeyMutationVariables): Promise<UpdateApiKeyMutation["updateApiKey"]> {
    const response = await this._client.request<UpdateApiKeyMutation, UpdateApiKeyMutationVariables>(
      UpdateApiKeyDocument, variables
    );
    return response.updateApiKey;
  }

  async updateAutoresponder(variables: UpdateAutoresponderMutationVariables): Promise<UpdateAutoresponderMutation["updateAutoresponder"]> {
    const response = await this._client.request<UpdateAutoresponderMutation, UpdateAutoresponderMutationVariables>(
      UpdateAutoresponderDocument, variables
    );
    return response.updateAutoresponder;
  }

  async updateChatApp(variables: UpdateChatAppMutationVariables): Promise<UpdateChatAppMutation["updateChatApp"]> {
    const response = await this._client.request<UpdateChatAppMutation, UpdateChatAppMutationVariables>(
      UpdateChatAppDocument, variables
    );
    return response.updateChatApp;
  }

  async updateCompanyTier(variables: UpdateCompanyTierMutationVariables): Promise<UpdateCompanyTierMutation["updateCompanyTier"]> {
    const response = await this._client.request<UpdateCompanyTierMutation, UpdateCompanyTierMutationVariables>(
      UpdateCompanyTierDocument, variables
    );
    return response.updateCompanyTier;
  }

  async updateConnectedDiscordChannel(variables: UpdateConnectedDiscordChannelMutationVariables): Promise<UpdateConnectedDiscordChannelMutation["updateConnectedDiscordChannel"]> {
    const response = await this._client.request<UpdateConnectedDiscordChannelMutation, UpdateConnectedDiscordChannelMutationVariables>(
      UpdateConnectedDiscordChannelDocument, variables
    );
    return response.updateConnectedDiscordChannel;
  }

  async updateConnectedSlackChannel(variables: UpdateConnectedSlackChannelMutationVariables): Promise<UpdateConnectedSlackChannelMutation["updateConnectedSlackChannel"]> {
    const response = await this._client.request<UpdateConnectedSlackChannelMutation, UpdateConnectedSlackChannelMutationVariables>(
      UpdateConnectedSlackChannelDocument, variables
    );
    return response.updateConnectedSlackChannel;
  }

  async updateCustomRole(variables: UpdateCustomRoleMutationVariables): Promise<UpdateCustomRoleMutation["updateCustomRole"]> {
    const response = await this._client.request<UpdateCustomRoleMutation, UpdateCustomRoleMutationVariables>(
      UpdateCustomRoleDocument, variables
    );
    return response.updateCustomRole;
  }

  async updateCustomerCardConfig(variables: UpdateCustomerCardConfigMutationVariables): Promise<UpdateCustomerCardConfigMutation["updateCustomerCardConfig"]> {
    const response = await this._client.request<UpdateCustomerCardConfigMutation, UpdateCustomerCardConfigMutationVariables>(
      UpdateCustomerCardConfigDocument, variables
    );
    return response.updateCustomerCardConfig;
  }

  async updateCustomerCompany(variables: UpdateCustomerCompanyMutationVariables): Promise<UpdateCustomerCompanyMutation["updateCustomerCompany"]> {
    const response = await this._client.request<UpdateCustomerCompanyMutation, UpdateCustomerCompanyMutationVariables>(
      UpdateCustomerCompanyDocument, variables
    );
    return response.updateCustomerCompany;
  }

  async updateCustomerGroup(variables: UpdateCustomerGroupMutationVariables): Promise<UpdateCustomerGroupMutation["updateCustomerGroup"]> {
    const response = await this._client.request<UpdateCustomerGroupMutation, UpdateCustomerGroupMutationVariables>(
      UpdateCustomerGroupDocument, variables
    );
    return response.updateCustomerGroup;
  }

  async updateCustomerSurvey(variables: UpdateCustomerSurveyMutationVariables): Promise<UpdateCustomerSurveyMutation["updateCustomerSurvey"]> {
    const response = await this._client.request<UpdateCustomerSurveyMutation, UpdateCustomerSurveyMutationVariables>(
      UpdateCustomerSurveyDocument, variables
    );
    return response.updateCustomerSurvey;
  }

  async updateEscalationPath(variables: UpdateEscalationPathMutationVariables): Promise<UpdateEscalationPathMutation["updateEscalationPath"]> {
    const response = await this._client.request<UpdateEscalationPathMutation, UpdateEscalationPathMutationVariables>(
      UpdateEscalationPathDocument, variables
    );
    return response.updateEscalationPath;
  }

  async updateGeneratedReply(variables: UpdateGeneratedReplyMutationVariables): Promise<UpdateGeneratedReplyMutation["updateGeneratedReply"]> {
    const response = await this._client.request<UpdateGeneratedReplyMutation, UpdateGeneratedReplyMutationVariables>(
      UpdateGeneratedReplyDocument, variables
    );
    return response.updateGeneratedReply;
  }

  async updateHelpCenter(variables: UpdateHelpCenterMutationVariables): Promise<UpdateHelpCenterMutation["updateHelpCenter"]> {
    const response = await this._client.request<UpdateHelpCenterMutation, UpdateHelpCenterMutationVariables>(
      UpdateHelpCenterDocument, variables
    );
    return response.updateHelpCenter;
  }

  async updateHelpCenterArticleGroup(variables: UpdateHelpCenterArticleGroupMutationVariables): Promise<UpdateHelpCenterArticleGroupMutation["updateHelpCenterArticleGroup"]> {
    const response = await this._client.request<UpdateHelpCenterArticleGroupMutation, UpdateHelpCenterArticleGroupMutationVariables>(
      UpdateHelpCenterArticleGroupDocument, variables
    );
    return response.updateHelpCenterArticleGroup;
  }

  async updateHelpCenterCustomDomainName(variables: UpdateHelpCenterCustomDomainNameMutationVariables): Promise<UpdateHelpCenterCustomDomainNameMutation["updateHelpCenterCustomDomainName"]> {
    const response = await this._client.request<UpdateHelpCenterCustomDomainNameMutation, UpdateHelpCenterCustomDomainNameMutationVariables>(
      UpdateHelpCenterCustomDomainNameDocument, variables
    );
    return response.updateHelpCenterCustomDomainName;
  }

  async updateHelpCenterIndex(variables: UpdateHelpCenterIndexMutationVariables): Promise<UpdateHelpCenterIndexMutation["updateHelpCenterIndex"]> {
    const response = await this._client.request<UpdateHelpCenterIndexMutation, UpdateHelpCenterIndexMutationVariables>(
      UpdateHelpCenterIndexDocument, variables
    );
    return response.updateHelpCenterIndex;
  }

  async updateInternalNotifications(variables: UpdateInternalNotificationsMutationVariables): Promise<UpdateInternalNotificationsMutation["updateInternalNotifications"]> {
    const response = await this._client.request<UpdateInternalNotificationsMutation, UpdateInternalNotificationsMutationVariables>(
      UpdateInternalNotificationsDocument, variables
    );
    return response.updateInternalNotifications;
  }

  async updateLabelType(variables: UpdateLabelTypeMutationVariables): Promise<UpdateLabelTypeMutation["updateLabelType"]> {
    const response = await this._client.request<UpdateLabelTypeMutation, UpdateLabelTypeMutationVariables>(
      UpdateLabelTypeDocument, variables
    );
    return response.updateLabelType;
  }

  async updateMachineUser(variables: UpdateMachineUserMutationVariables): Promise<UpdateMachineUserMutation["updateMachineUser"]> {
    const response = await this._client.request<UpdateMachineUserMutation, UpdateMachineUserMutationVariables>(
      UpdateMachineUserDocument, variables
    );
    return response.updateMachineUser;
  }

  async updateMyUser(variables: UpdateMyUserMutationVariables): Promise<UpdateMyUserMutation["updateMyUser"]> {
    const response = await this._client.request<UpdateMyUserMutation, UpdateMyUserMutationVariables>(
      UpdateMyUserDocument, variables
    );
    return response.updateMyUser;
  }

  async updateNote(variables: UpdateNoteMutationVariables): Promise<UpdateNoteMutation["updateNote"]> {
    const response = await this._client.request<UpdateNoteMutation, UpdateNoteMutationVariables>(
      UpdateNoteDocument, variables
    );
    return response.updateNote;
  }

  async updateSavedThreadsView(variables: UpdateSavedThreadsViewMutationVariables): Promise<UpdateSavedThreadsViewMutation["updateSavedThreadsView"]> {
    const response = await this._client.request<UpdateSavedThreadsViewMutation, UpdateSavedThreadsViewMutationVariables>(
      UpdateSavedThreadsViewDocument, variables
    );
    return response.updateSavedThreadsView;
  }

  async updateServiceLevelAgreement(variables: UpdateServiceLevelAgreementMutationVariables): Promise<UpdateServiceLevelAgreementMutation["updateServiceLevelAgreement"]> {
    const response = await this._client.request<UpdateServiceLevelAgreementMutation, UpdateServiceLevelAgreementMutationVariables>(
      UpdateServiceLevelAgreementDocument, variables
    );
    return response.updateServiceLevelAgreement;
  }

  async updateSetting(variables: UpdateSettingMutationVariables): Promise<UpdateSettingMutation["updateSetting"]> {
    const response = await this._client.request<UpdateSettingMutation, UpdateSettingMutationVariables>(
      UpdateSettingDocument, variables
    );
    return response.updateSetting;
  }

  async updateSnippet(variables: UpdateSnippetMutationVariables): Promise<UpdateSnippetMutation["updateSnippet"]> {
    const response = await this._client.request<UpdateSnippetMutation, UpdateSnippetMutationVariables>(
      UpdateSnippetDocument, variables
    );
    return response.updateSnippet;
  }

  async updateTask(variables: UpdateTaskMutationVariables): Promise<UpdateTaskMutation["updateTask"]> {
    const response = await this._client.request<UpdateTaskMutation, UpdateTaskMutationVariables>(
      UpdateTaskDocument, variables
    );
    return response.updateTask;
  }

  async updateTenantTier(variables: UpdateTenantTierMutationVariables): Promise<UpdateTenantTierMutation["updateTenantTier"]> {
    const response = await this._client.request<UpdateTenantTierMutation, UpdateTenantTierMutationVariables>(
      UpdateTenantTierDocument, variables
    );
    return response.updateTenantTier;
  }

  async updateThreadAgentStatus(variables: UpdateThreadAgentStatusMutationVariables): Promise<UpdateThreadAgentStatusMutation["updateThreadAgentStatus"]> {
    const response = await this._client.request<UpdateThreadAgentStatusMutation, UpdateThreadAgentStatusMutationVariables>(
      UpdateThreadAgentStatusDocument, variables
    );
    return response.updateThreadAgentStatus;
  }

  async updateThreadEscalationPath(variables: UpdateThreadEscalationPathMutationVariables): Promise<UpdateThreadEscalationPathMutation["updateThreadEscalationPath"]> {
    const response = await this._client.request<UpdateThreadEscalationPathMutation, UpdateThreadEscalationPathMutationVariables>(
      UpdateThreadEscalationPathDocument, variables
    );
    return response.updateThreadEscalationPath;
  }

  async updateThreadFieldSchema(variables: UpdateThreadFieldSchemaMutationVariables): Promise<UpdateThreadFieldSchemaMutation["updateThreadFieldSchema"]> {
    const response = await this._client.request<UpdateThreadFieldSchemaMutation, UpdateThreadFieldSchemaMutationVariables>(
      UpdateThreadFieldSchemaDocument, variables
    );
    return response.updateThreadFieldSchema;
  }

  async updateThreadSuggestedActionStatus(variables: UpdateThreadSuggestedActionStatusMutationVariables): Promise<UpdateThreadSuggestedActionStatusMutation["updateThreadSuggestedActionStatus"]> {
    const response = await this._client.request<UpdateThreadSuggestedActionStatusMutation, UpdateThreadSuggestedActionStatusMutationVariables>(
      UpdateThreadSuggestedActionStatusDocument, variables
    );
    return response.updateThreadSuggestedActionStatus;
  }

  async updateThreadTenant(variables: UpdateThreadTenantMutationVariables): Promise<UpdateThreadTenantMutation["updateThreadTenant"]> {
    const response = await this._client.request<UpdateThreadTenantMutation, UpdateThreadTenantMutationVariables>(
      UpdateThreadTenantDocument, variables
    );
    return response.updateThreadTenant;
  }

  async updateThreadTier(variables: UpdateThreadTierMutationVariables): Promise<UpdateThreadTierMutation["updateThreadTier"]> {
    const response = await this._client.request<UpdateThreadTierMutation, UpdateThreadTierMutationVariables>(
      UpdateThreadTierDocument, variables
    );
    return response.updateThreadTier;
  }

  async updateThreadTitle(variables: UpdateThreadTitleMutationVariables): Promise<UpdateThreadTitleMutation["updateThreadTitle"]> {
    const response = await this._client.request<UpdateThreadTitleMutation, UpdateThreadTitleMutationVariables>(
      UpdateThreadTitleDocument, variables
    );
    return response.updateThreadTitle;
  }

  async updateTier(variables: UpdateTierMutationVariables): Promise<UpdateTierMutation["updateTier"]> {
    const response = await this._client.request<UpdateTierMutation, UpdateTierMutationVariables>(
      UpdateTierDocument, variables
    );
    return response.updateTier;
  }

  async updateUserDefaultSavedThreadsView(variables: UpdateUserDefaultSavedThreadsViewMutationVariables): Promise<UpdateUserDefaultSavedThreadsViewMutation["updateUserDefaultSavedThreadsView"]> {
    const response = await this._client.request<UpdateUserDefaultSavedThreadsViewMutation, UpdateUserDefaultSavedThreadsViewMutationVariables>(
      UpdateUserDefaultSavedThreadsViewDocument, variables
    );
    return response.updateUserDefaultSavedThreadsView;
  }

  async updateWebhookTarget(variables: UpdateWebhookTargetMutationVariables): Promise<UpdateWebhookTargetMutation["updateWebhookTarget"]> {
    const response = await this._client.request<UpdateWebhookTargetMutation, UpdateWebhookTargetMutationVariables>(
      UpdateWebhookTargetDocument, variables
    );
    return response.updateWebhookTarget;
  }

  async updateWorkflow(variables: UpdateWorkflowMutationVariables): Promise<UpdateWorkflowMutation["updateWorkflow"]> {
    const response = await this._client.request<UpdateWorkflowMutation, UpdateWorkflowMutationVariables>(
      UpdateWorkflowDocument, variables
    );
    return response.updateWorkflow;
  }

  async updateWorkflowRule(variables: UpdateWorkflowRuleMutationVariables): Promise<UpdateWorkflowRuleMutation["updateWorkflowRule"]> {
    const response = await this._client.request<UpdateWorkflowRuleMutation, UpdateWorkflowRuleMutationVariables>(
      UpdateWorkflowRuleDocument, variables
    );
    return response.updateWorkflowRule;
  }

  async updateWorkflowStep(variables: UpdateWorkflowStepMutationVariables): Promise<UpdateWorkflowStepMutation["updateWorkflowStep"]> {
    const response = await this._client.request<UpdateWorkflowStepMutation, UpdateWorkflowStepMutationVariables>(
      UpdateWorkflowStepDocument, variables
    );
    return response.updateWorkflowStep;
  }

  async updateWorkspace(variables: UpdateWorkspaceMutationVariables): Promise<UpdateWorkspaceMutation["updateWorkspace"]> {
    const response = await this._client.request<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(
      UpdateWorkspaceDocument, variables
    );
    return response.updateWorkspace;
  }

  async updateWorkspaceEmailSettings(variables: UpdateWorkspaceEmailSettingsMutationVariables): Promise<UpdateWorkspaceEmailSettingsMutation["updateWorkspaceEmailSettings"]> {
    const response = await this._client.request<UpdateWorkspaceEmailSettingsMutation, UpdateWorkspaceEmailSettingsMutationVariables>(
      UpdateWorkspaceEmailSettingsDocument, variables
    );
    return response.updateWorkspaceEmailSettings;
  }

  async upsertBusinessHours(variables: UpsertBusinessHoursMutationVariables): Promise<UpsertBusinessHoursMutation["upsertBusinessHours"]> {
    const response = await this._client.request<UpsertBusinessHoursMutation, UpsertBusinessHoursMutationVariables>(
      UpsertBusinessHoursDocument, variables
    );
    return response.upsertBusinessHours;
  }

  async upsertCompany(variables: UpsertCompanyMutationVariables): Promise<UpsertCompanyMutation["upsertCompany"]> {
    const response = await this._client.request<UpsertCompanyMutation, UpsertCompanyMutationVariables>(
      UpsertCompanyDocument, variables
    );
    return response.upsertCompany;
  }

  async upsertCustomer(variables: UpsertCustomerMutationVariables): Promise<UpsertCustomerMutation["upsertCustomer"]> {
    const response = await this._client.request<UpsertCustomerMutation, UpsertCustomerMutationVariables>(
      UpsertCustomerDocument, variables
    );
    return response.upsertCustomer;
  }

  async upsertCustomerGroup(variables: UpsertCustomerGroupMutationVariables): Promise<UpsertCustomerGroupMutation["upsertCustomerGroup"]> {
    const response = await this._client.request<UpsertCustomerGroupMutation, UpsertCustomerGroupMutationVariables>(
      UpsertCustomerGroupDocument, variables
    );
    return response.upsertCustomerGroup;
  }

  async upsertHelpCenterArticle(variables: UpsertHelpCenterArticleMutationVariables): Promise<UpsertHelpCenterArticleMutation["upsertHelpCenterArticle"]> {
    const response = await this._client.request<UpsertHelpCenterArticleMutation, UpsertHelpCenterArticleMutationVariables>(
      UpsertHelpCenterArticleDocument, variables
    );
    return response.upsertHelpCenterArticle;
  }

  async upsertMyEmailSignature(variables: UpsertMyEmailSignatureMutationVariables): Promise<UpsertMyEmailSignatureMutation["upsertMyEmailSignature"]> {
    const response = await this._client.request<UpsertMyEmailSignatureMutation, UpsertMyEmailSignatureMutationVariables>(
      UpsertMyEmailSignatureDocument, variables
    );
    return response.upsertMyEmailSignature;
  }

  async upsertRoleScopes(variables: UpsertRoleScopesMutationVariables): Promise<UpsertRoleScopesMutation["upsertRoleScopes"]> {
    const response = await this._client.request<UpsertRoleScopesMutation, UpsertRoleScopesMutationVariables>(
      UpsertRoleScopesDocument, variables
    );
    return response.upsertRoleScopes;
  }

  async upsertTeamSettings(variables: UpsertTeamSettingsMutationVariables): Promise<UpsertTeamSettingsMutation["upsertTeamSettings"]> {
    const response = await this._client.request<UpsertTeamSettingsMutation, UpsertTeamSettingsMutationVariables>(
      UpsertTeamSettingsDocument, variables
    );
    return response.upsertTeamSettings;
  }

  async upsertTenant(variables: UpsertTenantMutationVariables): Promise<UpsertTenantMutation["upsertTenant"]> {
    const response = await this._client.request<UpsertTenantMutation, UpsertTenantMutationVariables>(
      UpsertTenantDocument, variables
    );
    return response.upsertTenant;
  }

  async upsertTenantField(variables: UpsertTenantFieldMutationVariables): Promise<UpsertTenantFieldMutation["upsertTenantField"]> {
    const response = await this._client.request<UpsertTenantFieldMutation, UpsertTenantFieldMutationVariables>(
      UpsertTenantFieldDocument, variables
    );
    return response.upsertTenantField;
  }

  async upsertTenantFieldSchema(variables: UpsertTenantFieldSchemaMutationVariables): Promise<UpsertTenantFieldSchemaMutation["upsertTenantFieldSchema"]> {
    const response = await this._client.request<UpsertTenantFieldSchemaMutation, UpsertTenantFieldSchemaMutationVariables>(
      UpsertTenantFieldSchemaDocument, variables
    );
    return response.upsertTenantFieldSchema;
  }

  async upsertThreadField(variables: UpsertThreadFieldMutationVariables): Promise<UpsertThreadFieldMutation["upsertThreadField"]> {
    const response = await this._client.request<UpsertThreadFieldMutation, UpsertThreadFieldMutationVariables>(
      UpsertThreadFieldDocument, variables
    );
    return response.upsertThreadField;
  }

  async verifyHelpCenterCustomDomainName(variables: VerifyHelpCenterCustomDomainNameMutationVariables): Promise<VerifyHelpCenterCustomDomainNameMutation["verifyHelpCenterCustomDomainName"]> {
    const response = await this._client.request<VerifyHelpCenterCustomDomainNameMutation, VerifyHelpCenterCustomDomainNameMutationVariables>(
      VerifyHelpCenterCustomDomainNameDocument, variables
    );
    return response.verifyHelpCenterCustomDomainName;
  }

  async verifyWorkspaceEmailDnsSettings(): Promise<VerifyWorkspaceEmailDnsSettingsMutation["verifyWorkspaceEmailDnsSettings"]> {
    const response = await this._client.request<VerifyWorkspaceEmailDnsSettingsMutation, Record<string, never>>(
      VerifyWorkspaceEmailDnsSettingsDocument
    );
    return response.verifyWorkspaceEmailDnsSettings;
  }

  async verifyWorkspaceEmailForwardingSettings(variables: VerifyWorkspaceEmailForwardingSettingsMutationVariables): Promise<VerifyWorkspaceEmailForwardingSettingsMutation["verifyWorkspaceEmailForwardingSettings"]> {
    const response = await this._client.request<VerifyWorkspaceEmailForwardingSettingsMutation, VerifyWorkspaceEmailForwardingSettingsMutationVariables>(
      VerifyWorkspaceEmailForwardingSettingsDocument, variables
    );
    return response.verifyWorkspaceEmailForwardingSettings;
  }
}
