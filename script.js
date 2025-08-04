function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  let text = recommendation.value.trim();

  // ✅ Kiểm tra rỗng hoặc quá ngắn
  if (text !== "" && text.length > 1) {
    console.log("New recommendation added");
    showPopup(true);

    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + text + "<span>&#8221;</span>";
    document.getElementById("all_recommendations").appendChild(element);

    recommendation.value = "";
  } else {
    alert("Please enter a longer recommendation.");
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
