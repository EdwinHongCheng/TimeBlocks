iFrame: https://allwebco-templates.com/support/S_script_IFrame.htm

1. Paste the into the content area of your HTML webpage where you want the IFrame window to appear.
<iframe name="Framename" src="your-url" width="400" height="200" frameborder="0" scrolling="auto" class="frame-area">
</iframe>

2. Select, copy, and paste the following css at the bottom of your template global style .css file. The css height and width will overwrite the IFrame HTML code. Edit the following with your height, width, border and overflow options.

.frame-area {
  display: block;
  width: 100%;  /* RESPONSIVE WIDTH */
  max-width: 400px;
  height: 300px;
  overflow: auto;  /* EDIT TO hidden FOR NO SCROLLBAR */
  border: #999999 1px solid;
  margin: 0px;
  padding: 0px;
  }


