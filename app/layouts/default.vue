<template>
    <div class="flex flex-col px-[15px] sm:px-[50px]">
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
html,
body {
    max-width: 100%;
    overflow-x: hidden;

    background-color: #ffffff;
}
</style>
