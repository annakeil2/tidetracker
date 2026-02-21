# TideTracker – A Job Application Tracker for Job Seekers

## Project Description
This application has been designed to assist job seekers with their application process. Working in talent acquisition, I clearly recognise the need for an application like this to help job seekers stay on top of and take ownership of their job search. Additionally, the platform could provide an excellent opportunity for a recruitment agency to advertise its services.

## Features

#### Feature 1 – Adding New Job Applications
This feature allows users to add new job applications by entering the company name, the role applied for, and optional additional notes (guidelines are provided within the notes field as prompts).

The company name and role fields are mandatory, and users must enter at least two characters in each field before submitting a new application. If the requirement is not met, a validation message is displayed.

The notes section and the option to include a link to the original job advertisement are optional. The URL field includes validation to ensure a correctly formatted link is entered.

For consistency and ease of use, the application status can be selected from a drop-down list. All active applications (i.e. those not marked as rejected or deleted) are automatically displayed in the ‘Active Applications’ list.


#### Feature 2 – External Hyperlink to Be Added to Applications
When submitting a new application, users are prompted to optionally add the external hyperlink to the website that brings them to the job ad itself. This way they can easily access the job description before interviews if needed. 

#### Feature 3 – Make Application Priority
Users are welcome to make their application a priority by clicking the tick box. This will mark the application with different colours to highlight it and make it stand out to receive more attention from users. This is an optional feature.

#### Feature 4 – Application Notes Can Be Updated
The notes that users optionally add when creating a new job application can be edited at any time. This feature provides significant added value for job seekers by allowing them to update information as their application progresses. The notes section also includes built-in prompts to guide users and support structured note-taking.

#### Feature 5 – Time Stamped Applications
All applications that are added receive a time stamp automatically. This helps users to keep track of all their applications, initiate follow up conversations or delete certain applications if they are aged.

#### Feature 6 – Daily Goal Tracker with Interactive Process Fill Bar & Encouraging Feedback Messages
Users are provided with a daily goal tracker featuring a progress bar that fills as they work toward the target of submitting at least five applications per day. A range of playful and encouraging messages is displayed throughout the process to maintain motivation. This feature is designed to gamify the experience and make the job search more engaging.

#### Feature 7 – Updating Application Status
Users can update the status of their applications at any time to ensure accurate and up-to-date record-keeping.

#### Feature 8 – Applications Are Categorically Listed
Active applications (those set to any status other than ‘Rejected’) are automatically displayed in the ‘Active Applications’ section. Applications marked as ‘Rejected’ are listed separately under ‘Rejected Applications (Sea of Dreams)’. This title serves as a playful euphemism that channels optimism, further reinforced by the image featured in this section.

#### Feature 9 – Celebration of ‘Offered’ Status with Confetti Animation
To further enhance the gamified experience, a confetti animation is triggered whenever an application is updated to ‘Offered’ status.

#### Feature 10 – Pop-Up Alert When Interacting with Delete Button
When a user clicks the ‘Delete’ button for a previously added application, a confirmation alert appears to verify their intention.
This feature helps prevent accidental deletion of records, thereby supporting accurate and reliable data management.

#### Feature 11 – The Usage of Local Storage
Job applications are saved to and loaded from local storage allowing users to continue their work after they close and reopen their browser. This adds to the overall usefulness of the app.

## Design Choices

#### Colours
I aimed to choose playful, bright colors for the project because I wanted the application to make an otherwise mundane process (submitting applications, which can take a long time and involve uncertainty) more enjoyable and a more positive experience. I feel the colours engage users, and I made sure to use a cohesive colour palette. I made the daily goal bar yellow as it is a strong complementary colour to the greenish background of the form, drawing attention to that part of the application and encouraging user engagement.

I also paid special attention to accessibility and double-checked that colour contrast levels were appropriate. The colours also complement the main feature of the page, which is the confetti effect celebrating any ‘Offered’ status updates.

