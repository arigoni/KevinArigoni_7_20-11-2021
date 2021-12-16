<!-- Composant représentant la bannière avec le logo et le contact -->
<template>
<div class="container">
    <div class="row">
        <div class="col navbar">
                <img src="../assets/logo.png" alt="Logo de la société" style="width:250px"/>
            <a class="mailto" href="mailto:contact@test.com"><img src="../assets/mail.svg" alt="bouton_aide"></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "NavLink"
}
</script>