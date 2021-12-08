<!-- Composant représentant la bannière avec le logo et le contact -->
<script>
export default {
	name: 'NavLink'
}
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col navbar">
            <img src="../assets/logo.png" alt="Logo de la société" style="width:250px"/>
            <a class="mailto" href="mailto:contact@groupomania.com"><img src="../assets/mail.svg" alt="Contact"></a>
        </div>
    </div>
</div>
</template>

<style lang="scss">
</style>