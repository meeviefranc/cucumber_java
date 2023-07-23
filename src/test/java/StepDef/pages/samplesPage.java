package StepDef.pages;

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

}
