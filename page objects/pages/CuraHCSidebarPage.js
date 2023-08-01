import {Selector, t} from 'testcafe'

class CuraHCSidebarPage{
    constructor(){
        
        this.sideBar= Selector('#menu-toggle')
        this.homeOnclick= Selector("a").withExactText('Home')
        this.historyOnclick= Selector("a").withExactText('History')
        this.historyPage= Selector("h2").withExactText("History")
        this.profileOnclick= Selector("a").withExactText('Profile')
        this.logoutBtnOnProfilePage= Selector("p").find("a").withAttribute('class', 'btn btn-default')
        this.logoutOnclick= Selector("a").withExactText('Logout')
    }
}

export default CuraHCSidebarPage