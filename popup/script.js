const form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();

  const checkedCheckboxes = document.querySelectorAll(
    'input[name="colors"]:checked'
  );
  const selectedValues = [];

  checkedCheckboxes.forEach(function (checkbox) {
    selectedValues.push(checkbox.value);
  });

  if (selectedValues.length === 0) {
    alert("Pilih 1 warna");
  } else {
    alert(selectedValues);
    form.reset();

    const box = document.getElementsByClassName("box");
    const boxes = box[0];
    boxes.style.backgroundColor = selectedValues[0];

    
    document.body.append(boxes);
   
  }

  const marquees = document.getElementsByClassName('slide');

// Loop through the collection to set the style for each element
for (const marquee of marquees) {
  marquee.style.display = 'block';
  marquee.style.position = 'absolute';
  marquee.style.left = '50%'
  marquee.style.top = '45%'

}

// Optionally, you can append a specific element if needed, but not the entire collection
if (marquees.length > 0) {
  // Append the first element, for example
  document.body.append(marquees[0]);
}


});
