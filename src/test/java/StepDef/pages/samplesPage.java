package StepDef.pages;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.$;

public class samplesPage {

    public samplesPage() {
    }

    public SelenideElement getSampleLink() {
        return $("#tabSamples");
    }

    public SelenideElement getUploadLink() {
        return $("#galleryUploadtabs > span");
    }

    public SelenideElement getUploadEnterURLLink() {
        return $("#enterUrlAction > span");
    }

    public SelenideElement getBrowseFileLink() {
        return $("#browseForFileAction > span");
    }

    public SelenideElement getBrowseFileUpload() {
        return $("#container > input[type=file]");
    }

    public SelenideElement getFNameDisplayed() {
        return $(By.xpath("//input[contains(@class,'ng-pristine') and contains(@maxlength,'80')]"));
    }

    public SelenideElement getFileValMsg() {
        return $("#mat-mdc-dialog-0 > div > div > app-vi-dialog > div > div.mat-mdc-dialog-content.mdc-dialog__content.dialog-container > vi-upload-dialog > div.indexing-form-container.ng-star-inserted > vi-indexing-form > div > div > main.main-view > vi-indexing-settings-general > div > div > div:nth-child(1) > div > vi-indexing-file-name-input > vi-ui-input > div > span");
    }

    public SelenideElement getURLDisplayed() {
        return $(By.xpath("//input[contains(@placeholder, 'Azure blob storage URL')]"));
    }

    public SelenideElement getCancelBtn() {
        return $("#cancel > span");
    }

    public SelenideElement getLeaveBtn() {
        return $("#leaveIndexingAction > span");
    }

    public SelenideElement getVSLListBox() {
        return $(By.xpath("//div[@id='indexingLanguage']")).waitUntil(Condition.appears,3000);
    }

    public SelenideElement getVSLLangOption(String option) {
        String locLang = String.format("//span[contains(@aria-label,'%s') and contains(text(),'%s')]", option, option);
        return $(By.xpath(locLang)).waitUntil(Condition.appears,3000);
    }

    public SelenideElement getPrivacyOption() {
        return $(By.xpath("//div[@id='indexingPrivacy']")).waitUntil(Condition.appears,3000);
//        return $("#indexingPrivacy > p-dropdown > div > div.ui-dropdown-label-container.ng-tns-c11-5 > span");
    }

    public SelenideElement getAdvSetting() {
        return $("#advancedSettingsButton > span");
    }

    public SelenideElement getAddBtn() {
        return $("#addURLButton");
    }

    public SelenideElement getPrivacyChkBox() {
        return $("#mat-mdc-dialog-0 > div > div > app-vi-dialog > div > div.mat-mdc-dialog-content.mdc-dialog__content.dialog-container > vi-upload-dialog > footer > vi-upload-consent > vi-checkbox-with-label > div > label");
    }

    public SelenideElement getUplIndex() {
        return $("#uploadButtonAction");
    }

    public SelenideElement getUplConfirm() {
        return $(By.xpath("//span[contains(@class, 'percentage')]"));
    }

    public SelenideElement getVidLink(String vidTitle) {
        String vidlink = String.format("//span[contains(@title,'%s')]", vidTitle);
        return $(By.xpath(vidlink));
    }

    public SelenideElement getVidPlayer() {
        return $(By.xpath("//video[contains(@src,'videoindexer.ai')]"));
    }

    public SelenideElement getVidComponent(String component) {
        String actPath = null;
        switch (component) {
            case "People":
                actPath = String.format("//section[contains(@id,'%s')]","facesComponent");
                break;
            case "Topic":
                actPath = String.format("//section[contains(@class,'%s')]","topics-component");
                break;
            case "Audio Effects":
                actPath = String.format("//section[contains(@id,'%s')]","acousticEventsComponent");
                break;
            case "Keywords":
                actPath = String.format("//section[contains(@id,'%s')]","keywordsComponent");
                break;
            case "Labels":
                actPath = String.format("//section[contains(@id,'%s')]","labelsComponent");
                break;
            case "Named Entities":
                actPath = String.format("//section[contains(@id,'%s')]","mentionedEntitiesComponent");
                break;
            default:
                break;
        }
        return $(By.xpath(actPath));
    }

    public SelenideElement getSearchBox() {
        return $(By.xpath("//input[@title='Search']")).waitUntil(Condition.appears, 3000);
    }

    public SelenideElement getSearchResult() {
        return $(By.xpath("//div[@class='item-row']")).waitUntil(Condition.appears, 3000);
    }
}