As for the two sets of action buttons, I made them stand out through special styling.

A white background for the otherwise colourful application helps accentuate the bright colours and encourages users to interact with the features.
The greenish colour used in the form (the main feature of the application) and in the hover effect for buttons reflects associations with progress, success, and completion, helping to signal a positive user experience.

The soft pink colour chosen for highlighted (priority, ‘dream job alert!’) applications signals importance without relying on aggressive red tones, while also maintaining design cohesion within the purple colour family.

Consistent reuse of accent colours was a conscious decision to keep the application professional and cohesive.

#### Fonts/Typography
I chose these fonts from Google Fonts as they provide clarity and a subtle sense of playfulness. These two characteristics align well with the purpose of the application


#### Images/Graphics
Two images have been selected for the application, the first one of which is the logo image with the clownfish. It is intended to be the logo for the imaginary recruitment agency called Nemo that owns the application. The second image has been placed to the ‘Rejected Applications (Sea of Dream)’ section to draw more attention to the message this part is set out to convey and make the user keep trying to go for their dreams.

## Development Process

#### Project planning
At the outset, I aimed to make the application as useful as possible for job seekers to help alleviate some of the pressure associated with the job search process. I also wanted the job application entries to be editable, so I included the job status update and note update features to ensure users can easily update their application records. As I work in recruitment, I understand how important and often niche it is for applicants to experience positivity and encouragement during their job search, which is why I incorporated positive messages — these can be seen in the ‘Daily Goal’ section. Interactivity was also an important design consideration, so I implemented the ‘Daily Goal’ section with positive feedback messages and a progress bar that fills as users meet their targets. The confetti effect for ‘Offered’ status updates further reinforces this sense of achievement and engagement.
The scope of the project was clear from the outset. I wanted the application to be clean, streamlined, and positive — all key factors that guided my design and styling decisions.

#### Wireframes
Include wireframes (use markdown cheatsheet for markdown image syntax)

#### Challenges Faced
One big challenge I faced throughout implementation was a recurring one. The bug occurred when user changed application status, the list of applications were getting reordered. This was happenning because I was just re-adding applications to the list and it was appending it to the bottom of the list. First, I tried checking if the state has changed and only adding it if I had, but this did not fix the problem because several of my statuses (1st Interview, Screening) left the application in the same list, so changing from one of these statuses to another would still keep reordering the list. 

I finally solved the problem by checking if the type was previously rejected or not rejected as that is the only status that appeared in the other list. This ultimate solution managed to fix the bug. 

Another challenge I encountered was when I was using an accessibility validator called WAVE Accessibility Checker. The validator showed I miss labels from my form (input field labels) and although I had the input request prompt in the field itself, the validator stated it might not be a good solution for certain users.

When I added labels as advised, my whole form layout got disorganized and noisy in terms of the text layout, resulting in poor design so I looked for another solution. I soon found a way to add hidden labels to the HTML code, but this ultimately did not pass the same validator check so I needed to opt out of using labels altogether due to design purposes. This is definitely an important aspect to keep in mind for a potential future roll-out.

#### Interactivity
I implemented the job application progress fill bar to encourage users to submit applications in order to reach their daily goal. A ‘scroll to top’ button was also added to the page. Interactivity was further enhanced by adding a feature that allows users to update notes and application status, as well as a feature that sorts applications into active and rejected sections. When users click on the delete button for any application, an alert window pops up to ask for confirmation before actual deletion. 
Job applications are saved to and loaded from local storage allowing users to continue their work after they close and reopen their browser. This adds to the overall usefulness of the app.
A confetti interactive effect has been implemented to mark the end goal, i.e. when an application reaches ‘Offered’ status.

## Deployed site
This site has been deployed to GitHub Pages at the URL below:

https://annakeil2.github.io/tidetracker/

## Github Repository Link:

https://github.com/annakeil2/tidetracker


For additional information, please see document titled 'Documentation' including planning analysis and wireframe I submitted along with my assessment submission.
