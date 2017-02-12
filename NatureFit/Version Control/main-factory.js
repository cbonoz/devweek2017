// Definitions and update functions Factory
myApp.factory('MainFactory', function($http){
  var factory = {};
  var sharedVariables = {};
  var definitions = {
        // Start a deal
        endUser: "The Oracle Customer authorized to use Oracle products and services either for its own internal business operations or for that of a third party (ex. specified end user). They are responsible for making the OFD payment obligation under the OFD Contract and they hold the asset.",
        nonEndUser: "A Partner authorized to resell or distribute Oracle products and services for the use of their Customers' business operations. Non-End User obligors are responsible for making the OFD payment obligation under the OFD Contract but they do not hold the asset.",
        commercialEntity: "A business organization incorporated under commercial laws that provides goods and/or services. Corporations and limited liability companies are common types of commercial entities.",
        government: "Public authority, legislature or decision making body, judiciary, instrumentality, department, or agency.",
        serviceProvider: "Service Providers offer outsourcing and/or hosting services to the end user.  The Service Provider has the right to use the Oracle Programs, Hardware, or Cloud Services on behalf of a specified end user for a specified period of time.",
        independentSoftwareVendor: "ISVs have the right to develop, distribute, provide as a service and/or support the ISV’s proprietary commercially available application programs (that are integrated with Oracle products) to multiple end users. Since the Oracle product is embedded or integrated in the ISV's software, the Customer may not be aware that they are using Oracle product.",
        resellerFinancing: "OFD is financing the Reseller for the System which will be immediately distributed to the End User.",
        publiclyListedEntity: "A legal entity whose shares are publicly traded on at least one stock exchange or in the over the counter market. In general, publicly listed companies publish public financial reports.",
        privatelyOwnedEntity: "A legal entity whose shares are not publicly traded on a stock exchange or in the over the counter market. Most privately owned companies do not publish public financial reports.",
        nationalFederal: "A national government that exercise some degree of control over smaller political units that have surrender some degree of power in exchange for the right to participate in national political manners.",
        stateProvincial: "A state government or provincial government is the government of a country subdivision in a federal form of government, which shares political power with the federal or national government. A state government may have some level of political autonomy, or be subject to the direct control of the federal government.",
        local: "The government of a particular locality, such as city or county; a government body at a lower level than the State/Provincial government.",
        quasiGovernment: "Legal forms that are established to operate in commercial affairs but may also have public policy objectives. Quasi-Government should be differentiated from other forms of government agencies or state entities established to pursue purely nonfinancial objectives.",
        ofdFinancialFootprint: "A report in WebX that shows a customer profile and its transaction history with OFD.",
        webX: "Also known as Oracle Financing System (OFS), WebX is an online transaction processing system that tracks the complete life cycle of an OFD deal from opportunity to funding confirmation.",
        // System
        ps1: "Programs + Initial Period Support. Initial Period is typically 12 months.",
        psn: "Programs + Initial Period Support and additional future periods of Support.",
        hws1: "Hardware + Initial Period Support.",
        hwsn: "Hardware + Initial Period Support and additional future periods of Support.",
        publicCloud: "A Cloud service with a multi-tenant environment (multiple customers are supported).",
        nonMetered: "Cloud services sold via usage-based metric such as Hosted Named Users or Hosted Environment. Customers pay for a set amount of Users over the course of a Service Period and is billed upfront based on the committed quantity.",
        metered: "A Cloud subscription service where usage of the service by the customer is tracked, priced, and charged to the customer. Customers can either: 1. purchase a pre-paid amount, billed in advance, and their account is drawn down based on actual usage monthly usage; or 2. \"pay-as you go\" where Customers are billed monthly in arrears based on their actual monthly usage at Oracle's Pay As You Go Rates.",
        saas: "Software as a Service",
        paas: "Platform as a Service",
        iaas: "Infrastructure as a Service",
        ocm: "Oracle Cloud Machine",
        privateCloud: "A Cloud service with a private environment to support a single Customer.",
        omcs: "Oracle Managed Cloud Services provides an environment that is unique to the Customer.",
        partner: "Partner provides a Cloud environment that is unique to the Customer.",
        learningCredits: "Learning Credits may be used to acquire education products and services offered in the Oracle University online catalogue at the current list price.",
        supportRenewals: "Support fess for previously purchased Oracle Programs and/or Hardware where Customer either paid cash for the Programs and/or Hardware or were financed on OFD contract, but the up-coming Support Renewal fees were not included on the OFD contract.",
        linuxSupport: "A formal support offering to our database customers who operate their systems on the Oracle Linux operating system.",
        oracleVM: "Oracle Virtual Machine",
        bps: "BPS is the outsourcing of a business process (not just IT supporting the process) to a third party company, who assumes responsibility for that process. For example, IT outsourcing is not considered BPS when done stand-alone. HR, procurement or call center support, which may include IT outsourcing, however, are considered BPS because it involves taking over the business process.",

        // Structure
        marketRateFinancing: "Payment structure where the total interest cost, based on prevailing market rates, is paid by the customer.",
        incentiveRateFinancing: "Payment structure where the total interest cost paid by the customer is subsidized by Supplier (Oracle and/or Partner) to provide incentive for Customer to acquire Oracle products and services.",
        paymentPlan: "Sum of all payments equals System Price. Same as 0% financing. All of the interest cost is subsidized by the Supplier.",
        leaseTerm: "A right to use contract in which the Customer makes periodic (e.g. monthly) payments to an owner (Lessor) for the right to use System (Program and/or Hardware) for a specific amount of time.",
        abl: "ABL is an excel-based OFD pricing tool used to calculate payment solutions. Different Pricing scenarios are uploaded in WebX to reflect deal structure & pricing.",
        passThroughPayments: "Portion of the total Payment Amount that is attributable towards fees for other services that are due at the same timing as that of the funded Payment Amount e.g. fees for Future Support, OMCS.  Pass-Through payments are usually a consequence of payment structure.",
        periodicFunding: "Payments made to Supplier for Fees that are due at a future date. Funding for such fees occur at the same timing as they become due to Supplier. Priced as a cash outflow (negative amount) in a payment stream to account for the actual timing of when due to Supplier e.g. second/third year of Cloud Fees due for a multi-year Cloud contract with payments due annual in advance to the Supplier.",
        renewalServices: "Fees included in System Price for renewal periods of services after the first period of services (as such period is defined in the Order), are called Renewal Services and will be ordered through the OFD contract e.g. fees for future support period that are not ordered through the OD.",
        migration: "Moving the Customer’s existing licenses to another type, model, or metric, including: old product to new, different edition, from one product to another, move to current metric, or different products line.",
        techRefresh: "Customer upgrades to a newer generation of technology.  Includes acqusition of new hardware.",
        refinanceRollOver: "The replacement of an existing payment obligation with another payment obligation under different terms. A roll-over is done to consolidate existing payment obligation into a new one.",
        saleLeaseBack: "A transaction that involves the sale of an owned equipment to a leasing company and a subsequent lease of the same equipment back to the original owner, who continues to use the equipment.",
        tradeIn: "Return of an existing equipment along with the acqusition of a new one.  Usually includes a monetary value/consideration for the return of the equipment and acqusition of the new one.",
        crossBorder: "A cross border deal occurs when programs, hardware or services are supplied or delivered to a country that is different from the country of the Oracle Order/Contracting entity. Cross border deals may create tax risks not present in ‘standard OFD’ in-country deals.",
        endOfTerm: "Options stated in the lease agreement that give the lessee flexibility in its treatment of the leased equipment at the end of the lease term. Common end-of-term options include purchasing the equipment, renewing the lease or returning the equipment to the lessor. Purchase options are subject to local legislation and accounting rules.",
        purchaseOption: "An option given under a lease/right to use contract where the customer can purchase the asset at the end of original or renwal term. Purchase options are subject to local legislation and tax rules.",

        // CREDIT
        managedProgram: "Oracle enters into a contract for payment terms with Customer using a form of OFD Contract. Oracle may then  assign the OFD Contract to Funder. Most OFD transactions are under the \"Managed Program.\"",
        arrangedProgram: "Also known as Referral Program or Sales Financing Program (SFP). Oracle only \"arranges\" the transaction and is not a party to the contract for payment terms with Customer.  Customer enters into a contract for payment terms directly with the Funder using a form of Funder contract.  No assignment takes place because Funder is a party to the contract.",
        creditEnhancements: "Credit enhancements are used to mitigate or offset the risk of default of a transaction.  Forms of credit enhancement include a bank-issued standby letter of credit or bank guaranty, a co-obligor or guaranty from a third party, insurance, etc.",
        knowYourCustomer: "KYC is a practice common to regulated financial instutions verifying the identity of its clients.  It is a customer due diligence process that helps mitigate risk, prevent identity fraud, & comply with International regulations.  KYC varies according to factors such country, scope of regulation, among others.",
        antiMoneyLaundering: "Anti-money laundering (AML) refers to a set of procedures, laws or regulations designed to detect and stop the practice of generating income through illegal actions. Money laundering is the process of creating the appearance that money obtained from illegal or unethical sources originated from a legitimate source.",
        docGen: "A tool integrated within WebX that provides OFD users, Sales and Operations, a means to generate OFD Contracts and other forms critical to the lifecycle of a deal."

    };
  factory.getSharedVariables = function() {
  	// console.log(sharedVariables);
  	return sharedVariables;
  }
  factory.updateCustomerObligor = function(value) {
  	// console.log("updating customer obligor");
  	sharedVariables.customerObligor = value;
  }
  factory.updateEntityType = function(value) {
    sharedVariables.entityType = value;
  }

  // System
  factory.updatePrograms = function(value) {
    sharedVariables.programs = value;
  }
  factory.updateHardware = function(value) {
    sharedVariables.hardware = value;
  }
  factory.updateProgramType = function(value) {
  	sharedVariables.programType = value;
  }
  factory.updatePublicCloud = function(value) {
    sharedVariables.publicCloud = value;
  }
  factory.updatePrivateCloud = function(value) {
    sharedVariables.privateCloud = value;
  }
  factory.updateServices = function(value) {
    sharedVariables.services = value;
  }
  factory.updateNonOracleProducts = function(value) {
    sharedVariables.nonOracleProducts = value;
  }
  // Structure
  factory.updatePaymentSolution = function(value) {
    sharedVariables.paymentSolution = value;
  }
  factory.updateEOT = function(value) {
    sharedVariables.eot = value;
  }
  factory.updatePassThrough = function(value) {
    sharedVariables.passThrough = value;
  }
  factory.updatePassThroughYes = function(value) {
    sharedVariables.passThroughYes = value;
  }
  factory.updateMidTerm = function(value) {
    sharedVariables.midTerm = value;
  }
  factory.updateCrossBorder = function(value) {
    sharedVariables.crossBorder = value;
  }
  factory.updateProposal = function(value) {
    sharedVariables.proposal = value;
  }
  // Contracts
  factory.updateSupplier = function(value) {
    sharedVariables.supplier = value;
  }
  factory.updateCreditEnhancements = function(value) {
    sharedVariables.creditEnhancements = value;
  }
  factory.updateContractGeneration = function(value) {
    sharedVariables.contractGeneration = value;
  }
  factory.getDefinitions = function() {
  	return definitions;
  }
  return factory;
})