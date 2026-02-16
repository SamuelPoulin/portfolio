<template>
    <div id="page-container">
        <header>
            <slot name="header">
                <Header />
            </slot>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <slot name="footer">
                <Footer />
            </slot>
        </footer>
    </div>
</template>

<style>
#page-container {
    display: flex;
    flex-direction: column;

    padding: 0px 50px;
}

html,
body {
    max-width: 100%;
    overflow-x: hidden;

    background-color: #ffffff;
}

/* sm */
@media only screen and (max-width: 640px) {
    #page-container {
        padding: 0px 15px;
    }
}
</style>
