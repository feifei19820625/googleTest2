
# Getting Started

## Installation:
    1.you need to install Node.js JDK to prepare the testing environments.
    2.and then install protractor, is the automation framework
    3. install jasmine to execute the test cases and generate the testing reports.
    4.create the package.json, add all the dependencies you need, then npm install all of them
    5.before running the script, please run the command 'webdriver-manager start'
    6. to make sure the chrome version and chrome Driver version are same as 114, otherwise the chrome can't be involked.

## Comments:
    7.how to suspend the chrome to update the latest version?
      since the webdriver and chrome should keep the same version as 114, but chrome always to update itself automaticlly,it is neccessary to stop that by edit the values in registry, for the other methods, like stopping the updating services, or deleting the folder of update and other methods, don't work after verification:
        1).On the registry editor open the “HKEY_LOCAL_MACHINE” folder. You may double click on the folder or click on the arrow to open.
        2).Open the “SOFTWARE” folder and scroll down to “Policies”.
        3).Right-click the “Policies” folder, select “New” then click “Key”.
        4).Rename the newly created key to “Google”.
        5).Right click on the “Google” folder, select “New” then click on “Key” and rename the key to “Update”.
        6).On the right hand side of the registry editor, right click on the white space below the “Default” option and select “New” then choose “DWORD”.
        7).Rename the new key to “Updatedefault”.
        8).Double click on the “Updatedefault” to edit the DWORD value and set the “Value data” to 0.



## Files:
      1)locators.js: store the information to locate the elements
      2)conf.js: including basic information
      3)util.js: common methods to use

# Requisites:
      1.Must Store an Screen shot of the last visited page 
        after clicking the third one of search result, the window is switched to the detail page, the screenshot is taken for this page to the folder of testresult
      
      2. Should validate that the search results are related to the used image
         after the image is searched, there is one button as Find image Resource, after clicking it, there are results listed, I verified it by searched the key words including the 'harry potter' to prove that the image is related with
      the search results.

## Video of Execution
https://github.com/feifei19820625/googleTest2/assets/5669029/f33b541d-88e8-46ca-8781-a42fef864f8c



## Test Report
<img width="1239" alt="executionScreenShot" src="https://github.com/feifei19820625/googleTest2/assets/5669029/92cd7320-abad-47d1-922f-ab14931f519b">




