const QUESTIONS = [
  {
    "question_number": 1,
    "question": "The Application Portfolio Management team is asking for help modeling platforms as Business Applications.\n\nHow would this be mapped in CSDM using the ServiceNow Platform in the Incident and Change applications?",
    "options": {
      "A": "ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications. Then a Depends On relationship would be created between ServiceNow Platform and Incident and Change.",
      "B": "ServiceNow Platform, Incident, and Change would all be web based Architecture type. A Depends On relationship would be created between ServiceNow Platform and Incident and Change.",
      "C": "ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications and have a reference to ServiceNow Platform.",
      "D": "ServiceNow Platform, Incident, and Change would all be web based Architecture type. Incident and Change would have a reference to ServiceNow Platform."
    },
    "correct_answer": "C",
    "section": "CSDM Fundamentals",
    "explanation": "In CSDM, a platform is modeled as a Business Application with the architecture type set to Platform Host. Applications that run on that platform are modeled as Platform Applications and reference the platform host."
  },
  {
    "question_number": 2,
    "question": "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    "options": {
      "A": "Data Quality Scheduled Job",
      "B": "CMDB Audit Business Rule",
      "C": "Data Quality Business Rule",
      "D": "CMDB Workspace"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "The Data Quality Business Rule enforces validation logic on configuration item records to ensure that required or recommended data is present and meets defined standards."
  },
  {
    "question_number": 5,
    "question": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class which consists of a total of 60,000 servers in the CMDB.\n- For the Duplicate metric, it shows Healthy CIs/Evaluated as 59,000/60,000.\n- For the Orphan metric, it shows Healthy CIs/Evaluated as 45,000/50,000.\n\nWhich configuration explains the difference in the scope of Server CIs (60,000 vs 50,000) evaluated between the two metrics?",
    "options": {
      "A": "The Duplicate metric has a CMDB Group configured for the Server class.",
      "B": "The Orphan metric has a Health Inclusion rule configured for the Server class.",
      "C": "The Orphan metric has a CMDB Group configured for the Server class.",
      "D": "The Duplicate metric has a Health Inclusion rule configured for the Server class."
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "A Health Inclusion rule limits which configuration items are evaluated by a specific health metric, reducing the scope of Server CIs included in its evaluation."
  },
  {
    "question_number": 6,
    "type": "dragdrop",
    "question": "The CMDB Health Dashboard is based on three Key Performance Indicators (KPIs): Correctness, Compliance, and Completeness. Each KPI includes several sub-metrics.\n\nDrag the sub-metrics to the KPI.\n\nSome options may not apply.",
    "categories": [
      "Completeness",
      "Compliance",
      "Correctness"
    ],
    "items": [
      "Required",
      "Certify",
      "Audit"
    ],
    "correct_mapping": {
      "Required": "Completeness",
      "Certify": "Compliance",
      "Audit": "Correctness"
    },
    "section": "Govern",
    "explanation": "Each KPI has a specific sub-metric: Required fields measure Completeness, Certify tasks measure Compliance, and Audit checks measure Correctness of CI data in the CMDB."
  },
  {
    "question_number": 7,
    "question": "A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE).\n\nWhich process occurred?",
    "options": {
      "A": "Class Downgrade",
      "B": "Class Switch",
      "C": "Class Change",
      "D": "Class Upgrade"
    },
    "correct_answer": "D",
    "section": "Ingest",
    "explanation": "A class upgrade occurs when a configuration item is reclassified from a parent class to a more specific child class within the CMDB hierarchy."
  },
  {
    "question_number": 8,
    "question": "A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB tables to prevent technical debt.\n\nWhich is the starting prefix for all custom CMDB tables?",
    "options": {
      "A": "ci_cmdb",
      "B": "cmdb_ci",
      "C": "u_cmdb_ci",
      "D": "u_ci_cmdb"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "ServiceNow best practice requires custom CMDB classes to use the prefix u_cmdb_ci to follow the naming convention and avoid upgrade conflicts."
  },
  {
    "question_number": 9,
    "question": "A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications.\n\nWhich action does CSDM recommend to meet this goal?",
    "options": {
      "A": "Create an information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner.",
      "B": "Create fields on the Business Application record to mark the Business Application as containing patient information.",
      "C": "Work with the Database administration team to classify the data on each database that holds patient information, and then use Relationships to map that back to the Business Application."
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "CSDM recommends modeling important business data using the Information Object class, which can be related to Business Applications."
  },
  {
    "question_number": 10,
    "question": "A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager.\n\n- Table: Server [cmdb_ci_server]\n- Filter: Operating System | contains | Server OR Operating System | contains | Linux\n\nWhich operating systems are affected by this policy? (Choose two.)",
    "options": {
      "A": "Linux CentOS",
      "B": "Windows 2019 Datacenter",
      "C": "Windows Server 2022 Datacenter",
      "D": "AIX"
    },
    "correct_answer": "AC",
    "section": "Govern",
    "explanation": "Linux CentOS matches 'Linux' and Windows Server 2022 Datacenter matches 'Server' in the filter."
  },
  {
    "question_number": 10,
    "question": "What is the relationship between an application and a server?",
    "options": {
      "A": "Application>Runs::Runs On>Server",
      "B": "Application>Used by::Uses>Server",
      "C": "Application>Uses::Used by>Server",
      "D": "Application>Runs on::Runs>Server"
    },
    "correct_answer": "D",
    "section": "Configuration",
    "explanation": "An application runs on a server — the relationship is Application>Runs on::Runs>Server."
  },
  {
    "question_number": 11,
    "question": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": {
      "A": "Compliance",
      "B": "Attestation",
      "C": "Audit",
      "D": "Certification"
    },
    "correct_answer": "D",
    "section": "Govern",
    "explanation": "Certification policies generate tasks requiring assigned users to review and update specific CI attributes."
  },
  {
    "question_number": 12,
    "question": "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. Which field on an Incident form is automatically populated after a CI is selected that references an appropriate support group?",
    "options": {
      "A": "Support Group",
      "B": "Approval Group",
      "C": "Managed by Group",
      "D": "Assignment Group",
      "E": "Change Group"
    },
    "correct_answer": "D",
    "section": "Configuration",
    "explanation": "Selecting a CI with an associated support group automatically populates the Assignment Group on the Incident form to route to the responsible team."
  },
  {
    "question_number": 13,
    "question": "A CMDB Administrator has installed a Service Graph Connector and customized a script transform.\n\nWhat will happen on subsequent upgrades if the default definition of the script transform is updated?",
    "options": {
      "A": "A skipped change is created and no change is made to the script transform definition.",
      "B": "The Service Graph Connector upgrade refuses to start.",
      "C": "The upgrade stops and reports an error."
    },
    "correct_answer": "A",
    "section": "Ingest",
    "explanation": "The platform preserves customizations by recording the update as a skipped change without modifying the existing definition."
  },
  {
    "question_number": 14,
    "question": "What are the characteristics or functions of ServiceNow IntegrationHub ETL? (Choose two.)",
    "options": {
      "A": "Imports Microsoft SCCM/Intune data into the CMDB",
      "B": "Performs discovery data collection and updates the CMDB",
      "C": "Integrates third-party data into the CMDB or into non-CMDB tables",
      "D": "Uses the IRE to process and integrate data"
    },
    "correct_answer": "CD",
    "section": "Ingest",
    "explanation": "IntegrationHub ETL integrates third-party data and uses the IRE for identification and reconciliation."
  },
  {
    "question_number": 15,
    "type": "dragdrop",
    "question": "A Platform Owner is building the governance team to support the CSDM.\n\nDrag the domain to the roles that make up the governance team.",
    "categories": [
      "Service Owner(s), Platform Owner",
      "Technology Service Owner(s), Application Service Owner(s), Platform Owner",
      "Enterprise Architect(s), Platform Owner",
      "Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner"
    ],
    "items": [
      "Portfolio Domain",
      "Technical Domain",
      "Design Domain",
      "Foundation Domain"
    ],
    "correct_mapping": {
      "Portfolio Domain": "Service Owner(s), Platform Owner",
      "Technical Domain": "Technology Service Owner(s), Application Service Owner(s), Platform Owner",
      "Design Domain": "Enterprise Architect(s), Platform Owner",
      "Foundation Domain": "Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner"
    },
    "section": "CSDM Fundamentals",
    "explanation": "Each CSDM domain is governed by specific role owners: Portfolio domain by Service Owners and Platform Owner, Technical domain by Technology/Application Service Owners and Platform Owner, Design domain by Enterprise Architects and Platform Owner, and Foundation domain by Enterprise Architects, Data Stewards, Process Owners, and Platform Owner."
  },
  {
    "question_number": 16,
    "type": "dragdrop",
    "question": "A new ServiceNow customer is assembling a Configuration Management team to support their CMDB.\n\nDrag each role to its corresponding job description.",
    "categories": [
      "Has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards",
      "Accountable for managing all elements that make up a portfolio throughout their entire lifecycle",
      "Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records",
      "Obtains highest level role for CMDB privileges"
    ],
    "items": [
      "CI Analyst",
      "Service or Product Owner",
      "CMDB Process Owner",
      "Configuration Manager/CMDB Admin"
    ],
    "correct_mapping": {
      "CI Analyst": "Has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards",
      "Service or Product Owner": "Accountable for managing all elements that make up a portfolio throughout their entire lifecycle",
      "CMDB Process Owner": "Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records",
      "Configuration Manager/CMDB Admin": "Obtains highest level role for CMDB privileges"
    },
    "section": "Govern",
    "explanation": "CI Analyst has read-only access to CMDB reports. Service/Product Owner is accountable for the full portfolio lifecycle. CMDB Process Owner manages CI tables and tasks. Configuration Manager/CMDB Admin holds the highest-level CMDB administrative privileges."
  },
  {
    "question_number": 20,
    "question": "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server.\n\nWhich is the best choice of a criterion attribute?",
    "options": {
      "A": "Configuration File Name",
      "B": "Class",
      "C": "Configuration File Path",
      "D": "Port",
      "E": "Version"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "The Configuration File Path uniquely identifies the location of an application instance on a server, making it an effective attribute for identification rules."
  },
  {
    "question_number": 21,
    "question": "A Configuration Manager wants to manage manually maintained data attributes of CIs.\n\nWhich group values are automatically synchronized on CIs using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups? (Choose two.)",
    "options": {
      "A": "Support group",
      "B": "CMDB group",
      "C": "Approval group",
      "D": "Change group"
    },
    "correct_answer": "AD",
    "section": "Configuration",
    "explanation": "Technology Management Offerings synchronize Change group and Support group values to associated CIs."
  },
  {
    "question_number": 22,
    "question": "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map.\n\nWhich work area would allow the Service Owner to meet this goal?",
    "options": {
      "A": "Tool box",
      "B": "Contextual side panel",
      "C": "Content controls",
      "D": "Map"
    },
    "correct_answer": "B",
    "section": "Insight",
    "explanation": "The Contextual side panel in the Unified Map displays detailed information and related records for the selected node."
  },
  {
    "question_number": 23,
    "question": "A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans.\n\nWhat CSDM domain should the inventory management team map the catalog item to?",
    "options": {
      "A": "Build and Integration (Build)",
      "B": "Foundation",
      "C": "Design and Planning (Design)",
      "D": "Service Delivery (Manage Technical Service)",
      "E": "Service Consumption (Sell/Consume)"
    },
    "correct_answer": "E",
    "section": "CSDM Fundamentals",
    "explanation": "Service Consumption represents how services are offered and consumed through catalogs and service offerings."
  },
  {
    "question_number": 24,
    "question": "A CMDB Administrator is asked to clean up the CMDB duplicates.\n\nWhat is the preferred way to manage this task?",
    "options": {
      "A": "The de-duplication task module",
      "B": "The de-duplication dashboard on the CMDB workspace",
      "C": "My Tasks in the Application Navigator"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "The de-duplication task module provides a structured workflow to identify and remediate duplicate CIs."
  },
  {
    "question_number": 27,
    "type": "dragdrop",
    "question": "Drag and drop the application service type to the best description.",
    "categories": [
      "Recommended for mission-critical application services that require a precise approach using patterns",
      "Best fit to map cloud-native, container-based, or virtual machine environments",
      "Ideal for custom-built applications and leverages application fingerprinting to generate service maps in a timely manner",
      "Ideal for small application services that can be easily grouped using filters and CMDB queries"
    ],
    "items": [
      "Service Mapping (Top-down)",
      "Tag-Based",
      "Service Mapping (Connection Suggestion)",
      "Dynamic CI Group"
    ],
    "correct_mapping": {
      "Service Mapping (Top-down)": "Recommended for mission-critical application services that require a precise approach using patterns",
      "Tag-Based": "Best fit to map cloud-native, container-based, or virtual machine environments",
      "Service Mapping (Connection Suggestion)": "Ideal for custom-built applications and leverages application fingerprinting to generate service maps in a timely manner",
      "Dynamic CI Group": "Ideal for small application services that can be easily grouped using filters and CMDB queries"
    },
    "section": "Configuration",
    "explanation": "Service Mapping (Top-down) uses pattern-based discovery for precision. Tag-Based is optimized for cloud/container environments. Service Mapping (Connection Suggestion) uses fingerprinting for custom apps. Dynamic CI Group uses CMDB queries to group smaller services."
  },
  {
    "question_number": 29,
    "question": "Using CI Class Manager, the Tomcat identification rule has criterion attributes: Class, Install Directory. Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat rule?",
    "options": {
      "A": "Criterion attributes",
      "B": "Applies to",
      "C": "Independent",
      "D": "Allow fallback to parent's rules"
    },
    "correct_answer": "D",
    "section": "Configuration",
    "explanation": "Allow fallback to parent's rules enables the IRE to try parent class identification rules when a child class rule finds no match."
  },
  {
    "question_number": 30,
    "question": "A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook.\n\nWhich types of documentation can they expect to be provided in a playbook? (Choose two.)",
    "options": {
      "A": "Automated Remediations",
      "B": "Problem Analysis",
      "C": "Root Cause",
      "D": "Problem Overview"
    },
    "correct_answer": "BD",
    "section": "Govern",
    "explanation": "Playbooks include a Problem Overview and Problem Analysis section to guide remediation."
  },
  {
    "question_number": 31,
    "question": "An IT group has a requirement to upgrade all the Windows servers. There is a Dynamic CI Group containing all the Windows servers.\n\nWhat happens to the Dynamic CI Group when it is referenced from the Configuration Item field on a Change form?",
    "options": {
      "A": "It calculates impact against the Dynamic CI Group.",
      "B": "It displays all related CIs in the Impacted Services related list.",
      "C": "It displays all related CIs in the Affected CIs related list."
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "The platform expands the group and lists all CIs in the Affected CIs related list."
  },
  {
    "question_number": 32,
    "question": "A CMDB Administrator needs to track which CIs and CI classes are missing key data.\n\nWhich CMDB Health Dashboard scorecard supports tracking this requirement?",
    "options": {
      "A": "Completeness",
      "B": "Compliance",
      "C": "Correctness"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "The Completeness scorecard measures whether required attributes are populated across CIs."
  },
  {
    "question_number": 33,
    "question": "A CMDB Administrator installed a Service Graph Connector and made customizations to the mappings.\n\nWhich is a consequence of this action?",
    "options": {
      "A": "The customization will prevent the SGC from executing without an approval record.",
      "B": "Fields populated by customization will have a special tag in the CMDB.",
      "C": "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting them."
    },
    "correct_answer": "C",
    "section": "Ingest",
    "explanation": "Customized SGC mappings become customer-managed and are no longer supported by ServiceNow."
  },
  {
    "question_number": 34,
    "question": "Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service? (Choose two.)",
    "options": {
      "A": "Discovery",
      "B": "IntegrationHub ETL",
      "C": "Event Management",
      "D": "Service Mapping",
      "E": "Data Manager"
    },
    "correct_answer": "AD",
    "section": "Ingest",
    "explanation": "Discovery creates CI relationships from network scanning; Service Mapping builds application service topologies."
  },
  {
    "question_number": 36,
    "question": "A CMDB CI Class Owner responsible for the Windows Servers needs to manage the Windows Server class.\n\nWhich CI Class Manager feature will help streamline this task?",
    "options": {
      "A": "CI Favorites",
      "B": "Pinned Classes",
      "C": "Search CI Classes"
    },
    "correct_answer": "B",
    "section": "Configuration",
    "explanation": "Pinned Classes allows owners to quickly access frequently managed classes."
  },
  {
    "question_number": 37,
    "question": "The Change Management team wants to implement a Change across multiple CIs at the same time.\n\nWhich field on the Change Request form needs to be populated with a dynamic CI group?",
    "options": {
      "A": "Configuration Item",
      "B": "Service Offering",
      "C": "Business Service"
    },
    "correct_answer": "A",
    "section": "Configuration",
    "explanation": "The Configuration Item field supports dynamic CI groups, expanding them into the Affected CIs list."
  },
  {
    "question_number": 38,
    "question": "A CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard.\n\nWhat is the default duration of this metric?",
    "options": {
      "A": "30 days",
      "B": "7 days",
      "C": "60 days",
      "D": "24 hours"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "The default staleness threshold is 30 days — CIs not discovered within 30 days are flagged as stale."
  },
  {
    "question_number": 39,
    "question": "A CMDB Administrator needs to set a CI Class as a Principal Class.\n\nWhich CI Class Manager tab would need to be accessed?",
    "options": {
      "A": "Class Info > Basic Info",
      "B": "Health > Attributes",
      "C": "Class Info > Attributes"
    },
    "correct_answer": "A",
    "section": "Configuration",
    "explanation": "The Principal Class setting is in CI Class Manager under Class Info > Basic Info."
  },
  {
    "question_number": 40,
    "question": "If existing Server records are reclassified into Linux and Windows Server classes during discovery, which reclassification operation occurred?",
    "options": {
      "A": "Class Downgrade",
      "B": "Class Switch",
      "C": "Class Upgrade"
    },
    "correct_answer": "C",
    "section": "Ingest",
    "explanation": "Moving from a generic parent class to a more specific child class is a Class Upgrade."
  },
  {
    "question_number": 42,
    "question": "A CMDB Administrator knows the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality.\n\nWhat is a benefit of this dashboard?",
    "options": {
      "A": "Provides the ability to configure health-related metrics",
      "B": "Provides key health-related metrics to make decisions",
      "C": "Provides the ability to resolve certification policy tasks"
    },
    "correct_answer": "B",
    "section": "Insight",
    "explanation": "The dashboard provides key health metrics to support informed decision-making."
  },
  {
    "question_number": 43,
    "question": "Two new CI records are imported: CI1 name matches existing, CI2 IP matches existing. Hardware rule uses: Serial Number (priority 100), Hardware/serial_number (200), Hardware/name (300), Network Adapter/mac_address,name (400).\n\nWhich is correct?",
    "options": {
      "A": "CI1 and CI2 both will be inserted as new records.",
      "B": "CI1 will be inserted as new record and CI2 will be updated.",
      "C": "CI1 and CI2 both will be updated.",
      "D": "CI1 will be updated with matching record and CI2 will be inserted as new record."
    },
    "correct_answer": "D",
    "section": "Ingest",
    "explanation": "CI1's name matches the Hardware/name rule (priority 300) so it updates; CI2's IP doesn't match any rule so it inserts."
  },
  {
    "question_number": 44,
    "question": "A Configuration Management Process Owner is preparing solution options for ingesting custom CIs to the CMDB aligned with best practice.\n\nWhich solutions accomplish this? (Choose two.)",
    "options": {
      "A": "Extending an existing CI class table to accommodate the custom CI class attributes",
      "B": "Repurposing a base CI class and rename attributes, as required",
      "C": "Installing or upgrading the 'CMDB CI Class Models' store application to find a suitable existing CI class",
      "D": "Extending an existing Asset class table to accommodate the custom CI class attributes"
    },
    "correct_answer": "AC",
    "section": "Configuration",
    "explanation": "Extending an existing CI class or using CI Class Models store app are the best-practice approaches."
  },
  {
    "question_number": 45,
    "question": "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs.\n\nWhat method ensures these attributes are accurately maintained?",
    "options": {
      "A": "Use a scheduled data import to update the attributes from an external source",
      "B": "Use the CMDB Reconciliation Engine to update the attributes",
      "C": "Create a new CI class specifically for non-discoverable attributes"
    },
    "correct_answer": "A",
    "section": "Ingest",
    "explanation": "A scheduled data import from an authoritative external source ensures non-discoverable attributes are consistently updated."
  },
  {
    "question_number": 46,
    "question": "Which are common use cases for using Agent Client Collector (ACC)? (Choose two.)",
    "options": {
      "A": "Servers in the data center",
      "B": "Devices in secure environments",
      "C": "Devices that intermittently connect to the network",
      "D": "Network devices in the DMZ"
    },
    "correct_answer": "BC",
    "section": "Ingest",
    "explanation": "ACC is suited for secure environments and devices with intermittent network connectivity."
  },
  {
    "question_number": 47,
    "question": "Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?",
    "options": {
      "A": "Be marked as critical",
      "B": "Be fully operational and in use",
      "C": "Be retired and in end of life",
      "D": "Be marked as inactive"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "CI must be retired and in end-of-life state before Data Manager lifecycle policies allow archival or deletion."
  },
  {
    "question_number": 48,
    "question": "A Configuration Manager configured multiple data sources that are all authorized to update the same class and attributes.\n\nWhat can the Configuration Manager do to control which data source should be the authoritative source of truth?",
    "options": {
      "A": "Manually run the data source updates in the correct order",
      "B": "Assign a priority to each data source in the reconciliation rules",
      "C": "Assign a run order to each data source in the identification rules",
      "D": "Configure data refresh rules with a specific time period"
    },
    "correct_answer": "B",
    "section": "Ingest",
    "explanation": "Reconciliation rules allow assigning precedence to authorized data sources for specific classes and attributes."
  },
  {
    "question_number": 49,
    "question": "A Configuration Management team has decided to start using the CMDB 360/Multisource CMDB functionality.\n\nWhich system property must be enabled?",
    "options": {
      "A": "glide.identification_engine.multisource_enabled",
      "B": "glide.identification_engine.multisource_cmdb_ci_enabled",
      "C": "glide.identification_engine.multisource.query.max.limit",
      "D": "glide.identification_engine.multisource_non_cmdb_ci_enabled"
    },
    "correct_answer": "A",
    "section": "Configuration",
    "explanation": "The multisource system property must be enabled to activate CMDB 360/Multisource CMDB."
  },
  {
    "question_number": 50,
    "question": "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard.\n\nWhere can the Administrator obtain the dashboard?",
    "options": {
      "A": "It is a free application on the ServiceNow Store.",
      "B": "It is active by default.",
      "C": "It is a paid application on the ServiceNow Store.",
      "D": "It is a free application on the ServiceNow Innovation Lab."
    },
    "correct_answer": "A",
    "section": "Insight",
    "explanation": "The CMDB and CSDM Data Foundations Dashboard is a free application on the ServiceNow Store."
  },
  {
    "question_number": 51,
    "question": "A CMDB Administrator needs to provide Duplicate CI, Orphan CI, and Stale CI metrics.\n\nWhich scorecard provides this information on the CMDB Health Dashboard?",
    "options": {
      "A": "Compliance",
      "B": "Completeness",
      "C": "Correctness"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "The Correctness scorecard measures duplicate, orphan, and stale CI data quality issues."
  },
  {
    "question_number": 51,
    "question": "A Configuration Manager is reviewing the life cycle of CIs to ensure data accuracy. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values.\n\nWhere are these reviewed?",
    "options": {
      "A": "Life cycle mappings",
      "B": "Life cycle choice list",
      "C": "Life cycle properties"
    },
    "correct_answer": "A",
    "section": "Configuration",
    "explanation": "Life cycle mappings show the relationship between legacy status values and CSDM lifecycle values."
  },
  {
    "question_number": 52,
    "question": "A Platform Owner needs to map production line monitoring systems to the appropriate CSDM 5 domain.\n\nWhich CSDM 5 domain does the Platform Owner use?",
    "options": {
      "A": "Service Consumption (Sell/Consume)",
      "B": "Service Delivery (Manage Technical)",
      "C": "Build and Integration (Build)",
      "D": "Design and Planning (Design)",
      "E": "Foundation"
    },
    "correct_answer": "B",
    "section": "CSDM Fundamentals",
    "explanation": "Production line monitoring systems are modeled in the Service Delivery domain."
  },
  {
    "question_number": 53,
    "question": "Which ServiceNow solution creates automatic relationships?",
    "options": {
      "A": "Service Mapping",
      "B": "Discovery",
      "C": "IntegrationHub ETL",
      "D": "Workflow Studio"
    },
    "correct_answer": "A",
    "section": "Ingest",
    "explanation": "Service Mapping automatically identifies and creates relationships between CIs based on application traffic."
  },
  {
    "question_number": 55,
    "question": "A CMDB Administrator is leveraging CI data as part of an Integrated Risk Management implementation. Which CSDM relationships are leveraged using the CSDM playbooks? (Choose two.)",
    "options": {
      "A": "Business Applications that have relationships to Application Services",
      "B": "Logical CIs that have relationships with Information Objects",
      "C": "Locations that have established parent records",
      "D": "Business Applications that have their relationships to Information Objects"
    },
    "correct_answer": "AD",
    "section": "CSDM Fundamentals",
    "explanation": "CSDM playbooks evaluate Business Applications related to Application Services and Information Objects."
  },
  {
    "question_number": 56,
    "question": "A CMDB Administrator is using the Duplicate CI Remediator. On the first tab, the Main CI is selected.\n\nWhich attributes are used to identify the Main CI? (Choose two.)",
    "options": {
      "A": "Oldest Created",
      "B": "Newest Created",
      "C": "Least Related Items",
      "D": "Most Related Items"
    },
    "correct_answer": "AD",
    "section": "Govern",
    "explanation": "The Main CI is identified by being oldest created and having the most related items."
  },
  {
    "question_number": 57,
    "question": "The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard.\n\nWhich field is used to calculate the duration of this metric?",
    "options": {
      "A": "Most recent discovery (last_discovery)",
      "B": "First discovered (first_discovered)",
      "C": "Last modified on (last_modified)",
      "D": "Updated (sys_updated_on)",
      "E": "Created (sys_created_on)"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "The Staleness metric is calculated using the Most recent discovery (last_discovery) field."
  },
  {
    "question_number": 58,
    "question": "A Service Portfolio Manager wants to know what Application Services their Business Service Offerings depend on.\n\nWhat stage of CSDM would map this relationship?",
    "options": {
      "A": "Fly",
      "B": "Foundation",
      "C": "Run",
      "D": "Crawl",
      "E": "Walk"
    },
    "correct_answer": "E",
    "section": "CSDM Fundamentals",
    "explanation": "The Walk stage introduces Business Service Offering to Application Service relationships."
  },
  {
    "question_number": 60,
    "question": "A CMDB Administrator needs to prevent duplicate CI creation from import sets loaded from vendor shipment files.\n\nHow can the Administrator do this?",
    "options": {
      "A": "Use the CMDBTransformUtil API in the transform script",
      "B": "Set the system property to utilize the IRE within transform maps",
      "C": "Create comparison rules in the IRE",
      "D": "Set the coalesce on two mappings within the transform map"
    },
    "correct_answer": "A",
    "section": "Ingest",
    "explanation": "The CMDBTransformUtil API routes import set data through the IRE to prevent duplicates."
  },
  {
    "question_number": 61,
    "question": "A ServiceNow Administrator wants to implement Service Graph Connectors for many third-party solutions.\n\nWhich categories of connectors are available? (Choose two.)",
    "options": {
      "A": "DevOps",
      "B": "Cloud",
      "C": "Workflow Automation",
      "D": "Observability"
    },
    "correct_answer": "BD",
    "section": "Ingest",
    "explanation": "Service Graph Connectors are categorized by Cloud and Observability technology domains."
  },
  {
    "question_number": 62,
    "question": "A CMDB Administrator is considering using the playbooks on the CMDB Data Foundation Dashboard.\n\nWhat are the benefits? (Choose two.)",
    "options": {
      "A": "Offers automated scripts to resolve poorly performing metrics",
      "B": "Offers remediation templates to improve poorly performing metrics",
      "C": "Offers insight into the downstream impacts of poorly performing metrics",
      "D": "Offers remediation options to address and improve poorly performing metrics"
    },
    "correct_answer": "CD",
    "section": "Govern",
    "explanation": "Playbooks provide insight into downstream impacts and offer remediation options."
  },
  {
    "question_number": 63,
    "question": "A CMDB Administrator changes the query for the SCCM Service Graph Connector.\n\nWhat is the impact of this change?",
    "options": {
      "A": "The Data Source for the SCCM Service Graph Connector will be marked as Inactive.",
      "B": "Any updates for the SCCM Service Graph Connector will be skipped during the upgrade.",
      "C": "Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured."
    },
    "correct_answer": "B",
    "section": "Ingest",
    "explanation": "Customized connector configurations are skipped during upgrades to preserve customizations."
  },
  {
    "question_number": 64,
    "question": "The Configuration Manager is preparing the justification to utilize the CMDB Data Foundations Dashboard.\n\nWhich benefits align with the usage? (Choose two.)",
    "options": {
      "A": "It enables monitoring and tracking of CMDB health over time.",
      "B": "It automates the approval process for change management.",
      "C": "It provides actionable insights to improve data quality and completeness.",
      "D": "It helps detect and eliminate duplicate records in the CMDB."
    },
    "correct_answer": "AC",
    "section": "CSDM Fundamentals",
    "explanation": "The dashboard enables health monitoring and provides actionable insights for data quality improvement."
  },
  {
    "question_number": 65,
    "question": "How is the CMDB aligned to business processes? (Choose two.)",
    "options": {
      "A": "Extends service delivery management to all enterprise departments",
      "B": "Provides a centralized view of configuration items and their relationships",
      "C": "Enables the CFO/CIO to track software licenses",
      "D": "Enhances decision-making and operational efficiency across the organization"
    },
    "correct_answer": "BD",
    "section": "CSDM Fundamentals",
    "explanation": "CMDB provides centralized CI visibility and enhances organizational decision-making and efficiency."
  },
  {
    "question_number": 66,
    "question": "A CMDB Administrator identifies duplicate CIs: one from manual import (accurate relationship to critical business app), one from discovery (latest IP address).\n\nHow does the Administrator resolve this using the Duplicate CI Remediator?",
    "options": {
      "A": "Retain the discovered CI, but merge the relationship from the manually imported CI",
      "B": "Merge the two CIs automatically, retaining all attributes from the discovered CI",
      "C": "Retain the discovered CI, and delete the manually imported CI",
      "D": "Retain the manually imported CI, and delete the discovered CI"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "Retain the discovered CI for current data and merge the accurate relationship from the manual import."
  },
  {
    "question_number": 67,
    "question": "An organization is changing data centers and needs to know the consequences of planned changes.\n\nHow can Application Service mapping be used as part of Change Management?",
    "options": {
      "A": "To understand the physical location of CIs",
      "B": "To identify which devices will go offline first",
      "C": "To understand the business impact of CIs"
    },
    "correct_answer": "C",
    "section": "Insight",
    "explanation": "Application Service mapping enables Change Management to assess business impact of planned changes."
  },
  {
    "question_number": 68,
    "question": "A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices.\n\nWhich tab in the CSDM Data Foundations Dashboard provides this information?",
    "options": {
      "A": "Walk",
      "B": "Foundation",
      "C": "Fly",
      "D": "Run",
      "E": "Crawl"
    },
    "correct_answer": "B",
    "section": "CSDM Fundamentals",
    "explanation": "The Foundation tab provides metrics on foundational data elements like product models, locations, and business units."
  },
  {
    "question_number": 69,
    "question": "A CMDB Administrator is tasked with defining a new CI class for a new type of equipment.\n\nWhich action adds a new CI class and ensures it integrates properly with the existing CMDB structure?",
    "options": {
      "A": "Use the CI Class Manager to create a new CI class but avoid setting up any inheritance",
      "B": "Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
      "C": "Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type",
      "D": "Use Service Catalog to define the new CI class"
    },
    "correct_answer": "B",
    "section": "Configuration",
    "explanation": "Create a new CI class in CI Class Manager with proper table inheritance from an appropriate parent class."
  },
  {
    "question_number": 70,
    "question": "A CMDB Administrator wants to start utilizing the CMDB Health Dashboard and its Key Performance Indicators.\n\nWhat does the Administrator do to start using the dashboard?",
    "options": {
      "A": "Download the dashboard from the ServiceNow store",
      "B": "Activate the dashboard scheduled jobs",
      "C": "Activate the dashboard system property",
      "D": "Nothing, the dashboard is activated by default"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "The CMDB Health Dashboard requires activating scheduled jobs to calculate and update health metrics."
  },
  {
    "question_number": 70,
    "question": "An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services.\n\nWhich steps does the organization take to build this query? (Choose two.)",
    "options": {
      "A": "Use a Service Mapping Query to find all incidents related to the database",
      "B": "Add a non-CMDB table to the query",
      "C": "Use a Service Mapping Query to include non-CMDB tables like the Incident table",
      "D": "Use a CMDB Query to include application services and their related infrastructure"
    },
    "correct_answer": "BD",
    "section": "Insight",
    "explanation": "Add the Incident non-CMDB table and use a CMDB query for application services and infrastructure."
  },
  {
    "question_number": 71,
    "question": "A data center has many servers. The CMDB Administrator wants to confirm that all servers exist.\n\nWhich Data Manager policy type does the Administrator implement?",
    "options": {
      "A": "Attestation",
      "B": "Promotion",
      "C": "Verification",
      "D": "Certification"
    },
    "correct_answer": "D",
    "section": "Govern",
    "explanation": "Certification policies assign responsible users to review and certify that CI records are accurate."
  },
  {
    "question_number": 72,
    "question": "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class.\n\nWhich CI Class Manager tab can the owner use to change the icon for the class?",
    "options": {
      "A": "Attributes",
      "B": "Suggested Relationships",
      "C": "Basic Info",
      "D": "CI List"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "The icon is configured in the Basic Info tab of CI Class Manager."
  },
  {
    "question_number": 73,
    "question": "A CMDB Administrator wants to run the Services Have Owners Identified playbook.\n\nWhich remediation plays would be used? (Choose two.)",
    "options": {
      "A": "Govern Data",
      "B": "Analyze Data",
      "C": "Fix Data",
      "D": "Report Data"
    },
    "correct_answer": "BC",
    "section": "CSDM Fundamentals",
    "explanation": "The playbook uses Analyze Data to assess gaps and Fix Data to assign owners."
  },
  {
    "question_number": 73,
    "question": "An Enterprise Architect of a financial services company is working across the enterprise and wants to track their capabilities.\n\nWhich CSDM 5 domain is used?",
    "options": {
      "A": "Design and Planning (Design)",
      "B": "Service Delivery (Manage Technical)",
      "C": "Foundation",
      "D": "Build and Integration (Build)",
      "E": "Service Consumption (Sell/Consume)"
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "Design and Planning domain models enterprise architecture elements like business capabilities."
  },
  {
    "question_number": 74,
    "question": "A CMDB Administrator notices that CIs do not have a support group.\n\nHow can the support group be automatically populated and maintained on the CI record?",
    "options": {
      "A": "CI Class Manager",
      "B": "Dynamic CI group",
      "C": "Technology Management Service Offering (Technical Service Offering)",
      "D": "Technology Management Service (Technical Service)"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "Technical Service Offerings synchronize Support Group to associated CIs automatically."
  },
  {
    "question_number": 74,
    "question": "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter.\n\nIn which lifecycle state would servers be affected by these new policies?",
    "options": {
      "A": "In any lifecycle state",
      "B": "End of Life - Retired",
      "C": "Inventory - Available",
      "D": "Missing - Stolen"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "Data Manager policies apply only to End of Life - Retired CIs, protecting active records."
  },
  {
    "question_number": 75,
    "question": "A Business Relationship Manager wants to implement Service Portfolio Management (SPM) to present offerings to business consumers.\n\nWhich CSDM Domain does this align with?",
    "options": {
      "A": "Service Consumption (Sell/Consume)",
      "B": "Service Delivery",
      "C": "Build and Integration (Build)",
      "D": "Design and Planning (Design)"
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "Service Consumption (Sell/Consume) domain covers service offerings presented to business consumers."
  },
  {
    "question_number": 76,
    "question": "A CSDM Data Manager needs metrics on Technology Management Services and Offerings alignment with best practices.\n\nWhich tab in the CSDM Data Foundation Dashboard provides this information?",
    "options": {
      "A": "Walk",
      "B": "Run",
      "C": "Crawl",
      "D": "Fly"
    },
    "correct_answer": "B",
    "section": "CSDM Fundamentals",
    "explanation": "The Run tab provides metrics on Technology Management Services and Offerings."
  },
  {
    "question_number": 76,
    "question": "A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM framework.\n\nWhat is the purpose of an information object?",
    "options": {
      "A": "It describes data in general on a group of Configuration Items.",
      "B": "It describes the logical data to the Business Applications.",
      "C": "It describes data exchanged between an API interface and an Application."
    },
    "correct_answer": "B",
    "section": "CSDM Fundamentals",
    "explanation": "An Information Object represents logical data used by business applications, enabling governance tracking."
  },
  {
    "question_number": 77,
    "question": "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": {
      "A": "Coverage window on the CMDB 360 tab",
      "B": "CMDB Query Builder",
      "C": "Saved queries window on the Insight tab",
      "D": "Saved queries window on the CMDB 360 tab"
    },
    "correct_answer": "D",
    "section": "Insight",
    "explanation": "CMDB 360 saved queries are accessed from the Saved Queries window within the CMDB 360 tab."
  },
  {
    "question_number": 78,
    "question": "A CMDB Administrator notices a large percentage of Hardware CIs are missing serial numbers and wants structured guidelines to resolve the issue.\n\nWhat structured guidelines are available?",
    "options": {
      "A": "CSDM Data Foundations Dashboard Playbooks",
      "B": "CMDB Health Dashboards Playbooks",
      "C": "CSDM Now Create Playbooks",
      "D": "CSDB Data Foundations Dashboard Playbooks"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "CMDB Health Dashboard Playbooks provide structured remediation for issues like missing serial numbers."
  },
  {
    "question_number": 80,
    "question": "The 'Server' class has a Dynamic Reconciliation Rule of 'largest value' for RAM. Given data sources (Tivoli: 4,096 MB, ServiceNow: 4,096 MB, LANDesk: 2,048 MB, Altiris: 8,192 MB), which value would be added to the CMDB for a 'Server' CI?",
    "options": {
      "A": "2,048 MB",
      "B": "8,192 MB",
      "C": "4,096 MB"
    },
    "correct_answer": "B",
    "section": "Ingest",
    "explanation": "Largest value rule selects 8,192 MB reported by Altiris as the largest value."
  },
  {
    "question_number": 81,
    "question": "A healthcare provider faces a critical incident affecting its patient management system and needs to determine impacted users.\n\nWhich CSDM-related data should they leverage?",
    "options": {
      "A": "Application Service environment attribute",
      "B": "Incident history of similar CIs",
      "C": "Affected CI [task_ci] related list",
      "D": "Service Offerings by Department or Location"
    },
    "correct_answer": "D",
    "section": "Insight",
    "explanation": "Service Offerings by Department or Location identify the consuming user groups of a service."
  },
  {
    "question_number": 82,
    "question": "A CMDB Administrator has a report in ServiceNow that lists all CMDB Services that do not have an owner and wants to use a ServiceNow Playbook.\n\nWhat Governance process play can prevent this from recurring?",
    "options": {
      "A": "Make the field Managed by mandatory on all CIs",
      "B": "Set a default value on the Service Owner field so that is never empty",
      "C": "Make the field Owned by mandatory"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "Making the Owned by field mandatory ensures that every CMDB service record must have an assigned owner before it can be created or updated. This governance control prevents services from existing without clear accountability, which addresses the root cause of services appearing in reports without owners."
  },
  {
    "question_number": 82,
    "question": "A CMDB Manager wants to improve data quality using the CMDB Health Dashboard.\n\nWhat needs to happen to generate CMDB health scores?",
    "options": {
      "A": "The scheduled jobs for the CMDB Health Dashboard must be activated",
      "B": "The plugin, CMDB health calculation, needs to be installed",
      "C": "Nothing, CMDB health scores are calculated by default"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "CMDB health scores are generated by scheduled jobs that must be activated."
  },
  {
    "question_number": 83,
    "question": "A CMDB Administrator has taken over management of a ServiceNow instance and has determined there are multiple deficiencies in the CMDB. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks.\n\nHow can Playbooks assist the Administrator in resolving these issues?",
    "options": {
      "A": "Playbooks can automatically track common CMDB issues and output metrics.",
      "B": "Playbooks can be installed in the instance to automatically fix issues.",
      "C": "Playbooks can help analyze and fix issues."
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "Remediation Playbooks provide guided procedures that help administrators investigate and resolve CMDB data quality issues identified in the Data Foundations Dashboard. They include analysis steps, best-practice guidance, and actions to remediate problems such as duplicates, incomplete records, or identification issues, enabling administrators to systematically diagnose and correct CMDB deficiencies."
  },
  {
    "question_number": 83,
    "question": "A Windows administration team wants a grouping of CIs using CMDB groups.\n\nWhich methods can be used? (Choose two.)",
    "options": {
      "A": "Encoded queries",
      "B": "Saved queries",
      "C": "Scripted queries",
      "D": "Tag-based queries"
    },
    "correct_answer": "BC",
    "section": "Configuration",
    "explanation": "CMDB groups can be populated using scripted queries or saved queries."
  },
  {
    "question_number": 84,
    "question": "What areas of data quality for CIs are in the CMDB Health Dashboard? (Choose two.)",
    "options": {
      "A": "State CIs",
      "B": "Downgraded CIs",
      "C": "Missing CIs",
      "D": "Upgraded CIs",
      "E": "Duplicate CIs"
    },
    "correct_answer": "CE",
    "section": "Govern",
    "explanation": "The CMDB Health Dashboard identifies missing CIs and duplicate records."
  },
  {
    "question_number": 85,
    "question": "A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk.\n\nHow does the Administrator achieve this?",
    "options": {
      "A": "Create and run a de-duplication template",
      "B": "Configure and run a custom de-duplication background script",
      "C": "Utilize the Duplicate CI Remediator Wizard",
      "D": "Create de-duplication tasks manually and remediate each"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "De-duplication templates allow bulk remediation of similar duplicate CI tasks."
  },
  {
    "question_number": 86,
    "question": "A global enterprise has duplicates from multiple discovery sources categorizing the same CIs differently.\n\nWhat actions does the CMDB team take to resolve the issue? (Choose two.)",
    "options": {
      "A": "Create a custom script to manually adjust incoming data",
      "B": "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "C": "Allow each discovery source to define its own CI class",
      "D": "Implement identification and reconciliation rules to avoid duplicates and standardize CI classification"
    },
    "correct_answer": "BD",
    "section": "Configuration",
    "explanation": "Use CI Class Manager for standardized classes and IRE rules to prevent duplicates."
  },
  {
    "question_number": 87,
    "question": "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly.\n\nWhich CSDM attribute is used to prioritize these services?",
    "options": {
      "A": "Business Criticality in the Service Offering",
      "B": "Service classification in the Technical Service",
      "C": "Affected CIs in the Incident record",
      "D": "Assignment Group on the CI record"
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "Business Criticality on the Service Offering indicates service importance for prioritization."
  },
  {
    "question_number": 90,
    "question": "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically.\n\nHow does the Manager do this? (Choose two.)",
    "options": {
      "A": "Ensure one-to-one physical mapping between Asset and CI",
      "B": "Ensure that the business rule to update CI fields on change on the asset table is active",
      "C": "Ensure that the business rule to update Asset fields on change on the CI table is active",
      "D": "Ensure that scheduled jobs are run during off-business hours to ensure sync happens"
    },
    "correct_answer": "BC",
    "section": "Configuration",
    "explanation": "Business rules on both tables synchronize field updates between CI and Asset records."
  },
  {
    "question_number": 91,
    "question": "The CMDB Administrator group seeks to filter specific CI classes displayed on the CMDB Health Dashboard.\n\nWhich feature can the group utilize?",
    "options": {
      "A": "Reconciliation Rules",
      "B": "Data Refresh Rules",
      "C": "Identification Rules",
      "D": "Health Inclusion Rules"
    },
    "correct_answer": "D",
    "section": "Govern",
    "explanation": "Health Inclusion Rules control which CI classes are included in CMDB Health calculations."
  },
  {
    "question_number": 92,
    "question": "A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class.\n\nCI Class Manager:\n- Managed by Group = Enterprise IT Services\n\nTechnical Service Offering:\n- Managed by Group = Windows Support\n- Change Group = Change Management Team\n\nWhat would be the Managed By Group for CIs from this class based on the configured values?",
    "options": {
      "A": "Enterprise IT Services",
      "B": "Windows Support",
      "C": "Change Management Team"
    },
    "correct_answer": "B",
    "section": "Configuration",
    "explanation": "When a Managed by Group is defined on a Technical Service Offering, it takes precedence over the Managed by Group defined at the CI class level in CI Class Manager. Therefore, configuration items associated with that technical service offering inherit the Managed by Group from the Technical Service Offering."
  },
  {
    "question_number": 94,
    "question": "Which are CMDB Data Manager end of life policy types? (Choose two.)",
    "options": {
      "A": "Retire",
      "B": "Disposed",
      "C": "Decommission",
      "D": "Archive",
      "E": "Lost"
    },
    "correct_answer": "BC",
    "section": "Govern",
    "explanation": "CMDB Data Manager end-of-life policy types are used to manage configuration items that have reached the final stages of their lifecycle. Decommission policies apply when assets are taken out of service and no longer operational, while Disposed policies apply when assets are permanently removed from the environment. These lifecycle policies help govern how obsolete configuration items are handled in the CMDB."
  },
  {
    "question_number": 95,
    "question": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months.\n\nWhich recommended action does the Administrator take in Data Manager?",
    "options": {
      "A": "Create an archive policy",
      "B": "Create a business rule",
      "C": "Create a scheduled job"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "An archive policy in Data Manager is used to systematically remove or archive configuration items that meet defined conditions such as not being updated within a specified timeframe, enabling lifecycle-based cleanup of stale Linux Server records."
  },
  {
    "question_number": 96,
    "question": "A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed.\n\nWhich governance management tool will accomplish this?",
    "options": {
      "A": "CMDB Data Manager",
      "B": "CMDB and CSDM Data Foundations Dashboard",
      "C": "CI Class Manager",
      "D": "CMDB Health Dashboard",
      "E": "De-duplication Templates"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "CMDB Data Manager is used to manage the lifecycle of configuration item records, including identifying and removing stale or obsolete data. It allows administrators to define policies and automated actions to archive or delete configuration items that are no longer relevant, ensuring the CMDB remains current and accurate."
  },
  {
    "question_number": 97,
    "question": "A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality.\n\nWhy would the Manager use CMDB 360/Multisource CMDB?",
    "options": {
      "A": "To populate the CMDB from multiple data sources",
      "B": "To ingest data from multiple data sources using Import Set(s)",
      "C": "To ingest data from multiple data sources using Service Graph Connector(s)",
      "D": "To identify CI attributes from multiple data sources"
    },
    "correct_answer": "D",
    "section": "Insight",
    "explanation": "CMDB 360 and Multisource CMDB provide visibility into configuration item attributes coming from multiple data sources. This capability allows administrators to analyze which sources contribute specific attribute values, compare them, and evaluate data quality across sources to maintain and improve CMDB accuracy."
  },
  {
    "question_number": 98,
    "question": "In a company there is a need to understand the CSDM maturity level needed. Different stakeholders listed a number of use cases that they expect over time.\n\nWhich use case requires information objects?",
    "options": {
      "A": "The Asset Management wants to understand to asset life cycle compliancy in a Business Application context.",
      "B": "The Customer Service team wants to onboard pro-active case management.",
      "C": "The SecOps team wants to understand the operational risk in the Business Application context.",
      "D": "The Event Operations team wants to automate their events into incident for operational actions.",
      "E": "The Business Service Management team wants to understand the operational impact for their consumer parties."
    },
    "correct_answer": "E",
    "section": "CSDM Fundamentals",
    "explanation": "Understanding operational impact for consumer parties requires modeling relationships between services and the parties that consume them, which is achieved through Information Objects in CSDM to represent service consumption and enable impact analysis from a business service perspective."
  },
  {
    "question_number": 99,
    "question": "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form.\n\nWhere does the CMDB Administrator designate Principal Classes?",
    "options": {
      "A": "System Properties",
      "B": "CMDB Data Manager",
      "C": "CI Class Manager",
      "D": "CMDB Workspace"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "Principal Classes are designated in the CI Class Manager to control which CI classes are available for selection in reference fields such as those on Incident forms."
  },
  {
    "question_number": 100,
    "question": "A CMDB Administrator wants to ensure all short-lived CIs that have not been discovered in the past week are removed.\n\nAfter retiring the CI records, which recommended action does the CMDB Administrator take?",
    "options": {
      "A": "Create a scheduled job",
      "B": "Create a delete police",
      "C": "Create a business rule"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "A scheduled job is used to automate periodic maintenance tasks in the CMDB. After configuration items are retired, a scheduled job can run regularly to identify and delete short-lived CIs that have not been discovered within the defined timeframe, ensuring the CMDB remains clean and accurate without requiring manual intervention."
  },
  {
    "question_number": 101,
    "question": "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB.\n\nWhich factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": {
      "A": "Establishing clear governance and continuously monitoring CMDB health",
      "B": "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management",
      "C": "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
      "D": "Relying on automated discovery tools to maintain and update CMDB records"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "Successful CMDB operationalization depends on strong governance and continuous monitoring of CMDB health. Governance defines ownership, data standards, lifecycle processes, and accountability for configuration items, while health monitoring ensures data quality, accuracy, and compliance over time. Without governance, even well-populated CMDBs quickly become unreliable and lose operational value."
  },
  {
    "question_number": 103,
    "question": "A Configuration Manager wants to use the Unified Map.\n\nWhere would it be accessed?",
    "options": {
      "A": "CI Class Manager",
      "B": "CMDB Data Manager",
      "C": "CMDB Workspace"
    },
    "correct_answer": "C",
    "section": "Insight",
    "explanation": "The Unified Map is available within CMDB Workspace to visualize relationships and dependencies across configuration items and services."
  },
  {
    "question_number": 104,
    "question": "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": {
      "A": "Automates the enforcement of relationship rules between CIs in the CMDB",
      "B": "Automates the archival and deletion of records based on retention policies",
      "C": "Encrypts archived records for enhanced security"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "CMDB Data Manager automates lifecycle management by archiving and deleting configuration item records according to defined retention and governance policies."
  },
  {
    "question_number": 105,
    "question": "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    "options": {
      "A": "Retire, Archive, Attestation, Certification, and Delete",
      "B": "Attestation, Retire, and Certification",
      "C": "Archive and Delete",
      "D": "Delete, Attestation, Retire, and Certification"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "CMDB Data Manager provides multiple policy types to manage configuration item lifecycle and governance. These include Retire and Archive for lifecycle management, Delete for removal of obsolete records, and Attestation and Certification for validating the accuracy and existence of configuration items and their data."
  },
  {
    "question_number": 106,
    "question": "During a CMDB implementation, a team member is tasked with ensuring the accuracy and completeness of CI data. This person is also responsible for maintaining data quality and resolving discrepancies.\n\nWhich role is responsible for these tasks?",
    "options": {
      "A": "IT Asset Manager",
      "B": "Configuration Manager",
      "C": "CMDB Architect",
      "D": "Service Owner"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "The Configuration Manager is responsible for maintaining the integrity and quality of CMDB data. This role oversees configuration management processes, ensures configuration item data is accurate and complete, and resolves discrepancies to maintain a reliable and trusted CMDB."
  },
  {
    "question_number": 107,
    "question": "What types of policies can be created within CMDB Data Manager? (Choose two.)",
    "options": {
      "A": "Archive",
      "B": "Retire",
      "C": "De-duplication",
      "D": "Reconciliation"
    },
    "correct_answer": "AB",
    "section": "Govern",
    "explanation": "CMDB Data Manager provides lifecycle management policies that automate the handling of configuration items as they age. Retire policies transition configuration items out of active use when they meet defined conditions, and Archive policies move retired records to archival storage so that obsolete data is removed from active CMDB operations while still being retained if needed for reference."
  },
  {
    "question_number": 108,
    "question": "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE).\n\nIn which area of the CMDB Workspace can they locate these de-duplication tasks?",
    "options": {
      "A": "Total status tile under the My Work tab",
      "B": "CMDB feature adoption tile under the Insight tab",
      "C": "Important actions tile under the Home tab"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "De-duplication tasks generated by the Identification and Reconciliation Engine are assigned to users and appear in the My Work tab, where task status is tracked in the Total status tile for remediation."
  },
  {
    "question_number": 109,
    "question": "The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs.\n\nWhat CSDM stage would this be completed in?",
    "options": {
      "A": "Walk",
      "B": "Crawl",
      "C": "Run",
      "D": "Fly",
      "E": "Foundation"
    },
    "correct_answer": "C",
    "section": "CSDM Fundamentals",
    "explanation": "The Run stage of CSDM focuses on operationalizing service delivery and governance for technical services and their offerings. At this stage, Technology Management Offerings are used to manage operational attributes such as Support Group and Change Group, which are synchronized to associated configuration items to standardize operational ownership and support processes."
  },
  {
    "question_number": 110,
    "question": "A CMDB Administrator needs to import external data into the CMDB. As the CMDB Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed.\n\nWhat is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API?",
    "options": {
      "A": "Table API (REST API or SOAP API)",
      "B": "IntegrationHub ETL",
      "C": "Import Sets and Transform Maps"
    },
    "correct_answer": "B",
    "section": "Ingest",
    "explanation": "IntegrationHub ETL is designed to load external data into the CMDB through the Identification and Reconciliation Engine, ensuring proper CI identification and governance so that duplicate creation is minimized and unauthorized updates are prevented."
  },
  {
    "question_number": 111,
    "question": "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'? (Choose two.)",
    "options": {
      "A": "Managed By Group",
      "B": "Owned by Group",
      "C": "Support Group",
      "D": "Assignment Group"
    },
    "correct_answer": "CD",
    "section": "Govern",
    "explanation": "When configuring a CMDB Data Manager policy with the assignment type set to User Group Field, the platform allows tasks to be routed based on specific group reference fields on the CI record. The default group fields available for this purpose are Assignment Group and Support Group, which commonly represent the teams responsible for managing or supporting the configuration item."
  },
  {
    "question_number": 112,
    "question": "A customer's CMDB is aligned to the CSDM Walk stage.\n\nWhat benefit is provided by the CMDB?",
    "options": {
      "A": "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
      "B": "Improves the implementation velocity of APM Foundation for future business application rationalization",
      "C": "Enables impact assessments for incident, problem, and change on Business Services"
    },
    "correct_answer": "C",
    "section": "CSDM Fundamentals",
    "explanation": "At the Walk stage of CSDM maturity, the CMDB enables service-aware operations by supporting impact analysis across incidents, problems, and changes through established relationships to Business Services."
  },
  {
    "question_number": 113,
    "question": "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by CI Class.\n\nHow can the Configuration Manager get a score for regionally relevant CIs?",
    "options": {
      "A": "On the CMDB health settings, activate the option, Group scores by region",
      "B": "Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
      "C": "Create CMDB groups with type, health, by region"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "CMDB groups with the type set to Health allow administrators to scope CMDB Health metrics to specific subsets of configuration items. By creating groups based on regional criteria, the Configuration Manager can generate health scores that reflect only the CIs belonging to that region, enabling more targeted monitoring and improvement of data quality."
  },
  {
    "question_number": 114,
    "question": "An organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekly. However, due to an integration issue, the high-priority data source stops updating the records.\n\nWhich configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
    "options": {
      "A": "Identification Rules",
      "B": "Health Inclusion Rules",
      "C": "Reconciliation Rules",
      "D": "Data Refresh Rules"
    },
    "correct_answer": "D",
    "section": "Ingest",
    "explanation": "Data Refresh Rules allow a lower-priority data source to update CMDB records after a specified period of inactivity from a higher-priority source, ensuring data remains current even when the primary source is unavailable."
  },
  {
    "question_number": 115,
    "question": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications.\n\nWhich describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": {
      "A": "One-to-one",
      "B": "One-to-many",
      "C": "Many-to-one",
      "D": "Many-to-many"
    },
    "correct_answer": "B",
    "section": "Configuration",
    "explanation": "An application server can host multiple applications, establishing a one-to-many relationship between the application server and the applications it hosts."
  },
  {
    "question_number": 116,
    "question": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch.\n\nWhat must be configured to achieve this goal?",
    "options": {
      "A": "Stale, Orphan, Duplicate",
      "B": "Certification Policies, Data Filters, Scheduled Jobs",
      "C": "Certification Filter, Certification Template, Audit",
      "D": "Technical Service Offerings, Dynamic CI Groups, CMDB Groups"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "Compliance scorecard results for patch status are driven by certification, which requires configuring a certification filter to target relevant CIs, a certification template to define the audit criteria, and an audit to assess compliance."
  },
  {
    "question_number": 117,
    "question": "A CMDB Administrator aims to utilize CSDM life cycle field mappings to better align with CSDM best practices.\n\nWhat is the next step to take after selecting the Enable Life Cycle Sync button?",
    "options": {
      "A": "Fix the incorrect values in the Life Cycle Stage to match legacy values",
      "B": "Activate the CSDM Life Cycle field mappings",
      "C": "Resolve any incomplete field mappings identified in the Discrepancy Report"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "After enabling Life Cycle Sync, the platform generates a discrepancy report that identifies incomplete or conflicting lifecycle field mappings. The next step is to resolve these discrepancies so that legacy lifecycle fields properly align with the CSDM lifecycle stage and status model before synchronization can function correctly."
  },
  {
    "question_number": 119,
    "question": "What ensures data volume in the CMDB manageable?",
    "options": {
      "A": "Scheduled Jobs",
      "B": "Business Rules",
      "C": "Archive Policies"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "Archive policies manage CMDB data volume by systematically archiving or removing configuration items that meet defined lifecycle or inactivity criteria, keeping the dataset maintainable over time."
  },
  {
    "question_number": 120,
    "question": "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset.\n\nWhat action does a Configuration Analyst take to achieve this in an automated way?",
    "options": {
      "A": "Configure a business rule on the computer table to use a script to populate the 'Assigned to' filed on the asset based on insert or update in the computer class 'Assigned to' field",
      "B": "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value",
      "C": "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "Asset-CI Field Mapping allows automated synchronization of field values such as the Assigned to attribute between a CI and its related asset without requiring custom scripting."
  },
  {
    "question_number": 121,
    "question": "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    "options": {
      "A": "CMDB Workspace > Management tab",
      "B": "CMDB Workspace > My Work tab",
      "C": "CMDB Health Dashboard > Duplicate CIs tab",
      "D": "CMDB Health Dashboard > Audit tab"
    },
    "correct_answer": "A",
    "section": "Govern",
    "explanation": "Tasks generated by CMDB Data Manager policies are reviewed and managed within CMDB Workspace under the Management tab. This area provides administrators with visibility into policy-generated tasks such as certification, attestation, lifecycle, and remediation activities so they can track and resolve CMDB governance tasks."
  },
  {
    "question_number": 122,
    "question": "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB.\n\nWhat can the Data Owner do in this case?",
    "options": {
      "A": "CMDB 360/Multisource is a platform product that can be used immediately.",
      "B": "The IRE reconciliation rules can use discovery source regardless of CMDB 360 being enabled.",
      "C": "ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules."
    },
    "correct_answer": "B",
    "section": "Ingest",
    "explanation": "IRE reconciliation rules can be configured to use the discovery source attribute to control data authority across multiple inputs without requiring CMDB 360 or ITOM Discovery licensing."
  },
  {
    "question_number": 123,
    "question": "The Server [cmdb_ci_server] class uses a dynamic reconciliation rule of lowest value for the Disk Space (GB) field, while the Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule of most reported for the Disk Space (GB) field.\n\nGiven the following data sources that populate Windows Server data into the CMDB 360/Multisource CMDB:\nData Source | Disk Space (GB)\nTivoli | 75\nServiceNow | 75\nLANDesk | 50\nAltiris | 80\n\nWhich value would be added to the CMDB for the Disk Space (GB) field of a Windows Server record?",
    "options": {
      "A": "80",
      "B": "75",
      "C": "50"
    },
    "correct_answer": "B",
    "section": "Ingest",
    "explanation": "The Windows Server class uses the 'most reported' dynamic reconciliation rule for Disk Space (GB). With values of 75 (Tivoli), 75 (ServiceNow), 50 (LANDesk), and 80 (Altiris), the value 75 is reported by two sources making it the most reported value."
  },
  {
    "question_number": 124,
    "question": "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed CIs.\n\nAs a result, which base system field on the incident form will be automatically populated after selecting a CI?",
    "options": {
      "A": "Approval group",
      "B": "Change group",
      "C": "Assignment group",
      "D": "Managed by group"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "When a CI has its Change Group populated, selecting that CI on a Change or Incident form automatically sets the Assignment Group based on the CI's defined support responsibility."
  },
  {
    "question_number": 125,
    "question": "A CMDB team has noticed that some hardware CIs are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps.\n\nWhich accomplishes this task?",
    "options": {
      "A": "CI Class Manager",
      "B": "CMDB Data Foundation Playbook",
      "C": "Service Graph Connectors"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "CMDB Data Foundations Playbooks provide guided remediation steps to identify and resolve CMDB data quality issues. They help administrators analyze gaps such as missing key attributes like serial numbers and provide structured guidance to correct the data and improve overall CMDB data quality."
  },
  {
    "question_number": 126,
    "question": "A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records.\n\nWhich checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
    "options": {
      "A": "Extensible",
      "B": "Independent",
      "C": "Principal Class",
      "D": "Main Record"
    },
    "correct_answer": "C",
    "section": "Configuration",
    "explanation": "The Principal Class setting in CI Class Manager designates a class as a primary class that should be available for selection in task records such as Incident, Problem, and Change. When this option is enabled, configuration items from that class are considered relevant operational CIs and appear in reference fields used by these processes."
  },
  {
    "question_number": 127,
    "question": "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period.\n\nWhich policy type should the Configuration Manager create?",
    "options": {
      "A": "Retire",
      "B": "Certification",
      "C": "Delete",
      "D": "Archive"
    },
    "correct_answer": "D",
    "section": "Govern",
    "explanation": "An Archive policy moves configuration item records out of the active CMDB while retaining them in an archived state for a defined period, allowing restoration if needed."
  },
  {
    "question_number": 128,
    "question": "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics.\n\nWhich actions can the CMDB Administrator take to improve the CMDB Health? (Choose two.)",
    "options": {
      "A": "Focus on metric(s) with Critical and High priorities",
      "B": "Adjust the metrics using exclusion rules to improve the scores",
      "C": "Remove non-operational and retired CIs",
      "D": "Use the Remediation Playbooks linked beside each metric"
    },
    "correct_answer": "AD",
    "section": "Govern",
    "explanation": "Improving CMDB health should focus first on metrics with the highest priority because Critical and High metrics represent the most impactful data quality issues. Remediation Playbooks linked to each metric provide guided analysis and corrective actions to systematically resolve those issues."
  },
  {
    "question_number": 129,
    "question": "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules.\n\nWhere would these rules be configured?",
    "options": {
      "A": "CMDB Workspace",
      "B": "CMDB Data Manager",
      "C": "CMDB Health Dashboard",
      "D": "CMDB CI Class Manager"
    },
    "correct_answer": "D",
    "section": "Configuration",
    "explanation": "Identification rules used by the Identification and Reconciliation Engine are configured in the CI Class Manager for each CI class. This interface allows administrators to define the identifiers that uniquely distinguish configuration items, ensuring that incoming data is matched correctly and preventing the creation of duplicate records."
  },
  {
    "question_number": 130,
    "question": "A CMDB Administrator is asked to create a query using the CMDB Query Builder that displays all operational CIs belonging to a specific application service.\n\nWhich steps provide the desired outcome?",
    "options": {
      "A": "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Add the Operational Status and Name fields as columns. 4. Run the query.",
      "B": "1. Add the Business Application, Application Service, and Configuration Item classes to the canvas. 2. Define a filter for the application service name and the operational status. 3. Configure the relationship between the classes. 4. Run the query.",
      "C": "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Define a filter for the application service name and the operational status. 4. Run the query."
    },
    "correct_answer": "C",
    "section": "Insight",
    "explanation": "To display all operational CIs belonging to a specific application service, add both classes, configure their relationship, define filters for the application service name and operational status, then run the query."
  },
  {
    "question_number": 131,
    "question": "Where can an administrator perform Natural Language Queries (NLQ)?",
    "options": {
      "A": "CMDB Data Manager",
      "B": "CMDB Health Dashboard",
      "C": "CMDB Workspace",
      "D": "CI Class Manager"
    },
    "correct_answer": "C",
    "section": "Insight",
    "explanation": "Natural Language Queries are available in CMDB Workspace to allow users to query configuration item data using conversational language for insights and analysis."
  },
  {
    "question_number": 132,
    "question": "A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class.\n\nHow are these rules utilized by the IRE?",
    "options": {
      "A": "To reconcile specific attributes based on data sources",
      "B": "To narrow the scope of CIs included in the identification process",
      "C": "To reduce the data ingested into the CMDB"
    },
    "correct_answer": "B",
    "section": "Configuration",
    "explanation": "Health Inclusion Rules define which configuration items of a class are included in CMDB Health calculations. These rules help narrow the scope of CIs that the system evaluates for identification and health-related assessments."
  },
  {
    "question_number": 133,
    "question": "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low.\n\nWhat is the recommended process from the associated playbook to correct this issue?",
    "options": {
      "A": "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "B": "Use the Duplicate CI Remediator to merge the duplicate location records",
      "C": "Keep both locations as either can be used as a valid alternate location",
      "D": "Review both locations, update CIs with the correct location and delete the duplicate location"
    },
    "correct_answer": "D",
    "section": "CSDM Fundamentals",
    "explanation": "The playbook recommends validating the correct location by reviewing both records, updating associated CIs to reference the accurate location, and then removing the duplicate."
  },
  {
    "question_number": 134,
    "question": "A CMDB Architect intends to populate the CMDB using the CSDM guidance.\n\nWhich key stakeholders from the organization should be involved in decisions regarding population of the CMDB using the CSDM Crawl Stage?",
    "options": {
      "A": "Application Owner, Application Service Owner",
      "B": "Business Service Manager, Technology Service Owner",
      "C": "Customer Service Manager, Infrastructure Manager"
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "The Crawl stage of CSDM focuses on establishing application services and mapping them to the underlying infrastructure. Decisions require involvement from the Application Owner and Application Service Owner."
  },
  {
    "question_number": 136,
    "question": "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager.\n\nWhen configuring a CMDB Data Manager policy, which group reference field should be set?",
    "options": {
      "A": "Support Group",
      "B": "Approval Group",
      "C": "Change Group",
      "D": "Managed By Group"
    },
    "correct_answer": "D",
    "section": "Govern",
    "explanation": "The Managed By Group defined in the CI Class Manager represents the ownership of the CI class and is used by CMDB Data Manager policies to apply governance actions based on class ownership."
  },
  {
    "question_number": 137,
    "question": "A CMDB Administrator would like to minimize stale CIs in the CMDB.\n\nWhich CMDB Health Dashboard scorecard displays this information?",
    "options": {
      "A": "Correctness",
      "B": "Compliance",
      "C": "Completeness"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "The Compliance scorecard measures how well configuration items adhere to defined CMDB lifecycle and governance policies, including identifying stale CIs that have not been updated within expected timeframes."
  },
  {
    "question_number": 138,
    "question": "A Configuration Manager needs to ingest third-party CIs into the CMDB.\n\nWhich method minimizes the risk of technical debt?",
    "options": {
      "A": "Table API",
      "B": "Service Graph Connector",
      "C": "Import Sets and Transform Maps",
      "D": "Vendor-provided integration"
    },
    "correct_answer": "B",
    "section": "Ingest",
    "explanation": "Service Graph Connectors provide standardized, supported integrations designed specifically for ingesting third-party configuration data into the CMDB, minimizing custom development and technical debt."
  },
  {
    "question_number": 139,
    "question": "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing of CMDB data.\n\nWhat insights are gained from CMDB 360 queries? (Choose two.)",
    "options": {
      "A": "Orphan CIs created from different data sources",
      "B": "Gaps in attribute data from different data sources",
      "C": "Different attribute values from different data sources",
      "D": "Duplicate configuration items from different data sources",
      "E": "Unique CIs created from different data sources"
    },
    "correct_answer": "BC",
    "section": "Insight",
    "explanation": "CMDB 360 saved queries help identify gaps where certain attributes are missing from specific data sources and highlight situations where different sources provide conflicting attribute values."
  },
  {
    "question_number": 139,
    "question": "What is the value of using the CMDB in security operations? (Choose two.)",
    "options": {
      "A": "Auto-resolves a vulnerability",
      "B": "Allows security team to assess and remediate an incident",
      "C": "Enables audits and attestations across CIs",
      "D": "Identifies the IT infrastructure with a vulnerability"
    },
    "correct_answer": "BD",
    "section": "Insight",
    "explanation": "CMDB helps security teams identify vulnerable infrastructure and supports incident assessment and remediation."
  },
  {
    "question_number": 140,
    "question": "A Service Desk Manager wants to leverage the Unified Map to find active incidents or problems for a selected CI.\n\nWhich panel will give the manager visibility and details?",
    "options": {
      "A": "Overview",
      "B": "Attributes",
      "C": "Application services",
      "D": "Related items"
    },
    "correct_answer": "D",
    "section": "Insight",
    "explanation": "The Related items panel displays incidents, problems, and changes associated with the selected CI."
  },
  {
    "question_number": 141,
    "question": "A CMDB Administrator group wants to receive task notifications when Support Group or Managed By Group fields are not populated for Linux servers.\n\nWhich ServiceNow modules can be leveraged?",
    "options": {
      "A": "Dynamic CI groups and CMDB groups",
      "B": "Technical Service Offerings and Dynamic CI groups",
      "C": "CI Class Manager and Health Preferences",
      "D": "CMDB Workspace and Scheduled Jobs"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "CI Class Manager configures recommended fields; Health Preferences generates tasks for missing attributes."
  },
  {
    "question_number": 141,
    "question": "ServiceNow Event Management benefits from a well-maintained CMDB.\n\nWhat are key advantages for Event Management? (Choose two.)",
    "options": {
      "A": "Mapped services provide visibility to the business impact of an alert",
      "B": "Mapped services provide visibility to users consuming the service",
      "C": "Correlation of alerts to knowledge base articles",
      "D": "Binding of alerts to specific CIs"
    },
    "correct_answer": "AD",
    "section": "Insight",
    "explanation": "CMDB enables binding alerts to specific CIs and provides business impact visibility through service maps."
  },
  {
    "question_number": 142,
    "question": "The Configuration Management team wants to use CMDB 360/Multisource CMDB for all CI data.\n\nWhich must be true for CMDB 360 to report on and analyze that data?",
    "options": {
      "A": "The CI data must be from an authorized Service Graph Connector.",
      "B": "Reconciliation rules with priorities must be configured.",
      "C": "The CI data must go through the IRE.",
      "D": "ServiceNow Discovery must be used."
    },
    "correct_answer": "C",
    "section": "Insight",
    "explanation": "Data must pass through the IRE for CMDB 360 to analyze it reliably."
  },
  {
    "question_number": 143,
    "question": "A CMDB Administrator is working in the CI Class Manager on the Basic Info tab.\n\nHow can the class be set as a Principal Class?",
    "options": {
      "A": "Select 'Yes' from the Principal Class choice list",
      "B": "Check the Principal Class check box",
      "C": "Click the Principal Class UI Action button"
    },
    "correct_answer": "B",
    "section": "Configuration",
    "explanation": "Check the Principal Class checkbox on the Basic Info tab in CI Class Manager."
  },
  {
    "question_number": 143,
    "question": "A Configuration Manager is planning the implementation of the CMDB.\n\nWhich is the prescribed CSDM rollout order?",
    "options": {
      "A": "Initial, Developing, Defined, Managed",
      "B": "Foundation, Crawl, Walk, Run, Fly",
      "C": "Initiate, Plan, Execute, Deliver, Close",
      "D": "Architecture, Business, Technical, Governance"
    },
    "correct_answer": "B",
    "section": "CSDM Fundamentals",
    "explanation": "CSDM rollout follows: Foundation, Crawl, Walk, Run, Fly."
  },
  {
    "question_number": 144,
    "question": "A CMDB Administrator needs the fastest time to value solution for importing Windows computer data from SCCM.\n\nWhich management tool will accomplish this?",
    "options": {
      "A": "SCCM Service Graph Connector",
      "B": "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)",
      "C": "SCCM Usage Metering Spoke",
      "D": "Import set using JDBC data source connection to SCCM using transform maps"
    },
    "correct_answer": "A",
    "section": "Ingest",
    "explanation": "The SCCM Service Graph Connector provides the fastest time to value for SCCM data ingestion."
  },
  {
    "question_number": 146,
    "question": "Which 'Dynamic Rule Types' are available within the 'Create Reconciliation Rule' wizard? (Choose two.)",
    "options": {
      "A": "Most Reported",
      "B": "Smallest Value",
      "C": "Last Created",
      "D": "Last Updated"
    },
    "correct_answer": "AB",
    "section": "Ingest",
    "explanation": "Dynamic Reconciliation Rules support Most Reported and Smallest Value rule types."
  },
  {
    "question_number": 147,
    "question": "A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected to each other.\n\nWhich tool can be used?",
    "options": {
      "A": "Unified Map",
      "B": "Relationship Map",
      "C": "Business Service Map"
    },
    "correct_answer": "A",
    "section": "Insight",
    "explanation": "The Unified Map in CMDB Workspace visualizes CI relationships and dependencies."
  },
  {
    "question_number": 148,
    "question": "Reconciliation Rules were configured: ServiceNow/Windows Server priority 100, Altiris priority 200, SCCM priority 300.\n\nWhich are true? (Choose two.)",
    "options": {
      "A": "ServiceNow can insert new records but cannot update records created by Altiris or SCCM.",
      "B": "Altiris can update records inserted by SCCM.",
      "C": "SCCM can be inserted as new records in the Windows Server table.",
      "D": "SCCM can update any record because it has the highest priority number."
    },
    "correct_answer": "AC",
    "section": "Ingest",
    "explanation": "Lower priority number = higher authority. ServiceNow inserts but can't be overwritten. SCCM can insert new records."
  },
  {
    "question_number": 149,
    "question": "A CMDB Manager wants to start adding CSDM design and planning domain components into the CMDB.\n\nWho is involved? (Choose two.)",
    "options": {
      "A": "Application Service Owner",
      "B": "Enterprise Architect",
      "C": "Business Relationship Manager",
      "D": "Application Owner"
    },
    "correct_answer": "BC",
    "section": "CSDM Fundamentals",
    "explanation": "Enterprise Architects and Business Relationship Managers are key stakeholders in the Design and Planning domain."
  },
  {
    "question_number": 150,
    "question": "The following Reconciliation Rules were configured for ServiceNow, Altris, and SCCM:\n[ServiceNow → Windows Server (cmdb_ci_win_server) Priority 100; Altris → Windows Server (cmdb_ci_win_server) Priority 200; SCCM → Windows Server (cmdb_ci_win_server) Priority 300]\n\nWhich are true? (Choose two.)",
    "options": {
      "A": "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altris or SCCM.",
      "B": "Data collected with a discovery source of Altris can update records inserted by SCCM into the Windows Server [cmdb_ci_win_server] table.",
      "C": "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table.",
      "D": "Data collected with a discovery source of SCCM can update any record in the Windows Server [cmdb_ci_win_server] table because it has the highest priority number."
    },
    "correct_answer": "AC",
    "section": "Ingest",
    "explanation": "In reconciliation rules, a lower priority number means higher authority. ServiceNow (priority 100) has the highest authority and can insert new records but cannot overwrite data from sources with equal or higher priority. SCCM (priority 300) has the lowest authority and can insert new records but cannot overwrite records from ServiceNow or Altris."
  },
  {
    "question_number": 152,
    "question": "A customer wants to model business applications and capture data including Personally Identifiable Information (PII).\n\nWhich CMDB class needs to be leveraged?",
    "options": {
      "A": "Information Object",
      "B": "Business Capability",
      "C": "API Component",
      "D": "Data Classification"
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "Information Object represents data entities associated with business applications, including PII."
  },
  {
    "question_number": 154,
    "question": "A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Foundation Dashboard.\n\nWhich benefits support the decision to continually monitor the results on this dashboard? (Choose two.)",
    "options": {
      "A": "Provides metrics for CIs Processed by the IRE",
      "B": "Provides a list of all CIs that failed health audits",
      "C": "Provides metrics on active CIs updated in the last 90 days",
      "D": "Reports on all orphan CIs in the CMDB"
    },
    "correct_answer": "AC",
    "section": "CSDM Fundamentals",
    "explanation": "The CMDB Foundation Dashboard provides visibility into ingestion activity through metrics on CIs processed by the Identification and Reconciliation Engine and tracks recently updated active CIs to help assess data freshness and adoption."
  },
  {
    "question_number": 155,
    "question": "What is the difference between Data Certification and Attestation policies when managing a CI?",
    "options": {
      "A": "Attestation requires correcting specific attributes, while Data Certification tracks acknowledgement the CI still exists.",
      "B": "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes.",
      "C": "Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual.",
      "D": "Attestation can be scheduled, while Data Certification cannot."
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "Attestation confirms CI existence; Certification validates and corrects specific CI attributes."
  },
  {
    "question_number": 156,
    "question": "A Configuration Manager needs to automate tasks to validate the existence of CIs.\n\nWhich policy type should be used?",
    "options": {
      "A": "Retire",
      "B": "Delete",
      "C": "Attestation",
      "D": "Certification"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "Attestation policies generate tasks requiring users to confirm CIs still exist."
  },
  {
    "question_number": 157,
    "question": "A CMDB Administrator wants to leverage dynamic reconciliation rules.\n\nWhich feature must be enabled?",
    "options": {
      "A": "Reconciliation Rules",
      "B": "CMDB Data Manager",
      "C": "CMDB 360/Multisource CMDB",
      "D": "CMDB Workspace"
    },
    "correct_answer": "C",
    "section": "Ingest",
    "explanation": "Dynamic reconciliation rules require CMDB 360/Multisource CMDB to be enabled."
  },
  {
    "question_number": 158,
    "question": "A CMDB Administrator wants to improve data quality related to the CSDM.\n\nWhich action should the Administrator take to meet this goal?",
    "options": {
      "A": "Use the CSDM Data Foundation Dashboard",
      "B": "Use the default configured CMDB Health Dashboard",
      "C": "Start the ServiceNow Health Scan"
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "The CSDM Data Foundation Dashboard provides targeted insights and guidance to improve CMDB data quality specifically aligned with CSDM structure and adoption."
  },
  {
    "question_number": 158,
    "question": "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs.\n\nWhich policy type should be used to accomplish this goal?",
    "options": {
      "A": "Retire",
      "B": "Delete",
      "C": "Attestation",
      "D": "Certification"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "Attestation policies generate tasks that require assigned users to confirm that configuration items still exist and remain valid in the environment."
  },
  {
    "question_number": 159,
    "question": "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace.\n\nWhich CMDB management tool is generating these tasks?",
    "options": {
      "A": "CMDB Data Manager",
      "B": "De-duplication templates",
      "C": "CMDB Health Dashboard"
    },
    "correct_answer": "C",
    "section": "Govern",
    "explanation": "The CMDB Health Dashboard generates remediation tasks for class owners."
  },
  {
    "question_number": 160,
    "question": "A CMDB Administrator imported data from a third-party source using a Service Graph Connector and wants to review specific field-to-field mappings.\n\nWhich feature will show that information?",
    "options": {
      "A": "Integration Hub",
      "B": "CMDB Integrations Dashboard",
      "C": "IntegrationHub ETL"
    },
    "correct_answer": "C",
    "section": "Ingest",
    "explanation": "IntegrationHub ETL shows field-to-field mapping definitions used during data ingestion."
  },
  {
    "question_number": 161,
    "question": "A Configuration Management Process Owner needs to configure Data Manager for policy tasks aligned with the group attribute assigned to a class in CI Class Manager.\n\nWhich is the recommended field for policy task assignment?",
    "options": {
      "A": "Change group",
      "B": "Managed by group",
      "C": "Support group",
      "D": "Approval group"
    },
    "correct_answer": "B",
    "section": "Govern",
    "explanation": "Managed by group is the recommended field for CMDB Data Manager policy task assignments."
  },
  {
    "question_number": 162,
    "question": "A CMDB Data Manager needs to create, publish, and manage policies that automate and govern CI lifecycle operations.\n\nWhere can the Data Manager do this?",
    "options": {
      "A": "CI Class Manager",
      "B": "CMDB Workspace CMDB 360 tab",
      "C": "Service Operations Workspace",
      "D": "CMDB Workspace Management tab"
    },
    "correct_answer": "D",
    "section": "Govern",
    "explanation": "The Management tab in CMDB Workspace provides access to CMDB Data Manager for lifecycle governance policies."
  },
  {
    "question_number": 163,
    "question": "A Manager needs information on how to correctly establish relationships between Infrastructure CIs, Technical Service Offerings, and Application Services within the CMDB.\n\nWhich CSDM domain would provide this information?",
    "options": {
      "A": "Foundation",
      "B": "Service Consumption (Sell / Consume)",
      "C": "Service Delivery (Manage Technical Services)",
      "D": "Build and Integration (Build)",
      "E": "Design and Planning (Design)"
    },
    "correct_answer": "C",
    "section": "CSDM Fundamentals",
    "explanation": "The Service Delivery domain defines how infrastructure CIs, technical services, and application services are related."
  },
  {
    "question_number": 164,
    "question": "A Configuration Manager needs to view and configure identification rules for a CI class. (Choose two.)",
    "options": {
      "A": "CI Identifiers module",
      "B": "IRE Application",
      "C": "API Integrations",
      "D": "CI Class Manager"
    },
    "correct_answer": "AD",
    "section": "Configuration",
    "explanation": "Identification rules can be configured in the CI Identifiers module and CI Class Manager."
  },
  {
    "question_number": 166,
    "question": "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor.\n\nWhat are the recommended practices? (Choose two.)",
    "options": {
      "A": "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
      "B": "Modify an existing class",
      "C": "Delete an unused class, and replace it with the new one",
      "D": "Add a new class under an appropriate parent class"
    },
    "correct_answer": "AD",
    "section": "Configuration",
    "explanation": "Verify the class doesn't exist in CI Class Models store app, then add under appropriate parent."
  },
  {
    "question_number": 167,
    "question": "A CMDB Administrator needs insights into how their CMDB is configured according to ServiceNow recommended practice.\n\nWhich should be used?",
    "options": {
      "A": "CMDB Data Foundation Dashboard",
      "B": "CMDB Workspace",
      "C": "CMDB Health Dashboard",
      "D": "CMDB Data Manager"
    },
    "correct_answer": "A",
    "section": "Insight",
    "explanation": "The CMDB Data Foundations Dashboard evaluates CMDB configuration against recommended practices."
  },
  {
    "question_number": 168,
    "question": "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality.\n\nWhat does the Configuration Manager reference to obtain guidance?",
    "options": {
      "A": "CMDB Data Foundation Dashboard",
      "B": "Service Mapping Data Foundation Dashboard",
      "C": "CSDM Data Foundation Dashboard",
      "D": "CMDB Workspace"
    },
    "correct_answer": "C",
    "section": "CSDM Fundamentals",
    "explanation": "The CSDM Data Foundations Dashboard provides guidance on implementing and improving CSDM adoption, including status indicators and remediation playbooks. It helps organizations assess how well their service modeling aligns with CSDM best practices and provides actionable recommendations to improve the quality of service modeling."
  },
  {
    "question_number": 169,
    "question": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard.\n\nWhat are benefits of using this application? (Choose two.)",
    "options": {
      "A": "Uses automation to remediate potential risks",
      "B": "Checks that important data is valid and properly configured",
      "C": "Provides playbooks to assist in the remediation of potential risks",
      "D": "Has a framework to create custom metrics for the CMDB"
    },
    "correct_answer": "BC",
    "section": "Insight",
    "explanation": "The dashboard validates data against best practices and provides remediation playbooks."
  },
  {
    "question_number": 176,
    "question": "A CMDB Administrator is creating technical documentation for stakeholders, which includes attributes, IRE rules, and suggested relationships for several classes.\n\nWhich central location does the CMDB Administrator use to collect this information?",
    "options": {
      "A": "CI Identifiers",
      "B": "CMDB Data Manager",
      "C": "CMDB Workspace",
      "D": "CI Class Manager"
    },
    "correct_answer": "D",
    "section": "Configuration",
    "explanation": "CI Class Manager provides class attributes, identification rules, and recommended relationships in one place."
  },
  {
    "question_number": 178,
    "question": "A CMDB Administrator wants to educate the team on the various actions that can be performed within the CMDB Workspace.\n\nWhat actions can be initiated from the CMDB Workspace? (Choose two.)",
    "options": {
      "A": "Execute ServiceNow Discovery",
      "B": "Create a CMDB Data Manager certification policy",
      "C": "Remediate duplicate CI records",
      "D": "Create a new CMDB class"
    },
    "correct_answer": "AC",
    "section": "Insight",
    "explanation": "From the CMDB Workspace, administrators can initiate ServiceNow Discovery to populate CI data and remediate duplicate CI records to improve data quality."
  },
  {
    "question_number": 179,
    "question": "How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery? (Choose two.)",
    "options": {
      "A": "Enhanced Service Management operations",
      "B": "Reduced hardware costs",
      "C": "Gain visibility and control",
      "D": "Assist integration choices"
    },
    "correct_answer": "AC",
    "section": "Govern",
    "explanation": "CMDB governance tools provide visibility, control, and enhanced service management operations."
  },
  {
    "question_number": 180,
    "question": "A service owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information.\n\nWhich options are available to the service owner from the filter panel? (Choose two.)",
    "options": {
      "A": "Discovery source",
      "B": "CI type",
      "C": "Managed by group",
      "D": "Business criticality"
    },
    "correct_answer": "BD",
    "section": "Insight",
    "explanation": "The Unified Map filter panel supports filtering by CI type and business criticality."
  },
  {
    "question_number": 181,
    "question": "A CMDB Architect intends to build a CMDB using CSDM guidance.\n\nWhich CMDB tables will the architect use to build the CSDM sell/consume domain?",
    "options": {
      "A": "Application Service, Technology Management Service, Technology Management Offering",
      "B": "Business Service Offering, Business Service",
      "C": "Business Capability, Information Object, Business Application"
    },
    "correct_answer": "B",
    "section": "CSDM Fundamentals",
    "explanation": "The Sell/Consume domain uses Business Service and Business Service Offering tables."
  },
  {
    "question_number": 183,
    "question": "Which are business values of CMDB? (Choose two.)",
    "options": {
      "A": "Strengthening operational resiliency",
      "B": "Streaming incident and change management",
      "C": "Collecting and managing financial data",
      "D": "Automating maintenance for CI relationships"
    },
    "correct_answer": "AB",
    "section": "CSDM Fundamentals",
    "explanation": "A CMDB streamlines incident and change management and strengthens operational resiliency."
  },
  {
    "question_number": 184,
    "question": "A CMDB Administrator is implementing a Vulnerability Response and needs to ensure customers have enough context to estimate risk and set task priorities.\n\nWhich Get Well Playbook from the CSDM Data Foundation Dashboard helps with this?",
    "options": {
      "A": "Application Services with Business Application Relationships",
      "B": "Named Product Models without Product Owners",
      "C": "Percentage of Custom Status Values for CI Life Cycle Stages",
      "D": "Locations without a Parent Location"
    },
    "correct_answer": "A",
    "section": "CSDM Fundamentals",
    "explanation": "Linking Application Services to Business Applications provides business context for risk assessment and prioritization."
  },
  {
    "question_number": 186,
    "question": "A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB.\n\nWhich ingestion method brings the fastest time to value?",
    "options": {
      "A": "Service Graph Connectors",
      "B": "Import Sets",
      "C": "Agent Client Collector",
      "D": "IntegrationHub ETL"
    },
    "correct_answer": "A",
    "section": "Ingest",
    "explanation": "Service Graph Connectors provide prebuilt integrations with the fastest time to value."
  },
  {
    "question_number": 192,
    "question": "A CMDB Administrator wants to create a query to find all databases in Seattle connected to application services, including related incidents.\n\nWhich actions to build this query? (Choose two.)",
    "options": {
      "A": "Add a filter to the database node for location=Seattle",
      "B": "Add property columns to the application service node",
      "C": "Set the relationship level to 'Up to 2nd level relationships'",
      "D": "Add to the canvas the Incident table from the Non-CMDB Tables list"
    },
    "correct_answer": "AD",
    "section": "Insight",
    "explanation": "Filter database by location=Seattle and add the Incident table from Non-CMDB Tables."
  }
];
