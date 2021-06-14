$("input:checkbox").on('click', function() {
  const $box = $(this);
  if ($box.is(":checked")) {
    const group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});