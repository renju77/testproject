import page from  './page'
import bendigoHomePage from './bendigoHome.page'


class creditCardPage extends page {
    
    get applyBtn() {return $('[id=Button-232952]')}
    get continueApplyBtn() {return $('[id=Button-237631]')}
    get header() {return $('=Getting Started')}
    get maximumLimit() {return $('[name=maximumLimit]')}
    get generalPurpouseBtn() {return $('[name=creditCardUsage]')}
    get continueBtn() { return $('[name=contBtn]')}
    get header1() {return $('=Application Details')}
    get martialStatus() {return $('[name=maritalStatus]')}
    get prmiaryCustCheck() {return $('[uib-btn-radio="false"]')}
    get promoCodeCheck () {return $ ('[ng-change="promoCodeDisplay(false)"]')}
    get continueBtn1() {return $('[name=contBtn]')}
    get timeElegibility() {return $('=Time & Eligibility')}
    get eligibilty() { return $('[uib-btn-radio=true]')}
    get location() { return $('[name=branchSearch]')}
    get headervalue(){return $('//h2')}
    get findlocation() { return $('[id=branchSearch]')}
    get locationvalue(){ return $("//*[@ng-click=\"selectBranch(branch)\"][contains(text(),'Clifton Hill')]")}
    get emplStatus() {return $('[name=employmentStatus]')}
    get occupation() {return $('[name=occupationSearch]')}
    get incometype() {return $('[name=incomeSource]')}
    get occupationDetail() {return $('[title=Social Professionals (general)]')}
    get incomeAmount() {return $('[name=incomeAmount]')}
    get freequecny() {return $('[name=incomeFrequency]')}
    get expenses() {return $('=Expenses')}
    get expenseType() {return $('[name=expenseType]')}
    get expenseAmount() {return $('[name=expenseAmount]')}
    get expenseFreequency() {return $('[name=frequency]')}
    get cancelBtn() {return $('[name=cancelBtn]')}
    get confirmYesBtn(){ return $('[name=confirmYes]')}
    get status() {return $('//h1')}
    get referenceId() {return $('//*[@id=\"appNumber\"]')}
}

export default new creditCardPage()