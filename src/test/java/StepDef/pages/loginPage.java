package StepDef.pages;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$;

public class loginPage {

    public loginPage() {
    }

    private SelenideElement usernameBox = $("#identifierId");
    private SelenideElement passwordBox = $("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
    public SelenideElement getUsernameNext() { return $("#identifierNext > div > button > span");}
    public SelenideElement getpwdNext() { return $("#passwordNext > div > button > span");}

    public SelenideElement getGoogleBtn() {
        return $("#viLoginGoogle > span");
    }

    public void setUserName(String username) {this.usernameBox.val(username);}
    public void setPassword(String password) {this.passwordBox.val(password);}

}
