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
  CustomerCustomerGroupMembershipsDocument,
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
  HelpCenterArticleGroupArticlesDocument,
  HelpCenterArticleGroupBySlugDocument,
  HelpCenterArticleGroupChildArticleGroupsDocument,
  HelpCenterArticleGroupDocument,
  HelpCenterArticleGroupsDocument,
  HelpCenterArticlesDocument,
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
  MachineUserApiKeysDocument,
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
  ThreadDiscussionMessagesDocument,
  ThreadDocument,
  ThreadFieldSchemaDocument,
  ThreadFieldSchemasDocument,
  ThreadLinkGroupsDocument,
  ThreadSlackUserDocument,
  ThreadTimelineEntriesDocument,
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
  AgentStatusDetailHandedOffFieldsFragment,
  AgentStatusDetailHandledFieldsFragment,
  AgentStatusDetailInProgressFieldsFragment,
  AiAgentFeedbackDetailsFieldsFragment,
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
  AutoresponderBusinessHoursConditionFieldsFragment,
  AutoresponderFieldsFragment,
  AutoresponderLabelConditionFieldsFragment,
  AutoresponderPrioritiesConditionFieldsFragment,
  AutoresponderQuery,
  AutoresponderQueryVariables,
  AutoresponderSupportEmailsConditionFieldsFragment,
  AutoresponderTierConditionFieldsFragment,
  AutorespondersQuery,
  AutorespondersQueryVariables,
  BeforeBreachActionFieldsFragment,
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
  ChatEntryFieldsFragment,
  ChatFieldsFragment,
  ChatThreadChannelDetailsFieldsFragment,
  CompaniesQuery,
  CompaniesQueryVariables,
  CompanyFieldsFragment,
  CompanyQuery,
  CompanyQueryVariables,
  CompanyTierMembershipFieldsFragment,
  CompleteServiceAuthorizationMutation,
  CompleteServiceAuthorizationMutationVariables,
  ComponentBadgeFieldsFragment,
  ComponentCopyButtonFieldsFragment,
  ComponentDividerFieldsFragment,
  ComponentLinkButtonFieldsFragment,
  ComponentPlainTextFieldsFragment,
  ComponentSpacerFieldsFragment,
  ComponentTextFieldsFragment,
  ComponentWorkflowButtonFieldsFragment,
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
  CsatCustomerSurveyTemplateFieldsFragment,
  CursorRepositoriesQuery,
  CursorRepositoriesQueryVariables,
  CustomEntryFieldsFragment,
  CustomRoleFieldsFragment,
  CustomRoleQuery,
  CustomRoleQueryVariables,
  CustomRolesQuery,
  CustomRolesQueryVariables,
  CustomerActorFieldsFragment,
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
  CustomerCustomerGroupMembershipsQuery,
  CustomerCustomerGroupMembershipsQueryVariables,
  CustomerEventEntryFieldsFragment,
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
  CustomerSurveyLabelConditionFieldsFragment,
  CustomerSurveyMessageSourceConditionFieldsFragment,
  CustomerSurveyPrioritiesConditionFieldsFragment,
  CustomerSurveyQuery,
  CustomerSurveyQueryVariables,
  CustomerSurveyRequestedEntryFieldsFragment,
  CustomerSurveySupportEmailsConditionFieldsFragment,
  CustomerSurveyTiersConditionFieldsFragment,
  CustomerSurveysQuery,
  CustomerSurveysQueryVariables,
  CustomersQuery,
  CustomersQueryVariables,
  DefaultServiceIntegrationFieldsFragment,
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
  DeletedCustomerActorFieldsFragment,
  DeletedThreadFieldsFragment,
  DeletedThreadsQuery,
  DeletedThreadsQueryVariables,
  DiscordCustomerIdentityFieldsFragment,
  DiscordMessageEntryFieldsFragment,
  DiscordMessageFieldsFragment,
  DiscordThreadChannelDetailsFieldsFragment,
  DiscussionResolvedNotificationDetailFieldsFragment,
  EmailBounceNotificationDetailFieldsFragment,
  EmailCustomerIdentityFieldsFragment,
  EmailEntryFieldsFragment,
  EmailFieldsFragment,
  EmailPreviewUrlFieldsFragment,
  EmailSignatureFieldsFragment,
  EnabledAiToneRulesTextQuery,
  EscalateThreadMutation,
  EscalateThreadMutationVariables,
  EscalationPathFieldsFragment,
  EscalationPathQuery,
  EscalationPathQueryVariables,
  EscalationPathStepLabelTypeFieldsFragment,
  EscalationPathStepUserFieldsFragment,
  EscalationPathsQuery,
  EscalationPathsQueryVariables,
  FavoritePageFieldsFragment,
  FirstResponseTimeServiceLevelAgreementFieldsFragment,
  ForkThreadMutation,
  ForkThreadMutationVariables,
  GenerateAiToneRulesFromDescriptionMutation,
  GenerateAiToneRulesFromDescriptionMutationVariables,
  GenerateHelpCenterArticleMutation,
  GenerateHelpCenterArticleMutationVariables,
  GeneratedRepliesQuery,
  GeneratedRepliesQueryVariables,
  GeneratedReplyFieldsFragment,
  GenericThreadLinkFieldsFragment,
  GetMsTeamsMembersForChannelQuery,
  GetMsTeamsMembersForChannelQueryVariables,
  GithubUserAuthIntegrationFieldsFragment,
  GithubUserAuthIntegrationQuery,
  HeatmapMetricFieldsFragment,
  HeatmapMetricQuery,
  HeatmapMetricQueryVariables,
  HelpCenterAiConversationMessageEntryFieldsFragment,
  HelpCenterArticleBySlugQuery,
  HelpCenterArticleBySlugQueryVariables,
  HelpCenterArticleFieldsFragment,
  HelpCenterArticleGroupArticlesQuery,
  HelpCenterArticleGroupArticlesQueryVariables,
  HelpCenterArticleGroupBySlugQuery,
  HelpCenterArticleGroupBySlugQueryVariables,
  HelpCenterArticleGroupChildArticleGroupsQuery,
  HelpCenterArticleGroupChildArticleGroupsQueryVariables,
  HelpCenterArticleGroupFieldsFragment,
  HelpCenterArticleGroupQuery,
  HelpCenterArticleGroupQueryVariables,
  HelpCenterArticleGroupsQuery,
  HelpCenterArticleGroupsQueryVariables,
  HelpCenterArticleQuery,
  HelpCenterArticleQueryVariables,
  HelpCenterArticlesQuery,
  HelpCenterArticlesQueryVariables,
  HelpCenterAuthMechanismWorkosAuthkitFieldsFragment,
  HelpCenterAuthMechanismWorkosConnectFieldsFragment,
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
  ImportThreadChannelDetailsFieldsFragment,
  ImporterTenantListsQuery,
  ImporterTenantListsQueryVariables,
  IndexedDocumentFieldsFragment,
  IndexedDocumentStatusFailedFieldsFragment,
  IndexedDocumentStatusIndexedFieldsFragment,
  IndexedDocumentStatusPendingFieldsFragment,
  IndexedDocumentsQuery,
  IndexedDocumentsQueryVariables,
  InternalNotificationFieldsFragment,
  InviteUserToWorkspaceMutation,
  InviteUserToWorkspaceMutationVariables,
  IssueTrackerFieldFieldsFragment,
  IssueTrackerFieldsQuery,
  IssueTrackerFieldsQueryVariables,
  JiraIntegrationTokenFieldsFragment,
  JiraIssueThreadLinkFieldsFragment,
  JiraSiteIntegrationFieldsFragment,
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
  LinearIssueThreadLinkFieldsFragment,
  LinearIssueThreadLinkStateTransitionedEntryFieldsFragment,
  LockThreadMutation,
  LockThreadMutationVariables,
  MachineUserActorFieldsFragment,
  MachineUserApiKeysQuery,
  MachineUserApiKeysQueryVariables,
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
  MergedThreadMessageEntryFieldsFragment,
  MeteredFeatureEntitlementFieldsFragment,
  MoveLabelTypeMutation,
  MoveLabelTypeMutationVariables,
  MsTeamsChannelMembersFieldsFragment,
  MsTeamsMessageEntryFieldsFragment,
  MsTeamsMessageFieldsFragment,
  MsTeamsThreadChannelDetailsFieldsFragment,
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
  NextResponseTimeServiceLevelAgreementFieldsFragment,
  NoteEntryFieldsFragment,
  NoteFieldsFragment,
  NoteMentionNotificationDetailFieldsFragment,
  PerSeatRecurringPriceFieldsFragment,
  PermissionsQuery,
  PlainTaskThreadLinkFieldsFragment,
  PlainThreadThreadLinkFieldsFragment,
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
  ServiceLevelAgreementStatusTransitionedEntryFieldsFragment,
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
  SlackCustomerIdentityFieldsFragment,
  SlackMessageEntryFieldsFragment,
  SlackReplyEntryFieldsFragment,
  SlackThreadChannelAssociationFieldsFragment,
  SlackThreadChannelDetailsFieldsFragment,
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
  SystemActorFieldsFragment,
  SystemFieldsFragment,
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
  TenantFieldBooleanValueFieldsFragment,
  TenantFieldDateTimeValueFieldsFragment,
  TenantFieldFieldsFragment,
  TenantFieldNumberValueFieldsFragment,
  TenantFieldSchemaFieldsFragment,
  TenantFieldSchemasQuery,
  TenantFieldSchemasQueryVariables,
  TenantFieldStringArrayValueFieldsFragment,
  TenantFieldStringValueFieldsFragment,
  TenantFieldsFragment,
  TenantQuery,
  TenantQueryVariables,
  TenantTierMembershipFieldsFragment,
  TenantsQuery,
  TenantsQueryVariables,
  ThreadAssignmentNotificationDetailFieldsFragment,
  ThreadByExternalIdQuery,
  ThreadByExternalIdQueryVariables,
  ThreadByRefQuery,
  ThreadByRefQueryVariables,
  ThreadBySlackPermalinkQuery,
  ThreadBySlackPermalinkQueryVariables,
  ThreadCatchupFeedbackDetailsFieldsFragment,
  ThreadClusterFieldsFragment,
  ThreadClusterQuery,
  ThreadClusterQueryVariables,
  ThreadClustersFeedbackDetailsFieldsFragment,
  ThreadClustersPaginatedQuery,
  ThreadClustersPaginatedQueryVariables,
  ThreadClustersQuery,
  ThreadClustersQueryVariables,
  ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsFieldsFragment,
  ThreadDiscussionEmailChannelDetailsFieldsFragment,
  ThreadDiscussionEntryFieldsFragment,
  ThreadDiscussionFieldsFragment,
  ThreadDiscussionMessageEntryFieldsFragment,
  ThreadDiscussionMessageFieldsFragment,
  ThreadDiscussionMessagesQuery,
  ThreadDiscussionMessagesQueryVariables,
  ThreadDiscussionQuery,
  ThreadDiscussionQueryVariables,
  ThreadDiscussionResolvedEntryFieldsFragment,
  ThreadDiscussionSlackChannelDetailsFieldsFragment,
  ThreadEventEntryFieldsFragment,
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
  ThreadLinkTargetCreatedEntryFieldsFragment,
  ThreadLinkTargetDeletedEntryFieldsFragment,
  ThreadPriorityChangedEntryFieldsFragment,
  ThreadQuery,
  ThreadQueryVariables,
  ThreadSlackUserQuery,
  ThreadSlackUserQueryVariables,
  ThreadStatusDetailCreatedFieldsFragment,
  ThreadStatusDetailDoneAutomaticallySetFieldsFragment,
  ThreadStatusDetailDoneManuallySetFieldsFragment,
  ThreadStatusDetailIgnoredFieldsFragment,
  ThreadStatusDetailInProgressFieldsFragment,
  ThreadStatusDetailNewReplyFieldsFragment,
  ThreadStatusDetailThreadDiscussionResolvedFieldsFragment,
  ThreadStatusDetailThreadLinkUpdatedFieldsFragment,
  ThreadStatusDetailWaitingForCustomerFieldsFragment,
  ThreadStatusDetailWaitingForDurationFieldsFragment,
  ThreadStatusTransitionedEntryFieldsFragment,
  ThreadTimelineEntriesQuery,
  ThreadTimelineEntriesQueryVariables,
  ThreadWithDistanceFieldsFragment,
  ThreadsQuery,
  ThreadsQueryVariables,
  TierFieldsFragment,
  TierQuery,
  TierQueryVariables,
  TieredRecurringPriceFieldsFragment,
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
  ToggleFeatureEntitlementFieldsFragment,
  ToggleSlackMessageReactionMutation,
  ToggleSlackMessageReactionMutationVariables,
  ToggleWorkflowRulePublishedMutation,
  ToggleWorkflowRulePublishedMutationVariables,
  ToneRuleFeedbackDetailsFieldsFragment,
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
  UserActorFieldsFragment,
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

export class AgentStatusDetailHandedOffModel {
  protected _client: PlainGraphQLClient;
  protected _data: AgentStatusDetailHandedOffFieldsFragment;
  public readonly __typename = "AgentStatusDetailHandedOff" as const;

  public readonly reason: AgentStatusDetailHandedOffFieldsFragment["reason"];
  public readonly type: AgentStatusDetailHandedOffFieldsFragment["type"];

  constructor(client: PlainGraphQLClient, data: AgentStatusDetailHandedOffFieldsFragment) {
    this._client = client;
    this._data = data;
    this.reason = data.reason;
    this.type = data.type;
  }
}

export class AgentStatusDetailHandledModel {
  protected _client: PlainGraphQLClient;
  protected _data: AgentStatusDetailHandledFieldsFragment;
  public readonly __typename = "AgentStatusDetailHandled" as const;

  public readonly type: AgentStatusDetailHandledFieldsFragment["type"];

  constructor(client: PlainGraphQLClient, data: AgentStatusDetailHandledFieldsFragment) {
    this._client = client;
    this._data = data;
    this.type = data.type;
  }
}

export class AgentStatusDetailInProgressModel {
  protected _client: PlainGraphQLClient;
  protected _data: AgentStatusDetailInProgressFieldsFragment;
  public readonly __typename = "AgentStatusDetailInProgress" as const;

  public readonly type: AgentStatusDetailInProgressFieldsFragment["type"];

  constructor(client: PlainGraphQLClient, data: AgentStatusDetailInProgressFieldsFragment) {
    this._client = client;
    this._data = data;
    this.type = data.type;
  }
}

export class AiAgentFeedbackDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: AiAgentFeedbackDetailsFieldsFragment;
  public readonly __typename = "AiAgentFeedbackDetails" as const;

  public readonly comment: AiAgentFeedbackDetailsFieldsFragment["comment"];
  public readonly reason: AiAgentFeedbackDetailsFieldsFragment["reason"];
  public readonly sentiment: AiAgentFeedbackDetailsFieldsFragment["sentiment"];
  public readonly threadId: AiAgentFeedbackDetailsFieldsFragment["threadId"];
  public readonly timelineEntryId: AiAgentFeedbackDetailsFieldsFragment["timelineEntryId"];

  constructor(client: PlainGraphQLClient, data: AiAgentFeedbackDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.comment = data.comment;
    this.reason = data.reason;
    this.sentiment = data.sentiment;
    this.threadId = data.threadId;
    this.timelineEntryId = data.timelineEntryId;
  }
}

export class AiToneRuleModel {
  protected _client: PlainGraphQLClient;
  protected _data: AiToneRuleFieldsFragment;
  public readonly __typename = "AiToneRule" as const;

  public readonly category: AiToneRuleFieldsFragment["category"];
  public readonly createdAt: AiToneRuleFieldsFragment["createdAt"];
  public readonly description: AiToneRuleFieldsFragment["description"];
  public readonly id: AiToneRuleFieldsFragment["id"];
  public readonly isEnabled: AiToneRuleFieldsFragment["isEnabled"];
  public readonly updatedAt: AiToneRuleFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: AiToneRuleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.category = data.category;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.isEnabled = data.isEnabled;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ApiKeyModel {
  protected _client: PlainGraphQLClient;
  protected _data: ApiKeyFieldsFragment;
  public readonly __typename = "ApiKey" as const;

  public readonly createdAt: ApiKeyFieldsFragment["createdAt"];
  public readonly deletedAt: ApiKeyFieldsFragment["deletedAt"];
  public readonly description: ApiKeyFieldsFragment["description"];
  public readonly id: ApiKeyFieldsFragment["id"];
  public readonly isDeleted: ApiKeyFieldsFragment["isDeleted"];
  public readonly permissions: ApiKeyFieldsFragment["permissions"];
  public readonly updatedAt: ApiKeyFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.deletedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.deletedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class AttachmentDownloadUrlModel {
  protected _client: PlainGraphQLClient;
  protected _data: AttachmentDownloadUrlFieldsFragment;
  public readonly __typename = "AttachmentDownloadUrl" as const;

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
  public readonly __typename = "AttachmentUploadUrl" as const;

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
  public readonly __typename = "Autoresponder" as const;

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
  public readonly conditions: (AutoresponderBusinessHoursConditionModel | AutoresponderLabelConditionModel | AutoresponderPrioritiesConditionModel | AutoresponderSupportEmailsConditionModel | AutoresponderTierConditionModel)[];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.conditions = ((data.conditions as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "AutoresponderBusinessHoursCondition": return new AutoresponderBusinessHoursConditionModel(client, item as any);
      case "AutoresponderLabelCondition": return new AutoresponderLabelConditionModel(client, item as any);
      case "AutoresponderPrioritiesCondition": return new AutoresponderPrioritiesConditionModel(client, item as any);
      case "AutoresponderSupportEmailsCondition": return new AutoresponderSupportEmailsConditionModel(client, item as any);
      case "AutoresponderTierCondition": return new AutoresponderTierConditionModel(client, item as any);
      default: return item as any;
    }
  })());
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class AutoresponderBusinessHoursConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: AutoresponderBusinessHoursConditionFieldsFragment;
  public readonly __typename = "AutoresponderBusinessHoursCondition" as const;

  public readonly isOutsideBusinessHours: AutoresponderBusinessHoursConditionFieldsFragment["isOutsideBusinessHours"];

  constructor(client: PlainGraphQLClient, data: AutoresponderBusinessHoursConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.isOutsideBusinessHours = data.isOutsideBusinessHours;
  }
}

export class AutoresponderLabelConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: AutoresponderLabelConditionFieldsFragment;
  public readonly __typename = "AutoresponderLabelCondition" as const;

  public readonly labelTypeIds: AutoresponderLabelConditionFieldsFragment["labelTypeIds"];

  constructor(client: PlainGraphQLClient, data: AutoresponderLabelConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.labelTypeIds = data.labelTypeIds;
  }
}

export class AutoresponderPrioritiesConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: AutoresponderPrioritiesConditionFieldsFragment;
  public readonly __typename = "AutoresponderPrioritiesCondition" as const;

  public readonly priorities: AutoresponderPrioritiesConditionFieldsFragment["priorities"];

  constructor(client: PlainGraphQLClient, data: AutoresponderPrioritiesConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.priorities = data.priorities;
  }
}

export class AutoresponderSupportEmailsConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: AutoresponderSupportEmailsConditionFieldsFragment;
  public readonly __typename = "AutoresponderSupportEmailsCondition" as const;

  public readonly supportEmailAddresses: AutoresponderSupportEmailsConditionFieldsFragment["supportEmailAddresses"];

  constructor(client: PlainGraphQLClient, data: AutoresponderSupportEmailsConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.supportEmailAddresses = data.supportEmailAddresses;
  }
}

export class AutoresponderTierConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: AutoresponderTierConditionFieldsFragment;
  public readonly __typename = "AutoresponderTierCondition" as const;

  public readonly tierId: AutoresponderTierConditionFieldsFragment["tierId"];

  constructor(client: PlainGraphQLClient, data: AutoresponderTierConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.tierId = data.tierId;
  }
}

export class BeforeBreachActionModel {
  protected _client: PlainGraphQLClient;
  protected _data: BeforeBreachActionFieldsFragment;
  public readonly __typename = "BeforeBreachAction" as const;

  public readonly beforeBreachMinutes: BeforeBreachActionFieldsFragment["beforeBreachMinutes"];
  public readonly createdAt: BeforeBreachActionFieldsFragment["createdAt"];
  public readonly updatedAt: BeforeBreachActionFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: BeforeBreachActionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.beforeBreachMinutes = data.beforeBreachMinutes;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class BillingPlanModel {
  protected _client: PlainGraphQLClient;
  protected _data: BillingPlanFieldsFragment;
  public readonly __typename = "BillingPlan" as const;

  public readonly description: BillingPlanFieldsFragment["description"];
  public readonly features: BillingPlanFieldsFragment["features"];
  public readonly highlightedLabel: BillingPlanFieldsFragment["highlightedLabel"];
  public readonly isSelfCheckoutEligible: BillingPlanFieldsFragment["isSelfCheckoutEligible"];
  public readonly key: BillingPlanFieldsFragment["key"];
  public readonly name: BillingPlanFieldsFragment["name"];
  public readonly prices: (PerSeatRecurringPriceModel | TieredRecurringPriceModel)[];

  constructor(client: PlainGraphQLClient, data: BillingPlanFieldsFragment) {
    this._client = client;
    this._data = data;
    this.description = data.description;
    this.features = data.features;
    this.highlightedLabel = data.highlightedLabel;
    this.isSelfCheckoutEligible = data.isSelfCheckoutEligible;
    this.key = data.key;
    this.name = data.name;
    this.prices = ((data.prices as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "PerSeatRecurringPrice": return new PerSeatRecurringPriceModel(client, item as any);
      case "TieredRecurringPrice": return new TieredRecurringPriceModel(client, item as any);
      default: return item as any;
    }
  })());
  }
}

export class BillingPlanChangePreviewModel {
  protected _client: PlainGraphQLClient;
  protected _data: BillingPlanChangePreviewFieldsFragment;
  public readonly __typename = "BillingPlanChangePreview" as const;

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
  public readonly __typename = "BillingSubscription" as const;

  public readonly cancelsAt: BillingSubscriptionFieldsFragment["cancelsAt"];
  public readonly checkoutSession: BillingSubscriptionFieldsFragment["checkoutSession"];
  public readonly endedAt: BillingSubscriptionFieldsFragment["endedAt"];
  public readonly interval: BillingSubscriptionFieldsFragment["interval"];
  public readonly planCode: BillingSubscriptionFieldsFragment["planCode"];
  public readonly planKey: BillingSubscriptionFieldsFragment["planKey"];
  public readonly planName: BillingSubscriptionFieldsFragment["planName"];
  public readonly status: BillingSubscriptionFieldsFragment["status"];
  public readonly trialEndsAt: BillingSubscriptionFieldsFragment["trialEndsAt"];
  public readonly entitlements: (MeteredFeatureEntitlementModel | ToggleFeatureEntitlementModel)[];

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
    this.entitlements = ((data.entitlements as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "MeteredFeatureEntitlement": return new MeteredFeatureEntitlementModel(client, item as any);
      case "ToggleFeatureEntitlement": return new ToggleFeatureEntitlementModel(client, item as any);
      default: return item as any;
    }
  })());
  }
}

export class BulkUpsertThreadFieldResultModel {
  protected _client: PlainGraphQLClient;
  protected _data: BulkUpsertThreadFieldResultFieldsFragment;
  public readonly __typename = "BulkUpsertThreadFieldResult" as const;

  public readonly result: BulkUpsertThreadFieldResultFieldsFragment["result"];
  public readonly threadField: BulkUpsertThreadFieldResultFieldsFragment["threadField"];

  constructor(client: PlainGraphQLClient, data: BulkUpsertThreadFieldResultFieldsFragment) {
    this._client = client;
    this._data = data;
    this.result = data.result;
    this.threadField = data.threadField;
  }
}

export class BulkUpsertWorkflowStepResultItemModel {
  protected _client: PlainGraphQLClient;
  protected _data: BulkUpsertWorkflowStepResultItemFieldsFragment;
  public readonly __typename = "BulkUpsertWorkflowStepResultItem" as const;

  public readonly result: BulkUpsertWorkflowStepResultItemFieldsFragment["result"];
  public readonly workflowStep: BulkUpsertWorkflowStepResultItemFieldsFragment["workflowStep"];

  constructor(client: PlainGraphQLClient, data: BulkUpsertWorkflowStepResultItemFieldsFragment) {
    this._client = client;
    this._data = data;
    this.result = data.result;
    this.workflowStep = data.workflowStep;
  }
}

export class BusinessHoursModel {
  protected _client: PlainGraphQLClient;
  protected _data: BusinessHoursFieldsFragment;
  public readonly __typename = "BusinessHours" as const;

  public readonly createdAt: BusinessHoursFieldsFragment["createdAt"];
  public readonly updatedAt: BusinessHoursFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: BusinessHoursFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class BusinessHoursSlotModel {
  protected _client: PlainGraphQLClient;
  protected _data: BusinessHoursSlotFieldsFragment;
  public readonly __typename = "BusinessHoursSlot" as const;

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
  public readonly __typename = "Chat" as const;

  public readonly createdAt: ChatFieldsFragment["createdAt"];
  public readonly customerReadAt: ChatFieldsFragment["customerReadAt"];
  public readonly id: ChatFieldsFragment["id"];
  public readonly text: ChatFieldsFragment["text"];
  public readonly updatedAt: ChatFieldsFragment["updatedAt"];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ChatFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerReadAt = data.customerReadAt;
    this.id = data.id;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ChatAppModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatAppFieldsFragment;
  public readonly __typename = "ChatApp" as const;

  public readonly createdAt: ChatAppFieldsFragment["createdAt"];
  public readonly id: ChatAppFieldsFragment["id"];
  public readonly name: ChatAppFieldsFragment["name"];
  public readonly updatedAt: ChatAppFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ChatAppFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ChatAppHiddenSecretModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatAppHiddenSecretFieldsFragment;
  public readonly __typename = "ChatAppHiddenSecret" as const;

  public readonly chatAppId: ChatAppHiddenSecretFieldsFragment["chatAppId"];
  public readonly createdAt: ChatAppHiddenSecretFieldsFragment["createdAt"];
  public readonly updatedAt: ChatAppHiddenSecretFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ChatAppHiddenSecretFieldsFragment) {
    this._client = client;
    this._data = data;
    this.chatAppId = data.chatAppId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ChatAppSecretModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatAppSecretFieldsFragment;
  public readonly __typename = "ChatAppSecret" as const;

  public readonly chatAppId: ChatAppSecretFieldsFragment["chatAppId"];
  public readonly createdAt: ChatAppSecretFieldsFragment["createdAt"];
  public readonly secret: ChatAppSecretFieldsFragment["secret"];
  public readonly updatedAt: ChatAppSecretFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ChatAppSecretFieldsFragment) {
    this._client = client;
    this._data = data;
    this.chatAppId = data.chatAppId;
    this.createdAt = data.createdAt;
    this.secret = data.secret;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ChatEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatEntryFieldsFragment;
  public readonly __typename = "ChatEntry" as const;

  public readonly chatId: ChatEntryFieldsFragment["chatId"];
  public readonly customerReadAt: ChatEntryFieldsFragment["customerReadAt"];
  public readonly text: ChatEntryFieldsFragment["text"];

  constructor(client: PlainGraphQLClient, data: ChatEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.chatId = data.chatId;
    this.customerReadAt = data.customerReadAt;
    this.text = data.text;
  }
}

export class ChatThreadChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ChatThreadChannelDetailsFieldsFragment;
  public readonly __typename = "ChatThreadChannelDetails" as const;

  public readonly customerReadAt: ChatThreadChannelDetailsFieldsFragment["customerReadAt"];

  constructor(client: PlainGraphQLClient, data: ChatThreadChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerReadAt = data.customerReadAt;
  }
}

export class CompanyModel {
  protected _client: PlainGraphQLClient;
  protected _data: CompanyFieldsFragment;
  public readonly __typename = "Company" as const;

  public readonly contractValue: CompanyFieldsFragment["contractValue"];
  public readonly createdAt: CompanyFieldsFragment["createdAt"];
  public readonly deletedAt: CompanyFieldsFragment["deletedAt"];
  public readonly domainName: CompanyFieldsFragment["domainName"];
  public readonly id: CompanyFieldsFragment["id"];
  public readonly isDeleted: CompanyFieldsFragment["isDeleted"];
  public readonly logoUrl: CompanyFieldsFragment["logoUrl"];
  public readonly name: CompanyFieldsFragment["name"];
  public readonly updatedAt: CompanyFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly threadChannelAssociations: (SlackThreadChannelAssociationModel)[];
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.threadChannelAssociations = ((data.threadChannelAssociations as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "SlackThreadChannelAssociation": return new SlackThreadChannelAssociationModel(client, item as any);
      default: return item as any;
    }
  })());
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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
  public readonly __typename = "CompanyTierMembership" as const;

  public readonly companyId: CompanyTierMembershipFieldsFragment["companyId"];
  public readonly createdAt: CompanyTierMembershipFieldsFragment["createdAt"];
  public readonly id: CompanyTierMembershipFieldsFragment["id"];
  public readonly tierId: CompanyTierMembershipFieldsFragment["tierId"];
  public readonly updatedAt: CompanyTierMembershipFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: CompanyTierMembershipFieldsFragment) {
    this._client = client;
    this._data = data;
    this.companyId = data.companyId;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.tierId = data.tierId;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ComponentBadgeModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentBadgeFieldsFragment;
  public readonly __typename = "ComponentBadge" as const;

  public readonly badgeColor: ComponentBadgeFieldsFragment["badgeColor"];
  public readonly badgeLabel: ComponentBadgeFieldsFragment["badgeLabel"];

  constructor(client: PlainGraphQLClient, data: ComponentBadgeFieldsFragment) {
    this._client = client;
    this._data = data;
    this.badgeColor = data.badgeColor;
    this.badgeLabel = data.badgeLabel;
  }
}

export class ComponentCopyButtonModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentCopyButtonFieldsFragment;
  public readonly __typename = "ComponentCopyButton" as const;

  public readonly copyButtonTooltipLabel: ComponentCopyButtonFieldsFragment["copyButtonTooltipLabel"];
  public readonly copyButtonValue: ComponentCopyButtonFieldsFragment["copyButtonValue"];

  constructor(client: PlainGraphQLClient, data: ComponentCopyButtonFieldsFragment) {
    this._client = client;
    this._data = data;
    this.copyButtonTooltipLabel = data.copyButtonTooltipLabel;
    this.copyButtonValue = data.copyButtonValue;
  }
}

export class ComponentDividerModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentDividerFieldsFragment;
  public readonly __typename = "ComponentDivider" as const;

  public readonly dividerSpacingSize: ComponentDividerFieldsFragment["dividerSpacingSize"];

  constructor(client: PlainGraphQLClient, data: ComponentDividerFieldsFragment) {
    this._client = client;
    this._data = data;
    this.dividerSpacingSize = data.dividerSpacingSize;
  }
}

export class ComponentLinkButtonModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentLinkButtonFieldsFragment;
  public readonly __typename = "ComponentLinkButton" as const;

  public readonly linkButtonLabel: ComponentLinkButtonFieldsFragment["linkButtonLabel"];
  public readonly linkButtonUrl: ComponentLinkButtonFieldsFragment["linkButtonUrl"];

  constructor(client: PlainGraphQLClient, data: ComponentLinkButtonFieldsFragment) {
    this._client = client;
    this._data = data;
    this.linkButtonLabel = data.linkButtonLabel;
    this.linkButtonUrl = data.linkButtonUrl;
  }
}

export class ComponentPlainTextModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentPlainTextFieldsFragment;
  public readonly __typename = "ComponentPlainText" as const;

  public readonly plainText: ComponentPlainTextFieldsFragment["plainText"];
  public readonly plainTextColor: ComponentPlainTextFieldsFragment["plainTextColor"];
  public readonly plainTextSize: ComponentPlainTextFieldsFragment["plainTextSize"];

  constructor(client: PlainGraphQLClient, data: ComponentPlainTextFieldsFragment) {
    this._client = client;
    this._data = data;
    this.plainText = data.plainText;
    this.plainTextColor = data.plainTextColor;
    this.plainTextSize = data.plainTextSize;
  }
}

export class ComponentSpacerModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentSpacerFieldsFragment;
  public readonly __typename = "ComponentSpacer" as const;

  public readonly spacerSize: ComponentSpacerFieldsFragment["spacerSize"];

  constructor(client: PlainGraphQLClient, data: ComponentSpacerFieldsFragment) {
    this._client = client;
    this._data = data;
    this.spacerSize = data.spacerSize;
  }
}

export class ComponentTextModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentTextFieldsFragment;
  public readonly __typename = "ComponentText" as const;

  public readonly text: ComponentTextFieldsFragment["text"];
  public readonly textColor: ComponentTextFieldsFragment["textColor"];
  public readonly textSize: ComponentTextFieldsFragment["textSize"];

  constructor(client: PlainGraphQLClient, data: ComponentTextFieldsFragment) {
    this._client = client;
    this._data = data;
    this.text = data.text;
    this.textColor = data.textColor;
    this.textSize = data.textSize;
  }
}

export class ComponentWorkflowButtonModel {
  protected _client: PlainGraphQLClient;
  protected _data: ComponentWorkflowButtonFieldsFragment;
  public readonly __typename = "ComponentWorkflowButton" as const;

  public readonly workflowButtonLabel: ComponentWorkflowButtonFieldsFragment["workflowButtonLabel"];
  public readonly workflowButtonWorkflowIdentifier: ComponentWorkflowButtonFieldsFragment["workflowButtonWorkflowIdentifier"];

  constructor(client: PlainGraphQLClient, data: ComponentWorkflowButtonFieldsFragment) {
    this._client = client;
    this._data = data;
    this.workflowButtonLabel = data.workflowButtonLabel;
    this.workflowButtonWorkflowIdentifier = data.workflowButtonWorkflowIdentifier;
  }
}

export class ConnectedDiscordChannelModel {
  protected _client: PlainGraphQLClient;
  protected _data: ConnectedDiscordChannelFieldsFragment;
  public readonly __typename = "ConnectedDiscordChannel" as const;

  public readonly createdAt: ConnectedDiscordChannelFieldsFragment["createdAt"];
  public readonly discordChannelId: ConnectedDiscordChannelFieldsFragment["discordChannelId"];
  public readonly discordGuildId: ConnectedDiscordChannelFieldsFragment["discordGuildId"];
  public readonly id: ConnectedDiscordChannelFieldsFragment["id"];
  public readonly isEnabled: ConnectedDiscordChannelFieldsFragment["isEnabled"];
  public readonly name: ConnectedDiscordChannelFieldsFragment["name"];
  public readonly updatedAt: ConnectedDiscordChannelFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ConnectedMSTeamsChannelModel {
  protected _client: PlainGraphQLClient;
  protected _data: ConnectedMsTeamsChannelFieldsFragment;
  public readonly __typename = "ConnectedMSTeamsChannel" as const;

  public readonly createdAt: ConnectedMsTeamsChannelFieldsFragment["createdAt"];
  public readonly id: ConnectedMsTeamsChannelFieldsFragment["id"];
  public readonly msTeamsChannelId: ConnectedMsTeamsChannelFieldsFragment["msTeamsChannelId"];
  public readonly msTeamsTeamId: ConnectedMsTeamsChannelFieldsFragment["msTeamsTeamId"];
  public readonly msTeamsTenantId: ConnectedMsTeamsChannelFieldsFragment["msTeamsTenantId"];
  public readonly name: ConnectedMsTeamsChannelFieldsFragment["name"];
  public readonly teamName: ConnectedMsTeamsChannelFieldsFragment["teamName"];
  public readonly updatedAt: ConnectedMsTeamsChannelFieldsFragment["updatedAt"];
  public readonly workspaceId: ConnectedMsTeamsChannelFieldsFragment["workspaceId"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ConnectedSlackChannelModel {
  protected _client: PlainGraphQLClient;
  protected _data: ConnectedSlackChannelFieldsFragment;
  public readonly __typename = "ConnectedSlackChannel" as const;

  public readonly channelType: ConnectedSlackChannelFieldsFragment["channelType"];
  public readonly createdAt: ConnectedSlackChannelFieldsFragment["createdAt"];
  public readonly id: ConnectedSlackChannelFieldsFragment["id"];
  public readonly isEnabled: ConnectedSlackChannelFieldsFragment["isEnabled"];
  public readonly isPrivate: ConnectedSlackChannelFieldsFragment["isPrivate"];
  public readonly name: ConnectedSlackChannelFieldsFragment["name"];
  public readonly slackChannelId: ConnectedSlackChannelFieldsFragment["slackChannelId"];
  public readonly slackTeamId: ConnectedSlackChannelFieldsFragment["slackTeamId"];
  public readonly updatedAt: ConnectedSlackChannelFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class CsatCustomerSurveyTemplateModel {
  protected _client: PlainGraphQLClient;
  protected _data: CsatCustomerSurveyTemplateFieldsFragment;
  public readonly __typename = "CsatCustomerSurveyTemplate" as const;

  public readonly questionText: CsatCustomerSurveyTemplateFieldsFragment["questionText"];
  public readonly type: CsatCustomerSurveyTemplateFieldsFragment["type"];

  constructor(client: PlainGraphQLClient, data: CsatCustomerSurveyTemplateFieldsFragment) {
    this._client = client;
    this._data = data;
    this.questionText = data.questionText;
    this.type = data.type;
  }
}

export class CustomEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomEntryFieldsFragment;
  public readonly __typename = "CustomEntry" as const;

  public readonly externalId: CustomEntryFieldsFragment["externalId"];
  public readonly title: CustomEntryFieldsFragment["title"];
  public readonly type: CustomEntryFieldsFragment["type"];
  public readonly components: (ComponentBadgeModel | { __typename: "ComponentContainer" } | ComponentCopyButtonModel | ComponentDividerModel | ComponentLinkButtonModel | ComponentPlainTextModel | { __typename: "ComponentRow" } | ComponentSpacerModel | ComponentTextModel | ComponentWorkflowButtonModel)[];

  constructor(client: PlainGraphQLClient, data: CustomEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.externalId = data.externalId;
    this.title = data.title;
    this.type = data.type;
    this.components = ((data.components as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "ComponentBadge": return new ComponentBadgeModel(client, item as any);
      case "ComponentContainer": return item as any;
      case "ComponentCopyButton": return new ComponentCopyButtonModel(client, item as any);
      case "ComponentDivider": return new ComponentDividerModel(client, item as any);
      case "ComponentLinkButton": return new ComponentLinkButtonModel(client, item as any);
      case "ComponentPlainText": return new ComponentPlainTextModel(client, item as any);
      case "ComponentRow": return item as any;
      case "ComponentSpacer": return new ComponentSpacerModel(client, item as any);
      case "ComponentText": return new ComponentTextModel(client, item as any);
      case "ComponentWorkflowButton": return new ComponentWorkflowButtonModel(client, item as any);
      default: return item as any;
    }
  })());
  }
}

export class CustomerModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerFieldsFragment;
  public readonly __typename = "Customer" as const;

  public readonly assignedAt: CustomerFieldsFragment["assignedAt"];
  public readonly assignedToUser: CustomerFieldsFragment["assignedToUser"];
  public readonly avatarUrl: CustomerFieldsFragment["avatarUrl"];
  public readonly createdAt: CustomerFieldsFragment["createdAt"];
  public readonly externalId: CustomerFieldsFragment["externalId"];
  public readonly fullName: CustomerFieldsFragment["fullName"];
  public readonly id: CustomerFieldsFragment["id"];
  public readonly isAnonymous: CustomerFieldsFragment["isAnonymous"];
  public readonly markedAsSpamAt: CustomerFieldsFragment["markedAsSpamAt"];
  public readonly shortName: CustomerFieldsFragment["shortName"];
  public readonly updatedAt: CustomerFieldsFragment["updatedAt"];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly identities: (DiscordCustomerIdentityModel | EmailCustomerIdentityModel | SlackCustomerIdentityModel)[];
  public readonly markedAsSpamBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: CustomerFieldsFragment) {
    this._client = client;
    this._data = data;
    this.assignedAt = data.assignedAt;
    this.assignedToUser = data.assignedToUser;
    this.avatarUrl = data.avatarUrl;
    this.createdAt = data.createdAt;
    this.externalId = data.externalId;
    this.fullName = data.fullName;
    this.id = data.id;
    this.isAnonymous = data.isAnonymous;
    this.markedAsSpamAt = data.markedAsSpamAt;
    this.shortName = data.shortName;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.identities = ((data.identities as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "DiscordCustomerIdentity": return new DiscordCustomerIdentityModel(client, item as any);
      case "EmailCustomerIdentity": return new EmailCustomerIdentityModel(client, item as any);
      case "SlackCustomerIdentity": return new SlackCustomerIdentityModel(client, item as any);
      default: return item as any;
    }
  })());
    this.markedAsSpamBy = data.markedAsSpamBy ? (() => {
    switch ((data.markedAsSpamBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.markedAsSpamBy as any);
      case "SystemActor": return new SystemActorModel(client, data.markedAsSpamBy as any);
      case "UserActor": return new UserActorModel(client, data.markedAsSpamBy as any);
      default: return data.markedAsSpamBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }

  public get company(): Promise<CompanyModel | undefined> {
    const id = this._data.company?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<CompanyQuery, CompanyQueryVariables>(
      CompanyDocument,
      { companyId: id } as CompanyQueryVariables
    ).then(r => r.company ? new CompanyModel(this._client, r.company) : undefined);
  }

  async customerGroupMemberships(variables?: Omit<CustomerCustomerGroupMembershipsQueryVariables, "customerId">): Promise<PlainConnection<CustomerGroupMembershipModel>> {
    const allVars = { ...variables, customerId: this.id } as CustomerCustomerGroupMembershipsQueryVariables;
    const response = await this._client.request<CustomerCustomerGroupMembershipsQuery, CustomerCustomerGroupMembershipsQueryVariables>(
      CustomerCustomerGroupMembershipsDocument, allVars
    );
    const parent = response.customer;
    if (!parent) throw new Error("customer not found");
    const conn = parent.customerGroupMemberships;
    return new PlainConnection<CustomerGroupMembershipModel>({
      nodes: conn.edges.map(e => new CustomerGroupMembershipModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.customerGroupMemberships({ ...variables, ...cursor }),
    });
  }
}

export class CustomerActorModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerActorFieldsFragment;
  public readonly __typename = "CustomerActor" as const;

  public readonly customerId: CustomerActorFieldsFragment["customerId"];

  constructor(client: PlainGraphQLClient, data: CustomerActorFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
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

export class CustomerCardConfigModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerCardConfigFieldsFragment;
  public readonly __typename = "CustomerCardConfig" as const;

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
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class CustomerEventModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerEventFieldsFragment;
  public readonly __typename = "CustomerEvent" as const;

  public readonly createdAt: CustomerEventFieldsFragment["createdAt"];
  public readonly customerId: CustomerEventFieldsFragment["customerId"];
  public readonly id: CustomerEventFieldsFragment["id"];
  public readonly title: CustomerEventFieldsFragment["title"];
  public readonly updatedAt: CustomerEventFieldsFragment["updatedAt"];
  public readonly components: (ComponentBadgeModel | ComponentCopyButtonModel | ComponentDividerModel | ComponentLinkButtonModel | ComponentPlainTextModel | { __typename: "ComponentRow" } | ComponentSpacerModel | ComponentTextModel | ComponentWorkflowButtonModel)[];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: CustomerEventFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerId = data.customerId;
    this.id = data.id;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.components = ((data.components as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "ComponentBadge": return new ComponentBadgeModel(client, item as any);
      case "ComponentCopyButton": return new ComponentCopyButtonModel(client, item as any);
      case "ComponentDivider": return new ComponentDividerModel(client, item as any);
      case "ComponentLinkButton": return new ComponentLinkButtonModel(client, item as any);
      case "ComponentPlainText": return new ComponentPlainTextModel(client, item as any);
      case "ComponentRow": return item as any;
      case "ComponentSpacer": return new ComponentSpacerModel(client, item as any);
      case "ComponentText": return new ComponentTextModel(client, item as any);
      case "ComponentWorkflowButton": return new ComponentWorkflowButtonModel(client, item as any);
      default: return item as any;
    }
  })());
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class CustomerEventEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerEventEntryFieldsFragment;
  public readonly __typename = "CustomerEventEntry" as const;

  public readonly customerId: CustomerEventEntryFieldsFragment["customerId"];
  public readonly externalId: CustomerEventEntryFieldsFragment["externalId"];
  public readonly timelineEventId: CustomerEventEntryFieldsFragment["timelineEventId"];
  public readonly title: CustomerEventEntryFieldsFragment["title"];
  public readonly components: (ComponentBadgeModel | ComponentCopyButtonModel | ComponentDividerModel | ComponentLinkButtonModel | ComponentPlainTextModel | { __typename: "ComponentRow" } | ComponentSpacerModel | ComponentTextModel | ComponentWorkflowButtonModel)[];

  constructor(client: PlainGraphQLClient, data: CustomerEventEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.externalId = data.externalId;
    this.timelineEventId = data.timelineEventId;
    this.title = data.title;
    this.components = ((data.components as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "ComponentBadge": return new ComponentBadgeModel(client, item as any);
      case "ComponentCopyButton": return new ComponentCopyButtonModel(client, item as any);
      case "ComponentDivider": return new ComponentDividerModel(client, item as any);
      case "ComponentLinkButton": return new ComponentLinkButtonModel(client, item as any);
      case "ComponentPlainText": return new ComponentPlainTextModel(client, item as any);
      case "ComponentRow": return item as any;
      case "ComponentSpacer": return new ComponentSpacerModel(client, item as any);
      case "ComponentText": return new ComponentTextModel(client, item as any);
      case "ComponentWorkflowButton": return new ComponentWorkflowButtonModel(client, item as any);
      default: return item as any;
    }
  })());
  }
}

export class CustomerGroupModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerGroupFieldsFragment;
  public readonly __typename = "CustomerGroup" as const;

  public readonly color: CustomerGroupFieldsFragment["color"];
  public readonly createdAt: CustomerGroupFieldsFragment["createdAt"];
  public readonly externalId: CustomerGroupFieldsFragment["externalId"];
  public readonly id: CustomerGroupFieldsFragment["id"];
  public readonly key: CustomerGroupFieldsFragment["key"];
  public readonly name: CustomerGroupFieldsFragment["name"];
  public readonly updatedAt: CustomerGroupFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class CustomerGroupMembershipModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerGroupMembershipFieldsFragment;
  public readonly __typename = "CustomerGroupMembership" as const;

  public readonly createdAt: CustomerGroupMembershipFieldsFragment["createdAt"];
  public readonly customerId: CustomerGroupMembershipFieldsFragment["customerId"];
  public readonly updatedAt: CustomerGroupMembershipFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: CustomerGroupMembershipFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerId = data.customerId;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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
  public readonly __typename = "CustomerSurvey" as const;

  public readonly createdAt: CustomerSurveyFieldsFragment["createdAt"];
  public readonly customerIntervalDays: CustomerSurveyFieldsFragment["customerIntervalDays"];
  public readonly id: CustomerSurveyFieldsFragment["id"];
  public readonly isEnabled: CustomerSurveyFieldsFragment["isEnabled"];
  public readonly name: CustomerSurveyFieldsFragment["name"];
  public readonly order: CustomerSurveyFieldsFragment["order"];
  public readonly responseDelayMinutes: CustomerSurveyFieldsFragment["responseDelayMinutes"];
  public readonly updatedAt: CustomerSurveyFieldsFragment["updatedAt"];
  public readonly conditions: (CustomerSurveyLabelConditionModel | CustomerSurveyMessageSourceConditionModel | CustomerSurveyPrioritiesConditionModel | CustomerSurveySupportEmailsConditionModel | CustomerSurveyTiersConditionModel)[];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly template: CsatCustomerSurveyTemplateModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.conditions = ((data.conditions as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "CustomerSurveyLabelCondition": return new CustomerSurveyLabelConditionModel(client, item as any);
      case "CustomerSurveyMessageSourceCondition": return new CustomerSurveyMessageSourceConditionModel(client, item as any);
      case "CustomerSurveyPrioritiesCondition": return new CustomerSurveyPrioritiesConditionModel(client, item as any);
      case "CustomerSurveySupportEmailsCondition": return new CustomerSurveySupportEmailsConditionModel(client, item as any);
      case "CustomerSurveyTiersCondition": return new CustomerSurveyTiersConditionModel(client, item as any);
      default: return item as any;
    }
  })());
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.template = (() => {
    switch ((data.template as any).__typename) {
      case "CsatCustomerSurveyTemplate": return new CsatCustomerSurveyTemplateModel(client, data.template as any);
      default: return data.template as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class CustomerSurveyLabelConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerSurveyLabelConditionFieldsFragment;
  public readonly __typename = "CustomerSurveyLabelCondition" as const;

  public readonly labelTypeIds: CustomerSurveyLabelConditionFieldsFragment["labelTypeIds"];

  constructor(client: PlainGraphQLClient, data: CustomerSurveyLabelConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.labelTypeIds = data.labelTypeIds;
  }
}

export class CustomerSurveyMessageSourceConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerSurveyMessageSourceConditionFieldsFragment;
  public readonly __typename = "CustomerSurveyMessageSourceCondition" as const;

  public readonly messageSource: CustomerSurveyMessageSourceConditionFieldsFragment["messageSource"];

  constructor(client: PlainGraphQLClient, data: CustomerSurveyMessageSourceConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.messageSource = data.messageSource;
  }
}

export class CustomerSurveyPrioritiesConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerSurveyPrioritiesConditionFieldsFragment;
  public readonly __typename = "CustomerSurveyPrioritiesCondition" as const;

  public readonly priorities: CustomerSurveyPrioritiesConditionFieldsFragment["priorities"];

  constructor(client: PlainGraphQLClient, data: CustomerSurveyPrioritiesConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.priorities = data.priorities;
  }
}

export class CustomerSurveyRequestedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerSurveyRequestedEntryFieldsFragment;
  public readonly __typename = "CustomerSurveyRequestedEntry" as const;

  public readonly customerId: CustomerSurveyRequestedEntryFieldsFragment["customerId"];
  public readonly customerSurveyId: CustomerSurveyRequestedEntryFieldsFragment["customerSurveyId"];
  public readonly surveyResponseId: CustomerSurveyRequestedEntryFieldsFragment["surveyResponseId"];
  public readonly surveyResponsePublicId: CustomerSurveyRequestedEntryFieldsFragment["surveyResponsePublicId"];
  public readonly threadId: CustomerSurveyRequestedEntryFieldsFragment["threadId"];

  constructor(client: PlainGraphQLClient, data: CustomerSurveyRequestedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.customerSurveyId = data.customerSurveyId;
    this.surveyResponseId = data.surveyResponseId;
    this.surveyResponsePublicId = data.surveyResponsePublicId;
    this.threadId = data.threadId;
  }
}

export class CustomerSurveySupportEmailsConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerSurveySupportEmailsConditionFieldsFragment;
  public readonly __typename = "CustomerSurveySupportEmailsCondition" as const;

  public readonly supportEmailAddresses: CustomerSurveySupportEmailsConditionFieldsFragment["supportEmailAddresses"];

  constructor(client: PlainGraphQLClient, data: CustomerSurveySupportEmailsConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.supportEmailAddresses = data.supportEmailAddresses;
  }
}

export class CustomerSurveyTiersConditionModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomerSurveyTiersConditionFieldsFragment;
  public readonly __typename = "CustomerSurveyTiersCondition" as const;

  public readonly tierIds: CustomerSurveyTiersConditionFieldsFragment["tierIds"];

  constructor(client: PlainGraphQLClient, data: CustomerSurveyTiersConditionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.tierIds = data.tierIds;
  }
}

export class CustomRoleModel {
  protected _client: PlainGraphQLClient;
  protected _data: CustomRoleFieldsFragment;
  public readonly __typename = "CustomRole" as const;

  public readonly createdAt: CustomRoleFieldsFragment["createdAt"];
  public readonly description: CustomRoleFieldsFragment["description"];
  public readonly id: CustomRoleFieldsFragment["id"];
  public readonly name: CustomRoleFieldsFragment["name"];
  public readonly permissionsPreset: CustomRoleFieldsFragment["permissionsPreset"];
  public readonly updatedAt: CustomRoleFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: CustomRoleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.name = data.name;
    this.permissionsPreset = data.permissionsPreset;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class DefaultServiceIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: DefaultServiceIntegrationFieldsFragment;
  public readonly __typename = "DefaultServiceIntegration" as const;

  public readonly key: DefaultServiceIntegrationFieldsFragment["key"];
  public readonly name: DefaultServiceIntegrationFieldsFragment["name"];

  constructor(client: PlainGraphQLClient, data: DefaultServiceIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.key = data.key;
    this.name = data.name;
  }
}

export class DeletedCustomerActorModel {
  protected _client: PlainGraphQLClient;
  protected _data: DeletedCustomerActorFieldsFragment;
  public readonly __typename = "DeletedCustomerActor" as const;

  public readonly customerId: DeletedCustomerActorFieldsFragment["customerId"];

  constructor(client: PlainGraphQLClient, data: DeletedCustomerActorFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
  }
}

export class DeletedThreadModel {
  protected _client: PlainGraphQLClient;
  protected _data: DeletedThreadFieldsFragment;
  public readonly __typename = "DeletedThread" as const;

  public readonly deletedAt: DeletedThreadFieldsFragment["deletedAt"];
  public readonly threadId: DeletedThreadFieldsFragment["threadId"];

  constructor(client: PlainGraphQLClient, data: DeletedThreadFieldsFragment) {
    this._client = client;
    this._data = data;
    this.deletedAt = data.deletedAt;
    this.threadId = data.threadId;
  }
}

export class DiscordCustomerIdentityModel {
  protected _client: PlainGraphQLClient;
  protected _data: DiscordCustomerIdentityFieldsFragment;
  public readonly __typename = "DiscordCustomerIdentity" as const;

  public readonly discordUserId: DiscordCustomerIdentityFieldsFragment["discordUserId"];

  constructor(client: PlainGraphQLClient, data: DiscordCustomerIdentityFieldsFragment) {
    this._client = client;
    this._data = data;
    this.discordUserId = data.discordUserId;
  }
}

export class DiscordMessageModel {
  protected _client: PlainGraphQLClient;
  protected _data: DiscordMessageFieldsFragment;
  public readonly __typename = "DiscordMessage" as const;

  public readonly createdAt: DiscordMessageFieldsFragment["createdAt"];
  public readonly deletedOnDiscordAt: DiscordMessageFieldsFragment["deletedOnDiscordAt"];
  public readonly discordMessageId: DiscordMessageFieldsFragment["discordMessageId"];
  public readonly discordMessageLink: DiscordMessageFieldsFragment["discordMessageLink"];
  public readonly lastEditedOnDiscordAt: DiscordMessageFieldsFragment["lastEditedOnDiscordAt"];
  public readonly markdownContent: DiscordMessageFieldsFragment["markdownContent"];
  public readonly updatedAt: DiscordMessageFieldsFragment["updatedAt"];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class DiscordMessageEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: DiscordMessageEntryFieldsFragment;
  public readonly __typename = "DiscordMessageEntry" as const;

  public readonly customerId: DiscordMessageEntryFieldsFragment["customerId"];
  public readonly deletedOnDiscordAt: DiscordMessageEntryFieldsFragment["deletedOnDiscordAt"];
  public readonly discordMessageId: DiscordMessageEntryFieldsFragment["discordMessageId"];
  public readonly discordMessageLink: DiscordMessageEntryFieldsFragment["discordMessageLink"];
  public readonly lastEditedOnDiscordAt: DiscordMessageEntryFieldsFragment["lastEditedOnDiscordAt"];
  public readonly markdownContent: DiscordMessageEntryFieldsFragment["markdownContent"];

  constructor(client: PlainGraphQLClient, data: DiscordMessageEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.deletedOnDiscordAt = data.deletedOnDiscordAt;
    this.discordMessageId = data.discordMessageId;
    this.discordMessageLink = data.discordMessageLink;
    this.lastEditedOnDiscordAt = data.lastEditedOnDiscordAt;
    this.markdownContent = data.markdownContent;
  }
}

export class DiscordThreadChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: DiscordThreadChannelDetailsFieldsFragment;
  public readonly __typename = "DiscordThreadChannelDetails" as const;

  public readonly discordChannelId: DiscordThreadChannelDetailsFieldsFragment["discordChannelId"];
  public readonly discordChannelName: DiscordThreadChannelDetailsFieldsFragment["discordChannelName"];
  public readonly discordGuildId: DiscordThreadChannelDetailsFieldsFragment["discordGuildId"];

  constructor(client: PlainGraphQLClient, data: DiscordThreadChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.discordChannelId = data.discordChannelId;
    this.discordChannelName = data.discordChannelName;
    this.discordGuildId = data.discordGuildId;
  }
}

export class DiscussionResolvedNotificationDetailModel {
  protected _client: PlainGraphQLClient;
  protected _data: DiscussionResolvedNotificationDetailFieldsFragment;
  public readonly __typename = "DiscussionResolvedNotificationDetail" as const;

  public readonly threadDiscussionId: DiscussionResolvedNotificationDetailFieldsFragment["threadDiscussionId"];
  public readonly threadId: DiscussionResolvedNotificationDetailFieldsFragment["threadId"];

  constructor(client: PlainGraphQLClient, data: DiscussionResolvedNotificationDetailFieldsFragment) {
    this._client = client;
    this._data = data;
    this.threadDiscussionId = data.threadDiscussionId;
    this.threadId = data.threadId;
  }
}

export class EmailModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailFieldsFragment;
  public readonly __typename = "Email" as const;

  public readonly category: EmailFieldsFragment["category"];
  public readonly createdAt: EmailFieldsFragment["createdAt"];
  public readonly id: EmailFieldsFragment["id"];
  public readonly inReplyToEmailId: EmailFieldsFragment["inReplyToEmailId"];
  public readonly markdownContent: EmailFieldsFragment["markdownContent"];
  public readonly subject: EmailFieldsFragment["subject"];
  public readonly textContent: EmailFieldsFragment["textContent"];
  public readonly threadDiscussionId: EmailFieldsFragment["threadDiscussionId"];
  public readonly updatedAt: EmailFieldsFragment["updatedAt"];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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

export class EmailBounceNotificationDetailModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailBounceNotificationDetailFieldsFragment;
  public readonly __typename = "EmailBounceNotificationDetail" as const;

  public readonly threadId: EmailBounceNotificationDetailFieldsFragment["threadId"];

  constructor(client: PlainGraphQLClient, data: EmailBounceNotificationDetailFieldsFragment) {
    this._client = client;
    this._data = data;
    this.threadId = data.threadId;
  }
}

export class EmailCustomerIdentityModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailCustomerIdentityFieldsFragment;
  public readonly __typename = "EmailCustomerIdentity" as const;

  public readonly email: EmailCustomerIdentityFieldsFragment["email"];

  constructor(client: PlainGraphQLClient, data: EmailCustomerIdentityFieldsFragment) {
    this._client = client;
    this._data = data;
    this.email = data.email;
  }
}

export class EmailEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailEntryFieldsFragment;
  public readonly __typename = "EmailEntry" as const;

  public readonly authenticity: EmailEntryFieldsFragment["authenticity"];
  public readonly category: EmailEntryFieldsFragment["category"];
  public readonly emailId: EmailEntryFieldsFragment["emailId"];
  public readonly fullMarkdownContent: EmailEntryFieldsFragment["fullMarkdownContent"];
  public readonly fullTextContent: EmailEntryFieldsFragment["fullTextContent"];
  public readonly hasMoreMarkdownContent: EmailEntryFieldsFragment["hasMoreMarkdownContent"];
  public readonly hasMoreTextContent: EmailEntryFieldsFragment["hasMoreTextContent"];
  public readonly isStartOfThread: EmailEntryFieldsFragment["isStartOfThread"];
  public readonly markdownContent: EmailEntryFieldsFragment["markdownContent"];
  public readonly receivedAt: EmailEntryFieldsFragment["receivedAt"];
  public readonly sendStatus: EmailEntryFieldsFragment["sendStatus"];
  public readonly sentAt: EmailEntryFieldsFragment["sentAt"];
  public readonly subject: EmailEntryFieldsFragment["subject"];
  public readonly textContent: EmailEntryFieldsFragment["textContent"];

  constructor(client: PlainGraphQLClient, data: EmailEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.authenticity = data.authenticity;
    this.category = data.category;
    this.emailId = data.emailId;
    this.fullMarkdownContent = data.fullMarkdownContent;
    this.fullTextContent = data.fullTextContent;
    this.hasMoreMarkdownContent = data.hasMoreMarkdownContent;
    this.hasMoreTextContent = data.hasMoreTextContent;
    this.isStartOfThread = data.isStartOfThread;
    this.markdownContent = data.markdownContent;
    this.receivedAt = data.receivedAt;
    this.sendStatus = data.sendStatus;
    this.sentAt = data.sentAt;
    this.subject = data.subject;
    this.textContent = data.textContent;
  }
}

export class EmailPreviewUrlModel {
  protected _client: PlainGraphQLClient;
  protected _data: EmailPreviewUrlFieldsFragment;
  public readonly __typename = "EmailPreviewUrl" as const;

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
  public readonly __typename = "EmailSignature" as const;

  public readonly createdAt: EmailSignatureFieldsFragment["createdAt"];
  public readonly markdown: EmailSignatureFieldsFragment["markdown"];
  public readonly text: EmailSignatureFieldsFragment["text"];
  public readonly updatedAt: EmailSignatureFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: EmailSignatureFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.markdown = data.markdown;
    this.text = data.text;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class EscalationPathModel {
  protected _client: PlainGraphQLClient;
  protected _data: EscalationPathFieldsFragment;
  public readonly __typename = "EscalationPath" as const;

  public readonly createdAt: EscalationPathFieldsFragment["createdAt"];
  public readonly description: EscalationPathFieldsFragment["description"];
  public readonly id: EscalationPathFieldsFragment["id"];
  public readonly name: EscalationPathFieldsFragment["name"];
  public readonly updatedAt: EscalationPathFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly steps: (EscalationPathStepLabelTypeModel | EscalationPathStepUserModel)[];
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: EscalationPathFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.steps = ((data.steps as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "EscalationPathStepLabelType": return new EscalationPathStepLabelTypeModel(client, item as any);
      case "EscalationPathStepUser": return new EscalationPathStepUserModel(client, item as any);
      default: return item as any;
    }
  })());
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class EscalationPathStepLabelTypeModel {
  protected _client: PlainGraphQLClient;
  protected _data: EscalationPathStepLabelTypeFieldsFragment;
  public readonly __typename = "EscalationPathStepLabelType" as const;

  public readonly id: EscalationPathStepLabelTypeFieldsFragment["id"];

  constructor(client: PlainGraphQLClient, data: EscalationPathStepLabelTypeFieldsFragment) {
    this._client = client;
    this._data = data;
    this.id = data.id;
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

export class EscalationPathStepUserModel {
  protected _client: PlainGraphQLClient;
  protected _data: EscalationPathStepUserFieldsFragment;
  public readonly __typename = "EscalationPathStepUser" as const;

  public readonly id: EscalationPathStepUserFieldsFragment["id"];

  constructor(client: PlainGraphQLClient, data: EscalationPathStepUserFieldsFragment) {
    this._client = client;
    this._data = data;
    this.id = data.id;
  }

  public get user(): Promise<UserModel | undefined> {
    const id = this._data.user?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<UserQuery, UserQueryVariables>(
      UserDocument,
      { userId: id } as UserQueryVariables
    ).then(r => r.user ? new UserModel(this._client, r.user) : undefined);
  }
}

export class FavoritePageModel {
  protected _client: PlainGraphQLClient;
  protected _data: FavoritePageFieldsFragment;
  public readonly __typename = "FavoritePage" as const;

  public readonly createdAt: FavoritePageFieldsFragment["createdAt"];
  public readonly id: FavoritePageFieldsFragment["id"];
  public readonly key: FavoritePageFieldsFragment["key"];
  public readonly updatedAt: FavoritePageFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: FavoritePageFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.key = data.key;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class FirstResponseTimeServiceLevelAgreementModel {
  protected _client: PlainGraphQLClient;
  protected _data: FirstResponseTimeServiceLevelAgreementFieldsFragment;
  public readonly __typename = "FirstResponseTimeServiceLevelAgreement" as const;

  public readonly createdAt: FirstResponseTimeServiceLevelAgreementFieldsFragment["createdAt"];
  public readonly firstResponseTimeMinutes: FirstResponseTimeServiceLevelAgreementFieldsFragment["firstResponseTimeMinutes"];
  public readonly id: FirstResponseTimeServiceLevelAgreementFieldsFragment["id"];
  public readonly threadLabelTypeIdFilter: FirstResponseTimeServiceLevelAgreementFieldsFragment["threadLabelTypeIdFilter"];
  public readonly threadPriorityFilter: FirstResponseTimeServiceLevelAgreementFieldsFragment["threadPriorityFilter"];
  public readonly updatedAt: FirstResponseTimeServiceLevelAgreementFieldsFragment["updatedAt"];
  public readonly useBusinessHoursOnly: FirstResponseTimeServiceLevelAgreementFieldsFragment["useBusinessHoursOnly"];
  public readonly breachActions: (BeforeBreachActionModel)[];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: FirstResponseTimeServiceLevelAgreementFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.firstResponseTimeMinutes = data.firstResponseTimeMinutes;
    this.id = data.id;
    this.threadLabelTypeIdFilter = data.threadLabelTypeIdFilter;
    this.threadPriorityFilter = data.threadPriorityFilter;
    this.updatedAt = data.updatedAt;
    this.useBusinessHoursOnly = data.useBusinessHoursOnly;
    this.breachActions = ((data.breachActions as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "BeforeBreachAction": return new BeforeBreachActionModel(client, item as any);
      default: return item as any;
    }
  })());
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class GeneratedReplyModel {
  protected _client: PlainGraphQLClient;
  protected _data: GeneratedReplyFieldsFragment;
  public readonly __typename = "GeneratedReply" as const;

  public readonly createdAt: GeneratedReplyFieldsFragment["createdAt"];
  public readonly id: GeneratedReplyFieldsFragment["id"];
  public readonly markdown: GeneratedReplyFieldsFragment["markdown"];
  public readonly timelineEntryId: GeneratedReplyFieldsFragment["timelineEntryId"];
  public readonly updatedAt: GeneratedReplyFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: GeneratedReplyFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.markdown = data.markdown;
    this.timelineEntryId = data.timelineEntryId;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class GenericThreadLinkModel {
  protected _client: PlainGraphQLClient;
  protected _data: GenericThreadLinkFieldsFragment;
  public readonly __typename = "GenericThreadLink" as const;

  public readonly createdAt: GenericThreadLinkFieldsFragment["createdAt"];
  public readonly description: GenericThreadLinkFieldsFragment["description"];
  public readonly id: GenericThreadLinkFieldsFragment["id"];
  public readonly linkType: GenericThreadLinkFieldsFragment["linkType"];
  public readonly sourceId: GenericThreadLinkFieldsFragment["sourceId"];
  public readonly sourceStatus: GenericThreadLinkFieldsFragment["sourceStatus"];
  public readonly sourceType: GenericThreadLinkFieldsFragment["sourceType"];
  public readonly status: GenericThreadLinkFieldsFragment["status"];
  public readonly threadId: GenericThreadLinkFieldsFragment["threadId"];
  public readonly title: GenericThreadLinkFieldsFragment["title"];
  public readonly updatedAt: GenericThreadLinkFieldsFragment["updatedAt"];
  public readonly url: GenericThreadLinkFieldsFragment["url"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: GenericThreadLinkFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.linkType = data.linkType;
    this.sourceId = data.sourceId;
    this.sourceStatus = data.sourceStatus;
    this.sourceType = data.sourceType;
    this.status = data.status;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class GithubUserAuthIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: GithubUserAuthIntegrationFieldsFragment;
  public readonly __typename = "GithubUserAuthIntegration" as const;

  public readonly createdAt: GithubUserAuthIntegrationFieldsFragment["createdAt"];
  public readonly githubUsername: GithubUserAuthIntegrationFieldsFragment["githubUsername"];
  public readonly id: GithubUserAuthIntegrationFieldsFragment["id"];
  public readonly updatedAt: GithubUserAuthIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: GithubUserAuthIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.githubUsername = data.githubUsername;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class HeatmapMetricModel {
  protected _client: PlainGraphQLClient;
  protected _data: HeatmapMetricFieldsFragment;
  public readonly __typename = "HeatmapMetric" as const;

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
  public readonly __typename = "HelpCenter" as const;

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
  public readonly authMechanism: HelpCenterAuthMechanismWorkosAuthkitModel | HelpCenterAuthMechanismWorkosConnectModel;
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly publishedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.authMechanism = (() => {
    switch ((data.authMechanism as any).__typename) {
      case "HelpCenterAuthMechanismWorkosAuthkit": return new HelpCenterAuthMechanismWorkosAuthkitModel(client, data.authMechanism as any);
      case "HelpCenterAuthMechanismWorkosConnect": return new HelpCenterAuthMechanismWorkosConnectModel(client, data.authMechanism as any);
      default: return data.authMechanism as any;
    }
  })();
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.publishedBy = data.publishedBy ? (() => {
    switch ((data.publishedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.publishedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.publishedBy as any);
      case "UserActor": return new UserActorModel(client, data.publishedBy as any);
      default: return data.publishedBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }

  async articleGroups(variables?: Omit<HelpCenterArticleGroupsQueryVariables, "id">): Promise<PlainConnection<HelpCenterArticleGroupModel>> {
    const allVars = { ...variables, id: this.id } as HelpCenterArticleGroupsQueryVariables;
    const response = await this._client.request<HelpCenterArticleGroupsQuery, HelpCenterArticleGroupsQueryVariables>(
      HelpCenterArticleGroupsDocument, allVars
    );
    const parent = response.helpCenter;
    if (!parent) throw new Error("helpCenter not found");
    const conn = parent.articleGroups;
    return new PlainConnection<HelpCenterArticleGroupModel>({
      nodes: conn.edges.map(e => new HelpCenterArticleGroupModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.articleGroups({ ...variables, ...cursor }),
    });
  }

  async articles(variables?: Omit<HelpCenterArticlesQueryVariables, "id">): Promise<PlainConnection<HelpCenterArticleModel>> {
    const allVars = { ...variables, id: this.id } as HelpCenterArticlesQueryVariables;
    const response = await this._client.request<HelpCenterArticlesQuery, HelpCenterArticlesQueryVariables>(
      HelpCenterArticlesDocument, allVars
    );
    const parent = response.helpCenter;
    if (!parent) throw new Error("helpCenter not found");
    const conn = parent.articles;
    return new PlainConnection<HelpCenterArticleModel>({
      nodes: conn.edges.map(e => new HelpCenterArticleModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.articles({ ...variables, ...cursor }),
    });
  }
}

export class HelpCenterAiConversationMessageEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterAiConversationMessageEntryFieldsFragment;
  public readonly __typename = "HelpCenterAiConversationMessageEntry" as const;

  public readonly helpCenterAiConversationId: HelpCenterAiConversationMessageEntryFieldsFragment["helpCenterAiConversationId"];
  public readonly helpCenterId: HelpCenterAiConversationMessageEntryFieldsFragment["helpCenterId"];
  public readonly markdown: HelpCenterAiConversationMessageEntryFieldsFragment["markdown"];
  public readonly messageId: HelpCenterAiConversationMessageEntryFieldsFragment["messageId"];

  constructor(client: PlainGraphQLClient, data: HelpCenterAiConversationMessageEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.helpCenterAiConversationId = data.helpCenterAiConversationId;
    this.helpCenterId = data.helpCenterId;
    this.markdown = data.markdown;
    this.messageId = data.messageId;
  }
}

export class HelpCenterArticleModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterArticleFieldsFragment;
  public readonly __typename = "HelpCenterArticle" as const;

  public readonly contentHtml: HelpCenterArticleFieldsFragment["contentHtml"];
  public readonly createdAt: HelpCenterArticleFieldsFragment["createdAt"];
  public readonly description: HelpCenterArticleFieldsFragment["description"];
  public readonly id: HelpCenterArticleFieldsFragment["id"];
  public readonly slug: HelpCenterArticleFieldsFragment["slug"];
  public readonly status: HelpCenterArticleFieldsFragment["status"];
  public readonly statusChangedAt: HelpCenterArticleFieldsFragment["statusChangedAt"];
  public readonly title: HelpCenterArticleFieldsFragment["title"];
  public readonly updatedAt: HelpCenterArticleFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly statusChangedBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.statusChangedBy = (() => {
    switch ((data.statusChangedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.statusChangedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.statusChangedBy as any);
      case "UserActor": return new UserActorModel(client, data.statusChangedBy as any);
      default: return data.statusChangedBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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
  public readonly __typename = "HelpCenterArticleGroup" as const;

  public readonly createdAt: HelpCenterArticleGroupFieldsFragment["createdAt"];
  public readonly id: HelpCenterArticleGroupFieldsFragment["id"];
  public readonly name: HelpCenterArticleGroupFieldsFragment["name"];
  public readonly slug: HelpCenterArticleGroupFieldsFragment["slug"];
  public readonly updatedAt: HelpCenterArticleGroupFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: HelpCenterArticleGroupFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }

  public get parentArticleGroup(): Promise<HelpCenterArticleGroupModel | undefined> {
    const id = this._data.parentArticleGroup?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<HelpCenterArticleGroupQuery, HelpCenterArticleGroupQueryVariables>(
      HelpCenterArticleGroupDocument,
      { id: id } as HelpCenterArticleGroupQueryVariables
    ).then(r => r.helpCenterArticleGroup ? new HelpCenterArticleGroupModel(this._client, r.helpCenterArticleGroup) : undefined);
  }

  async articles(variables?: Omit<HelpCenterArticleGroupArticlesQueryVariables, "id">): Promise<PlainConnection<HelpCenterArticleModel>> {
    const allVars = { ...variables, id: this.id } as HelpCenterArticleGroupArticlesQueryVariables;
    const response = await this._client.request<HelpCenterArticleGroupArticlesQuery, HelpCenterArticleGroupArticlesQueryVariables>(
      HelpCenterArticleGroupArticlesDocument, allVars
    );
    const parent = response.helpCenterArticleGroup;
    if (!parent) throw new Error("helpCenterArticleGroup not found");
    const conn = parent.articles;
    return new PlainConnection<HelpCenterArticleModel>({
      nodes: conn.edges.map(e => new HelpCenterArticleModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.articles({ ...variables, ...cursor }),
    });
  }

  async childArticleGroups(variables?: Omit<HelpCenterArticleGroupChildArticleGroupsQueryVariables, "id">): Promise<PlainConnection<HelpCenterArticleGroupModel>> {
    const allVars = { ...variables, id: this.id } as HelpCenterArticleGroupChildArticleGroupsQueryVariables;
    const response = await this._client.request<HelpCenterArticleGroupChildArticleGroupsQuery, HelpCenterArticleGroupChildArticleGroupsQueryVariables>(
      HelpCenterArticleGroupChildArticleGroupsDocument, allVars
    );
    const parent = response.helpCenterArticleGroup;
    if (!parent) throw new Error("helpCenterArticleGroup not found");
    const conn = parent.childArticleGroups;
    return new PlainConnection<HelpCenterArticleGroupModel>({
      nodes: conn.edges.map(e => new HelpCenterArticleGroupModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.childArticleGroups({ ...variables, ...cursor }),
    });
  }
}

export class HelpCenterAuthMechanismWorkosAuthkitModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterAuthMechanismWorkosAuthkitFieldsFragment;
  public readonly __typename = "HelpCenterAuthMechanismWorkosAuthkit" as const;

  public readonly type: HelpCenterAuthMechanismWorkosAuthkitFieldsFragment["type"];

  constructor(client: PlainGraphQLClient, data: HelpCenterAuthMechanismWorkosAuthkitFieldsFragment) {
    this._client = client;
    this._data = data;
    this.type = data.type;
  }
}

export class HelpCenterAuthMechanismWorkosConnectModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterAuthMechanismWorkosConnectFieldsFragment;
  public readonly __typename = "HelpCenterAuthMechanismWorkosConnect" as const;

  public readonly apiHost: HelpCenterAuthMechanismWorkosConnectFieldsFragment["apiHost"];
  public readonly appClientId: HelpCenterAuthMechanismWorkosConnectFieldsFragment["appClientId"];
  public readonly appSecretMasked: HelpCenterAuthMechanismWorkosConnectFieldsFragment["appSecretMasked"];
  public readonly type: HelpCenterAuthMechanismWorkosConnectFieldsFragment["type"];

  constructor(client: PlainGraphQLClient, data: HelpCenterAuthMechanismWorkosConnectFieldsFragment) {
    this._client = client;
    this._data = data;
    this.apiHost = data.apiHost;
    this.appClientId = data.appClientId;
    this.appSecretMasked = data.appSecretMasked;
    this.type = data.type;
  }
}

export class HelpCenterIndexModel {
  protected _client: PlainGraphQLClient;
  protected _data: HelpCenterIndexFieldsFragment;
  public readonly __typename = "HelpCenterIndex" as const;

  public readonly createdAt: HelpCenterIndexFieldsFragment["createdAt"];
  public readonly hash: HelpCenterIndexFieldsFragment["hash"];
  public readonly helpCenterId: HelpCenterIndexFieldsFragment["helpCenterId"];
  public readonly navIndex: HelpCenterIndexFieldsFragment["navIndex"];
  public readonly updatedAt: HelpCenterIndexFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: HelpCenterIndexFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.hash = data.hash;
    this.helpCenterId = data.helpCenterId;
    this.navIndex = data.navIndex;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ImportJobDefinitionModel {
  protected _client: PlainGraphQLClient;
  protected _data: ImportJobDefinitionFieldsFragment;
  public readonly __typename = "ImportJobDefinition" as const;

  public readonly createdAt: ImportJobDefinitionFieldsFragment["createdAt"];
  public readonly enabledAt: ImportJobDefinitionFieldsFragment["enabledAt"];
  public readonly entityTypes: ImportJobDefinitionFieldsFragment["entityTypes"];
  public readonly id: ImportJobDefinitionFieldsFragment["id"];
  public readonly mode: ImportJobDefinitionFieldsFragment["mode"];
  public readonly updatedAt: ImportJobDefinitionFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ImportJobDefinitionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.enabledAt = data.enabledAt;
    this.entityTypes = data.entityTypes;
    this.id = data.id;
    this.mode = data.mode;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ImportRunModel {
  protected _client: PlainGraphQLClient;
  protected _data: ImportRunFieldsFragment;
  public readonly __typename = "ImportRun" as const;

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

export class ImportThreadChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ImportThreadChannelDetailsFieldsFragment;
  public readonly __typename = "ImportThreadChannelDetails" as const;

  public readonly importIntegrationKey: ImportThreadChannelDetailsFieldsFragment["importIntegrationKey"];
  public readonly importSourceUrl: ImportThreadChannelDetailsFieldsFragment["importSourceUrl"];

  constructor(client: PlainGraphQLClient, data: ImportThreadChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.importIntegrationKey = data.importIntegrationKey;
    this.importSourceUrl = data.importSourceUrl;
  }
}

export class IndexedDocumentModel {
  protected _client: PlainGraphQLClient;
  protected _data: IndexedDocumentFieldsFragment;
  public readonly __typename = "IndexedDocument" as const;

  public readonly createdAt: IndexedDocumentFieldsFragment["createdAt"];
  public readonly id: IndexedDocumentFieldsFragment["id"];
  public readonly updatedAt: IndexedDocumentFieldsFragment["updatedAt"];
  public readonly url: IndexedDocumentFieldsFragment["url"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly status: IndexedDocumentStatusFailedModel | IndexedDocumentStatusIndexedModel | IndexedDocumentStatusPendingModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: IndexedDocumentFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.status = (() => {
    switch ((data.status as any).__typename) {
      case "IndexedDocumentStatusFailed": return new IndexedDocumentStatusFailedModel(client, data.status as any);
      case "IndexedDocumentStatusIndexed": return new IndexedDocumentStatusIndexedModel(client, data.status as any);
      case "IndexedDocumentStatusPending": return new IndexedDocumentStatusPendingModel(client, data.status as any);
      default: return data.status as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class IndexedDocumentStatusFailedModel {
  protected _client: PlainGraphQLClient;
  protected _data: IndexedDocumentStatusFailedFieldsFragment;
  public readonly __typename = "IndexedDocumentStatusFailed" as const;

  public readonly failedAt: IndexedDocumentStatusFailedFieldsFragment["failedAt"];
  public readonly reason: IndexedDocumentStatusFailedFieldsFragment["reason"];

  constructor(client: PlainGraphQLClient, data: IndexedDocumentStatusFailedFieldsFragment) {
    this._client = client;
    this._data = data;
    this.failedAt = data.failedAt;
    this.reason = data.reason;
  }
}

export class IndexedDocumentStatusIndexedModel {
  protected _client: PlainGraphQLClient;
  protected _data: IndexedDocumentStatusIndexedFieldsFragment;
  public readonly __typename = "IndexedDocumentStatusIndexed" as const;

  public readonly indexedAt: IndexedDocumentStatusIndexedFieldsFragment["indexedAt"];
  public readonly indexedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;

  constructor(client: PlainGraphQLClient, data: IndexedDocumentStatusIndexedFieldsFragment) {
    this._client = client;
    this._data = data;
    this.indexedAt = data.indexedAt;
    this.indexedBy = data.indexedBy ? (() => {
    switch ((data.indexedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.indexedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.indexedBy as any);
      case "UserActor": return new UserActorModel(client, data.indexedBy as any);
      default: return data.indexedBy as any;
    }
  })() : null;
  }
}

export class IndexedDocumentStatusPendingModel {
  protected _client: PlainGraphQLClient;
  protected _data: IndexedDocumentStatusPendingFieldsFragment;
  public readonly __typename = "IndexedDocumentStatusPending" as const;

  public readonly startedAt: IndexedDocumentStatusPendingFieldsFragment["startedAt"];

  constructor(client: PlainGraphQLClient, data: IndexedDocumentStatusPendingFieldsFragment) {
    this._client = client;
    this._data = data;
    this.startedAt = data.startedAt;
  }
}

export class InternalNotificationModel {
  protected _client: PlainGraphQLClient;
  protected _data: InternalNotificationFieldsFragment;
  public readonly __typename = "InternalNotification" as const;

  public readonly archivedAt: InternalNotificationFieldsFragment["archivedAt"];
  public readonly createdAt: InternalNotificationFieldsFragment["createdAt"];
  public readonly description: InternalNotificationFieldsFragment["description"];
  public readonly id: InternalNotificationFieldsFragment["id"];
  public readonly readAt: InternalNotificationFieldsFragment["readAt"];
  public readonly title: InternalNotificationFieldsFragment["title"];
  public readonly type: InternalNotificationFieldsFragment["type"];
  public readonly updatedAt: InternalNotificationFieldsFragment["updatedAt"];
  public readonly userId: InternalNotificationFieldsFragment["userId"];
  public readonly archivedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly details: (DiscussionResolvedNotificationDetailModel | EmailBounceNotificationDetailModel | NoteMentionNotificationDetailModel | ThreadAssignmentNotificationDetailModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.archivedBy = data.archivedBy ? (() => {
    switch ((data.archivedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.archivedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.archivedBy as any);
      case "UserActor": return new UserActorModel(client, data.archivedBy as any);
      default: return data.archivedBy as any;
    }
  })() : null;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.details = data.details ? (() => {
    switch ((data.details as any).__typename) {
      case "DiscussionResolvedNotificationDetail": return new DiscussionResolvedNotificationDetailModel(client, data.details as any);
      case "EmailBounceNotificationDetail": return new EmailBounceNotificationDetailModel(client, data.details as any);
      case "NoteMentionNotificationDetail": return new NoteMentionNotificationDetailModel(client, data.details as any);
      case "ThreadAssignmentNotificationDetail": return new ThreadAssignmentNotificationDetailModel(client, data.details as any);
      default: return data.details as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class IssueTrackerFieldModel {
  protected _client: PlainGraphQLClient;
  protected _data: IssueTrackerFieldFieldsFragment;
  public readonly __typename = "IssueTrackerField" as const;

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
  public readonly __typename = "JiraIntegrationToken" as const;

  public readonly createdAt: JiraIntegrationTokenFieldsFragment["createdAt"];
  public readonly token: JiraIntegrationTokenFieldsFragment["token"];

  constructor(client: PlainGraphQLClient, data: JiraIntegrationTokenFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.token = data.token;
  }
}

export class JiraIssueThreadLinkModel {
  protected _client: PlainGraphQLClient;
  protected _data: JiraIssueThreadLinkFieldsFragment;
  public readonly __typename = "JiraIssueThreadLink" as const;

  public readonly createdAt: JiraIssueThreadLinkFieldsFragment["createdAt"];
  public readonly description: JiraIssueThreadLinkFieldsFragment["description"];
  public readonly id: JiraIssueThreadLinkFieldsFragment["id"];
  public readonly jiraIssueId: JiraIssueThreadLinkFieldsFragment["jiraIssueId"];
  public readonly jiraIssueKey: JiraIssueThreadLinkFieldsFragment["jiraIssueKey"];
  public readonly jiraIssueType: JiraIssueThreadLinkFieldsFragment["jiraIssueType"];
  public readonly linkType: JiraIssueThreadLinkFieldsFragment["linkType"];
  public readonly sourceId: JiraIssueThreadLinkFieldsFragment["sourceId"];
  public readonly sourceType: JiraIssueThreadLinkFieldsFragment["sourceType"];
  public readonly status: JiraIssueThreadLinkFieldsFragment["status"];
  public readonly threadId: JiraIssueThreadLinkFieldsFragment["threadId"];
  public readonly title: JiraIssueThreadLinkFieldsFragment["title"];
  public readonly updatedAt: JiraIssueThreadLinkFieldsFragment["updatedAt"];
  public readonly url: JiraIssueThreadLinkFieldsFragment["url"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: JiraIssueThreadLinkFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.jiraIssueId = data.jiraIssueId;
    this.jiraIssueKey = data.jiraIssueKey;
    this.jiraIssueType = data.jiraIssueType;
    this.linkType = data.linkType;
    this.sourceId = data.sourceId;
    this.sourceType = data.sourceType;
    this.status = data.status;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class JiraSiteIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: JiraSiteIntegrationFieldsFragment;
  public readonly __typename = "JiraSiteIntegration" as const;

  public readonly key: JiraSiteIntegrationFieldsFragment["key"];
  public readonly name: JiraSiteIntegrationFieldsFragment["name"];
  public readonly site: JiraSiteIntegrationFieldsFragment["site"];

  constructor(client: PlainGraphQLClient, data: JiraSiteIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.key = data.key;
    this.name = data.name;
    this.site = data.site;
  }
}

export class KnowledgeGapModel {
  protected _client: PlainGraphQLClient;
  protected _data: KnowledgeGapFieldsFragment;
  public readonly __typename = "KnowledgeGap" as const;

  public readonly createdAt: KnowledgeGapFieldsFragment["createdAt"];
  public readonly description: KnowledgeGapFieldsFragment["description"];
  public readonly firstSeenAt: KnowledgeGapFieldsFragment["firstSeenAt"];
  public readonly id: KnowledgeGapFieldsFragment["id"];
  public readonly lastSeenAt: KnowledgeGapFieldsFragment["lastSeenAt"];
  public readonly status: KnowledgeGapFieldsFragment["status"];
  public readonly statusChangedAt: KnowledgeGapFieldsFragment["statusChangedAt"];
  public readonly title: KnowledgeGapFieldsFragment["title"];
  public readonly updatedAt: KnowledgeGapFieldsFragment["updatedAt"];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class LabelModel {
  protected _client: PlainGraphQLClient;
  protected _data: LabelFieldsFragment;
  public readonly __typename = "Label" as const;

  public readonly createdAt: LabelFieldsFragment["createdAt"];
  public readonly id: LabelFieldsFragment["id"];
  public readonly updatedAt: LabelFieldsFragment["updatedAt"];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: LabelFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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
  public readonly __typename = "LabelType" as const;

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
  public readonly archivedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.archivedBy = data.archivedBy ? (() => {
    switch ((data.archivedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.archivedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.archivedBy as any);
      case "UserActor": return new UserActorModel(client, data.archivedBy as any);
      default: return data.archivedBy as any;
    }
  })() : null;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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

export class LinearIssueThreadLinkModel {
  protected _client: PlainGraphQLClient;
  protected _data: LinearIssueThreadLinkFieldsFragment;
  public readonly __typename = "LinearIssueThreadLink" as const;

  public readonly createdAt: LinearIssueThreadLinkFieldsFragment["createdAt"];
  public readonly description: LinearIssueThreadLinkFieldsFragment["description"];
  public readonly id: LinearIssueThreadLinkFieldsFragment["id"];
  public readonly linearIssueCreatedAt: LinearIssueThreadLinkFieldsFragment["linearIssueCreatedAt"];
  public readonly linearIssueId: LinearIssueThreadLinkFieldsFragment["linearIssueId"];
  public readonly linearIssueIdentifier: LinearIssueThreadLinkFieldsFragment["linearIssueIdentifier"];
  public readonly linearIssueState: LinearIssueThreadLinkFieldsFragment["linearIssueState"];
  public readonly linearIssueUpdatedAt: LinearIssueThreadLinkFieldsFragment["linearIssueUpdatedAt"];
  public readonly linkType: LinearIssueThreadLinkFieldsFragment["linkType"];
  public readonly sourceId: LinearIssueThreadLinkFieldsFragment["sourceId"];
  public readonly sourceType: LinearIssueThreadLinkFieldsFragment["sourceType"];
  public readonly status: LinearIssueThreadLinkFieldsFragment["status"];
  public readonly threadId: LinearIssueThreadLinkFieldsFragment["threadId"];
  public readonly title: LinearIssueThreadLinkFieldsFragment["title"];
  public readonly updatedAt: LinearIssueThreadLinkFieldsFragment["updatedAt"];
  public readonly url: LinearIssueThreadLinkFieldsFragment["url"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: LinearIssueThreadLinkFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.linearIssueCreatedAt = data.linearIssueCreatedAt;
    this.linearIssueId = data.linearIssueId;
    this.linearIssueIdentifier = data.linearIssueIdentifier;
    this.linearIssueState = data.linearIssueState;
    this.linearIssueUpdatedAt = data.linearIssueUpdatedAt;
    this.linkType = data.linkType;
    this.sourceId = data.sourceId;
    this.sourceType = data.sourceType;
    this.status = data.status;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class LinearIssueThreadLinkStateTransitionedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: LinearIssueThreadLinkStateTransitionedEntryFieldsFragment;
  public readonly __typename = "LinearIssueThreadLinkStateTransitionedEntry" as const;

  public readonly linearIssueId: LinearIssueThreadLinkStateTransitionedEntryFieldsFragment["linearIssueId"];
  public readonly nextLinearStateId: LinearIssueThreadLinkStateTransitionedEntryFieldsFragment["nextLinearStateId"];
  public readonly previousLinearStateId: LinearIssueThreadLinkStateTransitionedEntryFieldsFragment["previousLinearStateId"];

  constructor(client: PlainGraphQLClient, data: LinearIssueThreadLinkStateTransitionedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.linearIssueId = data.linearIssueId;
    this.nextLinearStateId = data.nextLinearStateId;
    this.previousLinearStateId = data.previousLinearStateId;
  }
}

export class MachineUserModel {
  protected _client: PlainGraphQLClient;
  protected _data: MachineUserFieldsFragment;
  public readonly __typename = "MachineUser" as const;

  public readonly createdAt: MachineUserFieldsFragment["createdAt"];
  public readonly deletedAt: MachineUserFieldsFragment["deletedAt"];
  public readonly description: MachineUserFieldsFragment["description"];
  public readonly fullName: MachineUserFieldsFragment["fullName"];
  public readonly id: MachineUserFieldsFragment["id"];
  public readonly isDeleted: MachineUserFieldsFragment["isDeleted"];
  public readonly publicName: MachineUserFieldsFragment["publicName"];
  public readonly type: MachineUserFieldsFragment["type"];
  public readonly updatedAt: MachineUserFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.deletedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.deletedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }

  async apiKeys(variables?: Omit<MachineUserApiKeysQueryVariables, "machineUserId">): Promise<PlainConnection<ApiKeyModel>> {
    const allVars = { ...variables, machineUserId: this.id } as MachineUserApiKeysQueryVariables;
    const response = await this._client.request<MachineUserApiKeysQuery, MachineUserApiKeysQueryVariables>(
      MachineUserApiKeysDocument, allVars
    );
    const parent = response.machineUser;
    if (!parent) throw new Error("machineUser not found");
    const conn = parent.apiKeys;
    return new PlainConnection<ApiKeyModel>({
      nodes: conn.edges.map(e => new ApiKeyModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.apiKeys({ ...variables, ...cursor }),
    });
  }
}

export class MachineUserActorModel {
  protected _client: PlainGraphQLClient;
  protected _data: MachineUserActorFieldsFragment;
  public readonly __typename = "MachineUserActor" as const;

  public readonly machineUserId: MachineUserActorFieldsFragment["machineUserId"];

  constructor(client: PlainGraphQLClient, data: MachineUserActorFieldsFragment) {
    this._client = client;
    this._data = data;
    this.machineUserId = data.machineUserId;
  }

  public get machineUser(): Promise<MachineUserModel | undefined> {
    const id = this._data.machineUser?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<MachineUserQuery, MachineUserQueryVariables>(
      MachineUserDocument,
      { machineUserId: id } as MachineUserQueryVariables
    ).then(r => r.machineUser ? new MachineUserModel(this._client, r.machineUser) : undefined);
  }
}

export class MergedThreadMessageEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: MergedThreadMessageEntryFieldsFragment;
  public readonly __typename = "MergedThreadMessageEntry" as const;

  public readonly childThreadDetails: MergedThreadMessageEntryFieldsFragment["childThreadDetails"];
  public readonly threadLinkId: MergedThreadMessageEntryFieldsFragment["threadLinkId"];

  constructor(client: PlainGraphQLClient, data: MergedThreadMessageEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.childThreadDetails = data.childThreadDetails;
    this.threadLinkId = data.threadLinkId;
  }

  public get childTimelineEntry(): Promise<TimelineEntryModel | undefined> {
    const id = this._data.childTimelineEntry?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<TimelineEntryQuery, TimelineEntryQueryVariables>(
      TimelineEntryDocument,
      { customerId: id } as TimelineEntryQueryVariables
    ).then(r => r.timelineEntry ? new TimelineEntryModel(this._client, r.timelineEntry) : undefined);
  }
}

export class MeteredFeatureEntitlementModel {
  protected _client: PlainGraphQLClient;
  protected _data: MeteredFeatureEntitlementFieldsFragment;
  public readonly __typename = "MeteredFeatureEntitlement" as const;

  public readonly current: MeteredFeatureEntitlementFieldsFragment["current"];
  public readonly feature: MeteredFeatureEntitlementFieldsFragment["feature"];
  public readonly isEntitled: MeteredFeatureEntitlementFieldsFragment["isEntitled"];
  public readonly limit: MeteredFeatureEntitlementFieldsFragment["limit"];

  constructor(client: PlainGraphQLClient, data: MeteredFeatureEntitlementFieldsFragment) {
    this._client = client;
    this._data = data;
    this.current = data.current;
    this.feature = data.feature;
    this.isEntitled = data.isEntitled;
    this.limit = data.limit;
  }
}

export class MSTeamsChannelMembersModel {
  protected _client: PlainGraphQLClient;
  protected _data: MsTeamsChannelMembersFieldsFragment;
  public readonly __typename = "MSTeamsChannelMembers" as const;

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
  public readonly __typename = "MSTeamsMessage" as const;

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
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class MSTeamsMessageEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: MsTeamsMessageEntryFieldsFragment;
  public readonly __typename = "MSTeamsMessageEntry" as const;

  public readonly customerId: MsTeamsMessageEntryFieldsFragment["customerId"];
  public readonly deletedOnMsTeamsAt: MsTeamsMessageEntryFieldsFragment["deletedOnMsTeamsAt"];
  public readonly hasUnprocessedAttachments: MsTeamsMessageEntryFieldsFragment["hasUnprocessedAttachments"];
  public readonly lastEditedOnMsTeamsAt: MsTeamsMessageEntryFieldsFragment["lastEditedOnMsTeamsAt"];
  public readonly markdownContent: MsTeamsMessageEntryFieldsFragment["markdownContent"];
  public readonly msTeamsMessageId: MsTeamsMessageEntryFieldsFragment["msTeamsMessageId"];
  public readonly msTeamsMessageLink: MsTeamsMessageEntryFieldsFragment["msTeamsMessageLink"];
  public readonly text: MsTeamsMessageEntryFieldsFragment["text"];

  constructor(client: PlainGraphQLClient, data: MsTeamsMessageEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.deletedOnMsTeamsAt = data.deletedOnMsTeamsAt;
    this.hasUnprocessedAttachments = data.hasUnprocessedAttachments;
    this.lastEditedOnMsTeamsAt = data.lastEditedOnMsTeamsAt;
    this.markdownContent = data.markdownContent;
    this.msTeamsMessageId = data.msTeamsMessageId;
    this.msTeamsMessageLink = data.msTeamsMessageLink;
    this.text = data.text;
  }
}

export class MSTeamsThreadChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: MsTeamsThreadChannelDetailsFieldsFragment;
  public readonly __typename = "MSTeamsThreadChannelDetails" as const;

  public readonly msTeamsChannelId: MsTeamsThreadChannelDetailsFieldsFragment["msTeamsChannelId"];
  public readonly msTeamsChannelName: MsTeamsThreadChannelDetailsFieldsFragment["msTeamsChannelName"];
  public readonly msTeamsTeamId: MsTeamsThreadChannelDetailsFieldsFragment["msTeamsTeamId"];
  public readonly msTeamsTeamName: MsTeamsThreadChannelDetailsFieldsFragment["msTeamsTeamName"];

  constructor(client: PlainGraphQLClient, data: MsTeamsThreadChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.msTeamsChannelId = data.msTeamsChannelId;
    this.msTeamsChannelName = data.msTeamsChannelName;
    this.msTeamsTeamId = data.msTeamsTeamId;
    this.msTeamsTeamName = data.msTeamsTeamName;
  }
}

export class NextResponseTimeServiceLevelAgreementModel {
  protected _client: PlainGraphQLClient;
  protected _data: NextResponseTimeServiceLevelAgreementFieldsFragment;
  public readonly __typename = "NextResponseTimeServiceLevelAgreement" as const;

  public readonly createdAt: NextResponseTimeServiceLevelAgreementFieldsFragment["createdAt"];
  public readonly id: NextResponseTimeServiceLevelAgreementFieldsFragment["id"];
  public readonly nextResponseTimeMinutes: NextResponseTimeServiceLevelAgreementFieldsFragment["nextResponseTimeMinutes"];
  public readonly threadLabelTypeIdFilter: NextResponseTimeServiceLevelAgreementFieldsFragment["threadLabelTypeIdFilter"];
  public readonly threadPriorityFilter: NextResponseTimeServiceLevelAgreementFieldsFragment["threadPriorityFilter"];
  public readonly updatedAt: NextResponseTimeServiceLevelAgreementFieldsFragment["updatedAt"];
  public readonly useBusinessHoursOnly: NextResponseTimeServiceLevelAgreementFieldsFragment["useBusinessHoursOnly"];
  public readonly breachActions: (BeforeBreachActionModel)[];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: NextResponseTimeServiceLevelAgreementFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.nextResponseTimeMinutes = data.nextResponseTimeMinutes;
    this.threadLabelTypeIdFilter = data.threadLabelTypeIdFilter;
    this.threadPriorityFilter = data.threadPriorityFilter;
    this.updatedAt = data.updatedAt;
    this.useBusinessHoursOnly = data.useBusinessHoursOnly;
    this.breachActions = ((data.breachActions as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "BeforeBreachAction": return new BeforeBreachActionModel(client, item as any);
      default: return item as any;
    }
  })());
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class NoteModel {
  protected _client: PlainGraphQLClient;
  protected _data: NoteFieldsFragment;
  public readonly __typename = "Note" as const;

  public readonly createdAt: NoteFieldsFragment["createdAt"];
  public readonly deletedAt: NoteFieldsFragment["deletedAt"];
  public readonly editedAt: NoteFieldsFragment["editedAt"];
  public readonly id: NoteFieldsFragment["id"];
  public readonly isDeleted: NoteFieldsFragment["isDeleted"];
  public readonly isEdited: NoteFieldsFragment["isEdited"];
  public readonly markdown: NoteFieldsFragment["markdown"];
  public readonly text: NoteFieldsFragment["text"];
  public readonly updatedAt: NoteFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly editedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.editedBy = data.editedBy ? (() => {
    switch ((data.editedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.editedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.editedBy as any);
      case "UserActor": return new UserActorModel(client, data.editedBy as any);
      default: return data.editedBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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

export class NoteEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: NoteEntryFieldsFragment;
  public readonly __typename = "NoteEntry" as const;

  public readonly editedAt: NoteEntryFieldsFragment["editedAt"];
  public readonly isEdited: NoteEntryFieldsFragment["isEdited"];
  public readonly markdown: NoteEntryFieldsFragment["markdown"];
  public readonly noteId: NoteEntryFieldsFragment["noteId"];
  public readonly text: NoteEntryFieldsFragment["text"];
  public readonly editedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;

  constructor(client: PlainGraphQLClient, data: NoteEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.editedAt = data.editedAt;
    this.isEdited = data.isEdited;
    this.markdown = data.markdown;
    this.noteId = data.noteId;
    this.text = data.text;
    this.editedBy = data.editedBy ? (() => {
    switch ((data.editedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.editedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.editedBy as any);
      case "UserActor": return new UserActorModel(client, data.editedBy as any);
      default: return data.editedBy as any;
    }
  })() : null;
  }
}

export class NoteMentionNotificationDetailModel {
  protected _client: PlainGraphQLClient;
  protected _data: NoteMentionNotificationDetailFieldsFragment;
  public readonly __typename = "NoteMentionNotificationDetail" as const;

  public readonly threadId: NoteMentionNotificationDetailFieldsFragment["threadId"];
  public readonly timelineEntryId: NoteMentionNotificationDetailFieldsFragment["timelineEntryId"];
  public readonly mentionedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: NoteMentionNotificationDetailFieldsFragment) {
    this._client = client;
    this._data = data;
    this.threadId = data.threadId;
    this.timelineEntryId = data.timelineEntryId;
    this.mentionedBy = (() => {
    switch ((data.mentionedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.mentionedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.mentionedBy as any);
      case "UserActor": return new UserActorModel(client, data.mentionedBy as any);
      default: return data.mentionedBy as any;
    }
  })();
  }
}

export class PerSeatRecurringPriceModel {
  protected _client: PlainGraphQLClient;
  protected _data: PerSeatRecurringPriceFieldsFragment;
  public readonly __typename = "PerSeatRecurringPrice" as const;

  public readonly billingIntervalCount: PerSeatRecurringPriceFieldsFragment["billingIntervalCount"];
  public readonly billingIntervalUnit: PerSeatRecurringPriceFieldsFragment["billingIntervalUnit"];
  public readonly currency: PerSeatRecurringPriceFieldsFragment["currency"];
  public readonly perSeatAmount: PerSeatRecurringPriceFieldsFragment["perSeatAmount"];

  constructor(client: PlainGraphQLClient, data: PerSeatRecurringPriceFieldsFragment) {
    this._client = client;
    this._data = data;
    this.billingIntervalCount = data.billingIntervalCount;
    this.billingIntervalUnit = data.billingIntervalUnit;
    this.currency = data.currency;
    this.perSeatAmount = data.perSeatAmount;
  }
}

export class PlainTaskThreadLinkModel {
  protected _client: PlainGraphQLClient;
  protected _data: PlainTaskThreadLinkFieldsFragment;
  public readonly __typename = "PlainTaskThreadLink" as const;

  public readonly createdAt: PlainTaskThreadLinkFieldsFragment["createdAt"];
  public readonly description: PlainTaskThreadLinkFieldsFragment["description"];
  public readonly id: PlainTaskThreadLinkFieldsFragment["id"];
  public readonly linkType: PlainTaskThreadLinkFieldsFragment["linkType"];
  public readonly plainTaskId: PlainTaskThreadLinkFieldsFragment["plainTaskId"];
  public readonly sourceId: PlainTaskThreadLinkFieldsFragment["sourceId"];
  public readonly sourceType: PlainTaskThreadLinkFieldsFragment["sourceType"];
  public readonly status: PlainTaskThreadLinkFieldsFragment["status"];
  public readonly threadId: PlainTaskThreadLinkFieldsFragment["threadId"];
  public readonly title: PlainTaskThreadLinkFieldsFragment["title"];
  public readonly updatedAt: PlainTaskThreadLinkFieldsFragment["updatedAt"];
  public readonly url: PlainTaskThreadLinkFieldsFragment["url"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: PlainTaskThreadLinkFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.linkType = data.linkType;
    this.plainTaskId = data.plainTaskId;
    this.sourceId = data.sourceId;
    this.sourceType = data.sourceType;
    this.status = data.status;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class PlainThreadThreadLinkModel {
  protected _client: PlainGraphQLClient;
  protected _data: PlainThreadThreadLinkFieldsFragment;
  public readonly __typename = "PlainThreadThreadLink" as const;

  public readonly createdAt: PlainThreadThreadLinkFieldsFragment["createdAt"];
  public readonly description: PlainThreadThreadLinkFieldsFragment["description"];
  public readonly id: PlainThreadThreadLinkFieldsFragment["id"];
  public readonly linkType: PlainThreadThreadLinkFieldsFragment["linkType"];
  public readonly plainThreadId: PlainThreadThreadLinkFieldsFragment["plainThreadId"];
  public readonly plainThreadStatusDetailType: PlainThreadThreadLinkFieldsFragment["plainThreadStatusDetailType"];
  public readonly sourceId: PlainThreadThreadLinkFieldsFragment["sourceId"];
  public readonly sourceType: PlainThreadThreadLinkFieldsFragment["sourceType"];
  public readonly status: PlainThreadThreadLinkFieldsFragment["status"];
  public readonly threadId: PlainThreadThreadLinkFieldsFragment["threadId"];
  public readonly title: PlainThreadThreadLinkFieldsFragment["title"];
  public readonly updatedAt: PlainThreadThreadLinkFieldsFragment["updatedAt"];
  public readonly url: PlainThreadThreadLinkFieldsFragment["url"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: PlainThreadThreadLinkFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.description = data.description;
    this.id = data.id;
    this.linkType = data.linkType;
    this.plainThreadId = data.plainThreadId;
    this.plainThreadStatusDetailType = data.plainThreadStatusDetailType;
    this.sourceId = data.sourceId;
    this.sourceType = data.sourceType;
    this.status = data.status;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.url = data.url;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class RoleModel {
  protected _client: PlainGraphQLClient;
  protected _data: RoleFieldsFragment;
  public readonly __typename = "Role" as const;

  public readonly customRoleId: RoleFieldsFragment["customRoleId"];
  public readonly description: RoleFieldsFragment["description"];
  public readonly id: RoleFieldsFragment["id"];
  public readonly isAssignableToThread: RoleFieldsFragment["isAssignableToThread"];
  public readonly key: RoleFieldsFragment["key"];
  public readonly name: RoleFieldsFragment["name"];
  public readonly permissions: RoleFieldsFragment["permissions"];

  constructor(client: PlainGraphQLClient, data: RoleFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customRoleId = data.customRoleId;
    this.description = data.description;
    this.id = data.id;
    this.isAssignableToThread = data.isAssignableToThread;
    this.key = data.key;
    this.name = data.name;
    this.permissions = data.permissions;
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
  public readonly __typename = "RoleChangeCost" as const;

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
  public readonly __typename = "SavedThreadsView" as const;

  public readonly color: SavedThreadsViewFieldsFragment["color"];
  public readonly createdAt: SavedThreadsViewFieldsFragment["createdAt"];
  public readonly icon: SavedThreadsViewFieldsFragment["icon"];
  public readonly id: SavedThreadsViewFieldsFragment["id"];
  public readonly isHidden: SavedThreadsViewFieldsFragment["isHidden"];
  public readonly name: SavedThreadsViewFieldsFragment["name"];
  public readonly updatedAt: SavedThreadsViewFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ServiceAuthorizationModel {
  protected _client: PlainGraphQLClient;
  protected _data: ServiceAuthorizationFieldsFragment;
  public readonly __typename = "ServiceAuthorization" as const;

  public readonly connectedAt: ServiceAuthorizationFieldsFragment["connectedAt"];
  public readonly createdAt: ServiceAuthorizationFieldsFragment["createdAt"];
  public readonly id: ServiceAuthorizationFieldsFragment["id"];
  public readonly status: ServiceAuthorizationFieldsFragment["status"];
  public readonly updatedAt: ServiceAuthorizationFieldsFragment["updatedAt"];
  public readonly connectedBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly serviceIntegration: DefaultServiceIntegrationModel | JiraSiteIntegrationModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ServiceAuthorizationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.connectedAt = data.connectedAt;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.status = data.status;
    this.updatedAt = data.updatedAt;
    this.connectedBy = (() => {
    switch ((data.connectedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.connectedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.connectedBy as any);
      case "UserActor": return new UserActorModel(client, data.connectedBy as any);
      default: return data.connectedBy as any;
    }
  })();
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.serviceIntegration = (() => {
    switch ((data.serviceIntegration as any).__typename) {
      case "DefaultServiceIntegration": return new DefaultServiceIntegrationModel(client, data.serviceIntegration as any);
      case "JiraSiteIntegration": return new JiraSiteIntegrationModel(client, data.serviceIntegration as any);
      default: return data.serviceIntegration as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ServiceLevelAgreementStatusTransitionedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ServiceLevelAgreementStatusTransitionedEntryFieldsFragment;
  public readonly __typename = "ServiceLevelAgreementStatusTransitionedEntry" as const;

  public readonly nextStatus: ServiceLevelAgreementStatusTransitionedEntryFieldsFragment["nextStatus"];
  public readonly previousStatus: ServiceLevelAgreementStatusTransitionedEntryFieldsFragment["previousStatus"];
  public readonly serviceLevelAgreement: (FirstResponseTimeServiceLevelAgreementModel | NextResponseTimeServiceLevelAgreementModel) | null;

  constructor(client: PlainGraphQLClient, data: ServiceLevelAgreementStatusTransitionedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.nextStatus = data.nextStatus;
    this.previousStatus = data.previousStatus;
    this.serviceLevelAgreement = data.serviceLevelAgreement ? (() => {
    switch ((data.serviceLevelAgreement as any).__typename) {
      case "FirstResponseTimeServiceLevelAgreement": return new FirstResponseTimeServiceLevelAgreementModel(client, data.serviceLevelAgreement as any);
      case "NextResponseTimeServiceLevelAgreement": return new NextResponseTimeServiceLevelAgreementModel(client, data.serviceLevelAgreement as any);
      default: return data.serviceLevelAgreement as any;
    }
  })() : null;
  }
}

export class SlackCustomerIdentityModel {
  protected _client: PlainGraphQLClient;
  protected _data: SlackCustomerIdentityFieldsFragment;
  public readonly __typename = "SlackCustomerIdentity" as const;

  public readonly slackUserId: SlackCustomerIdentityFieldsFragment["slackUserId"];

  constructor(client: PlainGraphQLClient, data: SlackCustomerIdentityFieldsFragment) {
    this._client = client;
    this._data = data;
    this.slackUserId = data.slackUserId;
  }
}

export class SlackMessageEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: SlackMessageEntryFieldsFragment;
  public readonly __typename = "SlackMessageEntry" as const;

  public readonly customerId: SlackMessageEntryFieldsFragment["customerId"];
  public readonly deletedOnSlackAt: SlackMessageEntryFieldsFragment["deletedOnSlackAt"];
  public readonly lastEditedOnSlackAt: SlackMessageEntryFieldsFragment["lastEditedOnSlackAt"];
  public readonly relatedThread: SlackMessageEntryFieldsFragment["relatedThread"];
  public readonly slackMessageLink: SlackMessageEntryFieldsFragment["slackMessageLink"];
  public readonly slackWebMessageLink: SlackMessageEntryFieldsFragment["slackWebMessageLink"];
  public readonly text: SlackMessageEntryFieldsFragment["text"];

  constructor(client: PlainGraphQLClient, data: SlackMessageEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.deletedOnSlackAt = data.deletedOnSlackAt;
    this.lastEditedOnSlackAt = data.lastEditedOnSlackAt;
    this.relatedThread = data.relatedThread;
    this.slackMessageLink = data.slackMessageLink;
    this.slackWebMessageLink = data.slackWebMessageLink;
    this.text = data.text;
  }
}

export class SlackReplyEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: SlackReplyEntryFieldsFragment;
  public readonly __typename = "SlackReplyEntry" as const;

  public readonly customerId: SlackReplyEntryFieldsFragment["customerId"];
  public readonly deletedOnSlackAt: SlackReplyEntryFieldsFragment["deletedOnSlackAt"];
  public readonly lastEditedOnSlackAt: SlackReplyEntryFieldsFragment["lastEditedOnSlackAt"];
  public readonly slackMessageLink: SlackReplyEntryFieldsFragment["slackMessageLink"];
  public readonly slackWebMessageLink: SlackReplyEntryFieldsFragment["slackWebMessageLink"];
  public readonly text: SlackReplyEntryFieldsFragment["text"];

  constructor(client: PlainGraphQLClient, data: SlackReplyEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.deletedOnSlackAt = data.deletedOnSlackAt;
    this.lastEditedOnSlackAt = data.lastEditedOnSlackAt;
    this.slackMessageLink = data.slackMessageLink;
    this.slackWebMessageLink = data.slackWebMessageLink;
    this.text = data.text;
  }
}

export class SlackThreadChannelAssociationModel {
  protected _client: PlainGraphQLClient;
  protected _data: SlackThreadChannelAssociationFieldsFragment;
  public readonly __typename = "SlackThreadChannelAssociation" as const;

  public readonly companyId: SlackThreadChannelAssociationFieldsFragment["companyId"];
  public readonly connectedSlackChannelId: SlackThreadChannelAssociationFieldsFragment["connectedSlackChannelId"];
  public readonly createdAt: SlackThreadChannelAssociationFieldsFragment["createdAt"];
  public readonly id: SlackThreadChannelAssociationFieldsFragment["id"];
  public readonly updatedAt: SlackThreadChannelAssociationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: SlackThreadChannelAssociationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.companyId = data.companyId;
    this.connectedSlackChannelId = data.connectedSlackChannelId;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class SlackThreadChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: SlackThreadChannelDetailsFieldsFragment;
  public readonly __typename = "SlackThreadChannelDetails" as const;

  public readonly slackChannelId: SlackThreadChannelDetailsFieldsFragment["slackChannelId"];
  public readonly slackChannelName: SlackThreadChannelDetailsFieldsFragment["slackChannelName"];
  public readonly slackTeamId: SlackThreadChannelDetailsFieldsFragment["slackTeamId"];
  public readonly slackTeamName: SlackThreadChannelDetailsFieldsFragment["slackTeamName"];

  constructor(client: PlainGraphQLClient, data: SlackThreadChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.slackChannelId = data.slackChannelId;
    this.slackChannelName = data.slackChannelName;
    this.slackTeamId = data.slackTeamId;
    this.slackTeamName = data.slackTeamName;
  }
}

export class SlackUserModel {
  protected _client: PlainGraphQLClient;
  protected _data: SlackUserFieldsFragment;
  public readonly __typename = "SlackUser" as const;

  public readonly createdAt: SlackUserFieldsFragment["createdAt"];
  public readonly fullName: SlackUserFieldsFragment["fullName"];
  public readonly id: SlackUserFieldsFragment["id"];
  public readonly isInChannel: SlackUserFieldsFragment["isInChannel"];
  public readonly slackAvatarUrl72px: SlackUserFieldsFragment["slackAvatarUrl72px"];
  public readonly slackHandle: SlackUserFieldsFragment["slackHandle"];
  public readonly slackUserId: SlackUserFieldsFragment["slackUserId"];
  public readonly updatedAt: SlackUserFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class SnippetModel {
  protected _client: PlainGraphQLClient;
  protected _data: SnippetFieldsFragment;
  public readonly __typename = "Snippet" as const;

  public readonly createdAt: SnippetFieldsFragment["createdAt"];
  public readonly deletedAt: SnippetFieldsFragment["deletedAt"];
  public readonly id: SnippetFieldsFragment["id"];
  public readonly isDeleted: SnippetFieldsFragment["isDeleted"];
  public readonly markdown: SnippetFieldsFragment["markdown"];
  public readonly name: SnippetFieldsFragment["name"];
  public readonly path: SnippetFieldsFragment["path"];
  public readonly text: SnippetFieldsFragment["text"];
  public readonly updatedAt: SnippetFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class SystemModel {
  protected _client: PlainGraphQLClient;
  protected _data: SystemFieldsFragment;
  public readonly __typename = "System" as const;

  public readonly id: SystemFieldsFragment["id"];

  constructor(client: PlainGraphQLClient, data: SystemFieldsFragment) {
    this._client = client;
    this._data = data;
    this.id = data.id;
  }
}

export class SystemActorModel {
  protected _client: PlainGraphQLClient;
  protected _data: SystemActorFieldsFragment;
  public readonly __typename = "SystemActor" as const;

  public readonly systemId: SystemActorFieldsFragment["systemId"];
  public readonly workflow: SystemActorFieldsFragment["workflow"];
  public readonly workflowExecutionId: SystemActorFieldsFragment["workflowExecutionId"];

  constructor(client: PlainGraphQLClient, data: SystemActorFieldsFragment) {
    this._client = client;
    this._data = data;
    this.systemId = data.systemId;
    this.workflow = data.workflow;
    this.workflowExecutionId = data.workflowExecutionId;
  }
}

export class TaskModel {
  protected _client: PlainGraphQLClient;
  protected _data: TaskFieldsFragment;
  public readonly __typename = "Task" as const;

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
  public readonly assignedTo: (MachineUserModel | SystemModel | UserModel) | null;
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.assignedTo = data.assignedTo ? (() => {
    switch ((data.assignedTo as any).__typename) {
      case "MachineUser": return new MachineUserModel(client, data.assignedTo as any);
      case "System": return new SystemModel(client, data.assignedTo as any);
      case "User": return new UserModel(client, data.assignedTo as any);
      default: return data.assignedTo as any;
    }
  })() : null;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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
  public readonly __typename = "TeamSettings" as const;

  public readonly createdAt: TeamSettingsFieldsFragment["createdAt"];
  public readonly id: TeamSettingsFieldsFragment["id"];
  public readonly isRoundRobinEnabled: TeamSettingsFieldsFragment["isRoundRobinEnabled"];
  public readonly labelTypeId: TeamSettingsFieldsFragment["labelTypeId"];
  public readonly roundRobinMaxCapacity: TeamSettingsFieldsFragment["roundRobinMaxCapacity"];
  public readonly updatedAt: TeamSettingsFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: TeamSettingsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isRoundRobinEnabled = data.isRoundRobinEnabled;
    this.labelTypeId = data.labelTypeId;
    this.roundRobinMaxCapacity = data.roundRobinMaxCapacity;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class TenantModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldsFragment;
  public readonly __typename = "Tenant" as const;

  public readonly createdAt: TenantFieldsFragment["createdAt"];
  public readonly externalId: TenantFieldsFragment["externalId"];
  public readonly id: TenantFieldsFragment["id"];
  public readonly name: TenantFieldsFragment["name"];
  public readonly source: TenantFieldsFragment["source"];
  public readonly updatedAt: TenantFieldsFragment["updatedAt"];
  public readonly url: TenantFieldsFragment["url"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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
  public readonly __typename = "TenantField" as const;

  public readonly createdAt: TenantFieldFieldsFragment["createdAt"];
  public readonly externalFieldId: TenantFieldFieldsFragment["externalFieldId"];
  public readonly id: TenantFieldFieldsFragment["id"];
  public readonly updatedAt: TenantFieldFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly value: TenantFieldBooleanValueModel | TenantFieldDateTimeValueModel | TenantFieldNumberValueModel | TenantFieldStringArrayValueModel | TenantFieldStringValueModel;

  constructor(client: PlainGraphQLClient, data: TenantFieldFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.externalFieldId = data.externalFieldId;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
    this.value = (() => {
    switch ((data.value as any).__typename) {
      case "TenantFieldBooleanValue": return new TenantFieldBooleanValueModel(client, data.value as any);
      case "TenantFieldDateTimeValue": return new TenantFieldDateTimeValueModel(client, data.value as any);
      case "TenantFieldNumberValue": return new TenantFieldNumberValueModel(client, data.value as any);
      case "TenantFieldStringArrayValue": return new TenantFieldStringArrayValueModel(client, data.value as any);
      case "TenantFieldStringValue": return new TenantFieldStringValueModel(client, data.value as any);
      default: return data.value as any;
    }
  })();
  }
}

export class TenantFieldBooleanValueModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldBooleanValueFieldsFragment;
  public readonly __typename = "TenantFieldBooleanValue" as const;

  public readonly booleanValue: TenantFieldBooleanValueFieldsFragment["booleanValue"];

  constructor(client: PlainGraphQLClient, data: TenantFieldBooleanValueFieldsFragment) {
    this._client = client;
    this._data = data;
    this.booleanValue = data.booleanValue;
  }
}

export class TenantFieldDateTimeValueModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldDateTimeValueFieldsFragment;
  public readonly __typename = "TenantFieldDateTimeValue" as const;

  public readonly dateValue: TenantFieldDateTimeValueFieldsFragment["dateValue"];

  constructor(client: PlainGraphQLClient, data: TenantFieldDateTimeValueFieldsFragment) {
    this._client = client;
    this._data = data;
    this.dateValue = data.dateValue;
  }
}

export class TenantFieldNumberValueModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldNumberValueFieldsFragment;
  public readonly __typename = "TenantFieldNumberValue" as const;

  public readonly numberValue: TenantFieldNumberValueFieldsFragment["numberValue"];

  constructor(client: PlainGraphQLClient, data: TenantFieldNumberValueFieldsFragment) {
    this._client = client;
    this._data = data;
    this.numberValue = data.numberValue;
  }
}

export class TenantFieldSchemaModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldSchemaFieldsFragment;
  public readonly __typename = "TenantFieldSchema" as const;

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
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class TenantFieldStringArrayValueModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldStringArrayValueFieldsFragment;
  public readonly __typename = "TenantFieldStringArrayValue" as const;

  public readonly arrayValue: TenantFieldStringArrayValueFieldsFragment["arrayValue"];

  constructor(client: PlainGraphQLClient, data: TenantFieldStringArrayValueFieldsFragment) {
    this._client = client;
    this._data = data;
    this.arrayValue = data.arrayValue;
  }
}

export class TenantFieldStringValueModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantFieldStringValueFieldsFragment;
  public readonly __typename = "TenantFieldStringValue" as const;

  public readonly stringValue: TenantFieldStringValueFieldsFragment["stringValue"];

  constructor(client: PlainGraphQLClient, data: TenantFieldStringValueFieldsFragment) {
    this._client = client;
    this._data = data;
    this.stringValue = data.stringValue;
  }
}

export class TenantTierMembershipModel {
  protected _client: PlainGraphQLClient;
  protected _data: TenantTierMembershipFieldsFragment;
  public readonly __typename = "TenantTierMembership" as const;

  public readonly createdAt: TenantTierMembershipFieldsFragment["createdAt"];
  public readonly id: TenantTierMembershipFieldsFragment["id"];
  public readonly tenantId: TenantTierMembershipFieldsFragment["tenantId"];
  public readonly tierId: TenantTierMembershipFieldsFragment["tierId"];
  public readonly updatedAt: TenantTierMembershipFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: TenantTierMembershipFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.tenantId = data.tenantId;
    this.tierId = data.tierId;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ThreadModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadFieldsFragment;
  public readonly __typename = "Thread" as const;

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
  public readonly additionalAssignees: (MachineUserModel | SystemModel | UserModel)[];
  public readonly agentStatusDetail: (AgentStatusDetailHandedOffModel | AgentStatusDetailHandledModel | AgentStatusDetailInProgressModel) | null;
  public readonly agentStatusUpdatedBy: (CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly assignedTo: (MachineUserModel | SystemModel | UserModel) | null;
  public readonly channelDetails: (ChatThreadChannelDetailsModel | DiscordThreadChannelDetailsModel | ImportThreadChannelDetailsModel | MSTeamsThreadChannelDetailsModel | SlackThreadChannelDetailsModel) | null;
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly lockedBy: (MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly statusChangedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly statusDetail: (ThreadStatusDetailCreatedModel | ThreadStatusDetailDoneAutomaticallySetModel | ThreadStatusDetailDoneManuallySetModel | ThreadStatusDetailIgnoredModel | ThreadStatusDetailInProgressModel | ThreadStatusDetailNewReplyModel | ThreadStatusDetailThreadDiscussionResolvedModel | ThreadStatusDetailThreadLinkUpdatedModel | ThreadStatusDetailWaitingForCustomerModel | ThreadStatusDetailWaitingForDurationModel) | null;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.additionalAssignees = ((data.additionalAssignees as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "MachineUser": return new MachineUserModel(client, item as any);
      case "System": return new SystemModel(client, item as any);
      case "User": return new UserModel(client, item as any);
      default: return item as any;
    }
  })());
    this.agentStatusDetail = data.agentStatusDetail ? (() => {
    switch ((data.agentStatusDetail as any).__typename) {
      case "AgentStatusDetailHandedOff": return new AgentStatusDetailHandedOffModel(client, data.agentStatusDetail as any);
      case "AgentStatusDetailHandled": return new AgentStatusDetailHandledModel(client, data.agentStatusDetail as any);
      case "AgentStatusDetailInProgress": return new AgentStatusDetailInProgressModel(client, data.agentStatusDetail as any);
      default: return data.agentStatusDetail as any;
    }
  })() : null;
    this.agentStatusUpdatedBy = data.agentStatusUpdatedBy ? (() => {
    switch ((data.agentStatusUpdatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.agentStatusUpdatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.agentStatusUpdatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.agentStatusUpdatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.agentStatusUpdatedBy as any);
      case "UserActor": return new UserActorModel(client, data.agentStatusUpdatedBy as any);
      default: return data.agentStatusUpdatedBy as any;
    }
  })() : null;
    this.assignedTo = data.assignedTo ? (() => {
    switch ((data.assignedTo as any).__typename) {
      case "MachineUser": return new MachineUserModel(client, data.assignedTo as any);
      case "System": return new SystemModel(client, data.assignedTo as any);
      case "User": return new UserModel(client, data.assignedTo as any);
      default: return data.assignedTo as any;
    }
  })() : null;
    this.channelDetails = data.channelDetails ? (() => {
    switch ((data.channelDetails as any).__typename) {
      case "ChatThreadChannelDetails": return new ChatThreadChannelDetailsModel(client, data.channelDetails as any);
      case "DiscordThreadChannelDetails": return new DiscordThreadChannelDetailsModel(client, data.channelDetails as any);
      case "ImportThreadChannelDetails": return new ImportThreadChannelDetailsModel(client, data.channelDetails as any);
      case "MSTeamsThreadChannelDetails": return new MSTeamsThreadChannelDetailsModel(client, data.channelDetails as any);
      case "SlackThreadChannelDetails": return new SlackThreadChannelDetailsModel(client, data.channelDetails as any);
      default: return data.channelDetails as any;
    }
  })() : null;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.lockedBy = data.lockedBy ? (() => {
    switch ((data.lockedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.lockedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.lockedBy as any);
      case "UserActor": return new UserActorModel(client, data.lockedBy as any);
      default: return data.lockedBy as any;
    }
  })() : null;
    this.statusChangedBy = (() => {
    switch ((data.statusChangedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.statusChangedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.statusChangedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.statusChangedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.statusChangedBy as any);
      case "UserActor": return new UserActorModel(client, data.statusChangedBy as any);
      default: return data.statusChangedBy as any;
    }
  })();
    this.statusDetail = data.statusDetail ? (() => {
    switch ((data.statusDetail as any).__typename) {
      case "ThreadStatusDetailCreated": return new ThreadStatusDetailCreatedModel(client, data.statusDetail as any);
      case "ThreadStatusDetailDoneAutomaticallySet": return new ThreadStatusDetailDoneAutomaticallySetModel(client, data.statusDetail as any);
      case "ThreadStatusDetailDoneManuallySet": return new ThreadStatusDetailDoneManuallySetModel(client, data.statusDetail as any);
      case "ThreadStatusDetailIgnored": return new ThreadStatusDetailIgnoredModel(client, data.statusDetail as any);
      case "ThreadStatusDetailInProgress": return new ThreadStatusDetailInProgressModel(client, data.statusDetail as any);
      case "ThreadStatusDetailNewReply": return new ThreadStatusDetailNewReplyModel(client, data.statusDetail as any);
      case "ThreadStatusDetailThreadDiscussionResolved": return new ThreadStatusDetailThreadDiscussionResolvedModel(client, data.statusDetail as any);
      case "ThreadStatusDetailThreadLinkUpdated": return new ThreadStatusDetailThreadLinkUpdatedModel(client, data.statusDetail as any);
      case "ThreadStatusDetailWaitingForCustomer": return new ThreadStatusDetailWaitingForCustomerModel(client, data.statusDetail as any);
      case "ThreadStatusDetailWaitingForDuration": return new ThreadStatusDetailWaitingForDurationModel(client, data.statusDetail as any);
      default: return data.statusDetail as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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

  async timelineEntries(variables?: Omit<ThreadTimelineEntriesQueryVariables, "threadId">): Promise<PlainConnection<TimelineEntryModel>> {
    const allVars = { ...variables, threadId: this.id } as ThreadTimelineEntriesQueryVariables;
    const response = await this._client.request<ThreadTimelineEntriesQuery, ThreadTimelineEntriesQueryVariables>(
      ThreadTimelineEntriesDocument, allVars
    );
    const parent = response.thread;
    if (!parent) throw new Error("thread not found");
    const conn = parent.timelineEntries;
    return new PlainConnection<TimelineEntryModel>({
      nodes: conn.edges.map(e => new TimelineEntryModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.timelineEntries({ ...variables, ...cursor }),
    });
  }
}

export class ThreadAssignmentNotificationDetailModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadAssignmentNotificationDetailFieldsFragment;
  public readonly __typename = "ThreadAssignmentNotificationDetail" as const;

  public readonly threadId: ThreadAssignmentNotificationDetailFieldsFragment["threadId"];
  public readonly assignedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ThreadAssignmentNotificationDetailFieldsFragment) {
    this._client = client;
    this._data = data;
    this.threadId = data.threadId;
    this.assignedBy = (() => {
    switch ((data.assignedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.assignedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.assignedBy as any);
      case "UserActor": return new UserActorModel(client, data.assignedBy as any);
      default: return data.assignedBy as any;
    }
  })();
  }
}

export class ThreadCatchupFeedbackDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadCatchupFeedbackDetailsFieldsFragment;
  public readonly __typename = "ThreadCatchupFeedbackDetails" as const;

  public readonly comment: ThreadCatchupFeedbackDetailsFieldsFragment["comment"];
  public readonly reason: ThreadCatchupFeedbackDetailsFieldsFragment["reason"];
  public readonly sentiment: ThreadCatchupFeedbackDetailsFieldsFragment["sentiment"];
  public readonly threadId: ThreadCatchupFeedbackDetailsFieldsFragment["threadId"];

  constructor(client: PlainGraphQLClient, data: ThreadCatchupFeedbackDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.comment = data.comment;
    this.reason = data.reason;
    this.sentiment = data.sentiment;
    this.threadId = data.threadId;
  }
}

export class ThreadClusterModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadClusterFieldsFragment;
  public readonly __typename = "ThreadCluster" as const;

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
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ThreadClustersFeedbackDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadClustersFeedbackDetailsFieldsFragment;
  public readonly __typename = "ThreadClustersFeedbackDetails" as const;

  public readonly clusterId: ThreadClustersFeedbackDetailsFieldsFragment["clusterId"];
  public readonly comment: ThreadClustersFeedbackDetailsFieldsFragment["comment"];
  public readonly reason: ThreadClustersFeedbackDetailsFieldsFragment["reason"];
  public readonly sentiment: ThreadClustersFeedbackDetailsFieldsFragment["sentiment"];

  constructor(client: PlainGraphQLClient, data: ThreadClustersFeedbackDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.clusterId = data.clusterId;
    this.comment = data.comment;
    this.reason = data.reason;
    this.sentiment = data.sentiment;
  }
}

export class ThreadDiscussionModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionFieldsFragment;
  public readonly __typename = "ThreadDiscussion" as const;

  public readonly createdAt: ThreadDiscussionFieldsFragment["createdAt"];
  public readonly id: ThreadDiscussionFieldsFragment["id"];
  public readonly resolvedAt: ThreadDiscussionFieldsFragment["resolvedAt"];
  public readonly threadId: ThreadDiscussionFieldsFragment["threadId"];
  public readonly title: ThreadDiscussionFieldsFragment["title"];
  public readonly updatedAt: ThreadDiscussionFieldsFragment["updatedAt"];
  public readonly channelDetails: (ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsModel | ThreadDiscussionEmailChannelDetailsModel | ThreadDiscussionSlackChannelDetailsModel) | null;
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ThreadDiscussionFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.resolvedAt = data.resolvedAt;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.channelDetails = data.channelDetails ? (() => {
    switch ((data.channelDetails as any).__typename) {
      case "ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetails": return new ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsModel(client, data.channelDetails as any);
      case "ThreadDiscussionEmailChannelDetails": return new ThreadDiscussionEmailChannelDetailsModel(client, data.channelDetails as any);
      case "ThreadDiscussionSlackChannelDetails": return new ThreadDiscussionSlackChannelDetailsModel(client, data.channelDetails as any);
      default: return data.channelDetails as any;
    }
  })() : null;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }

  async messages(variables?: Omit<ThreadDiscussionMessagesQueryVariables, "threadDiscussionId">): Promise<PlainConnection<ThreadDiscussionMessageModel>> {
    const allVars = { ...variables, threadDiscussionId: this.id } as ThreadDiscussionMessagesQueryVariables;
    const response = await this._client.request<ThreadDiscussionMessagesQuery, ThreadDiscussionMessagesQueryVariables>(
      ThreadDiscussionMessagesDocument, allVars
    );
    const parent = response.threadDiscussion;
    if (!parent) throw new Error("threadDiscussion not found");
    const conn = parent.messages;
    return new PlainConnection<ThreadDiscussionMessageModel>({
      nodes: conn.edges.map(e => new ThreadDiscussionMessageModel(this._client, e.node)),
      pageInfo: conn.pageInfo,
      fetch: (cursor) => this.messages({ ...variables, ...cursor }),
    });
  }
}

export class ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsFieldsFragment;
  public readonly __typename = "ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetails" as const;

  public readonly cursorWorkspaceIntegrationId: ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsFieldsFragment["cursorWorkspaceIntegrationId"];
  public readonly repositoryUrl: ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsFieldsFragment["repositoryUrl"];

  constructor(client: PlainGraphQLClient, data: ThreadDiscussionCursorWorkspaceBackgroundAgentChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.cursorWorkspaceIntegrationId = data.cursorWorkspaceIntegrationId;
    this.repositoryUrl = data.repositoryUrl;
  }
}

export class ThreadDiscussionEmailChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionEmailChannelDetailsFieldsFragment;
  public readonly __typename = "ThreadDiscussionEmailChannelDetails" as const;

  public readonly emailRecipients: ThreadDiscussionEmailChannelDetailsFieldsFragment["emailRecipients"];

  constructor(client: PlainGraphQLClient, data: ThreadDiscussionEmailChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.emailRecipients = data.emailRecipients;
  }
}

export class ThreadDiscussionEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionEntryFieldsFragment;
  public readonly __typename = "ThreadDiscussionEntry" as const;

  public readonly customerId: ThreadDiscussionEntryFieldsFragment["customerId"];
  public readonly discussionType: ThreadDiscussionEntryFieldsFragment["discussionType"];
  public readonly emailRecipients: ThreadDiscussionEntryFieldsFragment["emailRecipients"];
  public readonly slackChannelName: ThreadDiscussionEntryFieldsFragment["slackChannelName"];
  public readonly slackMessageLink: ThreadDiscussionEntryFieldsFragment["slackMessageLink"];
  public readonly threadDiscussionId: ThreadDiscussionEntryFieldsFragment["threadDiscussionId"];

  constructor(client: PlainGraphQLClient, data: ThreadDiscussionEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.discussionType = data.discussionType;
    this.emailRecipients = data.emailRecipients;
    this.slackChannelName = data.slackChannelName;
    this.slackMessageLink = data.slackMessageLink;
    this.threadDiscussionId = data.threadDiscussionId;
  }
}

export class ThreadDiscussionMessageModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionMessageFieldsFragment;
  public readonly __typename = "ThreadDiscussionMessage" as const;

  public readonly createdAt: ThreadDiscussionMessageFieldsFragment["createdAt"];
  public readonly deletedOnSlackAt: ThreadDiscussionMessageFieldsFragment["deletedOnSlackAt"];
  public readonly id: ThreadDiscussionMessageFieldsFragment["id"];
  public readonly lastEditedOnSlackAt: ThreadDiscussionMessageFieldsFragment["lastEditedOnSlackAt"];
  public readonly slackMessageLink: ThreadDiscussionMessageFieldsFragment["slackMessageLink"];
  public readonly text: ThreadDiscussionMessageFieldsFragment["text"];
  public readonly threadDiscussionId: ThreadDiscussionMessageFieldsFragment["threadDiscussionId"];
  public readonly updatedAt: ThreadDiscussionMessageFieldsFragment["updatedAt"];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ThreadDiscussionMessageEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionMessageEntryFieldsFragment;
  public readonly __typename = "ThreadDiscussionMessageEntry" as const;

  public readonly customerId: ThreadDiscussionMessageEntryFieldsFragment["customerId"];
  public readonly deletedOnSlackAt: ThreadDiscussionMessageEntryFieldsFragment["deletedOnSlackAt"];
  public readonly discussionType: ThreadDiscussionMessageEntryFieldsFragment["discussionType"];
  public readonly hasUnprocessedAttachments: ThreadDiscussionMessageEntryFieldsFragment["hasUnprocessedAttachments"];
  public readonly lastEditedOnSlackAt: ThreadDiscussionMessageEntryFieldsFragment["lastEditedOnSlackAt"];
  public readonly resolvedText: ThreadDiscussionMessageEntryFieldsFragment["resolvedText"];
  public readonly slackMessageLink: ThreadDiscussionMessageEntryFieldsFragment["slackMessageLink"];
  public readonly slackMessageTimestamp: ThreadDiscussionMessageEntryFieldsFragment["slackMessageTimestamp"];
  public readonly text: ThreadDiscussionMessageEntryFieldsFragment["text"];
  public readonly threadDiscussionId: ThreadDiscussionMessageEntryFieldsFragment["threadDiscussionId"];
  public readonly threadDiscussionMessageId: ThreadDiscussionMessageEntryFieldsFragment["threadDiscussionMessageId"];
  public readonly type: ThreadDiscussionMessageEntryFieldsFragment["type"];

  constructor(client: PlainGraphQLClient, data: ThreadDiscussionMessageEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.deletedOnSlackAt = data.deletedOnSlackAt;
    this.discussionType = data.discussionType;
    this.hasUnprocessedAttachments = data.hasUnprocessedAttachments;
    this.lastEditedOnSlackAt = data.lastEditedOnSlackAt;
    this.resolvedText = data.resolvedText;
    this.slackMessageLink = data.slackMessageLink;
    this.slackMessageTimestamp = data.slackMessageTimestamp;
    this.text = data.text;
    this.threadDiscussionId = data.threadDiscussionId;
    this.threadDiscussionMessageId = data.threadDiscussionMessageId;
    this.type = data.type;
  }
}

export class ThreadDiscussionResolvedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionResolvedEntryFieldsFragment;
  public readonly __typename = "ThreadDiscussionResolvedEntry" as const;

  public readonly customerId: ThreadDiscussionResolvedEntryFieldsFragment["customerId"];
  public readonly discussionType: ThreadDiscussionResolvedEntryFieldsFragment["discussionType"];
  public readonly emailRecipients: ThreadDiscussionResolvedEntryFieldsFragment["emailRecipients"];
  public readonly resolvedAt: ThreadDiscussionResolvedEntryFieldsFragment["resolvedAt"];
  public readonly slackChannelName: ThreadDiscussionResolvedEntryFieldsFragment["slackChannelName"];
  public readonly slackMessageLink: ThreadDiscussionResolvedEntryFieldsFragment["slackMessageLink"];
  public readonly threadDiscussionId: ThreadDiscussionResolvedEntryFieldsFragment["threadDiscussionId"];

  constructor(client: PlainGraphQLClient, data: ThreadDiscussionResolvedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.discussionType = data.discussionType;
    this.emailRecipients = data.emailRecipients;
    this.resolvedAt = data.resolvedAt;
    this.slackChannelName = data.slackChannelName;
    this.slackMessageLink = data.slackMessageLink;
    this.threadDiscussionId = data.threadDiscussionId;
  }
}

export class ThreadDiscussionSlackChannelDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadDiscussionSlackChannelDetailsFieldsFragment;
  public readonly __typename = "ThreadDiscussionSlackChannelDetails" as const;

  public readonly slackChannelId: ThreadDiscussionSlackChannelDetailsFieldsFragment["slackChannelId"];
  public readonly slackChannelName: ThreadDiscussionSlackChannelDetailsFieldsFragment["slackChannelName"];
  public readonly slackMessageLink: ThreadDiscussionSlackChannelDetailsFieldsFragment["slackMessageLink"];
  public readonly slackTeamId: ThreadDiscussionSlackChannelDetailsFieldsFragment["slackTeamId"];

  constructor(client: PlainGraphQLClient, data: ThreadDiscussionSlackChannelDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.slackChannelId = data.slackChannelId;
    this.slackChannelName = data.slackChannelName;
    this.slackMessageLink = data.slackMessageLink;
    this.slackTeamId = data.slackTeamId;
  }
}

export class ThreadEventModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadEventFieldsFragment;
  public readonly __typename = "ThreadEvent" as const;

  public readonly createdAt: ThreadEventFieldsFragment["createdAt"];
  public readonly customerId: ThreadEventFieldsFragment["customerId"];
  public readonly id: ThreadEventFieldsFragment["id"];
  public readonly threadId: ThreadEventFieldsFragment["threadId"];
  public readonly title: ThreadEventFieldsFragment["title"];
  public readonly updatedAt: ThreadEventFieldsFragment["updatedAt"];
  public readonly components: (ComponentBadgeModel | ComponentCopyButtonModel | ComponentDividerModel | ComponentLinkButtonModel | ComponentPlainTextModel | { __typename: "ComponentRow" } | ComponentSpacerModel | ComponentTextModel | ComponentWorkflowButtonModel)[];
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: ThreadEventFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.customerId = data.customerId;
    this.id = data.id;
    this.threadId = data.threadId;
    this.title = data.title;
    this.updatedAt = data.updatedAt;
    this.components = ((data.components as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "ComponentBadge": return new ComponentBadgeModel(client, item as any);
      case "ComponentCopyButton": return new ComponentCopyButtonModel(client, item as any);
      case "ComponentDivider": return new ComponentDividerModel(client, item as any);
      case "ComponentLinkButton": return new ComponentLinkButtonModel(client, item as any);
      case "ComponentPlainText": return new ComponentPlainTextModel(client, item as any);
      case "ComponentRow": return item as any;
      case "ComponentSpacer": return new ComponentSpacerModel(client, item as any);
      case "ComponentText": return new ComponentTextModel(client, item as any);
      case "ComponentWorkflowButton": return new ComponentWorkflowButtonModel(client, item as any);
      default: return item as any;
    }
  })());
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ThreadEventEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadEventEntryFieldsFragment;
  public readonly __typename = "ThreadEventEntry" as const;

  public readonly customerId: ThreadEventEntryFieldsFragment["customerId"];
  public readonly externalId: ThreadEventEntryFieldsFragment["externalId"];
  public readonly timelineEventId: ThreadEventEntryFieldsFragment["timelineEventId"];
  public readonly title: ThreadEventEntryFieldsFragment["title"];
  public readonly components: (ComponentBadgeModel | ComponentCopyButtonModel | ComponentDividerModel | ComponentLinkButtonModel | ComponentPlainTextModel | { __typename: "ComponentRow" } | ComponentSpacerModel | ComponentTextModel | ComponentWorkflowButtonModel)[];

  constructor(client: PlainGraphQLClient, data: ThreadEventEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.externalId = data.externalId;
    this.timelineEventId = data.timelineEventId;
    this.title = data.title;
    this.components = ((data.components as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "ComponentBadge": return new ComponentBadgeModel(client, item as any);
      case "ComponentCopyButton": return new ComponentCopyButtonModel(client, item as any);
      case "ComponentDivider": return new ComponentDividerModel(client, item as any);
      case "ComponentLinkButton": return new ComponentLinkButtonModel(client, item as any);
      case "ComponentPlainText": return new ComponentPlainTextModel(client, item as any);
      case "ComponentRow": return item as any;
      case "ComponentSpacer": return new ComponentSpacerModel(client, item as any);
      case "ComponentText": return new ComponentTextModel(client, item as any);
      case "ComponentWorkflowButton": return new ComponentWorkflowButtonModel(client, item as any);
      default: return item as any;
    }
  })());
  }
}

export class ThreadFieldModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadFieldFieldsFragment;
  public readonly __typename = "ThreadField" as const;

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
  public readonly createdBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.createdBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.createdBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.updatedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.updatedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ThreadFieldSchemaModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadFieldSchemaFieldsFragment;
  public readonly __typename = "ThreadFieldSchema" as const;

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
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class ThreadLinkCandidateModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadLinkCandidateFieldsFragment;
  public readonly __typename = "ThreadLinkCandidate" as const;

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
  public readonly __typename = "ThreadLinkGroup" as const;

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

export class ThreadLinkTargetCreatedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadLinkTargetCreatedEntryFieldsFragment;
  public readonly __typename = "ThreadLinkTargetCreatedEntry" as const;

  public readonly sourceThread: ThreadLinkTargetCreatedEntryFieldsFragment["sourceThread"];
  public readonly threadLink: GenericThreadLinkModel | JiraIssueThreadLinkModel | LinearIssueThreadLinkModel | PlainTaskThreadLinkModel | PlainThreadThreadLinkModel;

  constructor(client: PlainGraphQLClient, data: ThreadLinkTargetCreatedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.sourceThread = data.sourceThread;
    this.threadLink = (() => {
    switch ((data.threadLink as any).__typename) {
      case "GenericThreadLink": return new GenericThreadLinkModel(client, data.threadLink as any);
      case "JiraIssueThreadLink": return new JiraIssueThreadLinkModel(client, data.threadLink as any);
      case "LinearIssueThreadLink": return new LinearIssueThreadLinkModel(client, data.threadLink as any);
      case "PlainTaskThreadLink": return new PlainTaskThreadLinkModel(client, data.threadLink as any);
      case "PlainThreadThreadLink": return new PlainThreadThreadLinkModel(client, data.threadLink as any);
      default: return data.threadLink as any;
    }
  })();
  }
}

export class ThreadLinkTargetDeletedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadLinkTargetDeletedEntryFieldsFragment;
  public readonly __typename = "ThreadLinkTargetDeletedEntry" as const;

  public readonly sourceThread: ThreadLinkTargetDeletedEntryFieldsFragment["sourceThread"];
  public readonly threadLink: GenericThreadLinkModel | JiraIssueThreadLinkModel | LinearIssueThreadLinkModel | PlainTaskThreadLinkModel | PlainThreadThreadLinkModel;

  constructor(client: PlainGraphQLClient, data: ThreadLinkTargetDeletedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.sourceThread = data.sourceThread;
    this.threadLink = (() => {
    switch ((data.threadLink as any).__typename) {
      case "GenericThreadLink": return new GenericThreadLinkModel(client, data.threadLink as any);
      case "JiraIssueThreadLink": return new JiraIssueThreadLinkModel(client, data.threadLink as any);
      case "LinearIssueThreadLink": return new LinearIssueThreadLinkModel(client, data.threadLink as any);
      case "PlainTaskThreadLink": return new PlainTaskThreadLinkModel(client, data.threadLink as any);
      case "PlainThreadThreadLink": return new PlainThreadThreadLinkModel(client, data.threadLink as any);
      default: return data.threadLink as any;
    }
  })();
  }
}

export class ThreadPriorityChangedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadPriorityChangedEntryFieldsFragment;
  public readonly __typename = "ThreadPriorityChangedEntry" as const;

  public readonly nextPriority: ThreadPriorityChangedEntryFieldsFragment["nextPriority"];
  public readonly previousPriority: ThreadPriorityChangedEntryFieldsFragment["previousPriority"];

  constructor(client: PlainGraphQLClient, data: ThreadPriorityChangedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.nextPriority = data.nextPriority;
    this.previousPriority = data.previousPriority;
  }
}

export class ThreadStatusDetailCreatedModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailCreatedFieldsFragment;
  public readonly __typename = "ThreadStatusDetailCreated" as const;

  public readonly createdAt: ThreadStatusDetailCreatedFieldsFragment["createdAt"];
  public readonly statusChangedAt: ThreadStatusDetailCreatedFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailCreatedFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailDoneAutomaticallySetModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailDoneAutomaticallySetFieldsFragment;
  public readonly __typename = "ThreadStatusDetailDoneAutomaticallySet" as const;

  public readonly afterSeconds: ThreadStatusDetailDoneAutomaticallySetFieldsFragment["afterSeconds"];
  public readonly statusChangedAt: ThreadStatusDetailDoneAutomaticallySetFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailDoneAutomaticallySetFieldsFragment) {
    this._client = client;
    this._data = data;
    this.afterSeconds = data.afterSeconds;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailDoneManuallySetModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailDoneManuallySetFieldsFragment;
  public readonly __typename = "ThreadStatusDetailDoneManuallySet" as const;

  public readonly statusChangedAt: ThreadStatusDetailDoneManuallySetFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailDoneManuallySetFieldsFragment) {
    this._client = client;
    this._data = data;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailIgnoredModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailIgnoredFieldsFragment;
  public readonly __typename = "ThreadStatusDetailIgnored" as const;

  public readonly statusChangedAt: ThreadStatusDetailIgnoredFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailIgnoredFieldsFragment) {
    this._client = client;
    this._data = data;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailInProgressModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailInProgressFieldsFragment;
  public readonly __typename = "ThreadStatusDetailInProgress" as const;

  public readonly statusChangedAt: ThreadStatusDetailInProgressFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailInProgressFieldsFragment) {
    this._client = client;
    this._data = data;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailNewReplyModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailNewReplyFieldsFragment;
  public readonly __typename = "ThreadStatusDetailNewReply" as const;

  public readonly statusChangedAt: ThreadStatusDetailNewReplyFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailNewReplyFieldsFragment) {
    this._client = client;
    this._data = data;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailThreadDiscussionResolvedModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailThreadDiscussionResolvedFieldsFragment;
  public readonly __typename = "ThreadStatusDetailThreadDiscussionResolved" as const;

  public readonly statusChangedAt: ThreadStatusDetailThreadDiscussionResolvedFieldsFragment["statusChangedAt"];
  public readonly threadDiscussionId: ThreadStatusDetailThreadDiscussionResolvedFieldsFragment["threadDiscussionId"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailThreadDiscussionResolvedFieldsFragment) {
    this._client = client;
    this._data = data;
    this.statusChangedAt = data.statusChangedAt;
    this.threadDiscussionId = data.threadDiscussionId;
  }
}

export class ThreadStatusDetailThreadLinkUpdatedModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailThreadLinkUpdatedFieldsFragment;
  public readonly __typename = "ThreadStatusDetailThreadLinkUpdated" as const;

  public readonly linearIssueId: ThreadStatusDetailThreadLinkUpdatedFieldsFragment["linearIssueId"];
  public readonly statusChangedAt: ThreadStatusDetailThreadLinkUpdatedFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailThreadLinkUpdatedFieldsFragment) {
    this._client = client;
    this._data = data;
    this.linearIssueId = data.linearIssueId;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailWaitingForCustomerModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailWaitingForCustomerFieldsFragment;
  public readonly __typename = "ThreadStatusDetailWaitingForCustomer" as const;

  public readonly statusChangedAt: ThreadStatusDetailWaitingForCustomerFieldsFragment["statusChangedAt"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailWaitingForCustomerFieldsFragment) {
    this._client = client;
    this._data = data;
    this.statusChangedAt = data.statusChangedAt;
  }
}

export class ThreadStatusDetailWaitingForDurationModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusDetailWaitingForDurationFieldsFragment;
  public readonly __typename = "ThreadStatusDetailWaitingForDuration" as const;

  public readonly statusChangedAt: ThreadStatusDetailWaitingForDurationFieldsFragment["statusChangedAt"];
  public readonly waitingUntil: ThreadStatusDetailWaitingForDurationFieldsFragment["waitingUntil"];

  constructor(client: PlainGraphQLClient, data: ThreadStatusDetailWaitingForDurationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.statusChangedAt = data.statusChangedAt;
    this.waitingUntil = data.waitingUntil;
  }
}

export class ThreadStatusTransitionedEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadStatusTransitionedEntryFieldsFragment;
  public readonly __typename = "ThreadStatusTransitionedEntry" as const;

  public readonly nextStatus: ThreadStatusTransitionedEntryFieldsFragment["nextStatus"];
  public readonly previousStatus: ThreadStatusTransitionedEntryFieldsFragment["previousStatus"];
  public readonly nextStatusDetail: (ThreadStatusDetailCreatedModel | ThreadStatusDetailDoneAutomaticallySetModel | ThreadStatusDetailDoneManuallySetModel | ThreadStatusDetailIgnoredModel | ThreadStatusDetailInProgressModel | ThreadStatusDetailNewReplyModel | ThreadStatusDetailThreadDiscussionResolvedModel | ThreadStatusDetailThreadLinkUpdatedModel | ThreadStatusDetailWaitingForCustomerModel | ThreadStatusDetailWaitingForDurationModel) | null;
  public readonly previousStatusDetail: (ThreadStatusDetailCreatedModel | ThreadStatusDetailDoneAutomaticallySetModel | ThreadStatusDetailDoneManuallySetModel | ThreadStatusDetailIgnoredModel | ThreadStatusDetailInProgressModel | ThreadStatusDetailNewReplyModel | ThreadStatusDetailThreadDiscussionResolvedModel | ThreadStatusDetailThreadLinkUpdatedModel | ThreadStatusDetailWaitingForCustomerModel | ThreadStatusDetailWaitingForDurationModel) | null;

  constructor(client: PlainGraphQLClient, data: ThreadStatusTransitionedEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.nextStatus = data.nextStatus;
    this.previousStatus = data.previousStatus;
    this.nextStatusDetail = data.nextStatusDetail ? (() => {
    switch ((data.nextStatusDetail as any).__typename) {
      case "ThreadStatusDetailCreated": return new ThreadStatusDetailCreatedModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailDoneAutomaticallySet": return new ThreadStatusDetailDoneAutomaticallySetModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailDoneManuallySet": return new ThreadStatusDetailDoneManuallySetModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailIgnored": return new ThreadStatusDetailIgnoredModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailInProgress": return new ThreadStatusDetailInProgressModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailNewReply": return new ThreadStatusDetailNewReplyModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailThreadDiscussionResolved": return new ThreadStatusDetailThreadDiscussionResolvedModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailThreadLinkUpdated": return new ThreadStatusDetailThreadLinkUpdatedModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailWaitingForCustomer": return new ThreadStatusDetailWaitingForCustomerModel(client, data.nextStatusDetail as any);
      case "ThreadStatusDetailWaitingForDuration": return new ThreadStatusDetailWaitingForDurationModel(client, data.nextStatusDetail as any);
      default: return data.nextStatusDetail as any;
    }
  })() : null;
    this.previousStatusDetail = data.previousStatusDetail ? (() => {
    switch ((data.previousStatusDetail as any).__typename) {
      case "ThreadStatusDetailCreated": return new ThreadStatusDetailCreatedModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailDoneAutomaticallySet": return new ThreadStatusDetailDoneAutomaticallySetModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailDoneManuallySet": return new ThreadStatusDetailDoneManuallySetModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailIgnored": return new ThreadStatusDetailIgnoredModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailInProgress": return new ThreadStatusDetailInProgressModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailNewReply": return new ThreadStatusDetailNewReplyModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailThreadDiscussionResolved": return new ThreadStatusDetailThreadDiscussionResolvedModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailThreadLinkUpdated": return new ThreadStatusDetailThreadLinkUpdatedModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailWaitingForCustomer": return new ThreadStatusDetailWaitingForCustomerModel(client, data.previousStatusDetail as any);
      case "ThreadStatusDetailWaitingForDuration": return new ThreadStatusDetailWaitingForDurationModel(client, data.previousStatusDetail as any);
      default: return data.previousStatusDetail as any;
    }
  })() : null;
  }
}

export class ThreadWithDistanceModel {
  protected _client: PlainGraphQLClient;
  protected _data: ThreadWithDistanceFieldsFragment;
  public readonly __typename = "ThreadWithDistance" as const;

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
  public readonly __typename = "Tier" as const;

  public readonly color: TierFieldsFragment["color"];
  public readonly createdAt: TierFieldsFragment["createdAt"];
  public readonly defaultThreadPriority: TierFieldsFragment["defaultThreadPriority"];
  public readonly externalId: TierFieldsFragment["externalId"];
  public readonly id: TierFieldsFragment["id"];
  public readonly isDefault: TierFieldsFragment["isDefault"];
  public readonly isMachineTier: TierFieldsFragment["isMachineTier"];
  public readonly name: TierFieldsFragment["name"];
  public readonly updatedAt: TierFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly serviceLevelAgreements: (FirstResponseTimeServiceLevelAgreementModel | NextResponseTimeServiceLevelAgreementModel)[];
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: TierFieldsFragment) {
    this._client = client;
    this._data = data;
    this.color = data.color;
    this.createdAt = data.createdAt;
    this.defaultThreadPriority = data.defaultThreadPriority;
    this.externalId = data.externalId;
    this.id = data.id;
    this.isDefault = data.isDefault;
    this.isMachineTier = data.isMachineTier;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.serviceLevelAgreements = ((data.serviceLevelAgreements as any[]) ?? []).map((item: any) => (() => {
    switch ((item as any).__typename) {
      case "FirstResponseTimeServiceLevelAgreement": return new FirstResponseTimeServiceLevelAgreementModel(client, item as any);
      case "NextResponseTimeServiceLevelAgreement": return new NextResponseTimeServiceLevelAgreementModel(client, item as any);
      default: return item as any;
    }
  })());
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class TieredRecurringPriceModel {
  protected _client: PlainGraphQLClient;
  protected _data: TieredRecurringPriceFieldsFragment;
  public readonly __typename = "TieredRecurringPrice" as const;

  public readonly billingIntervalCount: TieredRecurringPriceFieldsFragment["billingIntervalCount"];
  public readonly billingIntervalUnit: TieredRecurringPriceFieldsFragment["billingIntervalUnit"];
  public readonly currency: TieredRecurringPriceFieldsFragment["currency"];
  public readonly tiers: TieredRecurringPriceFieldsFragment["tiers"];

  constructor(client: PlainGraphQLClient, data: TieredRecurringPriceFieldsFragment) {
    this._client = client;
    this._data = data;
    this.billingIntervalCount = data.billingIntervalCount;
    this.billingIntervalUnit = data.billingIntervalUnit;
    this.currency = data.currency;
    this.tiers = data.tiers;
  }
}

export class TimelineEntryModel {
  protected _client: PlainGraphQLClient;
  protected _data: TimelineEntryFieldsFragment;
  public readonly __typename = "TimelineEntry" as const;

  public readonly customerId: TimelineEntryFieldsFragment["customerId"];
  public readonly id: TimelineEntryFieldsFragment["id"];
  public readonly llmText: TimelineEntryFieldsFragment["llmText"];
  public readonly threadId: TimelineEntryFieldsFragment["threadId"];
  public readonly timestamp: TimelineEntryFieldsFragment["timestamp"];
  public readonly actor: CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly entry: ChatEntryModel | CustomEntryModel | CustomerEventEntryModel | CustomerSurveyRequestedEntryModel | DiscordMessageEntryModel | EmailEntryModel | HelpCenterAiConversationMessageEntryModel | LinearIssueThreadLinkStateTransitionedEntryModel | MSTeamsMessageEntryModel | MergedThreadMessageEntryModel | NoteEntryModel | ServiceLevelAgreementStatusTransitionedEntryModel | SlackMessageEntryModel | SlackReplyEntryModel | { __typename: "ThreadAdditionalAssigneesTransitionedEntry" } | { __typename: "ThreadAssignmentTransitionedEntry" } | ThreadDiscussionEntryModel | ThreadDiscussionMessageEntryModel | ThreadDiscussionResolvedEntryModel | ThreadEventEntryModel | { __typename: "ThreadLabelsChangedEntry" } | { __typename: "ThreadLinkCreatedEntry" } | { __typename: "ThreadLinkDeletedEntry" } | ThreadLinkTargetCreatedEntryModel | ThreadLinkTargetDeletedEntryModel | { __typename: "ThreadLinkUpdatedEntry" } | ThreadPriorityChangedEntryModel | ThreadStatusTransitionedEntryModel;

  constructor(client: PlainGraphQLClient, data: TimelineEntryFieldsFragment) {
    this._client = client;
    this._data = data;
    this.customerId = data.customerId;
    this.id = data.id;
    this.llmText = data.llmText;
    this.threadId = data.threadId;
    this.timestamp = data.timestamp;
    this.actor = (() => {
    switch ((data.actor as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.actor as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.actor as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.actor as any);
      case "SystemActor": return new SystemActorModel(client, data.actor as any);
      case "UserActor": return new UserActorModel(client, data.actor as any);
      default: return data.actor as any;
    }
  })();
    this.entry = (() => {
    switch ((data.entry as any).__typename) {
      case "ChatEntry": return new ChatEntryModel(client, { ...data.entry as any, text: (data.entry as any).chatEntryText } as any);
      case "CustomEntry": return new CustomEntryModel(client, { ...data.entry as any, components: (data.entry as any).customEntryComponents, type: (data.entry as any).customEntryType } as any);
      case "CustomerEventEntry": return new CustomerEventEntryModel(client, { ...data.entry as any, components: (data.entry as any).customerEventEntryComponents } as any);
      case "CustomerSurveyRequestedEntry": return new CustomerSurveyRequestedEntryModel(client, data.entry as any);
      case "DiscordMessageEntry": return new DiscordMessageEntryModel(client, data.entry as any);
      case "EmailEntry": return new EmailEntryModel(client, data.entry as any);
      case "HelpCenterAiConversationMessageEntry": return new HelpCenterAiConversationMessageEntryModel(client, { ...data.entry as any, markdown: (data.entry as any).helpCenterAiConversationMessageEntryMarkdown } as any);
      case "LinearIssueThreadLinkStateTransitionedEntry": return new LinearIssueThreadLinkStateTransitionedEntryModel(client, data.entry as any);
      case "MSTeamsMessageEntry": return new MSTeamsMessageEntryModel(client, { ...data.entry as any, text: (data.entry as any).mSTeamsMessageEntryText } as any);
      case "MergedThreadMessageEntry": return new MergedThreadMessageEntryModel(client, data.entry as any);
      case "NoteEntry": return new NoteEntryModel(client, { ...data.entry as any, text: (data.entry as any).noteEntryText, markdown: (data.entry as any).noteEntryMarkdown } as any);
      case "ServiceLevelAgreementStatusTransitionedEntry": return new ServiceLevelAgreementStatusTransitionedEntryModel(client, { ...data.entry as any, nextStatus: (data.entry as any).serviceLevelAgreementStatusTransitionedEntryNextStatus, previousStatus: (data.entry as any).serviceLevelAgreementStatusTransitionedEntryPreviousStatus } as any);
      case "SlackMessageEntry": return new SlackMessageEntryModel(client, { ...data.entry as any, text: (data.entry as any).slackMessageEntryText, reactions: (data.entry as any).slackMessageEntryReactions } as any);
      case "SlackReplyEntry": return new SlackReplyEntryModel(client, { ...data.entry as any, text: (data.entry as any).slackReplyEntryText, reactions: (data.entry as any).slackReplyEntryReactions } as any);
      case "ThreadAdditionalAssigneesTransitionedEntry": return data.entry as any;
      case "ThreadAssignmentTransitionedEntry": return data.entry as any;
      case "ThreadDiscussionEntry": return new ThreadDiscussionEntryModel(client, data.entry as any);
      case "ThreadDiscussionMessageEntry": return new ThreadDiscussionMessageEntryModel(client, { ...data.entry as any, text: (data.entry as any).threadDiscussionMessageEntryText, reactions: (data.entry as any).threadDiscussionMessageEntryReactions, type: (data.entry as any).threadDiscussionMessageEntryType } as any);
      case "ThreadDiscussionResolvedEntry": return new ThreadDiscussionResolvedEntryModel(client, data.entry as any);
      case "ThreadEventEntry": return new ThreadEventEntryModel(client, { ...data.entry as any, components: (data.entry as any).threadEventEntryComponents } as any);
      case "ThreadLabelsChangedEntry": return data.entry as any;
      case "ThreadLinkCreatedEntry": return data.entry as any;
      case "ThreadLinkDeletedEntry": return data.entry as any;
      case "ThreadLinkTargetCreatedEntry": return new ThreadLinkTargetCreatedEntryModel(client, data.entry as any);
      case "ThreadLinkTargetDeletedEntry": return new ThreadLinkTargetDeletedEntryModel(client, data.entry as any);
      case "ThreadLinkUpdatedEntry": return data.entry as any;
      case "ThreadPriorityChangedEntry": return new ThreadPriorityChangedEntryModel(client, data.entry as any);
      case "ThreadStatusTransitionedEntry": return new ThreadStatusTransitionedEntryModel(client, { ...data.entry as any, nextStatus: (data.entry as any).threadStatusTransitionedEntryNextStatus, previousStatus: (data.entry as any).threadStatusTransitionedEntryPreviousStatus } as any);
      default: return data.entry as any;
    }
  })();
  }
}

export class TimeSeriesMetricModel {
  protected _client: PlainGraphQLClient;
  protected _data: TimeSeriesMetricFieldsFragment;
  public readonly __typename = "TimeSeriesMetric" as const;

  public readonly timestamps: TimeSeriesMetricFieldsFragment["timestamps"];

  constructor(client: PlainGraphQLClient, data: TimeSeriesMetricFieldsFragment) {
    this._client = client;
    this._data = data;
    this.timestamps = data.timestamps;
  }
}

export class ToggleFeatureEntitlementModel {
  protected _client: PlainGraphQLClient;
  protected _data: ToggleFeatureEntitlementFieldsFragment;
  public readonly __typename = "ToggleFeatureEntitlement" as const;

  public readonly feature: ToggleFeatureEntitlementFieldsFragment["feature"];
  public readonly isEntitled: ToggleFeatureEntitlementFieldsFragment["isEntitled"];

  constructor(client: PlainGraphQLClient, data: ToggleFeatureEntitlementFieldsFragment) {
    this._client = client;
    this._data = data;
    this.feature = data.feature;
    this.isEntitled = data.isEntitled;
  }
}

export class ToneRuleFeedbackDetailsModel {
  protected _client: PlainGraphQLClient;
  protected _data: ToneRuleFeedbackDetailsFieldsFragment;
  public readonly __typename = "ToneRuleFeedbackDetails" as const;

  public readonly comment: ToneRuleFeedbackDetailsFieldsFragment["comment"];
  public readonly reason: ToneRuleFeedbackDetailsFieldsFragment["reason"];
  public readonly sentiment: ToneRuleFeedbackDetailsFieldsFragment["sentiment"];
  public readonly toneRuleDescription: ToneRuleFeedbackDetailsFieldsFragment["toneRuleDescription"];
  public readonly toneRuleId: ToneRuleFeedbackDetailsFieldsFragment["toneRuleId"];
  public readonly toneRuleInput: ToneRuleFeedbackDetailsFieldsFragment["toneRuleInput"];

  constructor(client: PlainGraphQLClient, data: ToneRuleFeedbackDetailsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.comment = data.comment;
    this.reason = data.reason;
    this.sentiment = data.sentiment;
    this.toneRuleDescription = data.toneRuleDescription;
    this.toneRuleId = data.toneRuleId;
    this.toneRuleInput = data.toneRuleInput;
  }
}

export class UserModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserFieldsFragment;
  public readonly __typename = "User" as const;

  public readonly avatarUrl: UserFieldsFragment["avatarUrl"];
  public readonly createdAt: UserFieldsFragment["createdAt"];
  public readonly deletedAt: UserFieldsFragment["deletedAt"];
  public readonly email: UserFieldsFragment["email"];
  public readonly fullName: UserFieldsFragment["fullName"];
  public readonly id: UserFieldsFragment["id"];
  public readonly isDeleted: UserFieldsFragment["isDeleted"];
  public readonly publicName: UserFieldsFragment["publicName"];
  public readonly role: UserFieldsFragment["role"];
  public readonly slackIdentities: UserFieldsFragment["slackIdentities"];
  public readonly status: UserFieldsFragment["status"];
  public readonly statusChangedAt: UserFieldsFragment["statusChangedAt"];
  public readonly updatedAt: UserFieldsFragment["updatedAt"];
  public readonly workingHours: UserFieldsFragment["workingHours"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly deletedBy: (CustomerActorModel | DeletedCustomerActorModel | MachineUserActorModel | SystemActorModel | UserActorModel) | null;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.role = data.role;
    this.slackIdentities = data.slackIdentities;
    this.status = data.status;
    this.statusChangedAt = data.statusChangedAt;
    this.updatedAt = data.updatedAt;
    this.workingHours = data.workingHours;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.deletedBy = data.deletedBy ? (() => {
    switch ((data.deletedBy as any).__typename) {
      case "CustomerActor": return new CustomerActorModel(client, data.deletedBy as any);
      case "DeletedCustomerActor": return new DeletedCustomerActorModel(client, data.deletedBy as any);
      case "MachineUserActor": return new MachineUserActorModel(client, data.deletedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.deletedBy as any);
      case "UserActor": return new UserActorModel(client, data.deletedBy as any);
      default: return data.deletedBy as any;
    }
  })() : null;
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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

export class UserActorModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserActorFieldsFragment;
  public readonly __typename = "UserActor" as const;

  public readonly userId: UserActorFieldsFragment["userId"];

  constructor(client: PlainGraphQLClient, data: UserActorFieldsFragment) {
    this._client = client;
    this._data = data;
    this.userId = data.userId;
  }

  public get user(): Promise<UserModel | undefined> {
    const id = this._data.user?.id;
    if (!id) return Promise.resolve(undefined);
    return this._client.request<UserQuery, UserQueryVariables>(
      UserDocument,
      { userId: id } as UserQueryVariables
    ).then(r => r.user ? new UserModel(this._client, r.user) : undefined);
  }
}

export class UserAuthDiscordChannelIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserAuthDiscordChannelIntegrationFieldsFragment;
  public readonly __typename = "UserAuthDiscordChannelIntegration" as const;

  public readonly createdAt: UserAuthDiscordChannelIntegrationFieldsFragment["createdAt"];
  public readonly discordGlobalName: UserAuthDiscordChannelIntegrationFieldsFragment["discordGlobalName"];
  public readonly discordGuildId: UserAuthDiscordChannelIntegrationFieldsFragment["discordGuildId"];
  public readonly discordUserEmail: UserAuthDiscordChannelIntegrationFieldsFragment["discordUserEmail"];
  public readonly discordUserId: UserAuthDiscordChannelIntegrationFieldsFragment["discordUserId"];
  public readonly discordUsername: UserAuthDiscordChannelIntegrationFieldsFragment["discordUsername"];
  public readonly id: UserAuthDiscordChannelIntegrationFieldsFragment["id"];
  public readonly updatedAt: UserAuthDiscordChannelIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class UserAuthSlackIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserAuthSlackIntegrationFieldsFragment;
  public readonly __typename = "UserAuthSlackIntegration" as const;

  public readonly createdAt: UserAuthSlackIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: UserAuthSlackIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: UserAuthSlackIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackTeamId: UserAuthSlackIntegrationFieldsFragment["slackTeamId"];
  public readonly slackTeamName: UserAuthSlackIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: UserAuthSlackIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: UserAuthSlackIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.isReinstallRequired = data.isReinstallRequired;
    this.slackTeamId = data.slackTeamId;
    this.slackTeamName = data.slackTeamName;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class UserLinearIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserLinearIntegrationFieldsFragment;
  public readonly __typename = "UserLinearIntegration" as const;

  public readonly createdAt: UserLinearIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: UserLinearIntegrationFieldsFragment["integrationId"];
  public readonly linearOrganisationId: UserLinearIntegrationFieldsFragment["linearOrganisationId"];
  public readonly linearOrganisationName: UserLinearIntegrationFieldsFragment["linearOrganisationName"];
  public readonly updatedAt: UserLinearIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: UserLinearIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.linearOrganisationId = data.linearOrganisationId;
    this.linearOrganisationName = data.linearOrganisationName;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class UserMSTeamsIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserMsTeamsIntegrationFieldsFragment;
  public readonly __typename = "UserMSTeamsIntegration" as const;

  public readonly createdAt: UserMsTeamsIntegrationFieldsFragment["createdAt"];
  public readonly id: UserMsTeamsIntegrationFieldsFragment["id"];
  public readonly isReinstallRequired: UserMsTeamsIntegrationFieldsFragment["isReinstallRequired"];
  public readonly msTeamsPreferredUsername: UserMsTeamsIntegrationFieldsFragment["msTeamsPreferredUsername"];
  public readonly msTeamsTenantId: UserMsTeamsIntegrationFieldsFragment["msTeamsTenantId"];
  public readonly updatedAt: UserMsTeamsIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: UserMsTeamsIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isReinstallRequired = data.isReinstallRequired;
    this.msTeamsPreferredUsername = data.msTeamsPreferredUsername;
    this.msTeamsTenantId = data.msTeamsTenantId;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class UserSlackIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserSlackIntegrationFieldsFragment;
  public readonly __typename = "UserSlackIntegration" as const;

  public readonly createdAt: UserSlackIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: UserSlackIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: UserSlackIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackTeamName: UserSlackIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: UserSlackIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: UserSlackIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.isReinstallRequired = data.isReinstallRequired;
    this.slackTeamName = data.slackTeamName;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class UserWorkingHoursModel {
  protected _client: PlainGraphQLClient;
  protected _data: UserWorkingHoursFieldsFragment;
  public readonly __typename = "UserWorkingHours" as const;

  public readonly createdAt: UserWorkingHoursFieldsFragment["createdAt"];
  public readonly id: UserWorkingHoursFieldsFragment["id"];
  public readonly isEnabled: UserWorkingHoursFieldsFragment["isEnabled"];
  public readonly nextStatusTransitionAt: UserWorkingHoursFieldsFragment["nextStatusTransitionAt"];
  public readonly nextStatusTransitionTo: UserWorkingHoursFieldsFragment["nextStatusTransitionTo"];
  public readonly slots: UserWorkingHoursFieldsFragment["slots"];
  public readonly timezone: UserWorkingHoursFieldsFragment["timezone"];
  public readonly updatedAt: UserWorkingHoursFieldsFragment["updatedAt"];
  public readonly userId: UserWorkingHoursFieldsFragment["userId"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WebhookTargetModel {
  protected _client: PlainGraphQLClient;
  protected _data: WebhookTargetFieldsFragment;
  public readonly __typename = "WebhookTarget" as const;

  public readonly createdAt: WebhookTargetFieldsFragment["createdAt"];
  public readonly description: WebhookTargetFieldsFragment["description"];
  public readonly eventSubscriptions: WebhookTargetFieldsFragment["eventSubscriptions"];
  public readonly id: WebhookTargetFieldsFragment["id"];
  public readonly isEnabled: WebhookTargetFieldsFragment["isEnabled"];
  public readonly updatedAt: WebhookTargetFieldsFragment["updatedAt"];
  public readonly url: WebhookTargetFieldsFragment["url"];
  public readonly version: WebhookTargetFieldsFragment["version"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkflowModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkflowFieldsFragment;
  public readonly __typename = "Workflow" as const;

  public readonly createdAt: WorkflowFieldsFragment["createdAt"];
  public readonly id: WorkflowFieldsFragment["id"];
  public readonly name: WorkflowFieldsFragment["name"];
  public readonly order: WorkflowFieldsFragment["order"];
  public readonly publishedAt: WorkflowFieldsFragment["publishedAt"];
  public readonly startStepId: WorkflowFieldsFragment["startStepId"];
  public readonly trigger: WorkflowFieldsFragment["trigger"];
  public readonly updatedAt: WorkflowFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkflowExecutionModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkflowExecutionFieldsFragment;
  public readonly __typename = "WorkflowExecution" as const;

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
  public readonly __typename = "WorkflowRule" as const;

  public readonly createdAt: WorkflowRuleFieldsFragment["createdAt"];
  public readonly id: WorkflowRuleFieldsFragment["id"];
  public readonly name: WorkflowRuleFieldsFragment["name"];
  public readonly order: WorkflowRuleFieldsFragment["order"];
  public readonly payload: WorkflowRuleFieldsFragment["payload"];
  public readonly publishedAt: WorkflowRuleFieldsFragment["publishedAt"];
  public readonly updatedAt: WorkflowRuleFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkflowStepModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkflowStepFieldsFragment;
  public readonly __typename = "WorkflowStep" as const;

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
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceFieldsFragment;
  public readonly __typename = "Workspace" as const;

  public readonly createdAt: WorkspaceFieldsFragment["createdAt"];
  public readonly domainNames: WorkspaceFieldsFragment["domainNames"];
  public readonly id: WorkspaceFieldsFragment["id"];
  public readonly isDemoWorkspace: WorkspaceFieldsFragment["isDemoWorkspace"];
  public readonly name: WorkspaceFieldsFragment["name"];
  public readonly publicName: WorkspaceFieldsFragment["publicName"];
  public readonly updatedAt: WorkspaceFieldsFragment["updatedAt"];
  public readonly workOSOrganizationId: WorkspaceFieldsFragment["workOSOrganizationId"];
  public readonly workspaceChatSettings: WorkspaceFieldsFragment["workspaceChatSettings"];
  public readonly workspaceEmailSettings: WorkspaceFieldsFragment["workspaceEmailSettings"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: WorkspaceFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.domainNames = data.domainNames;
    this.id = data.id;
    this.isDemoWorkspace = data.isDemoWorkspace;
    this.name = data.name;
    this.publicName = data.publicName;
    this.updatedAt = data.updatedAt;
    this.workOSOrganizationId = data.workOSOrganizationId;
    this.workspaceChatSettings = data.workspaceChatSettings;
    this.workspaceEmailSettings = data.workspaceEmailSettings;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceCursorIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceCursorIntegrationFieldsFragment;
  public readonly __typename = "WorkspaceCursorIntegration" as const;

  public readonly createdAt: WorkspaceCursorIntegrationFieldsFragment["createdAt"];
  public readonly id: WorkspaceCursorIntegrationFieldsFragment["id"];
  public readonly token: WorkspaceCursorIntegrationFieldsFragment["token"];
  public readonly updatedAt: WorkspaceCursorIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: WorkspaceCursorIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.token = data.token;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceDiscordChannelIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceDiscordChannelIntegrationFieldsFragment;
  public readonly __typename = "WorkspaceDiscordChannelIntegration" as const;

  public readonly createdAt: WorkspaceDiscordChannelIntegrationFieldsFragment["createdAt"];
  public readonly discordGuildId: WorkspaceDiscordChannelIntegrationFieldsFragment["discordGuildId"];
  public readonly discordGuildName: WorkspaceDiscordChannelIntegrationFieldsFragment["discordGuildName"];
  public readonly id: WorkspaceDiscordChannelIntegrationFieldsFragment["id"];
  public readonly updatedAt: WorkspaceDiscordChannelIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: WorkspaceDiscordChannelIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.discordGuildId = data.discordGuildId;
    this.discordGuildName = data.discordGuildName;
    this.id = data.id;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceDiscordIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceDiscordIntegrationFieldsFragment;
  public readonly __typename = "WorkspaceDiscordIntegration" as const;

  public readonly createdAt: WorkspaceDiscordIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: WorkspaceDiscordIntegrationFieldsFragment["integrationId"];
  public readonly name: WorkspaceDiscordIntegrationFieldsFragment["name"];
  public readonly updatedAt: WorkspaceDiscordIntegrationFieldsFragment["updatedAt"];
  public readonly webhookUrl: WorkspaceDiscordIntegrationFieldsFragment["webhookUrl"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: WorkspaceDiscordIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.integrationId = data.integrationId;
    this.name = data.name;
    this.updatedAt = data.updatedAt;
    this.webhookUrl = data.webhookUrl;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceEmailDomainSettingsModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceEmailDomainSettingsFieldsFragment;
  public readonly __typename = "WorkspaceEmailDomainSettings" as const;

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
  public readonly __typename = "WorkspaceEmailSettings" as const;

  public readonly bccEmailAddresses: WorkspaceEmailSettingsFieldsFragment["bccEmailAddresses"];
  public readonly isEnabled: WorkspaceEmailSettingsFieldsFragment["isEnabled"];
  public readonly workspaceEmailDomainSettings: WorkspaceEmailSettingsFieldsFragment["workspaceEmailDomainSettings"];

  constructor(client: PlainGraphQLClient, data: WorkspaceEmailSettingsFieldsFragment) {
    this._client = client;
    this._data = data;
    this.bccEmailAddresses = data.bccEmailAddresses;
    this.isEnabled = data.isEnabled;
    this.workspaceEmailDomainSettings = data.workspaceEmailDomainSettings;
  }
}

export class WorkspaceFileUploadUrlModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceFileUploadUrlFieldsFragment;
  public readonly __typename = "WorkspaceFileUploadUrl" as const;

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
  public readonly __typename = "WorkspaceHmac" as const;

  public readonly createdAt: WorkspaceHmacFieldsFragment["createdAt"];
  public readonly hmacSecret: WorkspaceHmacFieldsFragment["hmacSecret"];
  public readonly updatedAt: WorkspaceHmacFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: WorkspaceHmacFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.hmacSecret = data.hmacSecret;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceInviteModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceInviteFieldsFragment;
  public readonly __typename = "WorkspaceInvite" as const;

  public readonly createdAt: WorkspaceInviteFieldsFragment["createdAt"];
  public readonly email: WorkspaceInviteFieldsFragment["email"];
  public readonly id: WorkspaceInviteFieldsFragment["id"];
  public readonly isAccepted: WorkspaceInviteFieldsFragment["isAccepted"];
  public readonly role: WorkspaceInviteFieldsFragment["role"];
  public readonly updatedAt: WorkspaceInviteFieldsFragment["updatedAt"];
  public readonly usingBillingRotaSeat: WorkspaceInviteFieldsFragment["usingBillingRotaSeat"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: WorkspaceInviteFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.email = data.email;
    this.id = data.id;
    this.isAccepted = data.isAccepted;
    this.role = data.role;
    this.updatedAt = data.updatedAt;
    this.usingBillingRotaSeat = data.usingBillingRotaSeat;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
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
  public readonly __typename = "WorkspaceMSTeamsIntegration" as const;

  public readonly createdAt: WorkspaceMsTeamsIntegrationFieldsFragment["createdAt"];
  public readonly id: WorkspaceMsTeamsIntegrationFieldsFragment["id"];
  public readonly isReinstallRequired: WorkspaceMsTeamsIntegrationFieldsFragment["isReinstallRequired"];
  public readonly msTeamsTenantId: WorkspaceMsTeamsIntegrationFieldsFragment["msTeamsTenantId"];
  public readonly updatedAt: WorkspaceMsTeamsIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

  constructor(client: PlainGraphQLClient, data: WorkspaceMsTeamsIntegrationFieldsFragment) {
    this._client = client;
    this._data = data;
    this.createdAt = data.createdAt;
    this.id = data.id;
    this.isReinstallRequired = data.isReinstallRequired;
    this.msTeamsTenantId = data.msTeamsTenantId;
    this.updatedAt = data.updatedAt;
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceSlackChannelIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceSlackChannelIntegrationFieldsFragment;
  public readonly __typename = "WorkspaceSlackChannelIntegration" as const;

  public readonly createdAt: WorkspaceSlackChannelIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: WorkspaceSlackChannelIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: WorkspaceSlackChannelIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackTeamId: WorkspaceSlackChannelIntegrationFieldsFragment["slackTeamId"];
  public readonly slackTeamImageUrl68px: WorkspaceSlackChannelIntegrationFieldsFragment["slackTeamImageUrl68px"];
  public readonly slackTeamName: WorkspaceSlackChannelIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: WorkspaceSlackChannelIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export class WorkspaceSlackIntegrationModel {
  protected _client: PlainGraphQLClient;
  protected _data: WorkspaceSlackIntegrationFieldsFragment;
  public readonly __typename = "WorkspaceSlackIntegration" as const;

  public readonly createdAt: WorkspaceSlackIntegrationFieldsFragment["createdAt"];
  public readonly integrationId: WorkspaceSlackIntegrationFieldsFragment["integrationId"];
  public readonly isReinstallRequired: WorkspaceSlackIntegrationFieldsFragment["isReinstallRequired"];
  public readonly slackChannelName: WorkspaceSlackIntegrationFieldsFragment["slackChannelName"];
  public readonly slackTeamId: WorkspaceSlackIntegrationFieldsFragment["slackTeamId"];
  public readonly slackTeamImageUrl68px: WorkspaceSlackIntegrationFieldsFragment["slackTeamImageUrl68px"];
  public readonly slackTeamName: WorkspaceSlackIntegrationFieldsFragment["slackTeamName"];
  public readonly updatedAt: WorkspaceSlackIntegrationFieldsFragment["updatedAt"];
  public readonly createdBy: MachineUserActorModel | SystemActorModel | UserActorModel;
  public readonly updatedBy: MachineUserActorModel | SystemActorModel | UserActorModel;

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
    this.createdBy = (() => {
    switch ((data.createdBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.createdBy as any);
      case "SystemActor": return new SystemActorModel(client, data.createdBy as any);
      case "UserActor": return new UserActorModel(client, data.createdBy as any);
      default: return data.createdBy as any;
    }
  })();
    this.updatedBy = (() => {
    switch ((data.updatedBy as any).__typename) {
      case "MachineUserActor": return new MachineUserActorModel(client, data.updatedBy as any);
      case "SystemActor": return new SystemActorModel(client, data.updatedBy as any);
      case "UserActor": return new UserActorModel(client, data.updatedBy as any);
      default: return data.updatedBy as any;
    }
  })();
  }
}

export interface PlainSdkQueries {
  activeThreadCluster(variables: ActiveThreadClusterQueryVariables): Promise<ThreadClusterModel>;
  aiToneRules(variables: AiToneRulesQueryVariables): Promise<PlainConnection<AiToneRuleModel>>;
  autoresponder(variables: AutoresponderQueryVariables): Promise<AutoresponderModel>;
  autoresponders(variables: AutorespondersQueryVariables): Promise<PlainConnection<AutoresponderModel>>;
  billingPlans(variables: BillingPlansQueryVariables): Promise<PlainConnection<BillingPlanModel>>;
  businessHours(): Promise<BusinessHoursModel>;
  businessHoursSlots(): Promise<BusinessHoursSlotModel[]>;
  chatApp(variables: ChatAppQueryVariables): Promise<ChatAppModel>;
  chatAppSecret(variables: ChatAppSecretQueryVariables): Promise<ChatAppHiddenSecretModel>;
  chatApps(variables: ChatAppsQueryVariables): Promise<PlainConnection<ChatAppModel>>;
  companies(variables: CompaniesQueryVariables): Promise<PlainConnection<CompanyModel>>;
  company(variables: CompanyQueryVariables): Promise<CompanyModel>;
  connectedDiscordChannels(variables: ConnectedDiscordChannelsQueryVariables): Promise<PlainConnection<ConnectedDiscordChannelModel>>;
  connectedMSTeamsChannels(variables: ConnectedMsTeamsChannelsQueryVariables): Promise<PlainConnection<ConnectedMSTeamsChannelModel>>;
  connectedSlackChannel(variables: ConnectedSlackChannelQueryVariables): Promise<ConnectedSlackChannelModel>;
  connectedSlackChannels(variables: ConnectedSlackChannelsQueryVariables): Promise<PlainConnection<ConnectedSlackChannelModel>>;
  cursorRepositories(variables: CursorRepositoriesQueryVariables): Promise<CursorRepositoriesQuery["cursorRepositories"]>;
  customRole(variables: CustomRoleQueryVariables): Promise<CustomRoleModel>;
  customRoles(variables: CustomRolesQueryVariables): Promise<PlainConnection<CustomRoleModel>>;
  customer(variables: CustomerQueryVariables): Promise<CustomerModel>;
  customerByEmail(variables: CustomerByEmailQueryVariables): Promise<CustomerModel>;
  customerByExternalId(variables: CustomerByExternalIdQueryVariables): Promise<CustomerModel>;
  customerCardConfig(variables: CustomerCardConfigQueryVariables): Promise<CustomerCardConfigModel>;
  customerCardConfigs(): Promise<CustomerCardConfigModel[]>;
  customerCardInstances(variables: CustomerCardInstancesQueryVariables): Promise<CustomerCardInstancesQuery["customerCardInstances"]>;
  customerGroup(variables: CustomerGroupQueryVariables): Promise<CustomerGroupModel>;
  customerGroups(variables: CustomerGroupsQueryVariables): Promise<PlainConnection<CustomerGroupModel>>;
  customerSurvey(variables: CustomerSurveyQueryVariables): Promise<CustomerSurveyModel>;
  customerSurveys(variables: CustomerSurveysQueryVariables): Promise<PlainConnection<CustomerSurveyModel>>;
  customers(variables: CustomersQueryVariables): Promise<PlainConnection<CustomerModel>>;
  deletedThreads(variables: DeletedThreadsQueryVariables): Promise<PlainConnection<DeletedThreadModel>>;
  enabledAiToneRulesText(): Promise<NonNullable<EnabledAiToneRulesTextQuery["enabledAiToneRulesText"]>>;
  escalationPath(variables: EscalationPathQueryVariables): Promise<EscalationPathModel>;
  escalationPaths(variables: EscalationPathsQueryVariables): Promise<PlainConnection<EscalationPathModel>>;
  generatedReplies(variables: GeneratedRepliesQueryVariables): Promise<GeneratedReplyModel[]>;
  getMSTeamsMembersForChannel(variables: GetMsTeamsMembersForChannelQueryVariables): Promise<MSTeamsChannelMembersModel>;
  githubUserAuthIntegration(): Promise<GithubUserAuthIntegrationModel>;
  heatmapMetric(variables: HeatmapMetricQueryVariables): Promise<HeatmapMetricModel>;
  helpCenter(variables: HelpCenterQueryVariables): Promise<HelpCenterModel>;
  helpCenterArticle(variables: HelpCenterArticleQueryVariables): Promise<HelpCenterArticleModel>;
  helpCenterArticleBySlug(variables: HelpCenterArticleBySlugQueryVariables): Promise<HelpCenterArticleModel>;
  helpCenterArticleGroup(variables: HelpCenterArticleGroupQueryVariables): Promise<HelpCenterArticleGroupModel>;
  helpCenterArticleGroupBySlug(variables: HelpCenterArticleGroupBySlugQueryVariables): Promise<HelpCenterArticleGroupModel>;
  helpCenterIndex(variables: HelpCenterIndexQueryVariables): Promise<HelpCenterIndexModel>;
  helpCenters(variables: HelpCentersQueryVariables): Promise<PlainConnection<HelpCenterModel>>;
  importRuns(variables: ImportRunsQueryVariables): Promise<PlainConnection<ImportRunModel>>;
  importerTenantLists(variables: ImporterTenantListsQueryVariables): Promise<ImporterTenantListsQuery["importerTenantLists"]>;
  indexedDocuments(variables: IndexedDocumentsQueryVariables): Promise<PlainConnection<IndexedDocumentModel>>;
  issueTrackerFields(variables: IssueTrackerFieldsQueryVariables): Promise<IssueTrackerFieldModel[]>;
  knowledgeGap(variables: KnowledgeGapQueryVariables): Promise<KnowledgeGapModel>;
  knowledgeGaps(variables: KnowledgeGapsQueryVariables): Promise<PlainConnection<KnowledgeGapModel>>;
  knowledgeSource(variables: KnowledgeSourceQueryVariables): Promise<NonNullable<KnowledgeSourceQuery["knowledgeSource"]>>;
  knowledgeSources(variables: KnowledgeSourcesQueryVariables): Promise<KnowledgeSourcesQuery["knowledgeSources"]>;
  labelType(variables: LabelTypeQueryVariables): Promise<LabelTypeModel>;
  labelTypeByExternalId(variables: LabelTypeByExternalIdQueryVariables): Promise<LabelTypeModel>;
  labelTypes(variables: LabelTypesQueryVariables): Promise<PlainConnection<LabelTypeModel>>;
  machineUser(variables: MachineUserQueryVariables): Promise<MachineUserModel>;
  machineUsers(variables: MachineUsersQueryVariables): Promise<PlainConnection<MachineUserModel>>;
  myBillingRota(): Promise<NonNullable<MyBillingRotaQuery["myBillingRota"]>>;
  myBillingSubscription(): Promise<BillingSubscriptionModel>;
  myEmailSignature(): Promise<EmailSignatureModel>;
  myFavoritePages(variables: MyFavoritePagesQueryVariables): Promise<PlainConnection<FavoritePageModel>>;
  myInternalNotifications(variables: MyInternalNotificationsQueryVariables): Promise<PlainConnection<InternalNotificationModel>>;
  myJiraIntegrationToken(): Promise<JiraIntegrationTokenModel>;
  myLinearInstallationInfo(variables: MyLinearInstallationInfoQueryVariables): Promise<MyLinearInstallationInfoQuery["myLinearInstallationInfo"]>;
  myLinearIntegration(): Promise<UserLinearIntegrationModel>;
  myLinearIntegrationToken(): Promise<NonNullable<MyLinearIntegrationTokenQuery["myLinearIntegrationToken"]>>;
  myMSTeamsInstallationInfo(variables: MyMsTeamsInstallationInfoQueryVariables): Promise<MyMsTeamsInstallationInfoQuery["myMSTeamsInstallationInfo"]>;
  myMSTeamsIntegration(): Promise<UserMSTeamsIntegrationModel>;
  myMachineUser(): Promise<MachineUserModel>;
  myPaymentMethod(): Promise<NonNullable<MyPaymentMethodQuery["myPaymentMethod"]>>;
  myPermissions(): Promise<MyPermissionsQuery["myPermissions"]>;
  mySlackInstallationInfo(variables: MySlackInstallationInfoQueryVariables): Promise<MySlackInstallationInfoQuery["mySlackInstallationInfo"]>;
  mySlackIntegration(): Promise<UserSlackIntegrationModel>;
  myUser(): Promise<UserModel>;
  myUserAccount(): Promise<NonNullable<MyUserAccountQuery["myUserAccount"]>>;
  myWorkspace(): Promise<WorkspaceModel>;
  myWorkspaceInvites(variables: MyWorkspaceInvitesQueryVariables): Promise<PlainConnection<WorkspaceInviteModel>>;
  myWorkspaces(variables: MyWorkspacesQueryVariables): Promise<PlainConnection<WorkspaceModel>>;
  permissions(): Promise<PermissionsQuery["permissions"]>;
  relatedThreads(variables: RelatedThreadsQueryVariables): Promise<ThreadWithDistanceModel[]>;
  roles(variables: RolesQueryVariables): Promise<PlainConnection<RoleModel>>;
  savedThreadsView(variables: SavedThreadsViewQueryVariables): Promise<SavedThreadsViewModel>;
  savedThreadsViews(variables: SavedThreadsViewsQueryVariables): Promise<PlainConnection<SavedThreadsViewModel>>;
  searchCompanies(variables: SearchCompaniesQueryVariables): Promise<SearchCompaniesQuery["searchCompanies"]>;
  searchCustomers(variables: SearchCustomersQueryVariables): Promise<PlainConnection<CustomerModel>>;
  searchKnowledgeSources(variables: SearchKnowledgeSourcesQueryVariables): Promise<SearchKnowledgeSourcesQuery["searchKnowledgeSources"]>;
  searchSlackUsers(variables: SearchSlackUsersQueryVariables): Promise<PlainConnection<SlackUserModel>>;
  searchTenants(variables: SearchTenantsQueryVariables): Promise<SearchTenantsQuery["searchTenants"]>;
  searchThreadLinkCandidates(variables: SearchThreadLinkCandidatesQueryVariables): Promise<PlainConnection<ThreadLinkCandidateModel>>;
  searchThreadSlackUsers(variables: SearchThreadSlackUsersQueryVariables): Promise<PlainConnection<SlackUserModel>>;
  searchThreads(variables: SearchThreadsQueryVariables): Promise<SearchThreadsQuery["searchThreads"]>;
  serviceAuthorization(variables: ServiceAuthorizationQueryVariables): Promise<ServiceAuthorizationModel>;
  serviceAuthorizations(variables: ServiceAuthorizationsQueryVariables): Promise<PlainConnection<ServiceAuthorizationModel>>;
  setting(variables: SettingQueryVariables): Promise<NonNullable<SettingQuery["setting"]>>;
  singleValueMetric(variables: SingleValueMetricQueryVariables): Promise<NonNullable<SingleValueMetricQuery["singleValueMetric"]>>;
  slackUser(variables: SlackUserQueryVariables): Promise<SlackUserModel>;
  snippet(variables: SnippetQueryVariables): Promise<SnippetModel>;
  snippets(variables: SnippetsQueryVariables): Promise<PlainConnection<SnippetModel>>;
  subscriptionEventTypes(): Promise<SubscriptionEventTypesQuery["subscriptionEventTypes"]>;
  task(variables: TaskQueryVariables): Promise<TaskModel>;
  taskByRef(variables: TaskByRefQueryVariables): Promise<TaskModel>;
  tasks(variables: TasksQueryVariables): Promise<PlainConnection<TaskModel>>;
  teamSettings(variables: TeamSettingsQueryVariables): Promise<TeamSettingsModel>;
  tenant(variables: TenantQueryVariables): Promise<TenantModel>;
  tenantFieldSchemas(variables: TenantFieldSchemasQueryVariables): Promise<PlainConnection<TenantFieldSchemaModel>>;
  tenants(variables: TenantsQueryVariables): Promise<PlainConnection<TenantModel>>;
  thread(variables: ThreadQueryVariables): Promise<ThreadModel>;
  threadByExternalId(variables: ThreadByExternalIdQueryVariables): Promise<ThreadModel>;
  threadByRef(variables: ThreadByRefQueryVariables): Promise<ThreadModel>;
  threadBySlackPermalink(variables: ThreadBySlackPermalinkQueryVariables): Promise<ThreadModel>;
  threadCluster(variables: ThreadClusterQueryVariables): Promise<ThreadClusterModel>;
  threadClusters(variables: ThreadClustersQueryVariables): Promise<ThreadClusterModel[]>;
  threadClustersPaginated(variables: ThreadClustersPaginatedQueryVariables): Promise<PlainConnection<ThreadClusterModel>>;
  threadDiscussion(variables: ThreadDiscussionQueryVariables): Promise<ThreadDiscussionModel>;
  threadFieldSchema(variables: ThreadFieldSchemaQueryVariables): Promise<ThreadFieldSchemaModel>;
  threadFieldSchemas(variables: ThreadFieldSchemasQueryVariables): Promise<PlainConnection<ThreadFieldSchemaModel>>;
  threadLinkGroups(variables: ThreadLinkGroupsQueryVariables): Promise<PlainConnection<ThreadLinkGroupModel>>;
  threadSlackUser(variables: ThreadSlackUserQueryVariables): Promise<SlackUserModel>;
  threads(variables: ThreadsQueryVariables): Promise<PlainConnection<ThreadModel>>;
  tier(variables: TierQueryVariables): Promise<TierModel>;
  tiers(variables: TiersQueryVariables): Promise<PlainConnection<TierModel>>;
  timeSeriesMetric(variables: TimeSeriesMetricQueryVariables): Promise<TimeSeriesMetricModel>;
  timelineEntries(variables: TimelineEntriesQueryVariables): Promise<PlainConnection<TimelineEntryModel>>;
  timelineEntry(variables: TimelineEntryQueryVariables): Promise<TimelineEntryModel>;
  user(variables: UserQueryVariables): Promise<UserModel>;
  userAuthDiscordChannelInstallationInfo(variables: UserAuthDiscordChannelInstallationInfoQueryVariables): Promise<UserAuthDiscordChannelInstallationInfoQuery["userAuthDiscordChannelInstallationInfo"]>;
  userAuthDiscordChannelIntegration(variables: UserAuthDiscordChannelIntegrationQueryVariables): Promise<UserAuthDiscordChannelIntegrationModel>;
  userAuthDiscordChannelIntegrations(variables: UserAuthDiscordChannelIntegrationsQueryVariables): Promise<PlainConnection<UserAuthDiscordChannelIntegrationModel>>;
  userAuthSlackInstallationInfo(variables: UserAuthSlackInstallationInfoQueryVariables): Promise<UserAuthSlackInstallationInfoQuery["userAuthSlackInstallationInfo"]>;
  userAuthSlackIntegration(variables: UserAuthSlackIntegrationQueryVariables): Promise<UserAuthSlackIntegrationModel>;
  userAuthSlackIntegrationByThreadId(variables: UserAuthSlackIntegrationByThreadIdQueryVariables): Promise<UserAuthSlackIntegrationModel>;
  userByEmail(variables: UserByEmailQueryVariables): Promise<UserModel>;
  userSlackChannelMemberships(variables: UserSlackChannelMembershipsQueryVariables): Promise<UserSlackChannelMembershipsQuery["userSlackChannelMemberships"]>;
  users(variables: UsersQueryVariables): Promise<PlainConnection<UserModel>>;
  webhookTarget(variables: WebhookTargetQueryVariables): Promise<WebhookTargetModel>;
  webhookTargets(variables: WebhookTargetsQueryVariables): Promise<PlainConnection<WebhookTargetModel>>;
  webhookVersions(variables: WebhookVersionsQueryVariables): Promise<WebhookVersionsQuery["webhookVersions"]>;
  workOSConfiguration(): Promise<NonNullable<WorkOsConfigurationQuery["workOSConfiguration"]>>;
  workflow(variables: WorkflowQueryVariables): Promise<WorkflowModel>;
  workflowExecution(variables: WorkflowExecutionQueryVariables): Promise<WorkflowExecutionModel>;
  workflowExecutions(variables: WorkflowExecutionsQueryVariables): Promise<PlainConnection<WorkflowExecutionModel>>;
  workflowExecutionsByEntity(variables: WorkflowExecutionsByEntityQueryVariables): Promise<PlainConnection<WorkflowExecutionModel>>;
  workflowRule(variables: WorkflowRuleQueryVariables): Promise<WorkflowRuleModel>;
  workflowRules(variables: WorkflowRulesQueryVariables): Promise<PlainConnection<WorkflowRuleModel>>;
  workflows(variables: WorkflowsQueryVariables): Promise<PlainConnection<WorkflowModel>>;
  workspace(variables: WorkspaceQueryVariables): Promise<WorkspaceModel>;
  workspaceChatSettings(): Promise<WorkspaceChatSettingsQuery["workspaceChatSettings"]>;
  workspaceCursorIntegration(): Promise<WorkspaceCursorIntegrationModel>;
  workspaceDiscordChannelInstallationInfo(variables: WorkspaceDiscordChannelInstallationInfoQueryVariables): Promise<WorkspaceDiscordChannelInstallationInfoQuery["workspaceDiscordChannelInstallationInfo"]>;
  workspaceDiscordChannelIntegration(variables: WorkspaceDiscordChannelIntegrationQueryVariables): Promise<WorkspaceDiscordChannelIntegrationModel>;
  workspaceDiscordChannelIntegrations(variables: WorkspaceDiscordChannelIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceDiscordChannelIntegrationModel>>;
  workspaceDiscordIntegration(variables: WorkspaceDiscordIntegrationQueryVariables): Promise<WorkspaceDiscordIntegrationModel>;
  workspaceDiscordIntegrations(variables: WorkspaceDiscordIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceDiscordIntegrationModel>>;
  workspaceEmailSettings(): Promise<WorkspaceEmailSettingsModel>;
  workspaceHmac(): Promise<WorkspaceHmacModel>;
  workspaceInvites(variables: WorkspaceInvitesQueryVariables): Promise<PlainConnection<WorkspaceInviteModel>>;
  workspaceMSTeamsInstallationInfo(variables: WorkspaceMsTeamsInstallationInfoQueryVariables): Promise<WorkspaceMsTeamsInstallationInfoQuery["workspaceMSTeamsInstallationInfo"]>;
  workspaceMSTeamsIntegration(): Promise<WorkspaceMSTeamsIntegrationModel>;
  workspaceSlackChannelInstallationInfo(variables: WorkspaceSlackChannelInstallationInfoQueryVariables): Promise<WorkspaceSlackChannelInstallationInfoQuery["workspaceSlackChannelInstallationInfo"]>;
  workspaceSlackChannelIntegration(variables: WorkspaceSlackChannelIntegrationQueryVariables): Promise<WorkspaceSlackChannelIntegrationModel>;
  workspaceSlackChannelIntegrations(variables: WorkspaceSlackChannelIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceSlackChannelIntegrationModel>>;
  workspaceSlackInstallationInfo(variables: WorkspaceSlackInstallationInfoQueryVariables): Promise<WorkspaceSlackInstallationInfoQuery["workspaceSlackInstallationInfo"]>;
  workspaceSlackIntegration(variables: WorkspaceSlackIntegrationQueryVariables): Promise<WorkspaceSlackIntegrationModel>;
  workspaceSlackIntegrations(variables: WorkspaceSlackIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceSlackIntegrationModel>>;
}

export interface PlainSdkMutations {
  acceptWorkspaceInvite(variables: AcceptWorkspaceInviteMutationVariables): Promise<AcceptWorkspaceInviteMutation["acceptWorkspaceInvite"]>;
  addAdditionalAssignees(variables: AddAdditionalAssigneesMutationVariables): Promise<AddAdditionalAssigneesMutation["addAdditionalAssignees"]>;
  addCustomerToCustomerGroups(variables: AddCustomerToCustomerGroupsMutationVariables): Promise<AddCustomerToCustomerGroupsMutation["addCustomerToCustomerGroups"]>;
  addCustomerToTenants(variables: AddCustomerToTenantsMutationVariables): Promise<AddCustomerToTenantsMutation["addCustomerToTenants"]>;
  addGeneratedReply(variables: AddGeneratedReplyMutationVariables): Promise<AddGeneratedReplyMutation["addGeneratedReply"]>;
  addLabels(variables: AddLabelsMutationVariables): Promise<AddLabelsMutation["addLabels"]>;
  addLabelsToUser(variables: AddLabelsToUserMutationVariables): Promise<AddLabelsToUserMutation["addLabelsToUser"]>;
  addMembersToTier(variables: AddMembersToTierMutationVariables): Promise<AddMembersToTierMutation["addMembersToTier"]>;
  addUserToActiveBillingRota(variables: AddUserToActiveBillingRotaMutationVariables): Promise<AddUserToActiveBillingRotaMutation["addUserToActiveBillingRota"]>;
  addWorkspaceAlternateSupportEmailAddress(variables: AddWorkspaceAlternateSupportEmailAddressMutationVariables): Promise<AddWorkspaceAlternateSupportEmailAddressMutation["addWorkspaceAlternateSupportEmailAddress"]>;
  archiveLabelType(variables: ArchiveLabelTypeMutationVariables): Promise<ArchiveLabelTypeMutation["archiveLabelType"]>;
  assignRolesToUser(variables: AssignRolesToUserMutationVariables): Promise<AssignRolesToUserMutation["assignRolesToUser"]>;
  assignThread(variables: AssignThreadMutationVariables): Promise<AssignThreadMutation["assignThread"]>;
  bulkJoinSlackChannels(variables: BulkJoinSlackChannelsMutationVariables): Promise<BulkJoinSlackChannelsMutation["bulkJoinSlackChannels"]>;
  bulkUpsertThreadFields(variables: BulkUpsertThreadFieldsMutationVariables): Promise<BulkUpsertThreadFieldsMutation["bulkUpsertThreadFields"]>;
  bulkUpsertWorkflowSteps(variables: BulkUpsertWorkflowStepsMutationVariables): Promise<BulkUpsertWorkflowStepsMutation["bulkUpsertWorkflowSteps"]>;
  calculateRoleChangeCost(variables: CalculateRoleChangeCostMutationVariables): Promise<CalculateRoleChangeCostMutation["calculateRoleChangeCost"]>;
  cancelHyperlineSubscription(): Promise<CancelHyperlineSubscriptionMutation["cancelHyperlineSubscription"]>;
  changeBillingPlan(variables: ChangeBillingPlanMutationVariables): Promise<ChangeBillingPlanMutation["changeBillingPlan"]>;
  changeKnowledgeGapStatus(variables: ChangeKnowledgeGapStatusMutationVariables): Promise<ChangeKnowledgeGapStatusMutation["changeKnowledgeGapStatus"]>;
  changeThreadCustomer(variables: ChangeThreadCustomerMutationVariables): Promise<ChangeThreadCustomerMutation["changeThreadCustomer"]>;
  changeThreadPriority(variables: ChangeThreadPriorityMutationVariables): Promise<ChangeThreadPriorityMutation["changeThreadPriority"]>;
  changeUserStatus(variables: ChangeUserStatusMutationVariables): Promise<ChangeUserStatusMutation["changeUserStatus"]>;
  completeServiceAuthorization(variables: CompleteServiceAuthorizationMutationVariables): Promise<CompleteServiceAuthorizationMutation["completeServiceAuthorization"]>;
  createAiFeatureFeedback(variables: CreateAiFeatureFeedbackMutationVariables): Promise<CreateAiFeatureFeedbackMutation["createAiFeatureFeedback"]>;
  createAiFeedback(variables: CreateAiFeedbackMutationVariables): Promise<CreateAiFeedbackMutation["createAiFeedback"]>;
  createAiToneRule(variables: CreateAiToneRuleMutationVariables): Promise<CreateAiToneRuleMutation["createAiToneRule"]>;
  createApiKey(variables: CreateApiKeyMutationVariables): Promise<CreateApiKeyMutation["createApiKey"]>;
  createAttachmentDownloadUrl(variables: CreateAttachmentDownloadUrlMutationVariables): Promise<CreateAttachmentDownloadUrlMutation["createAttachmentDownloadUrl"]>;
  createAttachmentUploadUrl(variables: CreateAttachmentUploadUrlMutationVariables): Promise<CreateAttachmentUploadUrlMutation["createAttachmentUploadUrl"]>;
  createAutoresponder(variables: CreateAutoresponderMutationVariables): Promise<CreateAutoresponderMutation["createAutoresponder"]>;
  createBillingPortalSession(): Promise<CreateBillingPortalSessionMutation["createBillingPortalSession"]>;
  createChatApp(variables: CreateChatAppMutationVariables): Promise<CreateChatAppMutation["createChatApp"]>;
  createChatAppSecret(variables: CreateChatAppSecretMutationVariables): Promise<CreateChatAppSecretMutation["createChatAppSecret"]>;
  createCheckoutSession(variables: CreateCheckoutSessionMutationVariables): Promise<CreateCheckoutSessionMutation["createCheckoutSession"]>;
  createCustomRole(variables: CreateCustomRoleMutationVariables): Promise<CreateCustomRoleMutation["createCustomRole"]>;
  createCustomerCardConfig(variables: CreateCustomerCardConfigMutationVariables): Promise<CreateCustomerCardConfigMutation["createCustomerCardConfig"]>;
  createCustomerEvent(variables: CreateCustomerEventMutationVariables): Promise<CreateCustomerEventMutation["createCustomerEvent"]>;
  createCustomerGroup(variables: CreateCustomerGroupMutationVariables): Promise<CreateCustomerGroupMutation["createCustomerGroup"]>;
  createCustomerSurvey(variables: CreateCustomerSurveyMutationVariables): Promise<CreateCustomerSurveyMutation["createCustomerSurvey"]>;
  createEmailPreviewUrl(variables: CreateEmailPreviewUrlMutationVariables): Promise<CreateEmailPreviewUrlMutation["createEmailPreviewUrl"]>;
  createEscalationPath(variables: CreateEscalationPathMutationVariables): Promise<CreateEscalationPathMutation["createEscalationPath"]>;
  createGithubUserAuthIntegration(variables: CreateGithubUserAuthIntegrationMutationVariables): Promise<CreateGithubUserAuthIntegrationMutation["createGithubUserAuthIntegration"]>;
  createHelpCenter(variables: CreateHelpCenterMutationVariables): Promise<CreateHelpCenterMutation["createHelpCenter"]>;
  createHelpCenterArticleGroup(variables: CreateHelpCenterArticleGroupMutationVariables): Promise<CreateHelpCenterArticleGroupMutation["createHelpCenterArticleGroup"]>;
  createHyperlineBillingPortalSession(): Promise<CreateHyperlineBillingPortalSessionMutation["createHyperlineBillingPortalSession"]>;
  createHyperlineCheckoutSession(variables: CreateHyperlineCheckoutSessionMutationVariables): Promise<CreateHyperlineCheckoutSessionMutation["createHyperlineCheckoutSession"]>;
  createHyperlineComponentsAuthToken(): Promise<CreateHyperlineComponentsAuthTokenMutation["createHyperlineComponentsAuthToken"]>;
  createImportSync(variables: CreateImportSyncMutationVariables): Promise<CreateImportSyncMutation["createImportSync"]>;
  createIndexedDocument(variables: CreateIndexedDocumentMutationVariables): Promise<CreateIndexedDocumentMutation["createIndexedDocument"]>;
  createIssueTrackerIssue(variables: CreateIssueTrackerIssueMutationVariables): Promise<CreateIssueTrackerIssueMutation["createIssueTrackerIssue"]>;
  createKnowledgeSource(variables: CreateKnowledgeSourceMutationVariables): Promise<CreateKnowledgeSourceMutation["createKnowledgeSource"]>;
  createLabelType(variables: CreateLabelTypeMutationVariables): Promise<CreateLabelTypeMutation["createLabelType"]>;
  createMachineUser(variables: CreateMachineUserMutationVariables): Promise<CreateMachineUserMutation["createMachineUser"]>;
  createMyFavoritePage(variables: CreateMyFavoritePageMutationVariables): Promise<CreateMyFavoritePageMutation["createMyFavoritePage"]>;
  createMyLinearIntegration(variables: CreateMyLinearIntegrationMutationVariables): Promise<CreateMyLinearIntegrationMutation["createMyLinearIntegration"]>;
  createMyMSTeamsIntegration(variables: CreateMyMsTeamsIntegrationMutationVariables): Promise<CreateMyMsTeamsIntegrationMutation["createMyMSTeamsIntegration"]>;
  createMySlackIntegration(variables: CreateMySlackIntegrationMutationVariables): Promise<CreateMySlackIntegrationMutation["createMySlackIntegration"]>;
  createNote(variables: CreateNoteMutationVariables): Promise<CreateNoteMutation["createNote"]>;
  createSavedThreadsView(variables: CreateSavedThreadsViewMutationVariables): Promise<CreateSavedThreadsViewMutation["createSavedThreadsView"]>;
  createServiceLevelAgreement(variables: CreateServiceLevelAgreementMutationVariables): Promise<CreateServiceLevelAgreementMutation["createServiceLevelAgreement"]>;
  createSnippet(variables: CreateSnippetMutationVariables): Promise<CreateSnippetMutation["createSnippet"]>;
  createTask(variables: CreateTaskMutationVariables): Promise<CreateTaskMutation["createTask"]>;
  createThread(variables: CreateThreadMutationVariables): Promise<CreateThreadMutation["createThread"]>;
  createThreadChannelAssociation(variables: CreateThreadChannelAssociationMutationVariables): Promise<CreateThreadChannelAssociationMutation["createThreadChannelAssociation"]>;
  createThreadDiscussion(variables: CreateThreadDiscussionMutationVariables): Promise<CreateThreadDiscussionMutation["createThreadDiscussion"]>;
  createThreadEvent(variables: CreateThreadEventMutationVariables): Promise<CreateThreadEventMutation["createThreadEvent"]>;
  createThreadFieldSchema(variables: CreateThreadFieldSchemaMutationVariables): Promise<CreateThreadFieldSchemaMutation["createThreadFieldSchema"]>;
  createThreadLink(variables: CreateThreadLinkMutationVariables): Promise<CreateThreadLinkMutation["createThreadLink"]>;
  createTier(variables: CreateTierMutationVariables): Promise<CreateTierMutation["createTier"]>;
  createUserAccount(variables: CreateUserAccountMutationVariables): Promise<CreateUserAccountMutation["createUserAccount"]>;
  createUserAuthDiscordChannelIntegration(variables: CreateUserAuthDiscordChannelIntegrationMutationVariables): Promise<CreateUserAuthDiscordChannelIntegrationMutation["createUserAuthDiscordChannelIntegration"]>;
  createUserAuthSlackIntegration(variables: CreateUserAuthSlackIntegrationMutationVariables): Promise<CreateUserAuthSlackIntegrationMutation["createUserAuthSlackIntegration"]>;
  createWebhookTarget(variables: CreateWebhookTargetMutationVariables): Promise<CreateWebhookTargetMutation["createWebhookTarget"]>;
  createWorkflow(variables: CreateWorkflowMutationVariables): Promise<CreateWorkflowMutation["createWorkflow"]>;
  createWorkflowRule(variables: CreateWorkflowRuleMutationVariables): Promise<CreateWorkflowRuleMutation["createWorkflowRule"]>;
  createWorkflowStep(variables: CreateWorkflowStepMutationVariables): Promise<CreateWorkflowStepMutation["createWorkflowStep"]>;
  createWorkspace(variables: CreateWorkspaceMutationVariables): Promise<CreateWorkspaceMutation["createWorkspace"]>;
  createWorkspaceCursorIntegration(variables: CreateWorkspaceCursorIntegrationMutationVariables): Promise<CreateWorkspaceCursorIntegrationMutation["createWorkspaceCursorIntegration"]>;
  createWorkspaceDiscordChannelIntegration(variables: CreateWorkspaceDiscordChannelIntegrationMutationVariables): Promise<CreateWorkspaceDiscordChannelIntegrationMutation["createWorkspaceDiscordChannelIntegration"]>;
  createWorkspaceDiscordIntegration(variables: CreateWorkspaceDiscordIntegrationMutationVariables): Promise<CreateWorkspaceDiscordIntegrationMutation["createWorkspaceDiscordIntegration"]>;
  createWorkspaceEmailDomainSettings(variables: CreateWorkspaceEmailDomainSettingsMutationVariables): Promise<CreateWorkspaceEmailDomainSettingsMutation["createWorkspaceEmailDomainSettings"]>;
  createWorkspaceFileUploadUrl(variables: CreateWorkspaceFileUploadUrlMutationVariables): Promise<CreateWorkspaceFileUploadUrlMutation["createWorkspaceFileUploadUrl"]>;
  createWorkspaceMSTeamsIntegration(variables: CreateWorkspaceMsTeamsIntegrationMutationVariables): Promise<CreateWorkspaceMsTeamsIntegrationMutation["createWorkspaceMSTeamsIntegration"]>;
  createWorkspaceSlackChannelIntegration(variables: CreateWorkspaceSlackChannelIntegrationMutationVariables): Promise<CreateWorkspaceSlackChannelIntegrationMutation["createWorkspaceSlackChannelIntegration"]>;
  createWorkspaceSlackIntegration(variables: CreateWorkspaceSlackIntegrationMutationVariables): Promise<CreateWorkspaceSlackIntegrationMutation["createWorkspaceSlackIntegration"]>;
  deleteAiToneRules(variables: DeleteAiToneRulesMutationVariables): Promise<DeleteAiToneRulesMutation["deleteAiToneRules"]>;
  deleteApiKey(variables: DeleteApiKeyMutationVariables): Promise<DeleteApiKeyMutation["deleteApiKey"]>;
  deleteAutoresponder(variables: DeleteAutoresponderMutationVariables): Promise<DeleteAutoresponderMutation["deleteAutoresponder"]>;
  deleteBusinessHours(): Promise<DeleteBusinessHoursMutation["deleteBusinessHours"]>;
  deleteChatApp(variables: DeleteChatAppMutationVariables): Promise<DeleteChatAppMutation["deleteChatApp"]>;
  deleteChatAppSecret(variables: DeleteChatAppSecretMutationVariables): Promise<DeleteChatAppSecretMutation["deleteChatAppSecret"]>;
  deleteCompany(variables: DeleteCompanyMutationVariables): Promise<DeleteCompanyMutation["deleteCompany"]>;
  deleteCustomRole(variables: DeleteCustomRoleMutationVariables): Promise<DeleteCustomRoleMutation["deleteCustomRole"]>;
  deleteCustomer(variables: DeleteCustomerMutationVariables): Promise<DeleteCustomerMutation["deleteCustomer"]>;
  deleteCustomerCardConfig(variables: DeleteCustomerCardConfigMutationVariables): Promise<DeleteCustomerCardConfigMutation["deleteCustomerCardConfig"]>;
  deleteCustomerGroup(variables: DeleteCustomerGroupMutationVariables): Promise<DeleteCustomerGroupMutation["deleteCustomerGroup"]>;
  deleteCustomerSurvey(variables: DeleteCustomerSurveyMutationVariables): Promise<DeleteCustomerSurveyMutation["deleteCustomerSurvey"]>;
  deleteEscalationPath(variables: DeleteEscalationPathMutationVariables): Promise<DeleteEscalationPathMutation["deleteEscalationPath"]>;
  deleteGithubUserAuthIntegration(): Promise<DeleteGithubUserAuthIntegrationMutation["deleteGithubUserAuthIntegration"]>;
  deleteHelpCenter(variables: DeleteHelpCenterMutationVariables): Promise<DeleteHelpCenterMutation["deleteHelpCenter"]>;
  deleteHelpCenterArticle(variables: DeleteHelpCenterArticleMutationVariables): Promise<DeleteHelpCenterArticleMutation["deleteHelpCenterArticle"]>;
  deleteHelpCenterArticleGroup(variables: DeleteHelpCenterArticleGroupMutationVariables): Promise<DeleteHelpCenterArticleGroupMutation["deleteHelpCenterArticleGroup"]>;
  deleteKnowledgeSource(variables: DeleteKnowledgeSourceMutationVariables): Promise<DeleteKnowledgeSourceMutation["deleteKnowledgeSource"]>;
  deleteMachineUser(variables: DeleteMachineUserMutationVariables): Promise<DeleteMachineUserMutation["deleteMachineUser"]>;
  deleteMyFavoritePage(variables: DeleteMyFavoritePageMutationVariables): Promise<DeleteMyFavoritePageMutation["deleteMyFavoritePage"]>;
  deleteMyLinearIntegration(): Promise<DeleteMyLinearIntegrationMutation["deleteMyLinearIntegration"]>;
  deleteMyMSTeamsIntegration(): Promise<DeleteMyMsTeamsIntegrationMutation["deleteMyMSTeamsIntegration"]>;
  deleteMyServiceAuthorization(variables: DeleteMyServiceAuthorizationMutationVariables): Promise<DeleteMyServiceAuthorizationMutation["deleteMyServiceAuthorization"]>;
  deleteMySlackIntegration(): Promise<DeleteMySlackIntegrationMutation["deleteMySlackIntegration"]>;
  deleteNote(variables: DeleteNoteMutationVariables): Promise<DeleteNoteMutation["deleteNote"]>;
  deleteSavedThreadsView(variables: DeleteSavedThreadsViewMutationVariables): Promise<DeleteSavedThreadsViewMutation["deleteSavedThreadsView"]>;
  deleteServiceAuthorization(variables: DeleteServiceAuthorizationMutationVariables): Promise<DeleteServiceAuthorizationMutation["deleteServiceAuthorization"]>;
  deleteServiceLevelAgreement(variables: DeleteServiceLevelAgreementMutationVariables): Promise<DeleteServiceLevelAgreementMutation["deleteServiceLevelAgreement"]>;
  deleteSnippet(variables: DeleteSnippetMutationVariables): Promise<DeleteSnippetMutation["deleteSnippet"]>;
  deleteTask(variables: DeleteTaskMutationVariables): Promise<DeleteTaskMutation["deleteTask"]>;
  deleteTenant(variables: DeleteTenantMutationVariables): Promise<DeleteTenantMutation["deleteTenant"]>;
  deleteTenantField(variables: DeleteTenantFieldMutationVariables): Promise<DeleteTenantFieldMutation["deleteTenantField"]>;
  deleteTenantFieldSchema(variables: DeleteTenantFieldSchemaMutationVariables): Promise<DeleteTenantFieldSchemaMutation["deleteTenantFieldSchema"]>;
  deleteThread(variables: DeleteThreadMutationVariables): Promise<DeleteThreadMutation["deleteThread"]>;
  deleteThreadChannelAssociation(variables: DeleteThreadChannelAssociationMutationVariables): Promise<DeleteThreadChannelAssociationMutation["deleteThreadChannelAssociation"]>;
  deleteThreadField(variables: DeleteThreadFieldMutationVariables): Promise<DeleteThreadFieldMutation["deleteThreadField"]>;
  deleteThreadFieldSchema(variables: DeleteThreadFieldSchemaMutationVariables): Promise<DeleteThreadFieldSchemaMutation["deleteThreadFieldSchema"]>;
  deleteThreadLink(variables: DeleteThreadLinkMutationVariables): Promise<DeleteThreadLinkMutation["deleteThreadLink"]>;
  deleteTier(variables: DeleteTierMutationVariables): Promise<DeleteTierMutation["deleteTier"]>;
  deleteUser(variables: DeleteUserMutationVariables): Promise<DeleteUserMutation["deleteUser"]>;
  deleteUserAuthDiscordChannelIntegration(variables: DeleteUserAuthDiscordChannelIntegrationMutationVariables): Promise<DeleteUserAuthDiscordChannelIntegrationMutation["deleteUserAuthDiscordChannelIntegration"]>;
  deleteUserAuthSlackIntegration(variables: DeleteUserAuthSlackIntegrationMutationVariables): Promise<DeleteUserAuthSlackIntegrationMutation["deleteUserAuthSlackIntegration"]>;
  deleteWebhookTarget(variables: DeleteWebhookTargetMutationVariables): Promise<DeleteWebhookTargetMutation["deleteWebhookTarget"]>;
  deleteWorkflow(variables: DeleteWorkflowMutationVariables): Promise<DeleteWorkflowMutation["deleteWorkflow"]>;
  deleteWorkflowRule(variables: DeleteWorkflowRuleMutationVariables): Promise<DeleteWorkflowRuleMutation["deleteWorkflowRule"]>;
  deleteWorkflowStep(variables: DeleteWorkflowStepMutationVariables): Promise<DeleteWorkflowStepMutation["deleteWorkflowStep"]>;
  deleteWorkspaceCursorIntegration(variables: DeleteWorkspaceCursorIntegrationMutationVariables): Promise<DeleteWorkspaceCursorIntegrationMutation["deleteWorkspaceCursorIntegration"]>;
  deleteWorkspaceDiscordChannelIntegration(variables: DeleteWorkspaceDiscordChannelIntegrationMutationVariables): Promise<DeleteWorkspaceDiscordChannelIntegrationMutation["deleteWorkspaceDiscordChannelIntegration"]>;
  deleteWorkspaceDiscordIntegration(variables: DeleteWorkspaceDiscordIntegrationMutationVariables): Promise<DeleteWorkspaceDiscordIntegrationMutation["deleteWorkspaceDiscordIntegration"]>;
  deleteWorkspaceEmailDomainSettings(): Promise<DeleteWorkspaceEmailDomainSettingsMutation["deleteWorkspaceEmailDomainSettings"]>;
  deleteWorkspaceFile(variables: DeleteWorkspaceFileMutationVariables): Promise<DeleteWorkspaceFileMutation["deleteWorkspaceFile"]>;
  deleteWorkspaceInvite(variables: DeleteWorkspaceInviteMutationVariables): Promise<DeleteWorkspaceInviteMutation["deleteWorkspaceInvite"]>;
  deleteWorkspaceMSTeamsIntegration(variables: DeleteWorkspaceMsTeamsIntegrationMutationVariables): Promise<DeleteWorkspaceMsTeamsIntegrationMutation["deleteWorkspaceMSTeamsIntegration"]>;
  deleteWorkspaceSlackChannelIntegration(variables: DeleteWorkspaceSlackChannelIntegrationMutationVariables): Promise<DeleteWorkspaceSlackChannelIntegrationMutation["deleteWorkspaceSlackChannelIntegration"]>;
  deleteWorkspaceSlackIntegration(variables: DeleteWorkspaceSlackIntegrationMutationVariables): Promise<DeleteWorkspaceSlackIntegrationMutation["deleteWorkspaceSlackIntegration"]>;
  escalateThread(variables: EscalateThreadMutationVariables): Promise<EscalateThreadMutation["escalateThread"]>;
  forkThread(variables: ForkThreadMutationVariables): Promise<ForkThreadMutation["forkThread"]>;
  generateAiToneRulesFromDescription(variables: GenerateAiToneRulesFromDescriptionMutationVariables): Promise<GenerateAiToneRulesFromDescriptionMutation["generateAiToneRulesFromDescription"]>;
  generateHelpCenterArticle(variables: GenerateHelpCenterArticleMutationVariables): Promise<GenerateHelpCenterArticleMutation["generateHelpCenterArticle"]>;
  importCustomers(variables: ImportCustomersMutationVariables): Promise<ImportCustomersMutation["importCustomers"]>;
  importTenantFieldSchemas(variables: ImportTenantFieldSchemasMutationVariables): Promise<ImportTenantFieldSchemasMutation["importTenantFieldSchemas"]>;
  importTenants(variables: ImportTenantsMutationVariables): Promise<ImportTenantsMutation["importTenants"]>;
  inviteUserToWorkspace(variables: InviteUserToWorkspaceMutationVariables): Promise<InviteUserToWorkspaceMutation["inviteUserToWorkspace"]>;
  lockThread(variables: LockThreadMutationVariables): Promise<LockThreadMutation["lockThread"]>;
  markCustomerAsSpam(variables: MarkCustomerAsSpamMutationVariables): Promise<MarkCustomerAsSpamMutation["markCustomerAsSpam"]>;
  markThreadAsDone(variables: MarkThreadAsDoneMutationVariables): Promise<MarkThreadAsDoneMutation["markThreadAsDone"]>;
  markThreadAsTodo(variables: MarkThreadAsTodoMutationVariables): Promise<MarkThreadAsTodoMutation["markThreadAsTodo"]>;
  markThreadDiscussionAsResolved(variables: MarkThreadDiscussionAsResolvedMutationVariables): Promise<MarkThreadDiscussionAsResolvedMutation["markThreadDiscussionAsResolved"]>;
  moveLabelType(variables: MoveLabelTypeMutationVariables): Promise<MoveLabelTypeMutation["moveLabelType"]>;
  previewBillingPlanChange(variables: PreviewBillingPlanChangeMutationVariables): Promise<PreviewBillingPlanChangeMutation["previewBillingPlanChange"]>;
  refreshConnectedDiscordChannels(variables: RefreshConnectedDiscordChannelsMutationVariables): Promise<RefreshConnectedDiscordChannelsMutation["refreshConnectedDiscordChannels"]>;
  refreshWorkspaceSlackChannelIntegration(variables: RefreshWorkspaceSlackChannelIntegrationMutationVariables): Promise<RefreshWorkspaceSlackChannelIntegrationMutation["refreshWorkspaceSlackChannelIntegration"]>;
  regenerateWorkspaceHmac(): Promise<RegenerateWorkspaceHmacMutation["regenerateWorkspaceHmac"]>;
  reindexKnowledgeSource(variables: ReindexKnowledgeSourceMutationVariables): Promise<ReindexKnowledgeSourceMutation["reindexKnowledgeSource"]>;
  reloadCustomerCardInstance(variables: ReloadCustomerCardInstanceMutationVariables): Promise<ReloadCustomerCardInstanceMutation["reloadCustomerCardInstance"]>;
  removeAdditionalAssignees(variables: RemoveAdditionalAssigneesMutationVariables): Promise<RemoveAdditionalAssigneesMutation["removeAdditionalAssignees"]>;
  removeCustomerFromCustomerGroups(variables: RemoveCustomerFromCustomerGroupsMutationVariables): Promise<RemoveCustomerFromCustomerGroupsMutation["removeCustomerFromCustomerGroups"]>;
  removeCustomerFromTenants(variables: RemoveCustomerFromTenantsMutationVariables): Promise<RemoveCustomerFromTenantsMutation["removeCustomerFromTenants"]>;
  removeLabels(variables: RemoveLabelsMutationVariables): Promise<RemoveLabelsMutation["removeLabels"]>;
  removeLabelsFromUser(variables: RemoveLabelsFromUserMutationVariables): Promise<RemoveLabelsFromUserMutation["removeLabelsFromUser"]>;
  removeMembersFromTier(variables: RemoveMembersFromTierMutationVariables): Promise<RemoveMembersFromTierMutation["removeMembersFromTier"]>;
  removeTenantFieldSchemaMapping(variables: RemoveTenantFieldSchemaMappingMutationVariables): Promise<RemoveTenantFieldSchemaMappingMutation["removeTenantFieldSchemaMapping"]>;
  removeUserFromActiveBillingRota(variables: RemoveUserFromActiveBillingRotaMutationVariables): Promise<RemoveUserFromActiveBillingRotaMutation["removeUserFromActiveBillingRota"]>;
  removeWorkspaceAlternateSupportEmailAddress(variables: RemoveWorkspaceAlternateSupportEmailAddressMutationVariables): Promise<RemoveWorkspaceAlternateSupportEmailAddressMutation["removeWorkspaceAlternateSupportEmailAddress"]>;
  reorderAutoresponders(variables: ReorderAutorespondersMutationVariables): Promise<ReorderAutorespondersMutation["reorderAutoresponders"]>;
  reorderCustomerCardConfigs(variables: ReorderCustomerCardConfigsMutationVariables): Promise<ReorderCustomerCardConfigsMutation["reorderCustomerCardConfigs"]>;
  reorderCustomerSurveys(variables: ReorderCustomerSurveysMutationVariables): Promise<ReorderCustomerSurveysMutation["reorderCustomerSurveys"]>;
  reorderThreadFieldSchemas(variables: ReorderThreadFieldSchemasMutationVariables): Promise<ReorderThreadFieldSchemasMutation["reorderThreadFieldSchemas"]>;
  replyToEmail(variables: ReplyToEmailMutationVariables): Promise<ReplyToEmailMutation["replyToEmail"]>;
  replyToThread(variables: ReplyToThreadMutationVariables): Promise<ReplyToThreadMutation["replyToThread"]>;
  resolveCustomerForMSTeamsChannel(variables: ResolveCustomerForMsTeamsChannelMutationVariables): Promise<ResolveCustomerForMsTeamsChannelMutation["resolveCustomerForMSTeamsChannel"]>;
  resolveCustomerForSlackChannel(variables: ResolveCustomerForSlackChannelMutationVariables): Promise<ResolveCustomerForSlackChannelMutation["resolveCustomerForSlackChannel"]>;
  sendBulkEmail(variables: SendBulkEmailMutationVariables): Promise<SendBulkEmailMutation["sendBulkEmail"]>;
  sendChat(variables: SendChatMutationVariables): Promise<SendChatMutation["sendChat"]>;
  sendCustomerChat(variables: SendCustomerChatMutationVariables): Promise<SendCustomerChatMutation["sendCustomerChat"]>;
  sendDiscordMessage(variables: SendDiscordMessageMutationVariables): Promise<SendDiscordMessageMutation["sendDiscordMessage"]>;
  sendMSTeamsMessage(variables: SendMsTeamsMessageMutationVariables): Promise<SendMsTeamsMessageMutation["sendMSTeamsMessage"]>;
  sendNewEmail(variables: SendNewEmailMutationVariables): Promise<SendNewEmailMutation["sendNewEmail"]>;
  sendSlackMessage(variables: SendSlackMessageMutationVariables): Promise<SendSlackMessageMutation["sendSlackMessage"]>;
  sendThreadDiscussionMessage(variables: SendThreadDiscussionMessageMutationVariables): Promise<SendThreadDiscussionMessageMutation["sendThreadDiscussionMessage"]>;
  setCustomerTenants(variables: SetCustomerTenantsMutationVariables): Promise<SetCustomerTenantsMutation["setCustomerTenants"]>;
  setupTenantFieldSchemaMapping(variables: SetupTenantFieldSchemaMappingMutationVariables): Promise<SetupTenantFieldSchemaMappingMutation["setupTenantFieldSchemaMapping"]>;
  shareThreadToUserInSlack(variables: ShareThreadToUserInSlackMutationVariables): Promise<ShareThreadToUserInSlackMutation["shareThreadToUserInSlack"]>;
  snoozeThread(variables: SnoozeThreadMutationVariables): Promise<SnoozeThreadMutation["snoozeThread"]>;
  startServiceAuthorization(variables: StartServiceAuthorizationMutationVariables): Promise<StartServiceAuthorizationMutation["startServiceAuthorization"]>;
  syncBusinessHoursSlots(variables: SyncBusinessHoursSlotsMutationVariables): Promise<SyncBusinessHoursSlotsMutation["syncBusinessHoursSlots"]>;
  syncUserWorkingHours(variables: SyncUserWorkingHoursMutationVariables): Promise<SyncUserWorkingHoursMutation["syncUserWorkingHours"]>;
  toggleSlackMessageReaction(variables: ToggleSlackMessageReactionMutationVariables): Promise<ToggleSlackMessageReactionMutation["toggleSlackMessageReaction"]>;
  toggleWorkflowRulePublished(variables: ToggleWorkflowRulePublishedMutationVariables): Promise<ToggleWorkflowRulePublishedMutation["toggleWorkflowRulePublished"]>;
  triggerWorkflow(variables: TriggerWorkflowMutationVariables): Promise<TriggerWorkflowMutation["triggerWorkflow"]>;
  triggerWorkflowRule(variables: TriggerWorkflowRuleMutationVariables): Promise<TriggerWorkflowRuleMutation["triggerWorkflowRule"]>;
  unarchiveLabelType(variables: UnarchiveLabelTypeMutationVariables): Promise<UnarchiveLabelTypeMutation["unarchiveLabelType"]>;
  unassignThread(variables: UnassignThreadMutationVariables): Promise<UnassignThreadMutation["unassignThread"]>;
  unmarkCustomerAsSpam(variables: UnmarkCustomerAsSpamMutationVariables): Promise<UnmarkCustomerAsSpamMutation["unmarkCustomerAsSpam"]>;
  updateActiveBillingRota(variables: UpdateActiveBillingRotaMutationVariables): Promise<UpdateActiveBillingRotaMutation["updateActiveBillingRota"]>;
  updateAiToneRules(variables: UpdateAiToneRulesMutationVariables): Promise<UpdateAiToneRulesMutation["updateAiToneRules"]>;
  updateApiKey(variables: UpdateApiKeyMutationVariables): Promise<UpdateApiKeyMutation["updateApiKey"]>;
  updateAutoresponder(variables: UpdateAutoresponderMutationVariables): Promise<UpdateAutoresponderMutation["updateAutoresponder"]>;
  updateChatApp(variables: UpdateChatAppMutationVariables): Promise<UpdateChatAppMutation["updateChatApp"]>;
  updateCompanyTier(variables: UpdateCompanyTierMutationVariables): Promise<UpdateCompanyTierMutation["updateCompanyTier"]>;
  updateConnectedDiscordChannel(variables: UpdateConnectedDiscordChannelMutationVariables): Promise<UpdateConnectedDiscordChannelMutation["updateConnectedDiscordChannel"]>;
  updateConnectedSlackChannel(variables: UpdateConnectedSlackChannelMutationVariables): Promise<UpdateConnectedSlackChannelMutation["updateConnectedSlackChannel"]>;
  updateCustomRole(variables: UpdateCustomRoleMutationVariables): Promise<UpdateCustomRoleMutation["updateCustomRole"]>;
  updateCustomerCardConfig(variables: UpdateCustomerCardConfigMutationVariables): Promise<UpdateCustomerCardConfigMutation["updateCustomerCardConfig"]>;
  updateCustomerCompany(variables: UpdateCustomerCompanyMutationVariables): Promise<UpdateCustomerCompanyMutation["updateCustomerCompany"]>;
  updateCustomerGroup(variables: UpdateCustomerGroupMutationVariables): Promise<UpdateCustomerGroupMutation["updateCustomerGroup"]>;
  updateCustomerSurvey(variables: UpdateCustomerSurveyMutationVariables): Promise<UpdateCustomerSurveyMutation["updateCustomerSurvey"]>;
  updateEscalationPath(variables: UpdateEscalationPathMutationVariables): Promise<UpdateEscalationPathMutation["updateEscalationPath"]>;
  updateGeneratedReply(variables: UpdateGeneratedReplyMutationVariables): Promise<UpdateGeneratedReplyMutation["updateGeneratedReply"]>;
  updateHelpCenter(variables: UpdateHelpCenterMutationVariables): Promise<UpdateHelpCenterMutation["updateHelpCenter"]>;
  updateHelpCenterArticleGroup(variables: UpdateHelpCenterArticleGroupMutationVariables): Promise<UpdateHelpCenterArticleGroupMutation["updateHelpCenterArticleGroup"]>;
  updateHelpCenterCustomDomainName(variables: UpdateHelpCenterCustomDomainNameMutationVariables): Promise<UpdateHelpCenterCustomDomainNameMutation["updateHelpCenterCustomDomainName"]>;
  updateHelpCenterIndex(variables: UpdateHelpCenterIndexMutationVariables): Promise<UpdateHelpCenterIndexMutation["updateHelpCenterIndex"]>;
  updateInternalNotifications(variables: UpdateInternalNotificationsMutationVariables): Promise<UpdateInternalNotificationsMutation["updateInternalNotifications"]>;
  updateLabelType(variables: UpdateLabelTypeMutationVariables): Promise<UpdateLabelTypeMutation["updateLabelType"]>;
  updateMachineUser(variables: UpdateMachineUserMutationVariables): Promise<UpdateMachineUserMutation["updateMachineUser"]>;
  updateMyUser(variables: UpdateMyUserMutationVariables): Promise<UpdateMyUserMutation["updateMyUser"]>;
  updateNote(variables: UpdateNoteMutationVariables): Promise<UpdateNoteMutation["updateNote"]>;
  updateSavedThreadsView(variables: UpdateSavedThreadsViewMutationVariables): Promise<UpdateSavedThreadsViewMutation["updateSavedThreadsView"]>;
  updateServiceLevelAgreement(variables: UpdateServiceLevelAgreementMutationVariables): Promise<UpdateServiceLevelAgreementMutation["updateServiceLevelAgreement"]>;
  updateSetting(variables: UpdateSettingMutationVariables): Promise<UpdateSettingMutation["updateSetting"]>;
  updateSnippet(variables: UpdateSnippetMutationVariables): Promise<UpdateSnippetMutation["updateSnippet"]>;
  updateTask(variables: UpdateTaskMutationVariables): Promise<UpdateTaskMutation["updateTask"]>;
  updateTenantTier(variables: UpdateTenantTierMutationVariables): Promise<UpdateTenantTierMutation["updateTenantTier"]>;
  updateThreadAgentStatus(variables: UpdateThreadAgentStatusMutationVariables): Promise<UpdateThreadAgentStatusMutation["updateThreadAgentStatus"]>;
  updateThreadEscalationPath(variables: UpdateThreadEscalationPathMutationVariables): Promise<UpdateThreadEscalationPathMutation["updateThreadEscalationPath"]>;
  updateThreadFieldSchema(variables: UpdateThreadFieldSchemaMutationVariables): Promise<UpdateThreadFieldSchemaMutation["updateThreadFieldSchema"]>;
  updateThreadSuggestedActionStatus(variables: UpdateThreadSuggestedActionStatusMutationVariables): Promise<UpdateThreadSuggestedActionStatusMutation["updateThreadSuggestedActionStatus"]>;
  updateThreadTenant(variables: UpdateThreadTenantMutationVariables): Promise<UpdateThreadTenantMutation["updateThreadTenant"]>;
  updateThreadTier(variables: UpdateThreadTierMutationVariables): Promise<UpdateThreadTierMutation["updateThreadTier"]>;
  updateThreadTitle(variables: UpdateThreadTitleMutationVariables): Promise<UpdateThreadTitleMutation["updateThreadTitle"]>;
  updateTier(variables: UpdateTierMutationVariables): Promise<UpdateTierMutation["updateTier"]>;
  updateUserDefaultSavedThreadsView(variables: UpdateUserDefaultSavedThreadsViewMutationVariables): Promise<UpdateUserDefaultSavedThreadsViewMutation["updateUserDefaultSavedThreadsView"]>;
  updateWebhookTarget(variables: UpdateWebhookTargetMutationVariables): Promise<UpdateWebhookTargetMutation["updateWebhookTarget"]>;
  updateWorkflow(variables: UpdateWorkflowMutationVariables): Promise<UpdateWorkflowMutation["updateWorkflow"]>;
  updateWorkflowRule(variables: UpdateWorkflowRuleMutationVariables): Promise<UpdateWorkflowRuleMutation["updateWorkflowRule"]>;
  updateWorkflowStep(variables: UpdateWorkflowStepMutationVariables): Promise<UpdateWorkflowStepMutation["updateWorkflowStep"]>;
  updateWorkspace(variables: UpdateWorkspaceMutationVariables): Promise<UpdateWorkspaceMutation["updateWorkspace"]>;
  updateWorkspaceEmailSettings(variables: UpdateWorkspaceEmailSettingsMutationVariables): Promise<UpdateWorkspaceEmailSettingsMutation["updateWorkspaceEmailSettings"]>;
  upsertBusinessHours(variables: UpsertBusinessHoursMutationVariables): Promise<UpsertBusinessHoursMutation["upsertBusinessHours"]>;
  upsertCompany(variables: UpsertCompanyMutationVariables): Promise<UpsertCompanyMutation["upsertCompany"]>;
  upsertCustomer(variables: UpsertCustomerMutationVariables): Promise<UpsertCustomerMutation["upsertCustomer"]>;
  upsertCustomerGroup(variables: UpsertCustomerGroupMutationVariables): Promise<UpsertCustomerGroupMutation["upsertCustomerGroup"]>;
  upsertHelpCenterArticle(variables: UpsertHelpCenterArticleMutationVariables): Promise<UpsertHelpCenterArticleMutation["upsertHelpCenterArticle"]>;
  upsertMyEmailSignature(variables: UpsertMyEmailSignatureMutationVariables): Promise<UpsertMyEmailSignatureMutation["upsertMyEmailSignature"]>;
  upsertRoleScopes(variables: UpsertRoleScopesMutationVariables): Promise<UpsertRoleScopesMutation["upsertRoleScopes"]>;
  upsertTeamSettings(variables: UpsertTeamSettingsMutationVariables): Promise<UpsertTeamSettingsMutation["upsertTeamSettings"]>;
  upsertTenant(variables: UpsertTenantMutationVariables): Promise<UpsertTenantMutation["upsertTenant"]>;
  upsertTenantField(variables: UpsertTenantFieldMutationVariables): Promise<UpsertTenantFieldMutation["upsertTenantField"]>;
  upsertTenantFieldSchema(variables: UpsertTenantFieldSchemaMutationVariables): Promise<UpsertTenantFieldSchemaMutation["upsertTenantFieldSchema"]>;
  upsertThreadField(variables: UpsertThreadFieldMutationVariables): Promise<UpsertThreadFieldMutation["upsertThreadField"]>;
  verifyHelpCenterCustomDomainName(variables: VerifyHelpCenterCustomDomainNameMutationVariables): Promise<VerifyHelpCenterCustomDomainNameMutation["verifyHelpCenterCustomDomainName"]>;
  verifyWorkspaceEmailDnsSettings(): Promise<VerifyWorkspaceEmailDnsSettingsMutation["verifyWorkspaceEmailDnsSettings"]>;
  verifyWorkspaceEmailForwardingSettings(variables: VerifyWorkspaceEmailForwardingSettingsMutationVariables): Promise<VerifyWorkspaceEmailForwardingSettingsMutation["verifyWorkspaceEmailForwardingSettings"]>;
}

export class PlainSdk {
  public readonly query: PlainSdkQueries;
  public readonly mutation: PlainSdkMutations;

  constructor(client: PlainGraphQLClient) {
    const _client = client;

    const query: PlainSdkQueries = {
    async activeThreadCluster(variables: ActiveThreadClusterQueryVariables): Promise<ThreadClusterModel> {
      const response = await _client.request<ActiveThreadClusterQuery, ActiveThreadClusterQueryVariables>(
        ActiveThreadClusterDocument, variables
      );
      if (!response.activeThreadCluster) {
        throw new Error("activeThreadCluster not found");
      }
      return new ThreadClusterModel(_client, response.activeThreadCluster);
    },

    async aiToneRules(variables: AiToneRulesQueryVariables): Promise<PlainConnection<AiToneRuleModel>> {
      const response = await _client.request<AiToneRulesQuery, AiToneRulesQueryVariables>(
        AiToneRulesDocument, variables
      );
      const conn = response.aiToneRules;
      return new PlainConnection<AiToneRuleModel>({
        nodes: conn.edges.map(e => new AiToneRuleModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.aiToneRules({ ...variables, ...cursor } as AiToneRulesQueryVariables),
      });
    },

    async autoresponder(variables: AutoresponderQueryVariables): Promise<AutoresponderModel> {
      const response = await _client.request<AutoresponderQuery, AutoresponderQueryVariables>(
        AutoresponderDocument, variables
      );
      if (!response.autoresponder) {
        throw new Error("autoresponder not found");
      }
      return new AutoresponderModel(_client, response.autoresponder);
    },

    async autoresponders(variables: AutorespondersQueryVariables): Promise<PlainConnection<AutoresponderModel>> {
      const response = await _client.request<AutorespondersQuery, AutorespondersQueryVariables>(
        AutorespondersDocument, variables
      );
      const conn = response.autoresponders;
      return new PlainConnection<AutoresponderModel>({
        nodes: conn.edges.map(e => new AutoresponderModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.autoresponders({ ...variables, ...cursor } as AutorespondersQueryVariables),
      });
    },

    async billingPlans(variables: BillingPlansQueryVariables): Promise<PlainConnection<BillingPlanModel>> {
      const response = await _client.request<BillingPlansQuery, BillingPlansQueryVariables>(
        BillingPlansDocument, variables
      );
      const conn = response.billingPlans;
      return new PlainConnection<BillingPlanModel>({
        nodes: conn.edges.map(e => new BillingPlanModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.billingPlans({ ...variables, ...cursor } as BillingPlansQueryVariables),
      });
    },

    async businessHours(): Promise<BusinessHoursModel> {
      const response = await _client.request<BusinessHoursQuery, Record<string, never>>(
        BusinessHoursDocument
      );
      if (!response.businessHours) {
        throw new Error("businessHours not found");
      }
      return new BusinessHoursModel(_client, response.businessHours);
    },

    async businessHoursSlots(): Promise<BusinessHoursSlotModel[]> {
      const response = await _client.request<BusinessHoursSlotsQuery, Record<string, never>>(
        BusinessHoursSlotsDocument
      );
      return (response.businessHoursSlots ?? []).map(d => new BusinessHoursSlotModel(_client, d));
    },

    async chatApp(variables: ChatAppQueryVariables): Promise<ChatAppModel> {
      const response = await _client.request<ChatAppQuery, ChatAppQueryVariables>(
        ChatAppDocument, variables
      );
      if (!response.chatApp) {
        throw new Error("chatApp not found");
      }
      return new ChatAppModel(_client, response.chatApp);
    },

    async chatAppSecret(variables: ChatAppSecretQueryVariables): Promise<ChatAppHiddenSecretModel> {
      const response = await _client.request<ChatAppSecretQuery, ChatAppSecretQueryVariables>(
        ChatAppSecretDocument, variables
      );
      if (!response.chatAppSecret) {
        throw new Error("chatAppSecret not found");
      }
      return new ChatAppHiddenSecretModel(_client, response.chatAppSecret);
    },

    async chatApps(variables: ChatAppsQueryVariables): Promise<PlainConnection<ChatAppModel>> {
      const response = await _client.request<ChatAppsQuery, ChatAppsQueryVariables>(
        ChatAppsDocument, variables
      );
      const conn = response.chatApps;
      return new PlainConnection<ChatAppModel>({
        nodes: conn.edges.map(e => new ChatAppModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.chatApps({ ...variables, ...cursor } as ChatAppsQueryVariables),
      });
    },

    async companies(variables: CompaniesQueryVariables): Promise<PlainConnection<CompanyModel>> {
      const response = await _client.request<CompaniesQuery, CompaniesQueryVariables>(
        CompaniesDocument, variables
      );
      const conn = response.companies;
      return new PlainConnection<CompanyModel>({
        nodes: conn.edges.map(e => new CompanyModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.companies({ ...variables, ...cursor } as CompaniesQueryVariables),
      });
    },

    async company(variables: CompanyQueryVariables): Promise<CompanyModel> {
      const response = await _client.request<CompanyQuery, CompanyQueryVariables>(
        CompanyDocument, variables
      );
      if (!response.company) {
        throw new Error("company not found");
      }
      return new CompanyModel(_client, response.company);
    },

    async connectedDiscordChannels(variables: ConnectedDiscordChannelsQueryVariables): Promise<PlainConnection<ConnectedDiscordChannelModel>> {
      const response = await _client.request<ConnectedDiscordChannelsQuery, ConnectedDiscordChannelsQueryVariables>(
        ConnectedDiscordChannelsDocument, variables
      );
      const conn = response.connectedDiscordChannels;
      return new PlainConnection<ConnectedDiscordChannelModel>({
        nodes: conn.edges.map(e => new ConnectedDiscordChannelModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.connectedDiscordChannels({ ...variables, ...cursor } as ConnectedDiscordChannelsQueryVariables),
      });
    },

    async connectedMSTeamsChannels(variables: ConnectedMsTeamsChannelsQueryVariables): Promise<PlainConnection<ConnectedMSTeamsChannelModel>> {
      const response = await _client.request<ConnectedMsTeamsChannelsQuery, ConnectedMsTeamsChannelsQueryVariables>(
        ConnectedMsTeamsChannelsDocument, variables
      );
      const conn = response.connectedMSTeamsChannels;
      return new PlainConnection<ConnectedMSTeamsChannelModel>({
        nodes: conn.edges.map(e => new ConnectedMSTeamsChannelModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        totalCount: conn.totalCount,
        fetch: (cursor) => query.connectedMSTeamsChannels({ ...variables, ...cursor } as ConnectedMsTeamsChannelsQueryVariables),
      });
    },

    async connectedSlackChannel(variables: ConnectedSlackChannelQueryVariables): Promise<ConnectedSlackChannelModel> {
      const response = await _client.request<ConnectedSlackChannelQuery, ConnectedSlackChannelQueryVariables>(
        ConnectedSlackChannelDocument, variables
      );
      if (!response.connectedSlackChannel) {
        throw new Error("connectedSlackChannel not found");
      }
      return new ConnectedSlackChannelModel(_client, response.connectedSlackChannel);
    },

    async connectedSlackChannels(variables: ConnectedSlackChannelsQueryVariables): Promise<PlainConnection<ConnectedSlackChannelModel>> {
      const response = await _client.request<ConnectedSlackChannelsQuery, ConnectedSlackChannelsQueryVariables>(
        ConnectedSlackChannelsDocument, variables
      );
      const conn = response.connectedSlackChannels;
      return new PlainConnection<ConnectedSlackChannelModel>({
        nodes: conn.edges.map(e => new ConnectedSlackChannelModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        totalCount: conn.totalCount,
        fetch: (cursor) => query.connectedSlackChannels({ ...variables, ...cursor } as ConnectedSlackChannelsQueryVariables),
      });
    },

    async cursorRepositories(variables: CursorRepositoriesQueryVariables): Promise<CursorRepositoriesQuery["cursorRepositories"]> {
      const response = await _client.request<CursorRepositoriesQuery, CursorRepositoriesQueryVariables>(
        CursorRepositoriesDocument, variables
      );
      return response.cursorRepositories;
    },

    async customRole(variables: CustomRoleQueryVariables): Promise<CustomRoleModel> {
      const response = await _client.request<CustomRoleQuery, CustomRoleQueryVariables>(
        CustomRoleDocument, variables
      );
      if (!response.customRole) {
        throw new Error("customRole not found");
      }
      return new CustomRoleModel(_client, response.customRole);
    },

    async customRoles(variables: CustomRolesQueryVariables): Promise<PlainConnection<CustomRoleModel>> {
      const response = await _client.request<CustomRolesQuery, CustomRolesQueryVariables>(
        CustomRolesDocument, variables
      );
      const conn = response.customRoles;
      return new PlainConnection<CustomRoleModel>({
        nodes: conn.edges.map(e => new CustomRoleModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.customRoles({ ...variables, ...cursor } as CustomRolesQueryVariables),
      });
    },

    async customer(variables: CustomerQueryVariables): Promise<CustomerModel> {
      const response = await _client.request<CustomerQuery, CustomerQueryVariables>(
        CustomerDocument, variables
      );
      if (!response.customer) {
        throw new Error("customer not found");
      }
      return new CustomerModel(_client, response.customer);
    },

    async customerByEmail(variables: CustomerByEmailQueryVariables): Promise<CustomerModel> {
      const response = await _client.request<CustomerByEmailQuery, CustomerByEmailQueryVariables>(
        CustomerByEmailDocument, variables
      );
      if (!response.customerByEmail) {
        throw new Error("customerByEmail not found");
      }
      return new CustomerModel(_client, response.customerByEmail);
    },

    async customerByExternalId(variables: CustomerByExternalIdQueryVariables): Promise<CustomerModel> {
      const response = await _client.request<CustomerByExternalIdQuery, CustomerByExternalIdQueryVariables>(
        CustomerByExternalIdDocument, variables
      );
      if (!response.customerByExternalId) {
        throw new Error("customerByExternalId not found");
      }
      return new CustomerModel(_client, response.customerByExternalId);
    },

    async customerCardConfig(variables: CustomerCardConfigQueryVariables): Promise<CustomerCardConfigModel> {
      const response = await _client.request<CustomerCardConfigQuery, CustomerCardConfigQueryVariables>(
        CustomerCardConfigDocument, variables
      );
      if (!response.customerCardConfig) {
        throw new Error("customerCardConfig not found");
      }
      return new CustomerCardConfigModel(_client, response.customerCardConfig);
    },

    async customerCardConfigs(): Promise<CustomerCardConfigModel[]> {
      const response = await _client.request<CustomerCardConfigsQuery, Record<string, never>>(
        CustomerCardConfigsDocument
      );
      return (response.customerCardConfigs ?? []).map(d => new CustomerCardConfigModel(_client, d));
    },

    async customerCardInstances(variables: CustomerCardInstancesQueryVariables): Promise<CustomerCardInstancesQuery["customerCardInstances"]> {
      const response = await _client.request<CustomerCardInstancesQuery, CustomerCardInstancesQueryVariables>(
        CustomerCardInstancesDocument, variables
      );
      return response.customerCardInstances;
    },

    async customerGroup(variables: CustomerGroupQueryVariables): Promise<CustomerGroupModel> {
      const response = await _client.request<CustomerGroupQuery, CustomerGroupQueryVariables>(
        CustomerGroupDocument, variables
      );
      if (!response.customerGroup) {
        throw new Error("customerGroup not found");
      }
      return new CustomerGroupModel(_client, response.customerGroup);
    },

    async customerGroups(variables: CustomerGroupsQueryVariables): Promise<PlainConnection<CustomerGroupModel>> {
      const response = await _client.request<CustomerGroupsQuery, CustomerGroupsQueryVariables>(
        CustomerGroupsDocument, variables
      );
      const conn = response.customerGroups;
      return new PlainConnection<CustomerGroupModel>({
        nodes: conn.edges.map(e => new CustomerGroupModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.customerGroups({ ...variables, ...cursor } as CustomerGroupsQueryVariables),
      });
    },

    async customerSurvey(variables: CustomerSurveyQueryVariables): Promise<CustomerSurveyModel> {
      const response = await _client.request<CustomerSurveyQuery, CustomerSurveyQueryVariables>(
        CustomerSurveyDocument, variables
      );
      if (!response.customerSurvey) {
        throw new Error("customerSurvey not found");
      }
      return new CustomerSurveyModel(_client, response.customerSurvey);
    },

    async customerSurveys(variables: CustomerSurveysQueryVariables): Promise<PlainConnection<CustomerSurveyModel>> {
      const response = await _client.request<CustomerSurveysQuery, CustomerSurveysQueryVariables>(
        CustomerSurveysDocument, variables
      );
      const conn = response.customerSurveys;
      return new PlainConnection<CustomerSurveyModel>({
        nodes: conn.edges.map(e => new CustomerSurveyModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.customerSurveys({ ...variables, ...cursor } as CustomerSurveysQueryVariables),
      });
    },

    async customers(variables: CustomersQueryVariables): Promise<PlainConnection<CustomerModel>> {
      const response = await _client.request<CustomersQuery, CustomersQueryVariables>(
        CustomersDocument, variables
      );
      const conn = response.customers;
      return new PlainConnection<CustomerModel>({
        nodes: conn.edges.map(e => new CustomerModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        totalCount: conn.totalCount,
        fetch: (cursor) => query.customers({ ...variables, ...cursor } as CustomersQueryVariables),
      });
    },

    async deletedThreads(variables: DeletedThreadsQueryVariables): Promise<PlainConnection<DeletedThreadModel>> {
      const response = await _client.request<DeletedThreadsQuery, DeletedThreadsQueryVariables>(
        DeletedThreadsDocument, variables
      );
      const conn = response.deletedThreads;
      return new PlainConnection<DeletedThreadModel>({
        nodes: conn.edges.map(e => new DeletedThreadModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.deletedThreads({ ...variables, ...cursor } as DeletedThreadsQueryVariables),
      });
    },

    async enabledAiToneRulesText(): Promise<NonNullable<EnabledAiToneRulesTextQuery["enabledAiToneRulesText"]>> {
      const response = await _client.request<EnabledAiToneRulesTextQuery, Record<string, never>>(
        EnabledAiToneRulesTextDocument
      );
      if (!response.enabledAiToneRulesText) {
        throw new Error("enabledAiToneRulesText not found");
      }
      return response.enabledAiToneRulesText;
    },

    async escalationPath(variables: EscalationPathQueryVariables): Promise<EscalationPathModel> {
      const response = await _client.request<EscalationPathQuery, EscalationPathQueryVariables>(
        EscalationPathDocument, variables
      );
      if (!response.escalationPath) {
        throw new Error("escalationPath not found");
      }
      return new EscalationPathModel(_client, response.escalationPath);
    },

    async escalationPaths(variables: EscalationPathsQueryVariables): Promise<PlainConnection<EscalationPathModel>> {
      const response = await _client.request<EscalationPathsQuery, EscalationPathsQueryVariables>(
        EscalationPathsDocument, variables
      );
      const conn = response.escalationPaths;
      return new PlainConnection<EscalationPathModel>({
        nodes: conn.edges.map(e => new EscalationPathModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.escalationPaths({ ...variables, ...cursor } as EscalationPathsQueryVariables),
      });
    },

    async generatedReplies(variables: GeneratedRepliesQueryVariables): Promise<GeneratedReplyModel[]> {
      const response = await _client.request<GeneratedRepliesQuery, GeneratedRepliesQueryVariables>(
        GeneratedRepliesDocument, variables
      );
      return (response.generatedReplies ?? []).map(d => new GeneratedReplyModel(_client, d));
    },

    async getMSTeamsMembersForChannel(variables: GetMsTeamsMembersForChannelQueryVariables): Promise<MSTeamsChannelMembersModel> {
      const response = await _client.request<GetMsTeamsMembersForChannelQuery, GetMsTeamsMembersForChannelQueryVariables>(
        GetMsTeamsMembersForChannelDocument, variables
      );
      return new MSTeamsChannelMembersModel(_client, response.getMSTeamsMembersForChannel);
    },

    async githubUserAuthIntegration(): Promise<GithubUserAuthIntegrationModel> {
      const response = await _client.request<GithubUserAuthIntegrationQuery, Record<string, never>>(
        GithubUserAuthIntegrationDocument
      );
      if (!response.githubUserAuthIntegration) {
        throw new Error("githubUserAuthIntegration not found");
      }
      return new GithubUserAuthIntegrationModel(_client, response.githubUserAuthIntegration);
    },

    async heatmapMetric(variables: HeatmapMetricQueryVariables): Promise<HeatmapMetricModel> {
      const response = await _client.request<HeatmapMetricQuery, HeatmapMetricQueryVariables>(
        HeatmapMetricDocument, variables
      );
      if (!response.heatmapMetric) {
        throw new Error("heatmapMetric not found");
      }
      return new HeatmapMetricModel(_client, response.heatmapMetric);
    },

    async helpCenter(variables: HelpCenterQueryVariables): Promise<HelpCenterModel> {
      const response = await _client.request<HelpCenterQuery, HelpCenterQueryVariables>(
        HelpCenterDocument, variables
      );
      if (!response.helpCenter) {
        throw new Error("helpCenter not found");
      }
      return new HelpCenterModel(_client, response.helpCenter);
    },

    async helpCenterArticle(variables: HelpCenterArticleQueryVariables): Promise<HelpCenterArticleModel> {
      const response = await _client.request<HelpCenterArticleQuery, HelpCenterArticleQueryVariables>(
        HelpCenterArticleDocument, variables
      );
      if (!response.helpCenterArticle) {
        throw new Error("helpCenterArticle not found");
      }
      return new HelpCenterArticleModel(_client, response.helpCenterArticle);
    },

    async helpCenterArticleBySlug(variables: HelpCenterArticleBySlugQueryVariables): Promise<HelpCenterArticleModel> {
      const response = await _client.request<HelpCenterArticleBySlugQuery, HelpCenterArticleBySlugQueryVariables>(
        HelpCenterArticleBySlugDocument, variables
      );
      if (!response.helpCenterArticleBySlug) {
        throw new Error("helpCenterArticleBySlug not found");
      }
      return new HelpCenterArticleModel(_client, response.helpCenterArticleBySlug);
    },

    async helpCenterArticleGroup(variables: HelpCenterArticleGroupQueryVariables): Promise<HelpCenterArticleGroupModel> {
      const response = await _client.request<HelpCenterArticleGroupQuery, HelpCenterArticleGroupQueryVariables>(
        HelpCenterArticleGroupDocument, variables
      );
      if (!response.helpCenterArticleGroup) {
        throw new Error("helpCenterArticleGroup not found");
      }
      return new HelpCenterArticleGroupModel(_client, response.helpCenterArticleGroup);
    },

    async helpCenterArticleGroupBySlug(variables: HelpCenterArticleGroupBySlugQueryVariables): Promise<HelpCenterArticleGroupModel> {
      const response = await _client.request<HelpCenterArticleGroupBySlugQuery, HelpCenterArticleGroupBySlugQueryVariables>(
        HelpCenterArticleGroupBySlugDocument, variables
      );
      if (!response.helpCenterArticleGroupBySlug) {
        throw new Error("helpCenterArticleGroupBySlug not found");
      }
      return new HelpCenterArticleGroupModel(_client, response.helpCenterArticleGroupBySlug);
    },

    async helpCenterIndex(variables: HelpCenterIndexQueryVariables): Promise<HelpCenterIndexModel> {
      const response = await _client.request<HelpCenterIndexQuery, HelpCenterIndexQueryVariables>(
        HelpCenterIndexDocument, variables
      );
      if (!response.helpCenterIndex) {
        throw new Error("helpCenterIndex not found");
      }
      return new HelpCenterIndexModel(_client, response.helpCenterIndex);
    },

    async helpCenters(variables: HelpCentersQueryVariables): Promise<PlainConnection<HelpCenterModel>> {
      const response = await _client.request<HelpCentersQuery, HelpCentersQueryVariables>(
        HelpCentersDocument, variables
      );
      const conn = response.helpCenters;
      return new PlainConnection<HelpCenterModel>({
        nodes: conn.edges.map(e => new HelpCenterModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.helpCenters({ ...variables, ...cursor } as HelpCentersQueryVariables),
      });
    },

    async importRuns(variables: ImportRunsQueryVariables): Promise<PlainConnection<ImportRunModel>> {
      const response = await _client.request<ImportRunsQuery, ImportRunsQueryVariables>(
        ImportRunsDocument, variables
      );
      const conn = response.importRuns;
      return new PlainConnection<ImportRunModel>({
        nodes: conn.edges.map(e => new ImportRunModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.importRuns({ ...variables, ...cursor } as ImportRunsQueryVariables),
      });
    },

    async importerTenantLists(variables: ImporterTenantListsQueryVariables): Promise<ImporterTenantListsQuery["importerTenantLists"]> {
      const response = await _client.request<ImporterTenantListsQuery, ImporterTenantListsQueryVariables>(
        ImporterTenantListsDocument, variables
      );
      return response.importerTenantLists;
    },

    async indexedDocuments(variables: IndexedDocumentsQueryVariables): Promise<PlainConnection<IndexedDocumentModel>> {
      const response = await _client.request<IndexedDocumentsQuery, IndexedDocumentsQueryVariables>(
        IndexedDocumentsDocument, variables
      );
      const conn = response.indexedDocuments;
      return new PlainConnection<IndexedDocumentModel>({
        nodes: conn.edges.map(e => new IndexedDocumentModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.indexedDocuments({ ...variables, ...cursor } as IndexedDocumentsQueryVariables),
      });
    },

    async issueTrackerFields(variables: IssueTrackerFieldsQueryVariables): Promise<IssueTrackerFieldModel[]> {
      const response = await _client.request<IssueTrackerFieldsQuery, IssueTrackerFieldsQueryVariables>(
        IssueTrackerFieldsDocument, variables
      );
      return (response.issueTrackerFields ?? []).map(d => new IssueTrackerFieldModel(_client, d));
    },

    async knowledgeGap(variables: KnowledgeGapQueryVariables): Promise<KnowledgeGapModel> {
      const response = await _client.request<KnowledgeGapQuery, KnowledgeGapQueryVariables>(
        KnowledgeGapDocument, variables
      );
      if (!response.knowledgeGap) {
        throw new Error("knowledgeGap not found");
      }
      return new KnowledgeGapModel(_client, response.knowledgeGap);
    },

    async knowledgeGaps(variables: KnowledgeGapsQueryVariables): Promise<PlainConnection<KnowledgeGapModel>> {
      const response = await _client.request<KnowledgeGapsQuery, KnowledgeGapsQueryVariables>(
        KnowledgeGapsDocument, variables
      );
      const conn = response.knowledgeGaps;
      return new PlainConnection<KnowledgeGapModel>({
        nodes: conn.edges.map(e => new KnowledgeGapModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        totalCount: conn.totalCount,
        fetch: (cursor) => query.knowledgeGaps({ ...variables, ...cursor } as KnowledgeGapsQueryVariables),
      });
    },

    async knowledgeSource(variables: KnowledgeSourceQueryVariables): Promise<NonNullable<KnowledgeSourceQuery["knowledgeSource"]>> {
      const response = await _client.request<KnowledgeSourceQuery, KnowledgeSourceQueryVariables>(
        KnowledgeSourceDocument, variables
      );
      if (!response.knowledgeSource) {
        throw new Error("knowledgeSource not found");
      }
      return response.knowledgeSource;
    },

    async knowledgeSources(variables: KnowledgeSourcesQueryVariables): Promise<KnowledgeSourcesQuery["knowledgeSources"]> {
      const response = await _client.request<KnowledgeSourcesQuery, KnowledgeSourcesQueryVariables>(
        KnowledgeSourcesDocument, variables
      );
      return response.knowledgeSources;
    },

    async labelType(variables: LabelTypeQueryVariables): Promise<LabelTypeModel> {
      const response = await _client.request<LabelTypeQuery, LabelTypeQueryVariables>(
        LabelTypeDocument, variables
      );
      if (!response.labelType) {
        throw new Error("labelType not found");
      }
      return new LabelTypeModel(_client, response.labelType);
    },

    async labelTypeByExternalId(variables: LabelTypeByExternalIdQueryVariables): Promise<LabelTypeModel> {
      const response = await _client.request<LabelTypeByExternalIdQuery, LabelTypeByExternalIdQueryVariables>(
        LabelTypeByExternalIdDocument, variables
      );
      if (!response.labelTypeByExternalId) {
        throw new Error("labelTypeByExternalId not found");
      }
      return new LabelTypeModel(_client, response.labelTypeByExternalId);
    },

    async labelTypes(variables: LabelTypesQueryVariables): Promise<PlainConnection<LabelTypeModel>> {
      const response = await _client.request<LabelTypesQuery, LabelTypesQueryVariables>(
        LabelTypesDocument, variables
      );
      const conn = response.labelTypes;
      return new PlainConnection<LabelTypeModel>({
        nodes: conn.edges.map(e => new LabelTypeModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.labelTypes({ ...variables, ...cursor } as LabelTypesQueryVariables),
      });
    },

    async machineUser(variables: MachineUserQueryVariables): Promise<MachineUserModel> {
      const response = await _client.request<MachineUserQuery, MachineUserQueryVariables>(
        MachineUserDocument, variables
      );
      if (!response.machineUser) {
        throw new Error("machineUser not found");
      }
      return new MachineUserModel(_client, response.machineUser);
    },

    async machineUsers(variables: MachineUsersQueryVariables): Promise<PlainConnection<MachineUserModel>> {
      const response = await _client.request<MachineUsersQuery, MachineUsersQueryVariables>(
        MachineUsersDocument, variables
      );
      const conn = response.machineUsers;
      return new PlainConnection<MachineUserModel>({
        nodes: conn.edges.map(e => new MachineUserModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.machineUsers({ ...variables, ...cursor } as MachineUsersQueryVariables),
      });
    },

    async myBillingRota(): Promise<NonNullable<MyBillingRotaQuery["myBillingRota"]>> {
      const response = await _client.request<MyBillingRotaQuery, Record<string, never>>(
        MyBillingRotaDocument
      );
      if (!response.myBillingRota) {
        throw new Error("myBillingRota not found");
      }
      return response.myBillingRota;
    },

    async myBillingSubscription(): Promise<BillingSubscriptionModel> {
      const response = await _client.request<MyBillingSubscriptionQuery, Record<string, never>>(
        MyBillingSubscriptionDocument
      );
      if (!response.myBillingSubscription) {
        throw new Error("myBillingSubscription not found");
      }
      return new BillingSubscriptionModel(_client, response.myBillingSubscription);
    },

    async myEmailSignature(): Promise<EmailSignatureModel> {
      const response = await _client.request<MyEmailSignatureQuery, Record<string, never>>(
        MyEmailSignatureDocument
      );
      if (!response.myEmailSignature) {
        throw new Error("myEmailSignature not found");
      }
      return new EmailSignatureModel(_client, response.myEmailSignature);
    },

    async myFavoritePages(variables: MyFavoritePagesQueryVariables): Promise<PlainConnection<FavoritePageModel>> {
      const response = await _client.request<MyFavoritePagesQuery, MyFavoritePagesQueryVariables>(
        MyFavoritePagesDocument, variables
      );
      const conn = response.myFavoritePages;
      return new PlainConnection<FavoritePageModel>({
        nodes: conn.edges.map(e => new FavoritePageModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.myFavoritePages({ ...variables, ...cursor } as MyFavoritePagesQueryVariables),
      });
    },

    async myInternalNotifications(variables: MyInternalNotificationsQueryVariables): Promise<PlainConnection<InternalNotificationModel>> {
      const response = await _client.request<MyInternalNotificationsQuery, MyInternalNotificationsQueryVariables>(
        MyInternalNotificationsDocument, variables
      );
      const conn = response.myInternalNotifications;
      return new PlainConnection<InternalNotificationModel>({
        nodes: conn.edges.map(e => new InternalNotificationModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        totalCount: conn.totalCount,
        fetch: (cursor) => query.myInternalNotifications({ ...variables, ...cursor } as MyInternalNotificationsQueryVariables),
      });
    },

    async myJiraIntegrationToken(): Promise<JiraIntegrationTokenModel> {
      const response = await _client.request<MyJiraIntegrationTokenQuery, Record<string, never>>(
        MyJiraIntegrationTokenDocument
      );
      if (!response.myJiraIntegrationToken) {
        throw new Error("myJiraIntegrationToken not found");
      }
      return new JiraIntegrationTokenModel(_client, response.myJiraIntegrationToken);
    },

    async myLinearInstallationInfo(variables: MyLinearInstallationInfoQueryVariables): Promise<MyLinearInstallationInfoQuery["myLinearInstallationInfo"]> {
      const response = await _client.request<MyLinearInstallationInfoQuery, MyLinearInstallationInfoQueryVariables>(
        MyLinearInstallationInfoDocument, variables
      );
      return response.myLinearInstallationInfo;
    },

    async myLinearIntegration(): Promise<UserLinearIntegrationModel> {
      const response = await _client.request<MyLinearIntegrationQuery, Record<string, never>>(
        MyLinearIntegrationDocument
      );
      if (!response.myLinearIntegration) {
        throw new Error("myLinearIntegration not found");
      }
      return new UserLinearIntegrationModel(_client, response.myLinearIntegration);
    },

    async myLinearIntegrationToken(): Promise<NonNullable<MyLinearIntegrationTokenQuery["myLinearIntegrationToken"]>> {
      const response = await _client.request<MyLinearIntegrationTokenQuery, Record<string, never>>(
        MyLinearIntegrationTokenDocument
      );
      if (!response.myLinearIntegrationToken) {
        throw new Error("myLinearIntegrationToken not found");
      }
      return response.myLinearIntegrationToken;
    },

    async myMSTeamsInstallationInfo(variables: MyMsTeamsInstallationInfoQueryVariables): Promise<MyMsTeamsInstallationInfoQuery["myMSTeamsInstallationInfo"]> {
      const response = await _client.request<MyMsTeamsInstallationInfoQuery, MyMsTeamsInstallationInfoQueryVariables>(
        MyMsTeamsInstallationInfoDocument, variables
      );
      return response.myMSTeamsInstallationInfo;
    },

    async myMSTeamsIntegration(): Promise<UserMSTeamsIntegrationModel> {
      const response = await _client.request<MyMsTeamsIntegrationQuery, Record<string, never>>(
        MyMsTeamsIntegrationDocument
      );
      if (!response.myMSTeamsIntegration) {
        throw new Error("myMSTeamsIntegration not found");
      }
      return new UserMSTeamsIntegrationModel(_client, response.myMSTeamsIntegration);
    },

    async myMachineUser(): Promise<MachineUserModel> {
      const response = await _client.request<MyMachineUserQuery, Record<string, never>>(
        MyMachineUserDocument
      );
      if (!response.myMachineUser) {
        throw new Error("myMachineUser not found");
      }
      return new MachineUserModel(_client, response.myMachineUser);
    },

    async myPaymentMethod(): Promise<NonNullable<MyPaymentMethodQuery["myPaymentMethod"]>> {
      const response = await _client.request<MyPaymentMethodQuery, Record<string, never>>(
        MyPaymentMethodDocument
      );
      if (!response.myPaymentMethod) {
        throw new Error("myPaymentMethod not found");
      }
      return response.myPaymentMethod;
    },

    async myPermissions(): Promise<MyPermissionsQuery["myPermissions"]> {
      const response = await _client.request<MyPermissionsQuery, Record<string, never>>(
        MyPermissionsDocument
      );
      return response.myPermissions;
    },

    async mySlackInstallationInfo(variables: MySlackInstallationInfoQueryVariables): Promise<MySlackInstallationInfoQuery["mySlackInstallationInfo"]> {
      const response = await _client.request<MySlackInstallationInfoQuery, MySlackInstallationInfoQueryVariables>(
        MySlackInstallationInfoDocument, variables
      );
      return response.mySlackInstallationInfo;
    },

    async mySlackIntegration(): Promise<UserSlackIntegrationModel> {
      const response = await _client.request<MySlackIntegrationQuery, Record<string, never>>(
        MySlackIntegrationDocument
      );
      if (!response.mySlackIntegration) {
        throw new Error("mySlackIntegration not found");
      }
      return new UserSlackIntegrationModel(_client, response.mySlackIntegration);
    },

    async myUser(): Promise<UserModel> {
      const response = await _client.request<MyUserQuery, Record<string, never>>(
        MyUserDocument
      );
      if (!response.myUser) {
        throw new Error("myUser not found");
      }
      return new UserModel(_client, response.myUser);
    },

    async myUserAccount(): Promise<NonNullable<MyUserAccountQuery["myUserAccount"]>> {
      const response = await _client.request<MyUserAccountQuery, Record<string, never>>(
        MyUserAccountDocument
      );
      if (!response.myUserAccount) {
        throw new Error("myUserAccount not found");
      }
      return response.myUserAccount;
    },

    async myWorkspace(): Promise<WorkspaceModel> {
      const response = await _client.request<MyWorkspaceQuery, Record<string, never>>(
        MyWorkspaceDocument
      );
      if (!response.myWorkspace) {
        throw new Error("myWorkspace not found");
      }
      return new WorkspaceModel(_client, response.myWorkspace);
    },

    async myWorkspaceInvites(variables: MyWorkspaceInvitesQueryVariables): Promise<PlainConnection<WorkspaceInviteModel>> {
      const response = await _client.request<MyWorkspaceInvitesQuery, MyWorkspaceInvitesQueryVariables>(
        MyWorkspaceInvitesDocument, variables
      );
      const conn = response.myWorkspaceInvites;
      return new PlainConnection<WorkspaceInviteModel>({
        nodes: conn.edges.map(e => new WorkspaceInviteModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.myWorkspaceInvites({ ...variables, ...cursor } as MyWorkspaceInvitesQueryVariables),
      });
    },

    async myWorkspaces(variables: MyWorkspacesQueryVariables): Promise<PlainConnection<WorkspaceModel>> {
      const response = await _client.request<MyWorkspacesQuery, MyWorkspacesQueryVariables>(
        MyWorkspacesDocument, variables
      );
      const conn = response.myWorkspaces;
      return new PlainConnection<WorkspaceModel>({
        nodes: conn.edges.map(e => new WorkspaceModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.myWorkspaces({ ...variables, ...cursor } as MyWorkspacesQueryVariables),
      });
    },

    async permissions(): Promise<PermissionsQuery["permissions"]> {
      const response = await _client.request<PermissionsQuery, Record<string, never>>(
        PermissionsDocument
      );
      return response.permissions;
    },

    async relatedThreads(variables: RelatedThreadsQueryVariables): Promise<ThreadWithDistanceModel[]> {
      const response = await _client.request<RelatedThreadsQuery, RelatedThreadsQueryVariables>(
        RelatedThreadsDocument, variables
      );
      return (response.relatedThreads ?? []).map(d => new ThreadWithDistanceModel(_client, d));
    },

    async roles(variables: RolesQueryVariables): Promise<PlainConnection<RoleModel>> {
      const response = await _client.request<RolesQuery, RolesQueryVariables>(
        RolesDocument, variables
      );
      const conn = response.roles;
      return new PlainConnection<RoleModel>({
        nodes: conn.edges.map(e => new RoleModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.roles({ ...variables, ...cursor } as RolesQueryVariables),
      });
    },

    async savedThreadsView(variables: SavedThreadsViewQueryVariables): Promise<SavedThreadsViewModel> {
      const response = await _client.request<SavedThreadsViewQuery, SavedThreadsViewQueryVariables>(
        SavedThreadsViewDocument, variables
      );
      if (!response.savedThreadsView) {
        throw new Error("savedThreadsView not found");
      }
      return new SavedThreadsViewModel(_client, response.savedThreadsView);
    },

    async savedThreadsViews(variables: SavedThreadsViewsQueryVariables): Promise<PlainConnection<SavedThreadsViewModel>> {
      const response = await _client.request<SavedThreadsViewsQuery, SavedThreadsViewsQueryVariables>(
        SavedThreadsViewsDocument, variables
      );
      const conn = response.savedThreadsViews;
      return new PlainConnection<SavedThreadsViewModel>({
        nodes: conn.edges.map(e => new SavedThreadsViewModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.savedThreadsViews({ ...variables, ...cursor } as SavedThreadsViewsQueryVariables),
      });
    },

    async searchCompanies(variables: SearchCompaniesQueryVariables): Promise<SearchCompaniesQuery["searchCompanies"]> {
      const response = await _client.request<SearchCompaniesQuery, SearchCompaniesQueryVariables>(
        SearchCompaniesDocument, variables
      );
      return response.searchCompanies;
    },

    async searchCustomers(variables: SearchCustomersQueryVariables): Promise<PlainConnection<CustomerModel>> {
      const response = await _client.request<SearchCustomersQuery, SearchCustomersQueryVariables>(
        SearchCustomersDocument, variables
      );
      const conn = response.searchCustomers;
      return new PlainConnection<CustomerModel>({
        nodes: conn.edges.map(e => new CustomerModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.searchCustomers({ ...variables, ...cursor } as SearchCustomersQueryVariables),
      });
    },

    async searchKnowledgeSources(variables: SearchKnowledgeSourcesQueryVariables): Promise<SearchKnowledgeSourcesQuery["searchKnowledgeSources"]> {
      const response = await _client.request<SearchKnowledgeSourcesQuery, SearchKnowledgeSourcesQueryVariables>(
        SearchKnowledgeSourcesDocument, variables
      );
      return response.searchKnowledgeSources;
    },

    async searchSlackUsers(variables: SearchSlackUsersQueryVariables): Promise<PlainConnection<SlackUserModel>> {
      const response = await _client.request<SearchSlackUsersQuery, SearchSlackUsersQueryVariables>(
        SearchSlackUsersDocument, variables
      );
      const conn = response.searchSlackUsers;
      return new PlainConnection<SlackUserModel>({
        nodes: conn.edges.map(e => new SlackUserModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.searchSlackUsers({ ...variables, ...cursor } as SearchSlackUsersQueryVariables),
      });
    },

    async searchTenants(variables: SearchTenantsQueryVariables): Promise<SearchTenantsQuery["searchTenants"]> {
      const response = await _client.request<SearchTenantsQuery, SearchTenantsQueryVariables>(
        SearchTenantsDocument, variables
      );
      return response.searchTenants;
    },

    async searchThreadLinkCandidates(variables: SearchThreadLinkCandidatesQueryVariables): Promise<PlainConnection<ThreadLinkCandidateModel>> {
      const response = await _client.request<SearchThreadLinkCandidatesQuery, SearchThreadLinkCandidatesQueryVariables>(
        SearchThreadLinkCandidatesDocument, variables
      );
      const conn = response.searchThreadLinkCandidates;
      return new PlainConnection<ThreadLinkCandidateModel>({
        nodes: conn.edges.map(e => new ThreadLinkCandidateModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.searchThreadLinkCandidates({ ...variables, ...cursor } as SearchThreadLinkCandidatesQueryVariables),
      });
    },

    async searchThreadSlackUsers(variables: SearchThreadSlackUsersQueryVariables): Promise<PlainConnection<SlackUserModel>> {
      const response = await _client.request<SearchThreadSlackUsersQuery, SearchThreadSlackUsersQueryVariables>(
        SearchThreadSlackUsersDocument, variables
      );
      const conn = response.searchThreadSlackUsers;
      return new PlainConnection<SlackUserModel>({
        nodes: conn.edges.map(e => new SlackUserModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.searchThreadSlackUsers({ ...variables, ...cursor } as SearchThreadSlackUsersQueryVariables),
      });
    },

    async searchThreads(variables: SearchThreadsQueryVariables): Promise<SearchThreadsQuery["searchThreads"]> {
      const response = await _client.request<SearchThreadsQuery, SearchThreadsQueryVariables>(
        SearchThreadsDocument, variables
      );
      return response.searchThreads;
    },

    async serviceAuthorization(variables: ServiceAuthorizationQueryVariables): Promise<ServiceAuthorizationModel> {
      const response = await _client.request<ServiceAuthorizationQuery, ServiceAuthorizationQueryVariables>(
        ServiceAuthorizationDocument, variables
      );
      if (!response.serviceAuthorization) {
        throw new Error("serviceAuthorization not found");
      }
      return new ServiceAuthorizationModel(_client, response.serviceAuthorization);
    },

    async serviceAuthorizations(variables: ServiceAuthorizationsQueryVariables): Promise<PlainConnection<ServiceAuthorizationModel>> {
      const response = await _client.request<ServiceAuthorizationsQuery, ServiceAuthorizationsQueryVariables>(
        ServiceAuthorizationsDocument, variables
      );
      const conn = response.serviceAuthorizations;
      return new PlainConnection<ServiceAuthorizationModel>({
        nodes: conn.edges.map(e => new ServiceAuthorizationModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.serviceAuthorizations({ ...variables, ...cursor } as ServiceAuthorizationsQueryVariables),
      });
    },

    async setting(variables: SettingQueryVariables): Promise<NonNullable<SettingQuery["setting"]>> {
      const response = await _client.request<SettingQuery, SettingQueryVariables>(
        SettingDocument, variables
      );
      if (!response.setting) {
        throw new Error("setting not found");
      }
      return response.setting;
    },

    async singleValueMetric(variables: SingleValueMetricQueryVariables): Promise<NonNullable<SingleValueMetricQuery["singleValueMetric"]>> {
      const response = await _client.request<SingleValueMetricQuery, SingleValueMetricQueryVariables>(
        SingleValueMetricDocument, variables
      );
      if (!response.singleValueMetric) {
        throw new Error("singleValueMetric not found");
      }
      return response.singleValueMetric;
    },

    async slackUser(variables: SlackUserQueryVariables): Promise<SlackUserModel> {
      const response = await _client.request<SlackUserQuery, SlackUserQueryVariables>(
        SlackUserDocument, variables
      );
      if (!response.slackUser) {
        throw new Error("slackUser not found");
      }
      return new SlackUserModel(_client, response.slackUser);
    },

    async snippet(variables: SnippetQueryVariables): Promise<SnippetModel> {
      const response = await _client.request<SnippetQuery, SnippetQueryVariables>(
        SnippetDocument, variables
      );
      if (!response.snippet) {
        throw new Error("snippet not found");
      }
      return new SnippetModel(_client, response.snippet);
    },

    async snippets(variables: SnippetsQueryVariables): Promise<PlainConnection<SnippetModel>> {
      const response = await _client.request<SnippetsQuery, SnippetsQueryVariables>(
        SnippetsDocument, variables
      );
      const conn = response.snippets;
      return new PlainConnection<SnippetModel>({
        nodes: conn.edges.map(e => new SnippetModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.snippets({ ...variables, ...cursor } as SnippetsQueryVariables),
      });
    },

    async subscriptionEventTypes(): Promise<SubscriptionEventTypesQuery["subscriptionEventTypes"]> {
      const response = await _client.request<SubscriptionEventTypesQuery, Record<string, never>>(
        SubscriptionEventTypesDocument
      );
      return response.subscriptionEventTypes;
    },

    async task(variables: TaskQueryVariables): Promise<TaskModel> {
      const response = await _client.request<TaskQuery, TaskQueryVariables>(
        TaskDocument, variables
      );
      if (!response.task) {
        throw new Error("task not found");
      }
      return new TaskModel(_client, response.task);
    },

    async taskByRef(variables: TaskByRefQueryVariables): Promise<TaskModel> {
      const response = await _client.request<TaskByRefQuery, TaskByRefQueryVariables>(
        TaskByRefDocument, variables
      );
      if (!response.taskByRef) {
        throw new Error("taskByRef not found");
      }
      return new TaskModel(_client, response.taskByRef);
    },

    async tasks(variables: TasksQueryVariables): Promise<PlainConnection<TaskModel>> {
      const response = await _client.request<TasksQuery, TasksQueryVariables>(
        TasksDocument, variables
      );
      const conn = response.tasks;
      return new PlainConnection<TaskModel>({
        nodes: conn.edges.map(e => new TaskModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        totalCount: conn.totalCount,
        fetch: (cursor) => query.tasks({ ...variables, ...cursor } as TasksQueryVariables),
      });
    },

    async teamSettings(variables: TeamSettingsQueryVariables): Promise<TeamSettingsModel> {
      const response = await _client.request<TeamSettingsQuery, TeamSettingsQueryVariables>(
        TeamSettingsDocument, variables
      );
      if (!response.teamSettings) {
        throw new Error("teamSettings not found");
      }
      return new TeamSettingsModel(_client, response.teamSettings);
    },

    async tenant(variables: TenantQueryVariables): Promise<TenantModel> {
      const response = await _client.request<TenantQuery, TenantQueryVariables>(
        TenantDocument, variables
      );
      if (!response.tenant) {
        throw new Error("tenant not found");
      }
      return new TenantModel(_client, response.tenant);
    },

    async tenantFieldSchemas(variables: TenantFieldSchemasQueryVariables): Promise<PlainConnection<TenantFieldSchemaModel>> {
      const response = await _client.request<TenantFieldSchemasQuery, TenantFieldSchemasQueryVariables>(
        TenantFieldSchemasDocument, variables
      );
      const conn = response.tenantFieldSchemas;
      return new PlainConnection<TenantFieldSchemaModel>({
        nodes: conn.edges.map(e => new TenantFieldSchemaModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.tenantFieldSchemas({ ...variables, ...cursor } as TenantFieldSchemasQueryVariables),
      });
    },

    async tenants(variables: TenantsQueryVariables): Promise<PlainConnection<TenantModel>> {
      const response = await _client.request<TenantsQuery, TenantsQueryVariables>(
        TenantsDocument, variables
      );
      const conn = response.tenants;
      return new PlainConnection<TenantModel>({
        nodes: conn.edges.map(e => new TenantModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.tenants({ ...variables, ...cursor } as TenantsQueryVariables),
      });
    },

    async thread(variables: ThreadQueryVariables): Promise<ThreadModel> {
      const response = await _client.request<ThreadQuery, ThreadQueryVariables>(
        ThreadDocument, variables
      );
      if (!response.thread) {
        throw new Error("thread not found");
      }
      return new ThreadModel(_client, response.thread);
    },

    async threadByExternalId(variables: ThreadByExternalIdQueryVariables): Promise<ThreadModel> {
      const response = await _client.request<ThreadByExternalIdQuery, ThreadByExternalIdQueryVariables>(
        ThreadByExternalIdDocument, variables
      );
      if (!response.threadByExternalId) {
        throw new Error("threadByExternalId not found");
      }
      return new ThreadModel(_client, response.threadByExternalId);
    },

    async threadByRef(variables: ThreadByRefQueryVariables): Promise<ThreadModel> {
      const response = await _client.request<ThreadByRefQuery, ThreadByRefQueryVariables>(
        ThreadByRefDocument, variables
      );
      if (!response.threadByRef) {
        throw new Error("threadByRef not found");
      }
      return new ThreadModel(_client, response.threadByRef);
    },

    async threadBySlackPermalink(variables: ThreadBySlackPermalinkQueryVariables): Promise<ThreadModel> {
      const response = await _client.request<ThreadBySlackPermalinkQuery, ThreadBySlackPermalinkQueryVariables>(
        ThreadBySlackPermalinkDocument, variables
      );
      if (!response.threadBySlackPermalink) {
        throw new Error("threadBySlackPermalink not found");
      }
      return new ThreadModel(_client, response.threadBySlackPermalink);
    },

    async threadCluster(variables: ThreadClusterQueryVariables): Promise<ThreadClusterModel> {
      const response = await _client.request<ThreadClusterQuery, ThreadClusterQueryVariables>(
        ThreadClusterDocument, variables
      );
      if (!response.threadCluster) {
        throw new Error("threadCluster not found");
      }
      return new ThreadClusterModel(_client, response.threadCluster);
    },

    async threadClusters(variables: ThreadClustersQueryVariables): Promise<ThreadClusterModel[]> {
      const response = await _client.request<ThreadClustersQuery, ThreadClustersQueryVariables>(
        ThreadClustersDocument, variables
      );
      return (response.threadClusters ?? []).map(d => new ThreadClusterModel(_client, d));
    },

    async threadClustersPaginated(variables: ThreadClustersPaginatedQueryVariables): Promise<PlainConnection<ThreadClusterModel>> {
      const response = await _client.request<ThreadClustersPaginatedQuery, ThreadClustersPaginatedQueryVariables>(
        ThreadClustersPaginatedDocument, variables
      );
      const conn = response.threadClustersPaginated;
      return new PlainConnection<ThreadClusterModel>({
        nodes: conn.edges.map(e => new ThreadClusterModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.threadClustersPaginated({ ...variables, ...cursor } as ThreadClustersPaginatedQueryVariables),
      });
    },

    async threadDiscussion(variables: ThreadDiscussionQueryVariables): Promise<ThreadDiscussionModel> {
      const response = await _client.request<ThreadDiscussionQuery, ThreadDiscussionQueryVariables>(
        ThreadDiscussionDocument, variables
      );
      if (!response.threadDiscussion) {
        throw new Error("threadDiscussion not found");
      }
      return new ThreadDiscussionModel(_client, response.threadDiscussion);
    },

    async threadFieldSchema(variables: ThreadFieldSchemaQueryVariables): Promise<ThreadFieldSchemaModel> {
      const response = await _client.request<ThreadFieldSchemaQuery, ThreadFieldSchemaQueryVariables>(
        ThreadFieldSchemaDocument, variables
      );
      if (!response.threadFieldSchema) {
        throw new Error("threadFieldSchema not found");
      }
      return new ThreadFieldSchemaModel(_client, response.threadFieldSchema);
    },

    async threadFieldSchemas(variables: ThreadFieldSchemasQueryVariables): Promise<PlainConnection<ThreadFieldSchemaModel>> {
      const response = await _client.request<ThreadFieldSchemasQuery, ThreadFieldSchemasQueryVariables>(
        ThreadFieldSchemasDocument, variables
      );
      const conn = response.threadFieldSchemas;
      return new PlainConnection<ThreadFieldSchemaModel>({
        nodes: conn.edges.map(e => new ThreadFieldSchemaModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.threadFieldSchemas({ ...variables, ...cursor } as ThreadFieldSchemasQueryVariables),
      });
    },

    async threadLinkGroups(variables: ThreadLinkGroupsQueryVariables): Promise<PlainConnection<ThreadLinkGroupModel>> {
      const response = await _client.request<ThreadLinkGroupsQuery, ThreadLinkGroupsQueryVariables>(
        ThreadLinkGroupsDocument, variables
      );
      const conn = response.threadLinkGroups;
      return new PlainConnection<ThreadLinkGroupModel>({
        nodes: conn.edges.map(e => new ThreadLinkGroupModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.threadLinkGroups({ ...variables, ...cursor } as ThreadLinkGroupsQueryVariables),
      });
    },

    async threadSlackUser(variables: ThreadSlackUserQueryVariables): Promise<SlackUserModel> {
      const response = await _client.request<ThreadSlackUserQuery, ThreadSlackUserQueryVariables>(
        ThreadSlackUserDocument, variables
      );
      if (!response.threadSlackUser) {
        throw new Error("threadSlackUser not found");
      }
      return new SlackUserModel(_client, response.threadSlackUser);
    },

    async threads(variables: ThreadsQueryVariables): Promise<PlainConnection<ThreadModel>> {
      const response = await _client.request<ThreadsQuery, ThreadsQueryVariables>(
        ThreadsDocument, variables
      );
      const conn = response.threads;
      return new PlainConnection<ThreadModel>({
        nodes: conn.edges.map(e => new ThreadModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        totalCount: conn.totalCount,
        fetch: (cursor) => query.threads({ ...variables, ...cursor } as ThreadsQueryVariables),
      });
    },

    async tier(variables: TierQueryVariables): Promise<TierModel> {
      const response = await _client.request<TierQuery, TierQueryVariables>(
        TierDocument, variables
      );
      if (!response.tier) {
        throw new Error("tier not found");
      }
      return new TierModel(_client, response.tier);
    },

    async tiers(variables: TiersQueryVariables): Promise<PlainConnection<TierModel>> {
      const response = await _client.request<TiersQuery, TiersQueryVariables>(
        TiersDocument, variables
      );
      const conn = response.tiers;
      return new PlainConnection<TierModel>({
        nodes: conn.edges.map(e => new TierModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.tiers({ ...variables, ...cursor } as TiersQueryVariables),
      });
    },

    async timeSeriesMetric(variables: TimeSeriesMetricQueryVariables): Promise<TimeSeriesMetricModel> {
      const response = await _client.request<TimeSeriesMetricQuery, TimeSeriesMetricQueryVariables>(
        TimeSeriesMetricDocument, variables
      );
      if (!response.timeSeriesMetric) {
        throw new Error("timeSeriesMetric not found");
      }
      return new TimeSeriesMetricModel(_client, response.timeSeriesMetric);
    },

    async timelineEntries(variables: TimelineEntriesQueryVariables): Promise<PlainConnection<TimelineEntryModel>> {
      const response = await _client.request<TimelineEntriesQuery, TimelineEntriesQueryVariables>(
        TimelineEntriesDocument, variables
      );
      const conn = response.timelineEntries;
      return new PlainConnection<TimelineEntryModel>({
        nodes: conn.edges.map(e => new TimelineEntryModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.timelineEntries({ ...variables, ...cursor } as TimelineEntriesQueryVariables),
      });
    },

    async timelineEntry(variables: TimelineEntryQueryVariables): Promise<TimelineEntryModel> {
      const response = await _client.request<TimelineEntryQuery, TimelineEntryQueryVariables>(
        TimelineEntryDocument, variables
      );
      if (!response.timelineEntry) {
        throw new Error("timelineEntry not found");
      }
      return new TimelineEntryModel(_client, response.timelineEntry);
    },

    async user(variables: UserQueryVariables): Promise<UserModel> {
      const response = await _client.request<UserQuery, UserQueryVariables>(
        UserDocument, variables
      );
      if (!response.user) {
        throw new Error("user not found");
      }
      return new UserModel(_client, response.user);
    },

    async userAuthDiscordChannelInstallationInfo(variables: UserAuthDiscordChannelInstallationInfoQueryVariables): Promise<UserAuthDiscordChannelInstallationInfoQuery["userAuthDiscordChannelInstallationInfo"]> {
      const response = await _client.request<UserAuthDiscordChannelInstallationInfoQuery, UserAuthDiscordChannelInstallationInfoQueryVariables>(
        UserAuthDiscordChannelInstallationInfoDocument, variables
      );
      return response.userAuthDiscordChannelInstallationInfo;
    },

    async userAuthDiscordChannelIntegration(variables: UserAuthDiscordChannelIntegrationQueryVariables): Promise<UserAuthDiscordChannelIntegrationModel> {
      const response = await _client.request<UserAuthDiscordChannelIntegrationQuery, UserAuthDiscordChannelIntegrationQueryVariables>(
        UserAuthDiscordChannelIntegrationDocument, variables
      );
      if (!response.userAuthDiscordChannelIntegration) {
        throw new Error("userAuthDiscordChannelIntegration not found");
      }
      return new UserAuthDiscordChannelIntegrationModel(_client, response.userAuthDiscordChannelIntegration);
    },

    async userAuthDiscordChannelIntegrations(variables: UserAuthDiscordChannelIntegrationsQueryVariables): Promise<PlainConnection<UserAuthDiscordChannelIntegrationModel>> {
      const response = await _client.request<UserAuthDiscordChannelIntegrationsQuery, UserAuthDiscordChannelIntegrationsQueryVariables>(
        UserAuthDiscordChannelIntegrationsDocument, variables
      );
      const conn = response.userAuthDiscordChannelIntegrations;
      return new PlainConnection<UserAuthDiscordChannelIntegrationModel>({
        nodes: conn.edges.map(e => new UserAuthDiscordChannelIntegrationModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.userAuthDiscordChannelIntegrations({ ...variables, ...cursor } as UserAuthDiscordChannelIntegrationsQueryVariables),
      });
    },

    async userAuthSlackInstallationInfo(variables: UserAuthSlackInstallationInfoQueryVariables): Promise<UserAuthSlackInstallationInfoQuery["userAuthSlackInstallationInfo"]> {
      const response = await _client.request<UserAuthSlackInstallationInfoQuery, UserAuthSlackInstallationInfoQueryVariables>(
        UserAuthSlackInstallationInfoDocument, variables
      );
      return response.userAuthSlackInstallationInfo;
    },

    async userAuthSlackIntegration(variables: UserAuthSlackIntegrationQueryVariables): Promise<UserAuthSlackIntegrationModel> {
      const response = await _client.request<UserAuthSlackIntegrationQuery, UserAuthSlackIntegrationQueryVariables>(
        UserAuthSlackIntegrationDocument, variables
      );
      if (!response.userAuthSlackIntegration) {
        throw new Error("userAuthSlackIntegration not found");
      }
      return new UserAuthSlackIntegrationModel(_client, response.userAuthSlackIntegration);
    },

    async userAuthSlackIntegrationByThreadId(variables: UserAuthSlackIntegrationByThreadIdQueryVariables): Promise<UserAuthSlackIntegrationModel> {
      const response = await _client.request<UserAuthSlackIntegrationByThreadIdQuery, UserAuthSlackIntegrationByThreadIdQueryVariables>(
        UserAuthSlackIntegrationByThreadIdDocument, variables
      );
      if (!response.userAuthSlackIntegrationByThreadId) {
        throw new Error("userAuthSlackIntegrationByThreadId not found");
      }
      return new UserAuthSlackIntegrationModel(_client, response.userAuthSlackIntegrationByThreadId);
    },

    async userByEmail(variables: UserByEmailQueryVariables): Promise<UserModel> {
      const response = await _client.request<UserByEmailQuery, UserByEmailQueryVariables>(
        UserByEmailDocument, variables
      );
      if (!response.userByEmail) {
        throw new Error("userByEmail not found");
      }
      return new UserModel(_client, response.userByEmail);
    },

    async userSlackChannelMemberships(variables: UserSlackChannelMembershipsQueryVariables): Promise<UserSlackChannelMembershipsQuery["userSlackChannelMemberships"]> {
      const response = await _client.request<UserSlackChannelMembershipsQuery, UserSlackChannelMembershipsQueryVariables>(
        UserSlackChannelMembershipsDocument, variables
      );
      return response.userSlackChannelMemberships;
    },

    async users(variables: UsersQueryVariables): Promise<PlainConnection<UserModel>> {
      const response = await _client.request<UsersQuery, UsersQueryVariables>(
        UsersDocument, variables
      );
      const conn = response.users;
      return new PlainConnection<UserModel>({
        nodes: conn.edges.map(e => new UserModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.users({ ...variables, ...cursor } as UsersQueryVariables),
      });
    },

    async webhookTarget(variables: WebhookTargetQueryVariables): Promise<WebhookTargetModel> {
      const response = await _client.request<WebhookTargetQuery, WebhookTargetQueryVariables>(
        WebhookTargetDocument, variables
      );
      if (!response.webhookTarget) {
        throw new Error("webhookTarget not found");
      }
      return new WebhookTargetModel(_client, response.webhookTarget);
    },

    async webhookTargets(variables: WebhookTargetsQueryVariables): Promise<PlainConnection<WebhookTargetModel>> {
      const response = await _client.request<WebhookTargetsQuery, WebhookTargetsQueryVariables>(
        WebhookTargetsDocument, variables
      );
      const conn = response.webhookTargets;
      return new PlainConnection<WebhookTargetModel>({
        nodes: conn.edges.map(e => new WebhookTargetModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.webhookTargets({ ...variables, ...cursor } as WebhookTargetsQueryVariables),
      });
    },

    async webhookVersions(variables: WebhookVersionsQueryVariables): Promise<WebhookVersionsQuery["webhookVersions"]> {
      const response = await _client.request<WebhookVersionsQuery, WebhookVersionsQueryVariables>(
        WebhookVersionsDocument, variables
      );
      return response.webhookVersions;
    },

    async workOSConfiguration(): Promise<NonNullable<WorkOsConfigurationQuery["workOSConfiguration"]>> {
      const response = await _client.request<WorkOsConfigurationQuery, Record<string, never>>(
        WorkOsConfigurationDocument
      );
      if (!response.workOSConfiguration) {
        throw new Error("workOSConfiguration not found");
      }
      return response.workOSConfiguration;
    },

    async workflow(variables: WorkflowQueryVariables): Promise<WorkflowModel> {
      const response = await _client.request<WorkflowQuery, WorkflowQueryVariables>(
        WorkflowDocument, variables
      );
      if (!response.workflow) {
        throw new Error("workflow not found");
      }
      return new WorkflowModel(_client, response.workflow);
    },

    async workflowExecution(variables: WorkflowExecutionQueryVariables): Promise<WorkflowExecutionModel> {
      const response = await _client.request<WorkflowExecutionQuery, WorkflowExecutionQueryVariables>(
        WorkflowExecutionDocument, variables
      );
      if (!response.workflowExecution) {
        throw new Error("workflowExecution not found");
      }
      return new WorkflowExecutionModel(_client, response.workflowExecution);
    },

    async workflowExecutions(variables: WorkflowExecutionsQueryVariables): Promise<PlainConnection<WorkflowExecutionModel>> {
      const response = await _client.request<WorkflowExecutionsQuery, WorkflowExecutionsQueryVariables>(
        WorkflowExecutionsDocument, variables
      );
      const conn = response.workflowExecutions;
      return new PlainConnection<WorkflowExecutionModel>({
        nodes: conn.edges.map(e => new WorkflowExecutionModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workflowExecutions({ ...variables, ...cursor } as WorkflowExecutionsQueryVariables),
      });
    },

    async workflowExecutionsByEntity(variables: WorkflowExecutionsByEntityQueryVariables): Promise<PlainConnection<WorkflowExecutionModel>> {
      const response = await _client.request<WorkflowExecutionsByEntityQuery, WorkflowExecutionsByEntityQueryVariables>(
        WorkflowExecutionsByEntityDocument, variables
      );
      const conn = response.workflowExecutionsByEntity;
      return new PlainConnection<WorkflowExecutionModel>({
        nodes: conn.edges.map(e => new WorkflowExecutionModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workflowExecutionsByEntity({ ...variables, ...cursor } as WorkflowExecutionsByEntityQueryVariables),
      });
    },

    async workflowRule(variables: WorkflowRuleQueryVariables): Promise<WorkflowRuleModel> {
      const response = await _client.request<WorkflowRuleQuery, WorkflowRuleQueryVariables>(
        WorkflowRuleDocument, variables
      );
      if (!response.workflowRule) {
        throw new Error("workflowRule not found");
      }
      return new WorkflowRuleModel(_client, response.workflowRule);
    },

    async workflowRules(variables: WorkflowRulesQueryVariables): Promise<PlainConnection<WorkflowRuleModel>> {
      const response = await _client.request<WorkflowRulesQuery, WorkflowRulesQueryVariables>(
        WorkflowRulesDocument, variables
      );
      const conn = response.workflowRules;
      return new PlainConnection<WorkflowRuleModel>({
        nodes: conn.edges.map(e => new WorkflowRuleModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workflowRules({ ...variables, ...cursor } as WorkflowRulesQueryVariables),
      });
    },

    async workflows(variables: WorkflowsQueryVariables): Promise<PlainConnection<WorkflowModel>> {
      const response = await _client.request<WorkflowsQuery, WorkflowsQueryVariables>(
        WorkflowsDocument, variables
      );
      const conn = response.workflows;
      return new PlainConnection<WorkflowModel>({
        nodes: conn.edges.map(e => new WorkflowModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workflows({ ...variables, ...cursor } as WorkflowsQueryVariables),
      });
    },

    async workspace(variables: WorkspaceQueryVariables): Promise<WorkspaceModel> {
      const response = await _client.request<WorkspaceQuery, WorkspaceQueryVariables>(
        WorkspaceDocument, variables
      );
      if (!response.workspace) {
        throw new Error("workspace not found");
      }
      return new WorkspaceModel(_client, response.workspace);
    },

    async workspaceChatSettings(): Promise<WorkspaceChatSettingsQuery["workspaceChatSettings"]> {
      const response = await _client.request<WorkspaceChatSettingsQuery, Record<string, never>>(
        WorkspaceChatSettingsDocument
      );
      return response.workspaceChatSettings;
    },

    async workspaceCursorIntegration(): Promise<WorkspaceCursorIntegrationModel> {
      const response = await _client.request<WorkspaceCursorIntegrationQuery, Record<string, never>>(
        WorkspaceCursorIntegrationDocument
      );
      if (!response.workspaceCursorIntegration) {
        throw new Error("workspaceCursorIntegration not found");
      }
      return new WorkspaceCursorIntegrationModel(_client, response.workspaceCursorIntegration);
    },

    async workspaceDiscordChannelInstallationInfo(variables: WorkspaceDiscordChannelInstallationInfoQueryVariables): Promise<WorkspaceDiscordChannelInstallationInfoQuery["workspaceDiscordChannelInstallationInfo"]> {
      const response = await _client.request<WorkspaceDiscordChannelInstallationInfoQuery, WorkspaceDiscordChannelInstallationInfoQueryVariables>(
        WorkspaceDiscordChannelInstallationInfoDocument, variables
      );
      return response.workspaceDiscordChannelInstallationInfo;
    },

    async workspaceDiscordChannelIntegration(variables: WorkspaceDiscordChannelIntegrationQueryVariables): Promise<WorkspaceDiscordChannelIntegrationModel> {
      const response = await _client.request<WorkspaceDiscordChannelIntegrationQuery, WorkspaceDiscordChannelIntegrationQueryVariables>(
        WorkspaceDiscordChannelIntegrationDocument, variables
      );
      if (!response.workspaceDiscordChannelIntegration) {
        throw new Error("workspaceDiscordChannelIntegration not found");
      }
      return new WorkspaceDiscordChannelIntegrationModel(_client, response.workspaceDiscordChannelIntegration);
    },

    async workspaceDiscordChannelIntegrations(variables: WorkspaceDiscordChannelIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceDiscordChannelIntegrationModel>> {
      const response = await _client.request<WorkspaceDiscordChannelIntegrationsQuery, WorkspaceDiscordChannelIntegrationsQueryVariables>(
        WorkspaceDiscordChannelIntegrationsDocument, variables
      );
      const conn = response.workspaceDiscordChannelIntegrations;
      return new PlainConnection<WorkspaceDiscordChannelIntegrationModel>({
        nodes: conn.edges.map(e => new WorkspaceDiscordChannelIntegrationModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workspaceDiscordChannelIntegrations({ ...variables, ...cursor } as WorkspaceDiscordChannelIntegrationsQueryVariables),
      });
    },

    async workspaceDiscordIntegration(variables: WorkspaceDiscordIntegrationQueryVariables): Promise<WorkspaceDiscordIntegrationModel> {
      const response = await _client.request<WorkspaceDiscordIntegrationQuery, WorkspaceDiscordIntegrationQueryVariables>(
        WorkspaceDiscordIntegrationDocument, variables
      );
      if (!response.workspaceDiscordIntegration) {
        throw new Error("workspaceDiscordIntegration not found");
      }
      return new WorkspaceDiscordIntegrationModel(_client, response.workspaceDiscordIntegration);
    },

    async workspaceDiscordIntegrations(variables: WorkspaceDiscordIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceDiscordIntegrationModel>> {
      const response = await _client.request<WorkspaceDiscordIntegrationsQuery, WorkspaceDiscordIntegrationsQueryVariables>(
        WorkspaceDiscordIntegrationsDocument, variables
      );
      const conn = response.workspaceDiscordIntegrations;
      return new PlainConnection<WorkspaceDiscordIntegrationModel>({
        nodes: conn.edges.map(e => new WorkspaceDiscordIntegrationModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workspaceDiscordIntegrations({ ...variables, ...cursor } as WorkspaceDiscordIntegrationsQueryVariables),
      });
    },

    async workspaceEmailSettings(): Promise<WorkspaceEmailSettingsModel> {
      const response = await _client.request<WorkspaceEmailSettingsQuery, Record<string, never>>(
        WorkspaceEmailSettingsDocument
      );
      return new WorkspaceEmailSettingsModel(_client, response.workspaceEmailSettings);
    },

    async workspaceHmac(): Promise<WorkspaceHmacModel> {
      const response = await _client.request<WorkspaceHmacQuery, Record<string, never>>(
        WorkspaceHmacDocument
      );
      if (!response.workspaceHmac) {
        throw new Error("workspaceHmac not found");
      }
      return new WorkspaceHmacModel(_client, response.workspaceHmac);
    },

    async workspaceInvites(variables: WorkspaceInvitesQueryVariables): Promise<PlainConnection<WorkspaceInviteModel>> {
      const response = await _client.request<WorkspaceInvitesQuery, WorkspaceInvitesQueryVariables>(
        WorkspaceInvitesDocument, variables
      );
      const conn = response.workspaceInvites;
      return new PlainConnection<WorkspaceInviteModel>({
        nodes: conn.edges.map(e => new WorkspaceInviteModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workspaceInvites({ ...variables, ...cursor } as WorkspaceInvitesQueryVariables),
      });
    },

    async workspaceMSTeamsInstallationInfo(variables: WorkspaceMsTeamsInstallationInfoQueryVariables): Promise<WorkspaceMsTeamsInstallationInfoQuery["workspaceMSTeamsInstallationInfo"]> {
      const response = await _client.request<WorkspaceMsTeamsInstallationInfoQuery, WorkspaceMsTeamsInstallationInfoQueryVariables>(
        WorkspaceMsTeamsInstallationInfoDocument, variables
      );
      return response.workspaceMSTeamsInstallationInfo;
    },

    async workspaceMSTeamsIntegration(): Promise<WorkspaceMSTeamsIntegrationModel> {
      const response = await _client.request<WorkspaceMsTeamsIntegrationQuery, Record<string, never>>(
        WorkspaceMsTeamsIntegrationDocument
      );
      if (!response.workspaceMSTeamsIntegration) {
        throw new Error("workspaceMSTeamsIntegration not found");
      }
      return new WorkspaceMSTeamsIntegrationModel(_client, response.workspaceMSTeamsIntegration);
    },

    async workspaceSlackChannelInstallationInfo(variables: WorkspaceSlackChannelInstallationInfoQueryVariables): Promise<WorkspaceSlackChannelInstallationInfoQuery["workspaceSlackChannelInstallationInfo"]> {
      const response = await _client.request<WorkspaceSlackChannelInstallationInfoQuery, WorkspaceSlackChannelInstallationInfoQueryVariables>(
        WorkspaceSlackChannelInstallationInfoDocument, variables
      );
      return response.workspaceSlackChannelInstallationInfo;
    },

    async workspaceSlackChannelIntegration(variables: WorkspaceSlackChannelIntegrationQueryVariables): Promise<WorkspaceSlackChannelIntegrationModel> {
      const response = await _client.request<WorkspaceSlackChannelIntegrationQuery, WorkspaceSlackChannelIntegrationQueryVariables>(
        WorkspaceSlackChannelIntegrationDocument, variables
      );
      if (!response.workspaceSlackChannelIntegration) {
        throw new Error("workspaceSlackChannelIntegration not found");
      }
      return new WorkspaceSlackChannelIntegrationModel(_client, response.workspaceSlackChannelIntegration);
    },

    async workspaceSlackChannelIntegrations(variables: WorkspaceSlackChannelIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceSlackChannelIntegrationModel>> {
      const response = await _client.request<WorkspaceSlackChannelIntegrationsQuery, WorkspaceSlackChannelIntegrationsQueryVariables>(
        WorkspaceSlackChannelIntegrationsDocument, variables
      );
      const conn = response.workspaceSlackChannelIntegrations;
      return new PlainConnection<WorkspaceSlackChannelIntegrationModel>({
        nodes: conn.edges.map(e => new WorkspaceSlackChannelIntegrationModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workspaceSlackChannelIntegrations({ ...variables, ...cursor } as WorkspaceSlackChannelIntegrationsQueryVariables),
      });
    },

    async workspaceSlackInstallationInfo(variables: WorkspaceSlackInstallationInfoQueryVariables): Promise<WorkspaceSlackInstallationInfoQuery["workspaceSlackInstallationInfo"]> {
      const response = await _client.request<WorkspaceSlackInstallationInfoQuery, WorkspaceSlackInstallationInfoQueryVariables>(
        WorkspaceSlackInstallationInfoDocument, variables
      );
      return response.workspaceSlackInstallationInfo;
    },

    async workspaceSlackIntegration(variables: WorkspaceSlackIntegrationQueryVariables): Promise<WorkspaceSlackIntegrationModel> {
      const response = await _client.request<WorkspaceSlackIntegrationQuery, WorkspaceSlackIntegrationQueryVariables>(
        WorkspaceSlackIntegrationDocument, variables
      );
      if (!response.workspaceSlackIntegration) {
        throw new Error("workspaceSlackIntegration not found");
      }
      return new WorkspaceSlackIntegrationModel(_client, response.workspaceSlackIntegration);
    },

    async workspaceSlackIntegrations(variables: WorkspaceSlackIntegrationsQueryVariables): Promise<PlainConnection<WorkspaceSlackIntegrationModel>> {
      const response = await _client.request<WorkspaceSlackIntegrationsQuery, WorkspaceSlackIntegrationsQueryVariables>(
        WorkspaceSlackIntegrationsDocument, variables
      );
      const conn = response.workspaceSlackIntegrations;
      return new PlainConnection<WorkspaceSlackIntegrationModel>({
        nodes: conn.edges.map(e => new WorkspaceSlackIntegrationModel(_client, e.node)),
        pageInfo: conn.pageInfo,
        fetch: (cursor) => query.workspaceSlackIntegrations({ ...variables, ...cursor } as WorkspaceSlackIntegrationsQueryVariables),
      });
    }
    };
    this.query = query;

    const mutation: PlainSdkMutations = {
    async acceptWorkspaceInvite(variables: AcceptWorkspaceInviteMutationVariables): Promise<AcceptWorkspaceInviteMutation["acceptWorkspaceInvite"]> {
      const response = await _client.request<AcceptWorkspaceInviteMutation, AcceptWorkspaceInviteMutationVariables>(
        AcceptWorkspaceInviteDocument, variables
      );
      return response.acceptWorkspaceInvite;
    },

    async addAdditionalAssignees(variables: AddAdditionalAssigneesMutationVariables): Promise<AddAdditionalAssigneesMutation["addAdditionalAssignees"]> {
      const response = await _client.request<AddAdditionalAssigneesMutation, AddAdditionalAssigneesMutationVariables>(
        AddAdditionalAssigneesDocument, variables
      );
      return response.addAdditionalAssignees;
    },

    async addCustomerToCustomerGroups(variables: AddCustomerToCustomerGroupsMutationVariables): Promise<AddCustomerToCustomerGroupsMutation["addCustomerToCustomerGroups"]> {
      const response = await _client.request<AddCustomerToCustomerGroupsMutation, AddCustomerToCustomerGroupsMutationVariables>(
        AddCustomerToCustomerGroupsDocument, variables
      );
      return response.addCustomerToCustomerGroups;
    },

    async addCustomerToTenants(variables: AddCustomerToTenantsMutationVariables): Promise<AddCustomerToTenantsMutation["addCustomerToTenants"]> {
      const response = await _client.request<AddCustomerToTenantsMutation, AddCustomerToTenantsMutationVariables>(
        AddCustomerToTenantsDocument, variables
      );
      return response.addCustomerToTenants;
    },

    async addGeneratedReply(variables: AddGeneratedReplyMutationVariables): Promise<AddGeneratedReplyMutation["addGeneratedReply"]> {
      const response = await _client.request<AddGeneratedReplyMutation, AddGeneratedReplyMutationVariables>(
        AddGeneratedReplyDocument, variables
      );
      return response.addGeneratedReply;
    },

    async addLabels(variables: AddLabelsMutationVariables): Promise<AddLabelsMutation["addLabels"]> {
      const response = await _client.request<AddLabelsMutation, AddLabelsMutationVariables>(
        AddLabelsDocument, variables
      );
      return response.addLabels;
    },

    async addLabelsToUser(variables: AddLabelsToUserMutationVariables): Promise<AddLabelsToUserMutation["addLabelsToUser"]> {
      const response = await _client.request<AddLabelsToUserMutation, AddLabelsToUserMutationVariables>(
        AddLabelsToUserDocument, variables
      );
      return response.addLabelsToUser;
    },

    async addMembersToTier(variables: AddMembersToTierMutationVariables): Promise<AddMembersToTierMutation["addMembersToTier"]> {
      const response = await _client.request<AddMembersToTierMutation, AddMembersToTierMutationVariables>(
        AddMembersToTierDocument, variables
      );
      return response.addMembersToTier;
    },

    async addUserToActiveBillingRota(variables: AddUserToActiveBillingRotaMutationVariables): Promise<AddUserToActiveBillingRotaMutation["addUserToActiveBillingRota"]> {
      const response = await _client.request<AddUserToActiveBillingRotaMutation, AddUserToActiveBillingRotaMutationVariables>(
        AddUserToActiveBillingRotaDocument, variables
      );
      return response.addUserToActiveBillingRota;
    },

    async addWorkspaceAlternateSupportEmailAddress(variables: AddWorkspaceAlternateSupportEmailAddressMutationVariables): Promise<AddWorkspaceAlternateSupportEmailAddressMutation["addWorkspaceAlternateSupportEmailAddress"]> {
      const response = await _client.request<AddWorkspaceAlternateSupportEmailAddressMutation, AddWorkspaceAlternateSupportEmailAddressMutationVariables>(
        AddWorkspaceAlternateSupportEmailAddressDocument, variables
      );
      return response.addWorkspaceAlternateSupportEmailAddress;
    },

    async archiveLabelType(variables: ArchiveLabelTypeMutationVariables): Promise<ArchiveLabelTypeMutation["archiveLabelType"]> {
      const response = await _client.request<ArchiveLabelTypeMutation, ArchiveLabelTypeMutationVariables>(
        ArchiveLabelTypeDocument, variables
      );
      return response.archiveLabelType;
    },

    async assignRolesToUser(variables: AssignRolesToUserMutationVariables): Promise<AssignRolesToUserMutation["assignRolesToUser"]> {
      const response = await _client.request<AssignRolesToUserMutation, AssignRolesToUserMutationVariables>(
        AssignRolesToUserDocument, variables
      );
      return response.assignRolesToUser;
    },

    async assignThread(variables: AssignThreadMutationVariables): Promise<AssignThreadMutation["assignThread"]> {
      const response = await _client.request<AssignThreadMutation, AssignThreadMutationVariables>(
        AssignThreadDocument, variables
      );
      return response.assignThread;
    },

    async bulkJoinSlackChannels(variables: BulkJoinSlackChannelsMutationVariables): Promise<BulkJoinSlackChannelsMutation["bulkJoinSlackChannels"]> {
      const response = await _client.request<BulkJoinSlackChannelsMutation, BulkJoinSlackChannelsMutationVariables>(
        BulkJoinSlackChannelsDocument, variables
      );
      return response.bulkJoinSlackChannels;
    },

    async bulkUpsertThreadFields(variables: BulkUpsertThreadFieldsMutationVariables): Promise<BulkUpsertThreadFieldsMutation["bulkUpsertThreadFields"]> {
      const response = await _client.request<BulkUpsertThreadFieldsMutation, BulkUpsertThreadFieldsMutationVariables>(
        BulkUpsertThreadFieldsDocument, variables
      );
      return response.bulkUpsertThreadFields;
    },

    async bulkUpsertWorkflowSteps(variables: BulkUpsertWorkflowStepsMutationVariables): Promise<BulkUpsertWorkflowStepsMutation["bulkUpsertWorkflowSteps"]> {
      const response = await _client.request<BulkUpsertWorkflowStepsMutation, BulkUpsertWorkflowStepsMutationVariables>(
        BulkUpsertWorkflowStepsDocument, variables
      );
      return response.bulkUpsertWorkflowSteps;
    },

    async calculateRoleChangeCost(variables: CalculateRoleChangeCostMutationVariables): Promise<CalculateRoleChangeCostMutation["calculateRoleChangeCost"]> {
      const response = await _client.request<CalculateRoleChangeCostMutation, CalculateRoleChangeCostMutationVariables>(
        CalculateRoleChangeCostDocument, variables
      );
      return response.calculateRoleChangeCost;
    },

    async cancelHyperlineSubscription(): Promise<CancelHyperlineSubscriptionMutation["cancelHyperlineSubscription"]> {
      const response = await _client.request<CancelHyperlineSubscriptionMutation, Record<string, never>>(
        CancelHyperlineSubscriptionDocument
      );
      return response.cancelHyperlineSubscription;
    },

    async changeBillingPlan(variables: ChangeBillingPlanMutationVariables): Promise<ChangeBillingPlanMutation["changeBillingPlan"]> {
      const response = await _client.request<ChangeBillingPlanMutation, ChangeBillingPlanMutationVariables>(
        ChangeBillingPlanDocument, variables
      );
      return response.changeBillingPlan;
    },

    async changeKnowledgeGapStatus(variables: ChangeKnowledgeGapStatusMutationVariables): Promise<ChangeKnowledgeGapStatusMutation["changeKnowledgeGapStatus"]> {
      const response = await _client.request<ChangeKnowledgeGapStatusMutation, ChangeKnowledgeGapStatusMutationVariables>(
        ChangeKnowledgeGapStatusDocument, variables
      );
      return response.changeKnowledgeGapStatus;
    },

    async changeThreadCustomer(variables: ChangeThreadCustomerMutationVariables): Promise<ChangeThreadCustomerMutation["changeThreadCustomer"]> {
      const response = await _client.request<ChangeThreadCustomerMutation, ChangeThreadCustomerMutationVariables>(
        ChangeThreadCustomerDocument, variables
      );
      return response.changeThreadCustomer;
    },

    async changeThreadPriority(variables: ChangeThreadPriorityMutationVariables): Promise<ChangeThreadPriorityMutation["changeThreadPriority"]> {
      const response = await _client.request<ChangeThreadPriorityMutation, ChangeThreadPriorityMutationVariables>(
        ChangeThreadPriorityDocument, variables
      );
      return response.changeThreadPriority;
    },

    async changeUserStatus(variables: ChangeUserStatusMutationVariables): Promise<ChangeUserStatusMutation["changeUserStatus"]> {
      const response = await _client.request<ChangeUserStatusMutation, ChangeUserStatusMutationVariables>(
        ChangeUserStatusDocument, variables
      );
      return response.changeUserStatus;
    },

    async completeServiceAuthorization(variables: CompleteServiceAuthorizationMutationVariables): Promise<CompleteServiceAuthorizationMutation["completeServiceAuthorization"]> {
      const response = await _client.request<CompleteServiceAuthorizationMutation, CompleteServiceAuthorizationMutationVariables>(
        CompleteServiceAuthorizationDocument, variables
      );
      return response.completeServiceAuthorization;
    },

    async createAiFeatureFeedback(variables: CreateAiFeatureFeedbackMutationVariables): Promise<CreateAiFeatureFeedbackMutation["createAiFeatureFeedback"]> {
      const response = await _client.request<CreateAiFeatureFeedbackMutation, CreateAiFeatureFeedbackMutationVariables>(
        CreateAiFeatureFeedbackDocument, variables
      );
      return response.createAiFeatureFeedback;
    },

    async createAiFeedback(variables: CreateAiFeedbackMutationVariables): Promise<CreateAiFeedbackMutation["createAiFeedback"]> {
      const response = await _client.request<CreateAiFeedbackMutation, CreateAiFeedbackMutationVariables>(
        CreateAiFeedbackDocument, variables
      );
      return response.createAiFeedback;
    },

    async createAiToneRule(variables: CreateAiToneRuleMutationVariables): Promise<CreateAiToneRuleMutation["createAiToneRule"]> {
      const response = await _client.request<CreateAiToneRuleMutation, CreateAiToneRuleMutationVariables>(
        CreateAiToneRuleDocument, variables
      );
      return response.createAiToneRule;
    },

    async createApiKey(variables: CreateApiKeyMutationVariables): Promise<CreateApiKeyMutation["createApiKey"]> {
      const response = await _client.request<CreateApiKeyMutation, CreateApiKeyMutationVariables>(
        CreateApiKeyDocument, variables
      );
      return response.createApiKey;
    },

    async createAttachmentDownloadUrl(variables: CreateAttachmentDownloadUrlMutationVariables): Promise<CreateAttachmentDownloadUrlMutation["createAttachmentDownloadUrl"]> {
      const response = await _client.request<CreateAttachmentDownloadUrlMutation, CreateAttachmentDownloadUrlMutationVariables>(
        CreateAttachmentDownloadUrlDocument, variables
      );
      return response.createAttachmentDownloadUrl;
    },

    async createAttachmentUploadUrl(variables: CreateAttachmentUploadUrlMutationVariables): Promise<CreateAttachmentUploadUrlMutation["createAttachmentUploadUrl"]> {
      const response = await _client.request<CreateAttachmentUploadUrlMutation, CreateAttachmentUploadUrlMutationVariables>(
        CreateAttachmentUploadUrlDocument, variables
      );
      return response.createAttachmentUploadUrl;
    },

    async createAutoresponder(variables: CreateAutoresponderMutationVariables): Promise<CreateAutoresponderMutation["createAutoresponder"]> {
      const response = await _client.request<CreateAutoresponderMutation, CreateAutoresponderMutationVariables>(
        CreateAutoresponderDocument, variables
      );
      return response.createAutoresponder;
    },

    async createBillingPortalSession(): Promise<CreateBillingPortalSessionMutation["createBillingPortalSession"]> {
      const response = await _client.request<CreateBillingPortalSessionMutation, Record<string, never>>(
        CreateBillingPortalSessionDocument
      );
      return response.createBillingPortalSession;
    },

    async createChatApp(variables: CreateChatAppMutationVariables): Promise<CreateChatAppMutation["createChatApp"]> {
      const response = await _client.request<CreateChatAppMutation, CreateChatAppMutationVariables>(
        CreateChatAppDocument, variables
      );
      return response.createChatApp;
    },

    async createChatAppSecret(variables: CreateChatAppSecretMutationVariables): Promise<CreateChatAppSecretMutation["createChatAppSecret"]> {
      const response = await _client.request<CreateChatAppSecretMutation, CreateChatAppSecretMutationVariables>(
        CreateChatAppSecretDocument, variables
      );
      return response.createChatAppSecret;
    },

    async createCheckoutSession(variables: CreateCheckoutSessionMutationVariables): Promise<CreateCheckoutSessionMutation["createCheckoutSession"]> {
      const response = await _client.request<CreateCheckoutSessionMutation, CreateCheckoutSessionMutationVariables>(
        CreateCheckoutSessionDocument, variables
      );
      return response.createCheckoutSession;
    },

    async createCustomRole(variables: CreateCustomRoleMutationVariables): Promise<CreateCustomRoleMutation["createCustomRole"]> {
      const response = await _client.request<CreateCustomRoleMutation, CreateCustomRoleMutationVariables>(
        CreateCustomRoleDocument, variables
      );
      return response.createCustomRole;
    },

    async createCustomerCardConfig(variables: CreateCustomerCardConfigMutationVariables): Promise<CreateCustomerCardConfigMutation["createCustomerCardConfig"]> {
      const response = await _client.request<CreateCustomerCardConfigMutation, CreateCustomerCardConfigMutationVariables>(
        CreateCustomerCardConfigDocument, variables
      );
      return response.createCustomerCardConfig;
    },

    async createCustomerEvent(variables: CreateCustomerEventMutationVariables): Promise<CreateCustomerEventMutation["createCustomerEvent"]> {
      const response = await _client.request<CreateCustomerEventMutation, CreateCustomerEventMutationVariables>(
        CreateCustomerEventDocument, variables
      );
      return response.createCustomerEvent;
    },

    async createCustomerGroup(variables: CreateCustomerGroupMutationVariables): Promise<CreateCustomerGroupMutation["createCustomerGroup"]> {
      const response = await _client.request<CreateCustomerGroupMutation, CreateCustomerGroupMutationVariables>(
        CreateCustomerGroupDocument, variables
      );
      return response.createCustomerGroup;
    },

    async createCustomerSurvey(variables: CreateCustomerSurveyMutationVariables): Promise<CreateCustomerSurveyMutation["createCustomerSurvey"]> {
      const response = await _client.request<CreateCustomerSurveyMutation, CreateCustomerSurveyMutationVariables>(
        CreateCustomerSurveyDocument, variables
      );
      return response.createCustomerSurvey;
    },

    async createEmailPreviewUrl(variables: CreateEmailPreviewUrlMutationVariables): Promise<CreateEmailPreviewUrlMutation["createEmailPreviewUrl"]> {
      const response = await _client.request<CreateEmailPreviewUrlMutation, CreateEmailPreviewUrlMutationVariables>(
        CreateEmailPreviewUrlDocument, variables
      );
      return response.createEmailPreviewUrl;
    },

    async createEscalationPath(variables: CreateEscalationPathMutationVariables): Promise<CreateEscalationPathMutation["createEscalationPath"]> {
      const response = await _client.request<CreateEscalationPathMutation, CreateEscalationPathMutationVariables>(
        CreateEscalationPathDocument, variables
      );
      return response.createEscalationPath;
    },

    async createGithubUserAuthIntegration(variables: CreateGithubUserAuthIntegrationMutationVariables): Promise<CreateGithubUserAuthIntegrationMutation["createGithubUserAuthIntegration"]> {
      const response = await _client.request<CreateGithubUserAuthIntegrationMutation, CreateGithubUserAuthIntegrationMutationVariables>(
        CreateGithubUserAuthIntegrationDocument, variables
      );
      return response.createGithubUserAuthIntegration;
    },

    async createHelpCenter(variables: CreateHelpCenterMutationVariables): Promise<CreateHelpCenterMutation["createHelpCenter"]> {
      const response = await _client.request<CreateHelpCenterMutation, CreateHelpCenterMutationVariables>(
        CreateHelpCenterDocument, variables
      );
      return response.createHelpCenter;
    },

    async createHelpCenterArticleGroup(variables: CreateHelpCenterArticleGroupMutationVariables): Promise<CreateHelpCenterArticleGroupMutation["createHelpCenterArticleGroup"]> {
      const response = await _client.request<CreateHelpCenterArticleGroupMutation, CreateHelpCenterArticleGroupMutationVariables>(
        CreateHelpCenterArticleGroupDocument, variables
      );
      return response.createHelpCenterArticleGroup;
    },

    async createHyperlineBillingPortalSession(): Promise<CreateHyperlineBillingPortalSessionMutation["createHyperlineBillingPortalSession"]> {
      const response = await _client.request<CreateHyperlineBillingPortalSessionMutation, Record<string, never>>(
        CreateHyperlineBillingPortalSessionDocument
      );
      return response.createHyperlineBillingPortalSession;
    },

    async createHyperlineCheckoutSession(variables: CreateHyperlineCheckoutSessionMutationVariables): Promise<CreateHyperlineCheckoutSessionMutation["createHyperlineCheckoutSession"]> {
      const response = await _client.request<CreateHyperlineCheckoutSessionMutation, CreateHyperlineCheckoutSessionMutationVariables>(
        CreateHyperlineCheckoutSessionDocument, variables
      );
      return response.createHyperlineCheckoutSession;
    },

    async createHyperlineComponentsAuthToken(): Promise<CreateHyperlineComponentsAuthTokenMutation["createHyperlineComponentsAuthToken"]> {
      const response = await _client.request<CreateHyperlineComponentsAuthTokenMutation, Record<string, never>>(
        CreateHyperlineComponentsAuthTokenDocument
      );
      return response.createHyperlineComponentsAuthToken;
    },

    async createImportSync(variables: CreateImportSyncMutationVariables): Promise<CreateImportSyncMutation["createImportSync"]> {
      const response = await _client.request<CreateImportSyncMutation, CreateImportSyncMutationVariables>(
        CreateImportSyncDocument, variables
      );
      return response.createImportSync;
    },

    async createIndexedDocument(variables: CreateIndexedDocumentMutationVariables): Promise<CreateIndexedDocumentMutation["createIndexedDocument"]> {
      const response = await _client.request<CreateIndexedDocumentMutation, CreateIndexedDocumentMutationVariables>(
        CreateIndexedDocumentDocument, variables
      );
      return response.createIndexedDocument;
    },

    async createIssueTrackerIssue(variables: CreateIssueTrackerIssueMutationVariables): Promise<CreateIssueTrackerIssueMutation["createIssueTrackerIssue"]> {
      const response = await _client.request<CreateIssueTrackerIssueMutation, CreateIssueTrackerIssueMutationVariables>(
        CreateIssueTrackerIssueDocument, variables
      );
      return response.createIssueTrackerIssue;
    },

    async createKnowledgeSource(variables: CreateKnowledgeSourceMutationVariables): Promise<CreateKnowledgeSourceMutation["createKnowledgeSource"]> {
      const response = await _client.request<CreateKnowledgeSourceMutation, CreateKnowledgeSourceMutationVariables>(
        CreateKnowledgeSourceDocument, variables
      );
      return response.createKnowledgeSource;
    },

    async createLabelType(variables: CreateLabelTypeMutationVariables): Promise<CreateLabelTypeMutation["createLabelType"]> {
      const response = await _client.request<CreateLabelTypeMutation, CreateLabelTypeMutationVariables>(
        CreateLabelTypeDocument, variables
      );
      return response.createLabelType;
    },

    async createMachineUser(variables: CreateMachineUserMutationVariables): Promise<CreateMachineUserMutation["createMachineUser"]> {
      const response = await _client.request<CreateMachineUserMutation, CreateMachineUserMutationVariables>(
        CreateMachineUserDocument, variables
      );
      return response.createMachineUser;
    },

    async createMyFavoritePage(variables: CreateMyFavoritePageMutationVariables): Promise<CreateMyFavoritePageMutation["createMyFavoritePage"]> {
      const response = await _client.request<CreateMyFavoritePageMutation, CreateMyFavoritePageMutationVariables>(
        CreateMyFavoritePageDocument, variables
      );
      return response.createMyFavoritePage;
    },

    async createMyLinearIntegration(variables: CreateMyLinearIntegrationMutationVariables): Promise<CreateMyLinearIntegrationMutation["createMyLinearIntegration"]> {
      const response = await _client.request<CreateMyLinearIntegrationMutation, CreateMyLinearIntegrationMutationVariables>(
        CreateMyLinearIntegrationDocument, variables
      );
      return response.createMyLinearIntegration;
    },

    async createMyMSTeamsIntegration(variables: CreateMyMsTeamsIntegrationMutationVariables): Promise<CreateMyMsTeamsIntegrationMutation["createMyMSTeamsIntegration"]> {
      const response = await _client.request<CreateMyMsTeamsIntegrationMutation, CreateMyMsTeamsIntegrationMutationVariables>(
        CreateMyMsTeamsIntegrationDocument, variables
      );
      return response.createMyMSTeamsIntegration;
    },

    async createMySlackIntegration(variables: CreateMySlackIntegrationMutationVariables): Promise<CreateMySlackIntegrationMutation["createMySlackIntegration"]> {
      const response = await _client.request<CreateMySlackIntegrationMutation, CreateMySlackIntegrationMutationVariables>(
        CreateMySlackIntegrationDocument, variables
      );
      return response.createMySlackIntegration;
    },

    async createNote(variables: CreateNoteMutationVariables): Promise<CreateNoteMutation["createNote"]> {
      const response = await _client.request<CreateNoteMutation, CreateNoteMutationVariables>(
        CreateNoteDocument, variables
      );
      return response.createNote;
    },

    async createSavedThreadsView(variables: CreateSavedThreadsViewMutationVariables): Promise<CreateSavedThreadsViewMutation["createSavedThreadsView"]> {
      const response = await _client.request<CreateSavedThreadsViewMutation, CreateSavedThreadsViewMutationVariables>(
        CreateSavedThreadsViewDocument, variables
      );
      return response.createSavedThreadsView;
    },

    async createServiceLevelAgreement(variables: CreateServiceLevelAgreementMutationVariables): Promise<CreateServiceLevelAgreementMutation["createServiceLevelAgreement"]> {
      const response = await _client.request<CreateServiceLevelAgreementMutation, CreateServiceLevelAgreementMutationVariables>(
        CreateServiceLevelAgreementDocument, variables
      );
      return response.createServiceLevelAgreement;
    },

    async createSnippet(variables: CreateSnippetMutationVariables): Promise<CreateSnippetMutation["createSnippet"]> {
      const response = await _client.request<CreateSnippetMutation, CreateSnippetMutationVariables>(
        CreateSnippetDocument, variables
      );
      return response.createSnippet;
    },

    async createTask(variables: CreateTaskMutationVariables): Promise<CreateTaskMutation["createTask"]> {
      const response = await _client.request<CreateTaskMutation, CreateTaskMutationVariables>(
        CreateTaskDocument, variables
      );
      return response.createTask;
    },

    async createThread(variables: CreateThreadMutationVariables): Promise<CreateThreadMutation["createThread"]> {
      const response = await _client.request<CreateThreadMutation, CreateThreadMutationVariables>(
        CreateThreadDocument, variables
      );
      return response.createThread;
    },

    async createThreadChannelAssociation(variables: CreateThreadChannelAssociationMutationVariables): Promise<CreateThreadChannelAssociationMutation["createThreadChannelAssociation"]> {
      const response = await _client.request<CreateThreadChannelAssociationMutation, CreateThreadChannelAssociationMutationVariables>(
        CreateThreadChannelAssociationDocument, variables
      );
      return response.createThreadChannelAssociation;
    },

    async createThreadDiscussion(variables: CreateThreadDiscussionMutationVariables): Promise<CreateThreadDiscussionMutation["createThreadDiscussion"]> {
      const response = await _client.request<CreateThreadDiscussionMutation, CreateThreadDiscussionMutationVariables>(
        CreateThreadDiscussionDocument, variables
      );
      return response.createThreadDiscussion;
    },

    async createThreadEvent(variables: CreateThreadEventMutationVariables): Promise<CreateThreadEventMutation["createThreadEvent"]> {
      const response = await _client.request<CreateThreadEventMutation, CreateThreadEventMutationVariables>(
        CreateThreadEventDocument, variables
      );
      return response.createThreadEvent;
    },

    async createThreadFieldSchema(variables: CreateThreadFieldSchemaMutationVariables): Promise<CreateThreadFieldSchemaMutation["createThreadFieldSchema"]> {
      const response = await _client.request<CreateThreadFieldSchemaMutation, CreateThreadFieldSchemaMutationVariables>(
        CreateThreadFieldSchemaDocument, variables
      );
      return response.createThreadFieldSchema;
    },

    async createThreadLink(variables: CreateThreadLinkMutationVariables): Promise<CreateThreadLinkMutation["createThreadLink"]> {
      const response = await _client.request<CreateThreadLinkMutation, CreateThreadLinkMutationVariables>(
        CreateThreadLinkDocument, variables
      );
      return response.createThreadLink;
    },

    async createTier(variables: CreateTierMutationVariables): Promise<CreateTierMutation["createTier"]> {
      const response = await _client.request<CreateTierMutation, CreateTierMutationVariables>(
        CreateTierDocument, variables
      );
      return response.createTier;
    },

    async createUserAccount(variables: CreateUserAccountMutationVariables): Promise<CreateUserAccountMutation["createUserAccount"]> {
      const response = await _client.request<CreateUserAccountMutation, CreateUserAccountMutationVariables>(
        CreateUserAccountDocument, variables
      );
      return response.createUserAccount;
    },

    async createUserAuthDiscordChannelIntegration(variables: CreateUserAuthDiscordChannelIntegrationMutationVariables): Promise<CreateUserAuthDiscordChannelIntegrationMutation["createUserAuthDiscordChannelIntegration"]> {
      const response = await _client.request<CreateUserAuthDiscordChannelIntegrationMutation, CreateUserAuthDiscordChannelIntegrationMutationVariables>(
        CreateUserAuthDiscordChannelIntegrationDocument, variables
      );
      return response.createUserAuthDiscordChannelIntegration;
    },

    async createUserAuthSlackIntegration(variables: CreateUserAuthSlackIntegrationMutationVariables): Promise<CreateUserAuthSlackIntegrationMutation["createUserAuthSlackIntegration"]> {
      const response = await _client.request<CreateUserAuthSlackIntegrationMutation, CreateUserAuthSlackIntegrationMutationVariables>(
        CreateUserAuthSlackIntegrationDocument, variables
      );
      return response.createUserAuthSlackIntegration;
    },

    async createWebhookTarget(variables: CreateWebhookTargetMutationVariables): Promise<CreateWebhookTargetMutation["createWebhookTarget"]> {
      const response = await _client.request<CreateWebhookTargetMutation, CreateWebhookTargetMutationVariables>(
        CreateWebhookTargetDocument, variables
      );
      return response.createWebhookTarget;
    },

    async createWorkflow(variables: CreateWorkflowMutationVariables): Promise<CreateWorkflowMutation["createWorkflow"]> {
      const response = await _client.request<CreateWorkflowMutation, CreateWorkflowMutationVariables>(
        CreateWorkflowDocument, variables
      );
      return response.createWorkflow;
    },

    async createWorkflowRule(variables: CreateWorkflowRuleMutationVariables): Promise<CreateWorkflowRuleMutation["createWorkflowRule"]> {
      const response = await _client.request<CreateWorkflowRuleMutation, CreateWorkflowRuleMutationVariables>(
        CreateWorkflowRuleDocument, variables
      );
      return response.createWorkflowRule;
    },

    async createWorkflowStep(variables: CreateWorkflowStepMutationVariables): Promise<CreateWorkflowStepMutation["createWorkflowStep"]> {
      const response = await _client.request<CreateWorkflowStepMutation, CreateWorkflowStepMutationVariables>(
        CreateWorkflowStepDocument, variables
      );
      return response.createWorkflowStep;
    },

    async createWorkspace(variables: CreateWorkspaceMutationVariables): Promise<CreateWorkspaceMutation["createWorkspace"]> {
      const response = await _client.request<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(
        CreateWorkspaceDocument, variables
      );
      return response.createWorkspace;
    },

    async createWorkspaceCursorIntegration(variables: CreateWorkspaceCursorIntegrationMutationVariables): Promise<CreateWorkspaceCursorIntegrationMutation["createWorkspaceCursorIntegration"]> {
      const response = await _client.request<CreateWorkspaceCursorIntegrationMutation, CreateWorkspaceCursorIntegrationMutationVariables>(
        CreateWorkspaceCursorIntegrationDocument, variables
      );
      return response.createWorkspaceCursorIntegration;
    },

    async createWorkspaceDiscordChannelIntegration(variables: CreateWorkspaceDiscordChannelIntegrationMutationVariables): Promise<CreateWorkspaceDiscordChannelIntegrationMutation["createWorkspaceDiscordChannelIntegration"]> {
      const response = await _client.request<CreateWorkspaceDiscordChannelIntegrationMutation, CreateWorkspaceDiscordChannelIntegrationMutationVariables>(
        CreateWorkspaceDiscordChannelIntegrationDocument, variables
      );
      return response.createWorkspaceDiscordChannelIntegration;
    },

    async createWorkspaceDiscordIntegration(variables: CreateWorkspaceDiscordIntegrationMutationVariables): Promise<CreateWorkspaceDiscordIntegrationMutation["createWorkspaceDiscordIntegration"]> {
      const response = await _client.request<CreateWorkspaceDiscordIntegrationMutation, CreateWorkspaceDiscordIntegrationMutationVariables>(
        CreateWorkspaceDiscordIntegrationDocument, variables
      );
      return response.createWorkspaceDiscordIntegration;
    },

    async createWorkspaceEmailDomainSettings(variables: CreateWorkspaceEmailDomainSettingsMutationVariables): Promise<CreateWorkspaceEmailDomainSettingsMutation["createWorkspaceEmailDomainSettings"]> {
      const response = await _client.request<CreateWorkspaceEmailDomainSettingsMutation, CreateWorkspaceEmailDomainSettingsMutationVariables>(
        CreateWorkspaceEmailDomainSettingsDocument, variables
      );
      return response.createWorkspaceEmailDomainSettings;
    },

    async createWorkspaceFileUploadUrl(variables: CreateWorkspaceFileUploadUrlMutationVariables): Promise<CreateWorkspaceFileUploadUrlMutation["createWorkspaceFileUploadUrl"]> {
      const response = await _client.request<CreateWorkspaceFileUploadUrlMutation, CreateWorkspaceFileUploadUrlMutationVariables>(
        CreateWorkspaceFileUploadUrlDocument, variables
      );
      return response.createWorkspaceFileUploadUrl;
    },

    async createWorkspaceMSTeamsIntegration(variables: CreateWorkspaceMsTeamsIntegrationMutationVariables): Promise<CreateWorkspaceMsTeamsIntegrationMutation["createWorkspaceMSTeamsIntegration"]> {
      const response = await _client.request<CreateWorkspaceMsTeamsIntegrationMutation, CreateWorkspaceMsTeamsIntegrationMutationVariables>(
        CreateWorkspaceMsTeamsIntegrationDocument, variables
      );
      return response.createWorkspaceMSTeamsIntegration;
    },

    async createWorkspaceSlackChannelIntegration(variables: CreateWorkspaceSlackChannelIntegrationMutationVariables): Promise<CreateWorkspaceSlackChannelIntegrationMutation["createWorkspaceSlackChannelIntegration"]> {
      const response = await _client.request<CreateWorkspaceSlackChannelIntegrationMutation, CreateWorkspaceSlackChannelIntegrationMutationVariables>(
        CreateWorkspaceSlackChannelIntegrationDocument, variables
      );
      return response.createWorkspaceSlackChannelIntegration;
    },

    async createWorkspaceSlackIntegration(variables: CreateWorkspaceSlackIntegrationMutationVariables): Promise<CreateWorkspaceSlackIntegrationMutation["createWorkspaceSlackIntegration"]> {
      const response = await _client.request<CreateWorkspaceSlackIntegrationMutation, CreateWorkspaceSlackIntegrationMutationVariables>(
        CreateWorkspaceSlackIntegrationDocument, variables
      );
      return response.createWorkspaceSlackIntegration;
    },

    async deleteAiToneRules(variables: DeleteAiToneRulesMutationVariables): Promise<DeleteAiToneRulesMutation["deleteAiToneRules"]> {
      const response = await _client.request<DeleteAiToneRulesMutation, DeleteAiToneRulesMutationVariables>(
        DeleteAiToneRulesDocument, variables
      );
      return response.deleteAiToneRules;
    },

    async deleteApiKey(variables: DeleteApiKeyMutationVariables): Promise<DeleteApiKeyMutation["deleteApiKey"]> {
      const response = await _client.request<DeleteApiKeyMutation, DeleteApiKeyMutationVariables>(
        DeleteApiKeyDocument, variables
      );
      return response.deleteApiKey;
    },

    async deleteAutoresponder(variables: DeleteAutoresponderMutationVariables): Promise<DeleteAutoresponderMutation["deleteAutoresponder"]> {
      const response = await _client.request<DeleteAutoresponderMutation, DeleteAutoresponderMutationVariables>(
        DeleteAutoresponderDocument, variables
      );
      return response.deleteAutoresponder;
    },

    async deleteBusinessHours(): Promise<DeleteBusinessHoursMutation["deleteBusinessHours"]> {
      const response = await _client.request<DeleteBusinessHoursMutation, Record<string, never>>(
        DeleteBusinessHoursDocument
      );
      return response.deleteBusinessHours;
    },

    async deleteChatApp(variables: DeleteChatAppMutationVariables): Promise<DeleteChatAppMutation["deleteChatApp"]> {
      const response = await _client.request<DeleteChatAppMutation, DeleteChatAppMutationVariables>(
        DeleteChatAppDocument, variables
      );
      return response.deleteChatApp;
    },

    async deleteChatAppSecret(variables: DeleteChatAppSecretMutationVariables): Promise<DeleteChatAppSecretMutation["deleteChatAppSecret"]> {
      const response = await _client.request<DeleteChatAppSecretMutation, DeleteChatAppSecretMutationVariables>(
        DeleteChatAppSecretDocument, variables
      );
      return response.deleteChatAppSecret;
    },

    async deleteCompany(variables: DeleteCompanyMutationVariables): Promise<DeleteCompanyMutation["deleteCompany"]> {
      const response = await _client.request<DeleteCompanyMutation, DeleteCompanyMutationVariables>(
        DeleteCompanyDocument, variables
      );
      return response.deleteCompany;
    },

    async deleteCustomRole(variables: DeleteCustomRoleMutationVariables): Promise<DeleteCustomRoleMutation["deleteCustomRole"]> {
      const response = await _client.request<DeleteCustomRoleMutation, DeleteCustomRoleMutationVariables>(
        DeleteCustomRoleDocument, variables
      );
      return response.deleteCustomRole;
    },

    async deleteCustomer(variables: DeleteCustomerMutationVariables): Promise<DeleteCustomerMutation["deleteCustomer"]> {
      const response = await _client.request<DeleteCustomerMutation, DeleteCustomerMutationVariables>(
        DeleteCustomerDocument, variables
      );
      return response.deleteCustomer;
    },

    async deleteCustomerCardConfig(variables: DeleteCustomerCardConfigMutationVariables): Promise<DeleteCustomerCardConfigMutation["deleteCustomerCardConfig"]> {
      const response = await _client.request<DeleteCustomerCardConfigMutation, DeleteCustomerCardConfigMutationVariables>(
        DeleteCustomerCardConfigDocument, variables
      );
      return response.deleteCustomerCardConfig;
    },

    async deleteCustomerGroup(variables: DeleteCustomerGroupMutationVariables): Promise<DeleteCustomerGroupMutation["deleteCustomerGroup"]> {
      const response = await _client.request<DeleteCustomerGroupMutation, DeleteCustomerGroupMutationVariables>(
        DeleteCustomerGroupDocument, variables
      );
      return response.deleteCustomerGroup;
    },

    async deleteCustomerSurvey(variables: DeleteCustomerSurveyMutationVariables): Promise<DeleteCustomerSurveyMutation["deleteCustomerSurvey"]> {
      const response = await _client.request<DeleteCustomerSurveyMutation, DeleteCustomerSurveyMutationVariables>(
        DeleteCustomerSurveyDocument, variables
      );
      return response.deleteCustomerSurvey;
    },

    async deleteEscalationPath(variables: DeleteEscalationPathMutationVariables): Promise<DeleteEscalationPathMutation["deleteEscalationPath"]> {
      const response = await _client.request<DeleteEscalationPathMutation, DeleteEscalationPathMutationVariables>(
        DeleteEscalationPathDocument, variables
      );
      return response.deleteEscalationPath;
    },

    async deleteGithubUserAuthIntegration(): Promise<DeleteGithubUserAuthIntegrationMutation["deleteGithubUserAuthIntegration"]> {
      const response = await _client.request<DeleteGithubUserAuthIntegrationMutation, Record<string, never>>(
        DeleteGithubUserAuthIntegrationDocument
      );
      return response.deleteGithubUserAuthIntegration;
    },

    async deleteHelpCenter(variables: DeleteHelpCenterMutationVariables): Promise<DeleteHelpCenterMutation["deleteHelpCenter"]> {
      const response = await _client.request<DeleteHelpCenterMutation, DeleteHelpCenterMutationVariables>(
        DeleteHelpCenterDocument, variables
      );
      return response.deleteHelpCenter;
    },

    async deleteHelpCenterArticle(variables: DeleteHelpCenterArticleMutationVariables): Promise<DeleteHelpCenterArticleMutation["deleteHelpCenterArticle"]> {
      const response = await _client.request<DeleteHelpCenterArticleMutation, DeleteHelpCenterArticleMutationVariables>(
        DeleteHelpCenterArticleDocument, variables
      );
      return response.deleteHelpCenterArticle;
    },

    async deleteHelpCenterArticleGroup(variables: DeleteHelpCenterArticleGroupMutationVariables): Promise<DeleteHelpCenterArticleGroupMutation["deleteHelpCenterArticleGroup"]> {
      const response = await _client.request<DeleteHelpCenterArticleGroupMutation, DeleteHelpCenterArticleGroupMutationVariables>(
        DeleteHelpCenterArticleGroupDocument, variables
      );
      return response.deleteHelpCenterArticleGroup;
    },

    async deleteKnowledgeSource(variables: DeleteKnowledgeSourceMutationVariables): Promise<DeleteKnowledgeSourceMutation["deleteKnowledgeSource"]> {
      const response = await _client.request<DeleteKnowledgeSourceMutation, DeleteKnowledgeSourceMutationVariables>(
        DeleteKnowledgeSourceDocument, variables
      );
      return response.deleteKnowledgeSource;
    },

    async deleteMachineUser(variables: DeleteMachineUserMutationVariables): Promise<DeleteMachineUserMutation["deleteMachineUser"]> {
      const response = await _client.request<DeleteMachineUserMutation, DeleteMachineUserMutationVariables>(
        DeleteMachineUserDocument, variables
      );
      return response.deleteMachineUser;
    },

    async deleteMyFavoritePage(variables: DeleteMyFavoritePageMutationVariables): Promise<DeleteMyFavoritePageMutation["deleteMyFavoritePage"]> {
      const response = await _client.request<DeleteMyFavoritePageMutation, DeleteMyFavoritePageMutationVariables>(
        DeleteMyFavoritePageDocument, variables
      );
      return response.deleteMyFavoritePage;
    },

    async deleteMyLinearIntegration(): Promise<DeleteMyLinearIntegrationMutation["deleteMyLinearIntegration"]> {
      const response = await _client.request<DeleteMyLinearIntegrationMutation, Record<string, never>>(
        DeleteMyLinearIntegrationDocument
      );
      return response.deleteMyLinearIntegration;
    },

    async deleteMyMSTeamsIntegration(): Promise<DeleteMyMsTeamsIntegrationMutation["deleteMyMSTeamsIntegration"]> {
      const response = await _client.request<DeleteMyMsTeamsIntegrationMutation, Record<string, never>>(
        DeleteMyMsTeamsIntegrationDocument
      );
      return response.deleteMyMSTeamsIntegration;
    },

    async deleteMyServiceAuthorization(variables: DeleteMyServiceAuthorizationMutationVariables): Promise<DeleteMyServiceAuthorizationMutation["deleteMyServiceAuthorization"]> {
      const response = await _client.request<DeleteMyServiceAuthorizationMutation, DeleteMyServiceAuthorizationMutationVariables>(
        DeleteMyServiceAuthorizationDocument, variables
      );
      return response.deleteMyServiceAuthorization;
    },

    async deleteMySlackIntegration(): Promise<DeleteMySlackIntegrationMutation["deleteMySlackIntegration"]> {
      const response = await _client.request<DeleteMySlackIntegrationMutation, Record<string, never>>(
        DeleteMySlackIntegrationDocument
      );
      return response.deleteMySlackIntegration;
    },

    async deleteNote(variables: DeleteNoteMutationVariables): Promise<DeleteNoteMutation["deleteNote"]> {
      const response = await _client.request<DeleteNoteMutation, DeleteNoteMutationVariables>(
        DeleteNoteDocument, variables
      );
      return response.deleteNote;
    },

    async deleteSavedThreadsView(variables: DeleteSavedThreadsViewMutationVariables): Promise<DeleteSavedThreadsViewMutation["deleteSavedThreadsView"]> {
      const response = await _client.request<DeleteSavedThreadsViewMutation, DeleteSavedThreadsViewMutationVariables>(
        DeleteSavedThreadsViewDocument, variables
      );
      return response.deleteSavedThreadsView;
    },

    async deleteServiceAuthorization(variables: DeleteServiceAuthorizationMutationVariables): Promise<DeleteServiceAuthorizationMutation["deleteServiceAuthorization"]> {
      const response = await _client.request<DeleteServiceAuthorizationMutation, DeleteServiceAuthorizationMutationVariables>(
        DeleteServiceAuthorizationDocument, variables
      );
      return response.deleteServiceAuthorization;
    },

    async deleteServiceLevelAgreement(variables: DeleteServiceLevelAgreementMutationVariables): Promise<DeleteServiceLevelAgreementMutation["deleteServiceLevelAgreement"]> {
      const response = await _client.request<DeleteServiceLevelAgreementMutation, DeleteServiceLevelAgreementMutationVariables>(
        DeleteServiceLevelAgreementDocument, variables
      );
      return response.deleteServiceLevelAgreement;
    },

    async deleteSnippet(variables: DeleteSnippetMutationVariables): Promise<DeleteSnippetMutation["deleteSnippet"]> {
      const response = await _client.request<DeleteSnippetMutation, DeleteSnippetMutationVariables>(
        DeleteSnippetDocument, variables
      );
      return response.deleteSnippet;
    },

    async deleteTask(variables: DeleteTaskMutationVariables): Promise<DeleteTaskMutation["deleteTask"]> {
      const response = await _client.request<DeleteTaskMutation, DeleteTaskMutationVariables>(
        DeleteTaskDocument, variables
      );
      return response.deleteTask;
    },

    async deleteTenant(variables: DeleteTenantMutationVariables): Promise<DeleteTenantMutation["deleteTenant"]> {
      const response = await _client.request<DeleteTenantMutation, DeleteTenantMutationVariables>(
        DeleteTenantDocument, variables
      );
      return response.deleteTenant;
    },

    async deleteTenantField(variables: DeleteTenantFieldMutationVariables): Promise<DeleteTenantFieldMutation["deleteTenantField"]> {
      const response = await _client.request<DeleteTenantFieldMutation, DeleteTenantFieldMutationVariables>(
        DeleteTenantFieldDocument, variables
      );
      return response.deleteTenantField;
    },

    async deleteTenantFieldSchema(variables: DeleteTenantFieldSchemaMutationVariables): Promise<DeleteTenantFieldSchemaMutation["deleteTenantFieldSchema"]> {
      const response = await _client.request<DeleteTenantFieldSchemaMutation, DeleteTenantFieldSchemaMutationVariables>(
        DeleteTenantFieldSchemaDocument, variables
      );
      return response.deleteTenantFieldSchema;
    },

    async deleteThread(variables: DeleteThreadMutationVariables): Promise<DeleteThreadMutation["deleteThread"]> {
      const response = await _client.request<DeleteThreadMutation, DeleteThreadMutationVariables>(
        DeleteThreadDocument, variables
      );
      return response.deleteThread;
    },

    async deleteThreadChannelAssociation(variables: DeleteThreadChannelAssociationMutationVariables): Promise<DeleteThreadChannelAssociationMutation["deleteThreadChannelAssociation"]> {
      const response = await _client.request<DeleteThreadChannelAssociationMutation, DeleteThreadChannelAssociationMutationVariables>(
        DeleteThreadChannelAssociationDocument, variables
      );
      return response.deleteThreadChannelAssociation;
    },

    async deleteThreadField(variables: DeleteThreadFieldMutationVariables): Promise<DeleteThreadFieldMutation["deleteThreadField"]> {
      const response = await _client.request<DeleteThreadFieldMutation, DeleteThreadFieldMutationVariables>(
        DeleteThreadFieldDocument, variables
      );
      return response.deleteThreadField;
    },

    async deleteThreadFieldSchema(variables: DeleteThreadFieldSchemaMutationVariables): Promise<DeleteThreadFieldSchemaMutation["deleteThreadFieldSchema"]> {
      const response = await _client.request<DeleteThreadFieldSchemaMutation, DeleteThreadFieldSchemaMutationVariables>(
        DeleteThreadFieldSchemaDocument, variables
      );
      return response.deleteThreadFieldSchema;
    },

    async deleteThreadLink(variables: DeleteThreadLinkMutationVariables): Promise<DeleteThreadLinkMutation["deleteThreadLink"]> {
      const response = await _client.request<DeleteThreadLinkMutation, DeleteThreadLinkMutationVariables>(
        DeleteThreadLinkDocument, variables
      );
      return response.deleteThreadLink;
    },

    async deleteTier(variables: DeleteTierMutationVariables): Promise<DeleteTierMutation["deleteTier"]> {
      const response = await _client.request<DeleteTierMutation, DeleteTierMutationVariables>(
        DeleteTierDocument, variables
      );
      return response.deleteTier;
    },

    async deleteUser(variables: DeleteUserMutationVariables): Promise<DeleteUserMutation["deleteUser"]> {
      const response = await _client.request<DeleteUserMutation, DeleteUserMutationVariables>(
        DeleteUserDocument, variables
      );
      return response.deleteUser;
    },

    async deleteUserAuthDiscordChannelIntegration(variables: DeleteUserAuthDiscordChannelIntegrationMutationVariables): Promise<DeleteUserAuthDiscordChannelIntegrationMutation["deleteUserAuthDiscordChannelIntegration"]> {
      const response = await _client.request<DeleteUserAuthDiscordChannelIntegrationMutation, DeleteUserAuthDiscordChannelIntegrationMutationVariables>(
        DeleteUserAuthDiscordChannelIntegrationDocument, variables
      );
      return response.deleteUserAuthDiscordChannelIntegration;
    },

    async deleteUserAuthSlackIntegration(variables: DeleteUserAuthSlackIntegrationMutationVariables): Promise<DeleteUserAuthSlackIntegrationMutation["deleteUserAuthSlackIntegration"]> {
      const response = await _client.request<DeleteUserAuthSlackIntegrationMutation, DeleteUserAuthSlackIntegrationMutationVariables>(
        DeleteUserAuthSlackIntegrationDocument, variables
      );
      return response.deleteUserAuthSlackIntegration;
    },

    async deleteWebhookTarget(variables: DeleteWebhookTargetMutationVariables): Promise<DeleteWebhookTargetMutation["deleteWebhookTarget"]> {
      const response = await _client.request<DeleteWebhookTargetMutation, DeleteWebhookTargetMutationVariables>(
        DeleteWebhookTargetDocument, variables
      );
      return response.deleteWebhookTarget;
    },

    async deleteWorkflow(variables: DeleteWorkflowMutationVariables): Promise<DeleteWorkflowMutation["deleteWorkflow"]> {
      const response = await _client.request<DeleteWorkflowMutation, DeleteWorkflowMutationVariables>(
        DeleteWorkflowDocument, variables
      );
      return response.deleteWorkflow;
    },

    async deleteWorkflowRule(variables: DeleteWorkflowRuleMutationVariables): Promise<DeleteWorkflowRuleMutation["deleteWorkflowRule"]> {
      const response = await _client.request<DeleteWorkflowRuleMutation, DeleteWorkflowRuleMutationVariables>(
        DeleteWorkflowRuleDocument, variables
      );
      return response.deleteWorkflowRule;
    },

    async deleteWorkflowStep(variables: DeleteWorkflowStepMutationVariables): Promise<DeleteWorkflowStepMutation["deleteWorkflowStep"]> {
      const response = await _client.request<DeleteWorkflowStepMutation, DeleteWorkflowStepMutationVariables>(
        DeleteWorkflowStepDocument, variables
      );
      return response.deleteWorkflowStep;
    },

    async deleteWorkspaceCursorIntegration(variables: DeleteWorkspaceCursorIntegrationMutationVariables): Promise<DeleteWorkspaceCursorIntegrationMutation["deleteWorkspaceCursorIntegration"]> {
      const response = await _client.request<DeleteWorkspaceCursorIntegrationMutation, DeleteWorkspaceCursorIntegrationMutationVariables>(
        DeleteWorkspaceCursorIntegrationDocument, variables
      );
      return response.deleteWorkspaceCursorIntegration;
    },

    async deleteWorkspaceDiscordChannelIntegration(variables: DeleteWorkspaceDiscordChannelIntegrationMutationVariables): Promise<DeleteWorkspaceDiscordChannelIntegrationMutation["deleteWorkspaceDiscordChannelIntegration"]> {
      const response = await _client.request<DeleteWorkspaceDiscordChannelIntegrationMutation, DeleteWorkspaceDiscordChannelIntegrationMutationVariables>(
        DeleteWorkspaceDiscordChannelIntegrationDocument, variables
      );
      return response.deleteWorkspaceDiscordChannelIntegration;
    },

    async deleteWorkspaceDiscordIntegration(variables: DeleteWorkspaceDiscordIntegrationMutationVariables): Promise<DeleteWorkspaceDiscordIntegrationMutation["deleteWorkspaceDiscordIntegration"]> {
      const response = await _client.request<DeleteWorkspaceDiscordIntegrationMutation, DeleteWorkspaceDiscordIntegrationMutationVariables>(
        DeleteWorkspaceDiscordIntegrationDocument, variables
      );
      return response.deleteWorkspaceDiscordIntegration;
    },

    async deleteWorkspaceEmailDomainSettings(): Promise<DeleteWorkspaceEmailDomainSettingsMutation["deleteWorkspaceEmailDomainSettings"]> {
      const response = await _client.request<DeleteWorkspaceEmailDomainSettingsMutation, Record<string, never>>(
        DeleteWorkspaceEmailDomainSettingsDocument
      );
      return response.deleteWorkspaceEmailDomainSettings;
    },

    async deleteWorkspaceFile(variables: DeleteWorkspaceFileMutationVariables): Promise<DeleteWorkspaceFileMutation["deleteWorkspaceFile"]> {
      const response = await _client.request<DeleteWorkspaceFileMutation, DeleteWorkspaceFileMutationVariables>(
        DeleteWorkspaceFileDocument, variables
      );
      return response.deleteWorkspaceFile;
    },

    async deleteWorkspaceInvite(variables: DeleteWorkspaceInviteMutationVariables): Promise<DeleteWorkspaceInviteMutation["deleteWorkspaceInvite"]> {
      const response = await _client.request<DeleteWorkspaceInviteMutation, DeleteWorkspaceInviteMutationVariables>(
        DeleteWorkspaceInviteDocument, variables
      );
      return response.deleteWorkspaceInvite;
    },

    async deleteWorkspaceMSTeamsIntegration(variables: DeleteWorkspaceMsTeamsIntegrationMutationVariables): Promise<DeleteWorkspaceMsTeamsIntegrationMutation["deleteWorkspaceMSTeamsIntegration"]> {
      const response = await _client.request<DeleteWorkspaceMsTeamsIntegrationMutation, DeleteWorkspaceMsTeamsIntegrationMutationVariables>(
        DeleteWorkspaceMsTeamsIntegrationDocument, variables
      );
      return response.deleteWorkspaceMSTeamsIntegration;
    },

    async deleteWorkspaceSlackChannelIntegration(variables: DeleteWorkspaceSlackChannelIntegrationMutationVariables): Promise<DeleteWorkspaceSlackChannelIntegrationMutation["deleteWorkspaceSlackChannelIntegration"]> {
      const response = await _client.request<DeleteWorkspaceSlackChannelIntegrationMutation, DeleteWorkspaceSlackChannelIntegrationMutationVariables>(
        DeleteWorkspaceSlackChannelIntegrationDocument, variables
      );
      return response.deleteWorkspaceSlackChannelIntegration;
    },

    async deleteWorkspaceSlackIntegration(variables: DeleteWorkspaceSlackIntegrationMutationVariables): Promise<DeleteWorkspaceSlackIntegrationMutation["deleteWorkspaceSlackIntegration"]> {
      const response = await _client.request<DeleteWorkspaceSlackIntegrationMutation, DeleteWorkspaceSlackIntegrationMutationVariables>(
        DeleteWorkspaceSlackIntegrationDocument, variables
      );
      return response.deleteWorkspaceSlackIntegration;
    },

    async escalateThread(variables: EscalateThreadMutationVariables): Promise<EscalateThreadMutation["escalateThread"]> {
      const response = await _client.request<EscalateThreadMutation, EscalateThreadMutationVariables>(
        EscalateThreadDocument, variables
      );
      return response.escalateThread;
    },

    async forkThread(variables: ForkThreadMutationVariables): Promise<ForkThreadMutation["forkThread"]> {
      const response = await _client.request<ForkThreadMutation, ForkThreadMutationVariables>(
        ForkThreadDocument, variables
      );
      return response.forkThread;
    },

    async generateAiToneRulesFromDescription(variables: GenerateAiToneRulesFromDescriptionMutationVariables): Promise<GenerateAiToneRulesFromDescriptionMutation["generateAiToneRulesFromDescription"]> {
      const response = await _client.request<GenerateAiToneRulesFromDescriptionMutation, GenerateAiToneRulesFromDescriptionMutationVariables>(
        GenerateAiToneRulesFromDescriptionDocument, variables
      );
      return response.generateAiToneRulesFromDescription;
    },

    async generateHelpCenterArticle(variables: GenerateHelpCenterArticleMutationVariables): Promise<GenerateHelpCenterArticleMutation["generateHelpCenterArticle"]> {
      const response = await _client.request<GenerateHelpCenterArticleMutation, GenerateHelpCenterArticleMutationVariables>(
        GenerateHelpCenterArticleDocument, variables
      );
      return response.generateHelpCenterArticle;
    },

    async importCustomers(variables: ImportCustomersMutationVariables): Promise<ImportCustomersMutation["importCustomers"]> {
      const response = await _client.request<ImportCustomersMutation, ImportCustomersMutationVariables>(
        ImportCustomersDocument, variables
      );
      return response.importCustomers;
    },

    async importTenantFieldSchemas(variables: ImportTenantFieldSchemasMutationVariables): Promise<ImportTenantFieldSchemasMutation["importTenantFieldSchemas"]> {
      const response = await _client.request<ImportTenantFieldSchemasMutation, ImportTenantFieldSchemasMutationVariables>(
        ImportTenantFieldSchemasDocument, variables
      );
      return response.importTenantFieldSchemas;
    },

    async importTenants(variables: ImportTenantsMutationVariables): Promise<ImportTenantsMutation["importTenants"]> {
      const response = await _client.request<ImportTenantsMutation, ImportTenantsMutationVariables>(
        ImportTenantsDocument, variables
      );
      return response.importTenants;
    },

    async inviteUserToWorkspace(variables: InviteUserToWorkspaceMutationVariables): Promise<InviteUserToWorkspaceMutation["inviteUserToWorkspace"]> {
      const response = await _client.request<InviteUserToWorkspaceMutation, InviteUserToWorkspaceMutationVariables>(
        InviteUserToWorkspaceDocument, variables
      );
      return response.inviteUserToWorkspace;
    },

    async lockThread(variables: LockThreadMutationVariables): Promise<LockThreadMutation["lockThread"]> {
      const response = await _client.request<LockThreadMutation, LockThreadMutationVariables>(
        LockThreadDocument, variables
      );
      return response.lockThread;
    },

    async markCustomerAsSpam(variables: MarkCustomerAsSpamMutationVariables): Promise<MarkCustomerAsSpamMutation["markCustomerAsSpam"]> {
      const response = await _client.request<MarkCustomerAsSpamMutation, MarkCustomerAsSpamMutationVariables>(
        MarkCustomerAsSpamDocument, variables
      );
      return response.markCustomerAsSpam;
    },

    async markThreadAsDone(variables: MarkThreadAsDoneMutationVariables): Promise<MarkThreadAsDoneMutation["markThreadAsDone"]> {
      const response = await _client.request<MarkThreadAsDoneMutation, MarkThreadAsDoneMutationVariables>(
        MarkThreadAsDoneDocument, variables
      );
      return response.markThreadAsDone;
    },

    async markThreadAsTodo(variables: MarkThreadAsTodoMutationVariables): Promise<MarkThreadAsTodoMutation["markThreadAsTodo"]> {
      const response = await _client.request<MarkThreadAsTodoMutation, MarkThreadAsTodoMutationVariables>(
        MarkThreadAsTodoDocument, variables
      );
      return response.markThreadAsTodo;
    },

    async markThreadDiscussionAsResolved(variables: MarkThreadDiscussionAsResolvedMutationVariables): Promise<MarkThreadDiscussionAsResolvedMutation["markThreadDiscussionAsResolved"]> {
      const response = await _client.request<MarkThreadDiscussionAsResolvedMutation, MarkThreadDiscussionAsResolvedMutationVariables>(
        MarkThreadDiscussionAsResolvedDocument, variables
      );
      return response.markThreadDiscussionAsResolved;
    },

    async moveLabelType(variables: MoveLabelTypeMutationVariables): Promise<MoveLabelTypeMutation["moveLabelType"]> {
      const response = await _client.request<MoveLabelTypeMutation, MoveLabelTypeMutationVariables>(
        MoveLabelTypeDocument, variables
      );
      return response.moveLabelType;
    },

    async previewBillingPlanChange(variables: PreviewBillingPlanChangeMutationVariables): Promise<PreviewBillingPlanChangeMutation["previewBillingPlanChange"]> {
      const response = await _client.request<PreviewBillingPlanChangeMutation, PreviewBillingPlanChangeMutationVariables>(
        PreviewBillingPlanChangeDocument, variables
      );
      return response.previewBillingPlanChange;
    },

    async refreshConnectedDiscordChannels(variables: RefreshConnectedDiscordChannelsMutationVariables): Promise<RefreshConnectedDiscordChannelsMutation["refreshConnectedDiscordChannels"]> {
      const response = await _client.request<RefreshConnectedDiscordChannelsMutation, RefreshConnectedDiscordChannelsMutationVariables>(
        RefreshConnectedDiscordChannelsDocument, variables
      );
      return response.refreshConnectedDiscordChannels;
    },

    async refreshWorkspaceSlackChannelIntegration(variables: RefreshWorkspaceSlackChannelIntegrationMutationVariables): Promise<RefreshWorkspaceSlackChannelIntegrationMutation["refreshWorkspaceSlackChannelIntegration"]> {
      const response = await _client.request<RefreshWorkspaceSlackChannelIntegrationMutation, RefreshWorkspaceSlackChannelIntegrationMutationVariables>(
        RefreshWorkspaceSlackChannelIntegrationDocument, variables
      );
      return response.refreshWorkspaceSlackChannelIntegration;
    },

    async regenerateWorkspaceHmac(): Promise<RegenerateWorkspaceHmacMutation["regenerateWorkspaceHmac"]> {
      const response = await _client.request<RegenerateWorkspaceHmacMutation, Record<string, never>>(
        RegenerateWorkspaceHmacDocument
      );
      return response.regenerateWorkspaceHmac;
    },

    async reindexKnowledgeSource(variables: ReindexKnowledgeSourceMutationVariables): Promise<ReindexKnowledgeSourceMutation["reindexKnowledgeSource"]> {
      const response = await _client.request<ReindexKnowledgeSourceMutation, ReindexKnowledgeSourceMutationVariables>(
        ReindexKnowledgeSourceDocument, variables
      );
      return response.reindexKnowledgeSource;
    },

    async reloadCustomerCardInstance(variables: ReloadCustomerCardInstanceMutationVariables): Promise<ReloadCustomerCardInstanceMutation["reloadCustomerCardInstance"]> {
      const response = await _client.request<ReloadCustomerCardInstanceMutation, ReloadCustomerCardInstanceMutationVariables>(
        ReloadCustomerCardInstanceDocument, variables
      );
      return response.reloadCustomerCardInstance;
    },

    async removeAdditionalAssignees(variables: RemoveAdditionalAssigneesMutationVariables): Promise<RemoveAdditionalAssigneesMutation["removeAdditionalAssignees"]> {
      const response = await _client.request<RemoveAdditionalAssigneesMutation, RemoveAdditionalAssigneesMutationVariables>(
        RemoveAdditionalAssigneesDocument, variables
      );
      return response.removeAdditionalAssignees;
    },

    async removeCustomerFromCustomerGroups(variables: RemoveCustomerFromCustomerGroupsMutationVariables): Promise<RemoveCustomerFromCustomerGroupsMutation["removeCustomerFromCustomerGroups"]> {
      const response = await _client.request<RemoveCustomerFromCustomerGroupsMutation, RemoveCustomerFromCustomerGroupsMutationVariables>(
        RemoveCustomerFromCustomerGroupsDocument, variables
      );
      return response.removeCustomerFromCustomerGroups;
    },

    async removeCustomerFromTenants(variables: RemoveCustomerFromTenantsMutationVariables): Promise<RemoveCustomerFromTenantsMutation["removeCustomerFromTenants"]> {
      const response = await _client.request<RemoveCustomerFromTenantsMutation, RemoveCustomerFromTenantsMutationVariables>(
        RemoveCustomerFromTenantsDocument, variables
      );
      return response.removeCustomerFromTenants;
    },

    async removeLabels(variables: RemoveLabelsMutationVariables): Promise<RemoveLabelsMutation["removeLabels"]> {
      const response = await _client.request<RemoveLabelsMutation, RemoveLabelsMutationVariables>(
        RemoveLabelsDocument, variables
      );
      return response.removeLabels;
    },

    async removeLabelsFromUser(variables: RemoveLabelsFromUserMutationVariables): Promise<RemoveLabelsFromUserMutation["removeLabelsFromUser"]> {
      const response = await _client.request<RemoveLabelsFromUserMutation, RemoveLabelsFromUserMutationVariables>(
        RemoveLabelsFromUserDocument, variables
      );
      return response.removeLabelsFromUser;
    },

    async removeMembersFromTier(variables: RemoveMembersFromTierMutationVariables): Promise<RemoveMembersFromTierMutation["removeMembersFromTier"]> {
      const response = await _client.request<RemoveMembersFromTierMutation, RemoveMembersFromTierMutationVariables>(
        RemoveMembersFromTierDocument, variables
      );
      return response.removeMembersFromTier;
    },

    async removeTenantFieldSchemaMapping(variables: RemoveTenantFieldSchemaMappingMutationVariables): Promise<RemoveTenantFieldSchemaMappingMutation["removeTenantFieldSchemaMapping"]> {
      const response = await _client.request<RemoveTenantFieldSchemaMappingMutation, RemoveTenantFieldSchemaMappingMutationVariables>(
        RemoveTenantFieldSchemaMappingDocument, variables
      );
      return response.removeTenantFieldSchemaMapping;
    },

    async removeUserFromActiveBillingRota(variables: RemoveUserFromActiveBillingRotaMutationVariables): Promise<RemoveUserFromActiveBillingRotaMutation["removeUserFromActiveBillingRota"]> {
      const response = await _client.request<RemoveUserFromActiveBillingRotaMutation, RemoveUserFromActiveBillingRotaMutationVariables>(
        RemoveUserFromActiveBillingRotaDocument, variables
      );
      return response.removeUserFromActiveBillingRota;
    },

    async removeWorkspaceAlternateSupportEmailAddress(variables: RemoveWorkspaceAlternateSupportEmailAddressMutationVariables): Promise<RemoveWorkspaceAlternateSupportEmailAddressMutation["removeWorkspaceAlternateSupportEmailAddress"]> {
      const response = await _client.request<RemoveWorkspaceAlternateSupportEmailAddressMutation, RemoveWorkspaceAlternateSupportEmailAddressMutationVariables>(
        RemoveWorkspaceAlternateSupportEmailAddressDocument, variables
      );
      return response.removeWorkspaceAlternateSupportEmailAddress;
    },

    async reorderAutoresponders(variables: ReorderAutorespondersMutationVariables): Promise<ReorderAutorespondersMutation["reorderAutoresponders"]> {
      const response = await _client.request<ReorderAutorespondersMutation, ReorderAutorespondersMutationVariables>(
        ReorderAutorespondersDocument, variables
      );
      return response.reorderAutoresponders;
    },

    async reorderCustomerCardConfigs(variables: ReorderCustomerCardConfigsMutationVariables): Promise<ReorderCustomerCardConfigsMutation["reorderCustomerCardConfigs"]> {
      const response = await _client.request<ReorderCustomerCardConfigsMutation, ReorderCustomerCardConfigsMutationVariables>(
        ReorderCustomerCardConfigsDocument, variables
      );
      return response.reorderCustomerCardConfigs;
    },

    async reorderCustomerSurveys(variables: ReorderCustomerSurveysMutationVariables): Promise<ReorderCustomerSurveysMutation["reorderCustomerSurveys"]> {
      const response = await _client.request<ReorderCustomerSurveysMutation, ReorderCustomerSurveysMutationVariables>(
        ReorderCustomerSurveysDocument, variables
      );
      return response.reorderCustomerSurveys;
    },

    async reorderThreadFieldSchemas(variables: ReorderThreadFieldSchemasMutationVariables): Promise<ReorderThreadFieldSchemasMutation["reorderThreadFieldSchemas"]> {
      const response = await _client.request<ReorderThreadFieldSchemasMutation, ReorderThreadFieldSchemasMutationVariables>(
        ReorderThreadFieldSchemasDocument, variables
      );
      return response.reorderThreadFieldSchemas;
    },

    async replyToEmail(variables: ReplyToEmailMutationVariables): Promise<ReplyToEmailMutation["replyToEmail"]> {
      const response = await _client.request<ReplyToEmailMutation, ReplyToEmailMutationVariables>(
        ReplyToEmailDocument, variables
      );
      return response.replyToEmail;
    },

    async replyToThread(variables: ReplyToThreadMutationVariables): Promise<ReplyToThreadMutation["replyToThread"]> {
      const response = await _client.request<ReplyToThreadMutation, ReplyToThreadMutationVariables>(
        ReplyToThreadDocument, variables
      );
      return response.replyToThread;
    },

    async resolveCustomerForMSTeamsChannel(variables: ResolveCustomerForMsTeamsChannelMutationVariables): Promise<ResolveCustomerForMsTeamsChannelMutation["resolveCustomerForMSTeamsChannel"]> {
      const response = await _client.request<ResolveCustomerForMsTeamsChannelMutation, ResolveCustomerForMsTeamsChannelMutationVariables>(
        ResolveCustomerForMsTeamsChannelDocument, variables
      );
      return response.resolveCustomerForMSTeamsChannel;
    },

    async resolveCustomerForSlackChannel(variables: ResolveCustomerForSlackChannelMutationVariables): Promise<ResolveCustomerForSlackChannelMutation["resolveCustomerForSlackChannel"]> {
      const response = await _client.request<ResolveCustomerForSlackChannelMutation, ResolveCustomerForSlackChannelMutationVariables>(
        ResolveCustomerForSlackChannelDocument, variables
      );
      return response.resolveCustomerForSlackChannel;
    },

    async sendBulkEmail(variables: SendBulkEmailMutationVariables): Promise<SendBulkEmailMutation["sendBulkEmail"]> {
      const response = await _client.request<SendBulkEmailMutation, SendBulkEmailMutationVariables>(
        SendBulkEmailDocument, variables
      );
      return response.sendBulkEmail;
    },

    async sendChat(variables: SendChatMutationVariables): Promise<SendChatMutation["sendChat"]> {
      const response = await _client.request<SendChatMutation, SendChatMutationVariables>(
        SendChatDocument, variables
      );
      return response.sendChat;
    },

    async sendCustomerChat(variables: SendCustomerChatMutationVariables): Promise<SendCustomerChatMutation["sendCustomerChat"]> {
      const response = await _client.request<SendCustomerChatMutation, SendCustomerChatMutationVariables>(
        SendCustomerChatDocument, variables
      );
      return response.sendCustomerChat;
    },

    async sendDiscordMessage(variables: SendDiscordMessageMutationVariables): Promise<SendDiscordMessageMutation["sendDiscordMessage"]> {
      const response = await _client.request<SendDiscordMessageMutation, SendDiscordMessageMutationVariables>(
        SendDiscordMessageDocument, variables
      );
      return response.sendDiscordMessage;
    },

    async sendMSTeamsMessage(variables: SendMsTeamsMessageMutationVariables): Promise<SendMsTeamsMessageMutation["sendMSTeamsMessage"]> {
      const response = await _client.request<SendMsTeamsMessageMutation, SendMsTeamsMessageMutationVariables>(
        SendMsTeamsMessageDocument, variables
      );
      return response.sendMSTeamsMessage;
    },

    async sendNewEmail(variables: SendNewEmailMutationVariables): Promise<SendNewEmailMutation["sendNewEmail"]> {
      const response = await _client.request<SendNewEmailMutation, SendNewEmailMutationVariables>(
        SendNewEmailDocument, variables
      );
      return response.sendNewEmail;
    },

    async sendSlackMessage(variables: SendSlackMessageMutationVariables): Promise<SendSlackMessageMutation["sendSlackMessage"]> {
      const response = await _client.request<SendSlackMessageMutation, SendSlackMessageMutationVariables>(
        SendSlackMessageDocument, variables
      );
      return response.sendSlackMessage;
    },

    async sendThreadDiscussionMessage(variables: SendThreadDiscussionMessageMutationVariables): Promise<SendThreadDiscussionMessageMutation["sendThreadDiscussionMessage"]> {
      const response = await _client.request<SendThreadDiscussionMessageMutation, SendThreadDiscussionMessageMutationVariables>(
        SendThreadDiscussionMessageDocument, variables
      );
      return response.sendThreadDiscussionMessage;
    },

    async setCustomerTenants(variables: SetCustomerTenantsMutationVariables): Promise<SetCustomerTenantsMutation["setCustomerTenants"]> {
      const response = await _client.request<SetCustomerTenantsMutation, SetCustomerTenantsMutationVariables>(
        SetCustomerTenantsDocument, variables
      );
      return response.setCustomerTenants;
    },

    async setupTenantFieldSchemaMapping(variables: SetupTenantFieldSchemaMappingMutationVariables): Promise<SetupTenantFieldSchemaMappingMutation["setupTenantFieldSchemaMapping"]> {
      const response = await _client.request<SetupTenantFieldSchemaMappingMutation, SetupTenantFieldSchemaMappingMutationVariables>(
        SetupTenantFieldSchemaMappingDocument, variables
      );
      return response.setupTenantFieldSchemaMapping;
    },

    async shareThreadToUserInSlack(variables: ShareThreadToUserInSlackMutationVariables): Promise<ShareThreadToUserInSlackMutation["shareThreadToUserInSlack"]> {
      const response = await _client.request<ShareThreadToUserInSlackMutation, ShareThreadToUserInSlackMutationVariables>(
        ShareThreadToUserInSlackDocument, variables
      );
      return response.shareThreadToUserInSlack;
    },

    async snoozeThread(variables: SnoozeThreadMutationVariables): Promise<SnoozeThreadMutation["snoozeThread"]> {
      const response = await _client.request<SnoozeThreadMutation, SnoozeThreadMutationVariables>(
        SnoozeThreadDocument, variables
      );
      return response.snoozeThread;
    },

    async startServiceAuthorization(variables: StartServiceAuthorizationMutationVariables): Promise<StartServiceAuthorizationMutation["startServiceAuthorization"]> {
      const response = await _client.request<StartServiceAuthorizationMutation, StartServiceAuthorizationMutationVariables>(
        StartServiceAuthorizationDocument, variables
      );
      return response.startServiceAuthorization;
    },

    async syncBusinessHoursSlots(variables: SyncBusinessHoursSlotsMutationVariables): Promise<SyncBusinessHoursSlotsMutation["syncBusinessHoursSlots"]> {
      const response = await _client.request<SyncBusinessHoursSlotsMutation, SyncBusinessHoursSlotsMutationVariables>(
        SyncBusinessHoursSlotsDocument, variables
      );
      return response.syncBusinessHoursSlots;
    },

    async syncUserWorkingHours(variables: SyncUserWorkingHoursMutationVariables): Promise<SyncUserWorkingHoursMutation["syncUserWorkingHours"]> {
      const response = await _client.request<SyncUserWorkingHoursMutation, SyncUserWorkingHoursMutationVariables>(
        SyncUserWorkingHoursDocument, variables
      );
      return response.syncUserWorkingHours;
    },

    async toggleSlackMessageReaction(variables: ToggleSlackMessageReactionMutationVariables): Promise<ToggleSlackMessageReactionMutation["toggleSlackMessageReaction"]> {
      const response = await _client.request<ToggleSlackMessageReactionMutation, ToggleSlackMessageReactionMutationVariables>(
        ToggleSlackMessageReactionDocument, variables
      );
      return response.toggleSlackMessageReaction;
    },

    async toggleWorkflowRulePublished(variables: ToggleWorkflowRulePublishedMutationVariables): Promise<ToggleWorkflowRulePublishedMutation["toggleWorkflowRulePublished"]> {
      const response = await _client.request<ToggleWorkflowRulePublishedMutation, ToggleWorkflowRulePublishedMutationVariables>(
        ToggleWorkflowRulePublishedDocument, variables
      );
      return response.toggleWorkflowRulePublished;
    },

    async triggerWorkflow(variables: TriggerWorkflowMutationVariables): Promise<TriggerWorkflowMutation["triggerWorkflow"]> {
      const response = await _client.request<TriggerWorkflowMutation, TriggerWorkflowMutationVariables>(
        TriggerWorkflowDocument, variables
      );
      return response.triggerWorkflow;
    },

    async triggerWorkflowRule(variables: TriggerWorkflowRuleMutationVariables): Promise<TriggerWorkflowRuleMutation["triggerWorkflowRule"]> {
      const response = await _client.request<TriggerWorkflowRuleMutation, TriggerWorkflowRuleMutationVariables>(
        TriggerWorkflowRuleDocument, variables
      );
      return response.triggerWorkflowRule;
    },

    async unarchiveLabelType(variables: UnarchiveLabelTypeMutationVariables): Promise<UnarchiveLabelTypeMutation["unarchiveLabelType"]> {
      const response = await _client.request<UnarchiveLabelTypeMutation, UnarchiveLabelTypeMutationVariables>(
        UnarchiveLabelTypeDocument, variables
      );
      return response.unarchiveLabelType;
    },

    async unassignThread(variables: UnassignThreadMutationVariables): Promise<UnassignThreadMutation["unassignThread"]> {
      const response = await _client.request<UnassignThreadMutation, UnassignThreadMutationVariables>(
        UnassignThreadDocument, variables
      );
      return response.unassignThread;
    },

    async unmarkCustomerAsSpam(variables: UnmarkCustomerAsSpamMutationVariables): Promise<UnmarkCustomerAsSpamMutation["unmarkCustomerAsSpam"]> {
      const response = await _client.request<UnmarkCustomerAsSpamMutation, UnmarkCustomerAsSpamMutationVariables>(
        UnmarkCustomerAsSpamDocument, variables
      );
      return response.unmarkCustomerAsSpam;
    },

    async updateActiveBillingRota(variables: UpdateActiveBillingRotaMutationVariables): Promise<UpdateActiveBillingRotaMutation["updateActiveBillingRota"]> {
      const response = await _client.request<UpdateActiveBillingRotaMutation, UpdateActiveBillingRotaMutationVariables>(
        UpdateActiveBillingRotaDocument, variables
      );
      return response.updateActiveBillingRota;
    },

    async updateAiToneRules(variables: UpdateAiToneRulesMutationVariables): Promise<UpdateAiToneRulesMutation["updateAiToneRules"]> {
      const response = await _client.request<UpdateAiToneRulesMutation, UpdateAiToneRulesMutationVariables>(
        UpdateAiToneRulesDocument, variables
      );
      return response.updateAiToneRules;
    },

    async updateApiKey(variables: UpdateApiKeyMutationVariables): Promise<UpdateApiKeyMutation["updateApiKey"]> {
      const response = await _client.request<UpdateApiKeyMutation, UpdateApiKeyMutationVariables>(
        UpdateApiKeyDocument, variables
      );
      return response.updateApiKey;
    },

    async updateAutoresponder(variables: UpdateAutoresponderMutationVariables): Promise<UpdateAutoresponderMutation["updateAutoresponder"]> {
      const response = await _client.request<UpdateAutoresponderMutation, UpdateAutoresponderMutationVariables>(
        UpdateAutoresponderDocument, variables
      );
      return response.updateAutoresponder;
    },

    async updateChatApp(variables: UpdateChatAppMutationVariables): Promise<UpdateChatAppMutation["updateChatApp"]> {
      const response = await _client.request<UpdateChatAppMutation, UpdateChatAppMutationVariables>(
        UpdateChatAppDocument, variables
      );
      return response.updateChatApp;
    },

    async updateCompanyTier(variables: UpdateCompanyTierMutationVariables): Promise<UpdateCompanyTierMutation["updateCompanyTier"]> {
      const response = await _client.request<UpdateCompanyTierMutation, UpdateCompanyTierMutationVariables>(
        UpdateCompanyTierDocument, variables
      );
      return response.updateCompanyTier;
    },

    async updateConnectedDiscordChannel(variables: UpdateConnectedDiscordChannelMutationVariables): Promise<UpdateConnectedDiscordChannelMutation["updateConnectedDiscordChannel"]> {
      const response = await _client.request<UpdateConnectedDiscordChannelMutation, UpdateConnectedDiscordChannelMutationVariables>(
        UpdateConnectedDiscordChannelDocument, variables
      );
      return response.updateConnectedDiscordChannel;
    },

    async updateConnectedSlackChannel(variables: UpdateConnectedSlackChannelMutationVariables): Promise<UpdateConnectedSlackChannelMutation["updateConnectedSlackChannel"]> {
      const response = await _client.request<UpdateConnectedSlackChannelMutation, UpdateConnectedSlackChannelMutationVariables>(
        UpdateConnectedSlackChannelDocument, variables
      );
      return response.updateConnectedSlackChannel;
    },

    async updateCustomRole(variables: UpdateCustomRoleMutationVariables): Promise<UpdateCustomRoleMutation["updateCustomRole"]> {
      const response = await _client.request<UpdateCustomRoleMutation, UpdateCustomRoleMutationVariables>(
        UpdateCustomRoleDocument, variables
      );
      return response.updateCustomRole;
    },

    async updateCustomerCardConfig(variables: UpdateCustomerCardConfigMutationVariables): Promise<UpdateCustomerCardConfigMutation["updateCustomerCardConfig"]> {
      const response = await _client.request<UpdateCustomerCardConfigMutation, UpdateCustomerCardConfigMutationVariables>(
        UpdateCustomerCardConfigDocument, variables
      );
      return response.updateCustomerCardConfig;
    },

    async updateCustomerCompany(variables: UpdateCustomerCompanyMutationVariables): Promise<UpdateCustomerCompanyMutation["updateCustomerCompany"]> {
      const response = await _client.request<UpdateCustomerCompanyMutation, UpdateCustomerCompanyMutationVariables>(
        UpdateCustomerCompanyDocument, variables
      );
      return response.updateCustomerCompany;
    },

    async updateCustomerGroup(variables: UpdateCustomerGroupMutationVariables): Promise<UpdateCustomerGroupMutation["updateCustomerGroup"]> {
      const response = await _client.request<UpdateCustomerGroupMutation, UpdateCustomerGroupMutationVariables>(
        UpdateCustomerGroupDocument, variables
      );
      return response.updateCustomerGroup;
    },

    async updateCustomerSurvey(variables: UpdateCustomerSurveyMutationVariables): Promise<UpdateCustomerSurveyMutation["updateCustomerSurvey"]> {
      const response = await _client.request<UpdateCustomerSurveyMutation, UpdateCustomerSurveyMutationVariables>(
        UpdateCustomerSurveyDocument, variables
      );
      return response.updateCustomerSurvey;
    },

    async updateEscalationPath(variables: UpdateEscalationPathMutationVariables): Promise<UpdateEscalationPathMutation["updateEscalationPath"]> {
      const response = await _client.request<UpdateEscalationPathMutation, UpdateEscalationPathMutationVariables>(
        UpdateEscalationPathDocument, variables
      );
      return response.updateEscalationPath;
    },

    async updateGeneratedReply(variables: UpdateGeneratedReplyMutationVariables): Promise<UpdateGeneratedReplyMutation["updateGeneratedReply"]> {
      const response = await _client.request<UpdateGeneratedReplyMutation, UpdateGeneratedReplyMutationVariables>(
        UpdateGeneratedReplyDocument, variables
      );
      return response.updateGeneratedReply;
    },

    async updateHelpCenter(variables: UpdateHelpCenterMutationVariables): Promise<UpdateHelpCenterMutation["updateHelpCenter"]> {
      const response = await _client.request<UpdateHelpCenterMutation, UpdateHelpCenterMutationVariables>(
        UpdateHelpCenterDocument, variables
      );
      return response.updateHelpCenter;
    },

    async updateHelpCenterArticleGroup(variables: UpdateHelpCenterArticleGroupMutationVariables): Promise<UpdateHelpCenterArticleGroupMutation["updateHelpCenterArticleGroup"]> {
      const response = await _client.request<UpdateHelpCenterArticleGroupMutation, UpdateHelpCenterArticleGroupMutationVariables>(
        UpdateHelpCenterArticleGroupDocument, variables
      );
      return response.updateHelpCenterArticleGroup;
    },

    async updateHelpCenterCustomDomainName(variables: UpdateHelpCenterCustomDomainNameMutationVariables): Promise<UpdateHelpCenterCustomDomainNameMutation["updateHelpCenterCustomDomainName"]> {
      const response = await _client.request<UpdateHelpCenterCustomDomainNameMutation, UpdateHelpCenterCustomDomainNameMutationVariables>(
        UpdateHelpCenterCustomDomainNameDocument, variables
      );
      return response.updateHelpCenterCustomDomainName;
    },

    async updateHelpCenterIndex(variables: UpdateHelpCenterIndexMutationVariables): Promise<UpdateHelpCenterIndexMutation["updateHelpCenterIndex"]> {
      const response = await _client.request<UpdateHelpCenterIndexMutation, UpdateHelpCenterIndexMutationVariables>(
        UpdateHelpCenterIndexDocument, variables
      );
      return response.updateHelpCenterIndex;
    },

    async updateInternalNotifications(variables: UpdateInternalNotificationsMutationVariables): Promise<UpdateInternalNotificationsMutation["updateInternalNotifications"]> {
      const response = await _client.request<UpdateInternalNotificationsMutation, UpdateInternalNotificationsMutationVariables>(
        UpdateInternalNotificationsDocument, variables
      );
      return response.updateInternalNotifications;
    },

    async updateLabelType(variables: UpdateLabelTypeMutationVariables): Promise<UpdateLabelTypeMutation["updateLabelType"]> {
      const response = await _client.request<UpdateLabelTypeMutation, UpdateLabelTypeMutationVariables>(
        UpdateLabelTypeDocument, variables
      );
      return response.updateLabelType;
    },

    async updateMachineUser(variables: UpdateMachineUserMutationVariables): Promise<UpdateMachineUserMutation["updateMachineUser"]> {
      const response = await _client.request<UpdateMachineUserMutation, UpdateMachineUserMutationVariables>(
        UpdateMachineUserDocument, variables
      );
      return response.updateMachineUser;
    },

    async updateMyUser(variables: UpdateMyUserMutationVariables): Promise<UpdateMyUserMutation["updateMyUser"]> {
      const response = await _client.request<UpdateMyUserMutation, UpdateMyUserMutationVariables>(
        UpdateMyUserDocument, variables
      );
      return response.updateMyUser;
    },

    async updateNote(variables: UpdateNoteMutationVariables): Promise<UpdateNoteMutation["updateNote"]> {
      const response = await _client.request<UpdateNoteMutation, UpdateNoteMutationVariables>(
        UpdateNoteDocument, variables
      );
      return response.updateNote;
    },

    async updateSavedThreadsView(variables: UpdateSavedThreadsViewMutationVariables): Promise<UpdateSavedThreadsViewMutation["updateSavedThreadsView"]> {
      const response = await _client.request<UpdateSavedThreadsViewMutation, UpdateSavedThreadsViewMutationVariables>(
        UpdateSavedThreadsViewDocument, variables
      );
      return response.updateSavedThreadsView;
    },

    async updateServiceLevelAgreement(variables: UpdateServiceLevelAgreementMutationVariables): Promise<UpdateServiceLevelAgreementMutation["updateServiceLevelAgreement"]> {
      const response = await _client.request<UpdateServiceLevelAgreementMutation, UpdateServiceLevelAgreementMutationVariables>(
        UpdateServiceLevelAgreementDocument, variables
      );
      return response.updateServiceLevelAgreement;
    },

    async updateSetting(variables: UpdateSettingMutationVariables): Promise<UpdateSettingMutation["updateSetting"]> {
      const response = await _client.request<UpdateSettingMutation, UpdateSettingMutationVariables>(
        UpdateSettingDocument, variables
      );
      return response.updateSetting;
    },

    async updateSnippet(variables: UpdateSnippetMutationVariables): Promise<UpdateSnippetMutation["updateSnippet"]> {
      const response = await _client.request<UpdateSnippetMutation, UpdateSnippetMutationVariables>(
        UpdateSnippetDocument, variables
      );
      return response.updateSnippet;
    },

    async updateTask(variables: UpdateTaskMutationVariables): Promise<UpdateTaskMutation["updateTask"]> {
      const response = await _client.request<UpdateTaskMutation, UpdateTaskMutationVariables>(
        UpdateTaskDocument, variables
      );
      return response.updateTask;
    },

    async updateTenantTier(variables: UpdateTenantTierMutationVariables): Promise<UpdateTenantTierMutation["updateTenantTier"]> {
      const response = await _client.request<UpdateTenantTierMutation, UpdateTenantTierMutationVariables>(
        UpdateTenantTierDocument, variables
      );
      return response.updateTenantTier;
    },

    async updateThreadAgentStatus(variables: UpdateThreadAgentStatusMutationVariables): Promise<UpdateThreadAgentStatusMutation["updateThreadAgentStatus"]> {
      const response = await _client.request<UpdateThreadAgentStatusMutation, UpdateThreadAgentStatusMutationVariables>(
        UpdateThreadAgentStatusDocument, variables
      );
      return response.updateThreadAgentStatus;
    },

    async updateThreadEscalationPath(variables: UpdateThreadEscalationPathMutationVariables): Promise<UpdateThreadEscalationPathMutation["updateThreadEscalationPath"]> {
      const response = await _client.request<UpdateThreadEscalationPathMutation, UpdateThreadEscalationPathMutationVariables>(
        UpdateThreadEscalationPathDocument, variables
      );
      return response.updateThreadEscalationPath;
    },

    async updateThreadFieldSchema(variables: UpdateThreadFieldSchemaMutationVariables): Promise<UpdateThreadFieldSchemaMutation["updateThreadFieldSchema"]> {
      const response = await _client.request<UpdateThreadFieldSchemaMutation, UpdateThreadFieldSchemaMutationVariables>(
        UpdateThreadFieldSchemaDocument, variables
      );
      return response.updateThreadFieldSchema;
    },

    async updateThreadSuggestedActionStatus(variables: UpdateThreadSuggestedActionStatusMutationVariables): Promise<UpdateThreadSuggestedActionStatusMutation["updateThreadSuggestedActionStatus"]> {
      const response = await _client.request<UpdateThreadSuggestedActionStatusMutation, UpdateThreadSuggestedActionStatusMutationVariables>(
        UpdateThreadSuggestedActionStatusDocument, variables
      );
      return response.updateThreadSuggestedActionStatus;
    },

    async updateThreadTenant(variables: UpdateThreadTenantMutationVariables): Promise<UpdateThreadTenantMutation["updateThreadTenant"]> {
      const response = await _client.request<UpdateThreadTenantMutation, UpdateThreadTenantMutationVariables>(
        UpdateThreadTenantDocument, variables
      );
      return response.updateThreadTenant;
    },

    async updateThreadTier(variables: UpdateThreadTierMutationVariables): Promise<UpdateThreadTierMutation["updateThreadTier"]> {
      const response = await _client.request<UpdateThreadTierMutation, UpdateThreadTierMutationVariables>(
        UpdateThreadTierDocument, variables
      );
      return response.updateThreadTier;
    },

    async updateThreadTitle(variables: UpdateThreadTitleMutationVariables): Promise<UpdateThreadTitleMutation["updateThreadTitle"]> {
      const response = await _client.request<UpdateThreadTitleMutation, UpdateThreadTitleMutationVariables>(
        UpdateThreadTitleDocument, variables
      );
      return response.updateThreadTitle;
    },

    async updateTier(variables: UpdateTierMutationVariables): Promise<UpdateTierMutation["updateTier"]> {
      const response = await _client.request<UpdateTierMutation, UpdateTierMutationVariables>(
        UpdateTierDocument, variables
      );
      return response.updateTier;
    },

    async updateUserDefaultSavedThreadsView(variables: UpdateUserDefaultSavedThreadsViewMutationVariables): Promise<UpdateUserDefaultSavedThreadsViewMutation["updateUserDefaultSavedThreadsView"]> {
      const response = await _client.request<UpdateUserDefaultSavedThreadsViewMutation, UpdateUserDefaultSavedThreadsViewMutationVariables>(
        UpdateUserDefaultSavedThreadsViewDocument, variables
      );
      return response.updateUserDefaultSavedThreadsView;
    },

    async updateWebhookTarget(variables: UpdateWebhookTargetMutationVariables): Promise<UpdateWebhookTargetMutation["updateWebhookTarget"]> {
      const response = await _client.request<UpdateWebhookTargetMutation, UpdateWebhookTargetMutationVariables>(
        UpdateWebhookTargetDocument, variables
      );
      return response.updateWebhookTarget;
    },

    async updateWorkflow(variables: UpdateWorkflowMutationVariables): Promise<UpdateWorkflowMutation["updateWorkflow"]> {
      const response = await _client.request<UpdateWorkflowMutation, UpdateWorkflowMutationVariables>(
        UpdateWorkflowDocument, variables
      );
      return response.updateWorkflow;
    },

    async updateWorkflowRule(variables: UpdateWorkflowRuleMutationVariables): Promise<UpdateWorkflowRuleMutation["updateWorkflowRule"]> {
      const response = await _client.request<UpdateWorkflowRuleMutation, UpdateWorkflowRuleMutationVariables>(
        UpdateWorkflowRuleDocument, variables
      );
      return response.updateWorkflowRule;
    },

    async updateWorkflowStep(variables: UpdateWorkflowStepMutationVariables): Promise<UpdateWorkflowStepMutation["updateWorkflowStep"]> {
      const response = await _client.request<UpdateWorkflowStepMutation, UpdateWorkflowStepMutationVariables>(
        UpdateWorkflowStepDocument, variables
      );
      return response.updateWorkflowStep;
    },

    async updateWorkspace(variables: UpdateWorkspaceMutationVariables): Promise<UpdateWorkspaceMutation["updateWorkspace"]> {
      const response = await _client.request<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(
        UpdateWorkspaceDocument, variables
      );
      return response.updateWorkspace;
    },

    async updateWorkspaceEmailSettings(variables: UpdateWorkspaceEmailSettingsMutationVariables): Promise<UpdateWorkspaceEmailSettingsMutation["updateWorkspaceEmailSettings"]> {
      const response = await _client.request<UpdateWorkspaceEmailSettingsMutation, UpdateWorkspaceEmailSettingsMutationVariables>(
        UpdateWorkspaceEmailSettingsDocument, variables
      );
      return response.updateWorkspaceEmailSettings;
    },

    async upsertBusinessHours(variables: UpsertBusinessHoursMutationVariables): Promise<UpsertBusinessHoursMutation["upsertBusinessHours"]> {
      const response = await _client.request<UpsertBusinessHoursMutation, UpsertBusinessHoursMutationVariables>(
        UpsertBusinessHoursDocument, variables
      );
      return response.upsertBusinessHours;
    },

    async upsertCompany(variables: UpsertCompanyMutationVariables): Promise<UpsertCompanyMutation["upsertCompany"]> {
      const response = await _client.request<UpsertCompanyMutation, UpsertCompanyMutationVariables>(
        UpsertCompanyDocument, variables
      );
      return response.upsertCompany;
    },

    async upsertCustomer(variables: UpsertCustomerMutationVariables): Promise<UpsertCustomerMutation["upsertCustomer"]> {
      const response = await _client.request<UpsertCustomerMutation, UpsertCustomerMutationVariables>(
        UpsertCustomerDocument, variables
      );
      return response.upsertCustomer;
    },

    async upsertCustomerGroup(variables: UpsertCustomerGroupMutationVariables): Promise<UpsertCustomerGroupMutation["upsertCustomerGroup"]> {
      const response = await _client.request<UpsertCustomerGroupMutation, UpsertCustomerGroupMutationVariables>(
        UpsertCustomerGroupDocument, variables
      );
      return response.upsertCustomerGroup;
    },

    async upsertHelpCenterArticle(variables: UpsertHelpCenterArticleMutationVariables): Promise<UpsertHelpCenterArticleMutation["upsertHelpCenterArticle"]> {
      const response = await _client.request<UpsertHelpCenterArticleMutation, UpsertHelpCenterArticleMutationVariables>(
        UpsertHelpCenterArticleDocument, variables
      );
      return response.upsertHelpCenterArticle;
    },

    async upsertMyEmailSignature(variables: UpsertMyEmailSignatureMutationVariables): Promise<UpsertMyEmailSignatureMutation["upsertMyEmailSignature"]> {
      const response = await _client.request<UpsertMyEmailSignatureMutation, UpsertMyEmailSignatureMutationVariables>(
        UpsertMyEmailSignatureDocument, variables
      );
      return response.upsertMyEmailSignature;
    },

    async upsertRoleScopes(variables: UpsertRoleScopesMutationVariables): Promise<UpsertRoleScopesMutation["upsertRoleScopes"]> {
      const response = await _client.request<UpsertRoleScopesMutation, UpsertRoleScopesMutationVariables>(
        UpsertRoleScopesDocument, variables
      );
      return response.upsertRoleScopes;
    },

    async upsertTeamSettings(variables: UpsertTeamSettingsMutationVariables): Promise<UpsertTeamSettingsMutation["upsertTeamSettings"]> {
      const response = await _client.request<UpsertTeamSettingsMutation, UpsertTeamSettingsMutationVariables>(
        UpsertTeamSettingsDocument, variables
      );
      return response.upsertTeamSettings;
    },

    async upsertTenant(variables: UpsertTenantMutationVariables): Promise<UpsertTenantMutation["upsertTenant"]> {
      const response = await _client.request<UpsertTenantMutation, UpsertTenantMutationVariables>(
        UpsertTenantDocument, variables
      );
      return response.upsertTenant;
    },

    async upsertTenantField(variables: UpsertTenantFieldMutationVariables): Promise<UpsertTenantFieldMutation["upsertTenantField"]> {
      const response = await _client.request<UpsertTenantFieldMutation, UpsertTenantFieldMutationVariables>(
        UpsertTenantFieldDocument, variables
      );
      return response.upsertTenantField;
    },

    async upsertTenantFieldSchema(variables: UpsertTenantFieldSchemaMutationVariables): Promise<UpsertTenantFieldSchemaMutation["upsertTenantFieldSchema"]> {
      const response = await _client.request<UpsertTenantFieldSchemaMutation, UpsertTenantFieldSchemaMutationVariables>(
        UpsertTenantFieldSchemaDocument, variables
      );
      return response.upsertTenantFieldSchema;
    },

    async upsertThreadField(variables: UpsertThreadFieldMutationVariables): Promise<UpsertThreadFieldMutation["upsertThreadField"]> {
      const response = await _client.request<UpsertThreadFieldMutation, UpsertThreadFieldMutationVariables>(
        UpsertThreadFieldDocument, variables
      );
      return response.upsertThreadField;
    },

    async verifyHelpCenterCustomDomainName(variables: VerifyHelpCenterCustomDomainNameMutationVariables): Promise<VerifyHelpCenterCustomDomainNameMutation["verifyHelpCenterCustomDomainName"]> {
      const response = await _client.request<VerifyHelpCenterCustomDomainNameMutation, VerifyHelpCenterCustomDomainNameMutationVariables>(
        VerifyHelpCenterCustomDomainNameDocument, variables
      );
      return response.verifyHelpCenterCustomDomainName;
    },

    async verifyWorkspaceEmailDnsSettings(): Promise<VerifyWorkspaceEmailDnsSettingsMutation["verifyWorkspaceEmailDnsSettings"]> {
      const response = await _client.request<VerifyWorkspaceEmailDnsSettingsMutation, Record<string, never>>(
        VerifyWorkspaceEmailDnsSettingsDocument
      );
      return response.verifyWorkspaceEmailDnsSettings;
    },

    async verifyWorkspaceEmailForwardingSettings(variables: VerifyWorkspaceEmailForwardingSettingsMutationVariables): Promise<VerifyWorkspaceEmailForwardingSettingsMutation["verifyWorkspaceEmailForwardingSettings"]> {
      const response = await _client.request<VerifyWorkspaceEmailForwardingSettingsMutation, VerifyWorkspaceEmailForwardingSettingsMutationVariables>(
        VerifyWorkspaceEmailForwardingSettingsDocument, variables
      );
      return response.verifyWorkspaceEmailForwardingSettings;
    }
    };
    this.mutation = mutation;
  }
}
