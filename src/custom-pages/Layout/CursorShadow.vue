<template>
  <div class="cursor-shadow" id="cursorShadow" />
</template>

<script>
export default {
  mounted() {
    var shadow = document.getElementById("cursorShadow");
    let xShadow = 0;
    let yShadow = 0;
    let scaleShadow = 1;
    let velocity = 1;
    document.addEventListener("mousemove", (e) => {
      // get velocity
      velocity = Math.ceil((Math.abs(e.movementX) + Math.abs(e.movementY)) / 2);
      scaleShadow = 1 + (velocity / 100);
      // get cursor position
      xShadow = e.x - 25;
      yShadow = e.y - 25;
      shadow.style.display = "block";
      shadow.style.transform = `translate3d(${xShadow}px, ${yShadow}px, 0px) scale(${scaleShadow})`;
    });
  },
};
</script>

<style lang="scss" scope>
.cursor-shadow {
  display: none;
  pointer-events: none;
  width: 50px;
  height: 50px;
  background-color: rgba(59, 131, 59, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  transition: all 0.2s ease-out;
  z-index: 99999;
}
</style>