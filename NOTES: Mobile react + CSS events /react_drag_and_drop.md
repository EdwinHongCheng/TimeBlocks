API used: HTML Drag and Drop API
DOM event model

- The user may select draggable elements with a mouse, drag those elements to a droppable element, and drop them by releasing the mouse button.

1. Identify what is draggable by adding the draggable attribute and the ondragstart global event handle

EXAMPLE:
<script>
  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id); //type of data, data value
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });
</script>

<p id="p1" draggable="true">This element is draggable.</p> <!-- Declare whether element is draggable or not -->

-----------------------------------------------------------------------------

2. Note: When a drag occurs, a translucent image is generated automatically. 
- To create a custom drag image: event.dataTransfer.setDragImage(image, xOffset, yOffset)
- Offset is in relation to mouse pointer

EXAMPLE: 
function dragstart_handler(ev) {
  let img = new Image();
  img.src = 'example.gif';
  ev.dataTransfer.setDragImage(img, 10, 10);
}

------------------------------------------------------------------------------

3. Defining drag effect 
- copy: indicates that the dragged data will be copied from its present location to the drop location.
- move: indicates that the dragged data will be moved from its present location to the drop location.
- link: indicates that some form of relationship or connection will be created between the source and drop locations.

EXAMPLE:
function dragstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}

------------------------------------------------------------------------------


4. Specifying Drop targets
- A listener for the dragenter and dragover events are used to indicate valid drop targets
- If you want to allow a drop, you must prevent the default handling by cancelling both the dragenter and dragover events

<div ondragover="return false">
<div ondragover="event.preventDefault()">

- Tip: can call the preventDefault() method only in certain situations

------------------------------------------------------------------------------

5. Drop feedback:  indicate to the user that a drop is allowed at a certain location
- For simple highlighting, you can use the :-moz-drag-over CSS pseudoclass on a drop target.

EXAMPLE:
.droparea:-moz-drag-over {
  outline: 1px solid black;
}

------------------------------------------------------------------------------


6. Performing a Drop + retrieving data
- dataTransfer property will hold the data that is being dragged
- getData() method may be used to retrieve the data again.

EXAMPLE:
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain"); 
  event.target.textContent = data;
  event.preventDefault();
}

--------------------------------------------------------------------------------

FINAL EXAMPLE:
<script>
function dragstart_handler(ev) {
 // Add the target element's id to the data transfer object
 ev.dataTransfer.setData("application/my-app", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 const data = ev.dataTransfer.getData("application/my-app");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">This element is draggable.</p>
<div id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</div>