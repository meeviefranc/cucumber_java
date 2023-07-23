package StepDef.pages;

import com.codeborne.selenide.SelenideElement;

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

}
