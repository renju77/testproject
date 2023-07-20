import page from  '../pageobjects/page'


class bendigoHomePage extends page {
    
    get banking_btn() {return $('[id=BendigoBankHeaderConfig-16378-re-mega-menu-desc-menu-row-menu-item-banking]')}
    get about_us() { return $('[name=about-us]')}
    get creditCard_btn() {return $('=Credit cards')}
     
}

export default new bendigoHomePage()