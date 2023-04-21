<template>
<v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
        <v-icon icon="mdi-facebook" size="40" color="blue"></v-icon>
        <v-spacer></v-spacer>

        <v-tabs centered color="grey-darken-2">
            <v-tab>
                <v-icon icon="mdi-home" style="font-size:30px" color="blue"></v-icon>
            </v-tab>
            <v-tab>
                <v-icon icon="mdi-account-multiple" style="font-size:30px" color="##828282"></v-icon>
            </v-tab>
            <v-tab>
                <v-icon icon="mdi-youtube" style="font-size:30px" color="#828282"></v-icon>
            </v-tab>
            <v-tab>
                <v-icon icon="mdi-gamepad-variant-outline" style="font-size:30px" color="#828282"></v-icon>
            </v-tab>
            <v-tab>
                <v-icon icon="mdi-newspaper-variant" style="font-size:30px" color="#828282"></v-icon>
            </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>

        <v-avatar class="hidden-sm-and-down" color="blue-grey-lighten-5" size="40">
            <v-icon icon="mdi-bell"></v-icon>
        </v-avatar>
        <v-tab>
            <v-avatar class="hidden-sm-and-down" color="blue-grey-lighten-5" size="40">
                <v-icon icon="mdi-facebook-messenger"></v-icon>
            </v-avatar>

        </v-tab>
        <v-avatar class="hidden-sm-and-down" size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
        <v-container style="max-width: 100%;">
            <v-row>
                <v-col cols="12" sm="2">
                    <v-sheet rounded="lg" min-height="268" style="background: #eeeeee00;">
                        <v-list :items="items" item-props style="background: #eeeeee00;">
                        </v-list>
                        <v-list-item prepend-icon="mdi-account-multiple" color-="blue" title="Tìm bạn bè" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                        <v-list-item prepend-icon="mdi-youtube" title="Watch" color="blue" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                        <v-list-item prepend-icon="mdi-gamepad-variant-outline" color="blue" title="Chơi game" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                        <v-list-item prepend-icon="mdi-account-multiple" title="Tìm bạn bè" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                        <v-list-item prepend-icon="mdi-flag" title="Trang" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                        <v-menu transition="fade-transition">

                            <v-list-item prepend-icon="mdi-account-multiple" title="Tìm bạn bè" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                            <v-list-item prepend-icon="mdi-youtube" title="Watch" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                            <v-list-item prepend-icon="mdi-gamepad-variant-outline" title="Chơi game" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                            <v-list-item prepend-icon="mdi-account-multiple" title="Tìm bạn bè" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                            <v-list-item prepend-icon="mdi-flag" title="Trang" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                            <template v-slot:activator="{ props }">
                                <v-list-item prepend-icon="mdi-arrow-down-bold-circle-outline" v-bind="props" title="Xem thêm" style="font-size:20px; padding-bottom: 10px;"></v-list-item>
                            </template>
                        </v-menu>
                    </v-sheet>
                </v-col>

                <v-col cols="12" sm="7" style="padding-left: 200px;padding-right: 150px">
                    <!-- story -->
                    <v-sheet rounded="lg" style="margin-bottom: 15px;">
                        <v-main style="padding-bottom: none;">
                            <v-container>
                                <v-tabs centered color="grey-darken-2">
                                    <v-tab style="min-width:340px">
                                        <v-icon icon="mdi-book-open-blank-variant" style="font-size:30px"></v-icon>
                                    </v-tab>
                                    <v-tab style="min-width:340px">
                                        <v-icon icon="mdi-movie" style="font-size:30px"></v-icon>
                                    </v-tab>

                                </v-tabs>
                                <v-row>
                                    <v-col v-for="n in 5" :key="n">
                                        <v-card width="114" height="200">
                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-main>
                    </v-sheet>
                    <v-sheet rounded="lg" style="margin-bottom: 15px;">
                        <v-main>
                            <v-container>
                                <v-list>
                                    <v-list :items="userMenu" item-props lines="three">
                                        <template v-slot:subtitle="{ subtitle }">
                                            <div v-html="subtitle"></div>
                                            <v-text-field variant="underlined" label="Việt Hoàng ơi,bạn đang nghĩ gì thế"></v-text-field>
                                        </template>
                                    </v-list>
                                </v-list>
                                <v-tabs centered color="grey-darken-2">
                                    <v-tab>
                                        <v-icon icon="mdi-video-check" style="font-size:30px" color="red"></v-icon>
                                        <div style="font-family: inherit;">video trực tiếp</div>
                                    </v-tab>
                                    <v-spacer></v-spacer>
                                    <v-tab>
                                        <v-icon icon="mdi-image-multiple" style="font-size:30px" color="green"></v-icon>
                                        <div style="font-family: inherit;">video trực tiếp</div>
                                    </v-tab>
                                    <v-spacer></v-spacer>
                                    <v-tab>
                                        <v-icon icon="mdi-emoticon-outline" style="font-size:30px" color="#F5C33B"></v-icon>
                                        <div style="font-family: inherit;">cảm xúc/hoạt động</div>
                                    </v-tab>
                                </v-tabs>
                            </v-container>
                        </v-main>
                    </v-sheet>
                    <v-sheet rounded="lg" style="margin-bottom: 15px;">
                        <v-main>
                            <v-container>
                                <v-card class="mx-auto" prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px;">
                                    <template v-slot:title>
                                        Việt Hoàng Nhữ
                                    </template>
                                    <v-card-subtitle>
                                        1 giờ trước
                                    </v-card-subtitle>
                                    <v-card-text>
                                        oke luôn đấy
                                    </v-card-text>
                                    <v-img src="https://picsum.photos/500/300?image?1"></v-img>
                                    <div>
                                        <v-icon icon="mdi-thumb-up" style="font-size: 20px;" title="thích" color="blue"></v-icon>
                                        3
                                    </div>
                                    <div class="d-flex justify-space-around" style="padding-top: 40px;">
                                        <v-icon icon="mdi-thumb-up" style="font-size: 20px;" title="thích" color="blue"></v-icon>
                                        <v-icon icon="mdi-comment" style="font-size: 20px;"></v-icon>
                                        <v-icon icon="mdi-share" style="font-size: 20px;"></v-icon>
                                    </div>
                                </v-card>
                            </v-container>
                        </v-main>
                    </v-sheet>
                    <v-sheet rounded="lg" style="margin-bottom: 15px;">
                        <v-main>
                            <v-container>
                                <v-card class="mx-auto" prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="Huyền" style="font-size:20px;">
                                    <template v-slot:title>
                                        Việt Hoàng Nhữ
                                    </template>
                                    <v-card-subtitle>
                                        1 ngày trước
                                    </v-card-subtitle>
                                    <v-card-text>
                                        oke luôn đấy
                                    </v-card-text>
                                    <v-img src="https://picsum.photos/500/300?image?1"></v-img>
                                    <div>
                                        <v-icon icon="mdi-thumb-up" style="font-size: 20px;" title="thích" color="blue"></v-icon>
                                        3
                                    </div>
                                    <div class="d-flex justify-space-around" style="padding-top: 40px;">
                                        <v-icon icon="mdi-thumb-up" style="font-size: 20px;" title="thích" color="blue"></v-icon>
                                        <v-icon icon="mdi-comment" style="font-size: 20px;"></v-icon>
                                        <v-icon icon="mdi-share" style="font-size: 20px;"></v-icon>
                                    </div>
                                </v-card>
                            </v-container>
                        </v-main>
                    </v-sheet>
                </v-col>

                <v-col cols="12" sm="3">
                    <v-sheet rounded="lg">
                        <v-card color="grey-lighten-4" flat rounded="0">
                            <v-toolbar extension-height="100">

                                <v-toolbar-title style="font-size:15px">Người liên hệ</v-toolbar-title>

                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon icon="mdi-video-plus"></v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon icon="mdi-dots-horizontal"></v-icon>
                                </v-btn>

                            </v-toolbar>
                            <v-list :items="users" style="background: #eeeeee00">
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Huyền" style="font-size:20px; padding-bottom: 15px;"></v-list-item>
                            </v-list>
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
export default {
    data: () => ({
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
        items: [{
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Nhữ Việt Hoàng',
        }, ],
        userMenu: [{
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            subtitle: ` <v-text-field
            variant="underlined"
            label="Append inner"
            append-inner-icon="mdi-map-marker"
          ></v-text-field>`,
        }],
        expand: false,
    }),
}
</script>
<!-- <script lang="ts">
import  {
    defineComponent
} from 'vue'
export default defineComponent({
    name:'ToolBar',
    data: () => ({
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
        items: [{
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Nhữ Việt Hoàng',
        }, ],
        userMenu: [{
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            subtitle: ` <v-text-field
            variant="underlined"
            label="Append inner"
            append-inner-icon="mdi-map-marker"
          ></v-text-field>`,
        }],
        expand: false,
    }),
})
</script> -->
<style>
::deep.v-list-item-title {
    padding-bottom: 10px;
}

.deep.v-slide-group__content {
    min-width: none;
}
</style>
