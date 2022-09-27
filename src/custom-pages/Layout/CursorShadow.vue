<template>
  <div class="cursor-shadow" id="cursorShadow" />
</template>

<script>
export default {
  mounted() {
    console.log(123);
    var shadow = document.getElementById("cursorShadow");
    document.addEventListener("mousemove", (e) => {
      shadow.style.left = e.pageX - 29 + "px";
      shadow.style.top = e.pageY - 26 + "px";
    });
  },
};
</script>

<style lang="scss" scope>
.cursor-shadow {
    pointer-events: none;
  width: 50px;
  height: 50px;
  background-color: rgba(59, 131, 59, 0.6);
  position: absolute;
  border-radius: 50%;
  transition: all 0.2s ease-out;
  z-index: 10;
}
</style>