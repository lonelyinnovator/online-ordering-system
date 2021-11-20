<template>
  <side-bar>
    <template v-slot:header>
      <div class="sidebar-header">
        <a href="#" @click="sideBarClick">OOS</a>
      </div>
    </template>
    <template v-slot:content>
      <!-- 侧边栏内容 -->
      <div class="sidebar-content" @click="sideBarClick">
        <!-- 侧边栏行 -->
        <div class="sidebar-line">
          <a href="#">
            <span class="icon-home"></span>
            <span>订餐菜单</span>
          </a>
        </div>
        <div class="sidebar-line">
          <a href="#">
            <span class="icon-shopping-cart"></span>
            <span>购物车</span>
          </a>
        </div>
        <div class="sidebar-line">
          <a href="#">
            <span class="icon-user"></span>
            <span>我的订单</span>
          </a>
        </div>
        <div class="sidebar-line">
          <a href="#">
            <span class="icon-settings"></span>
            <span>设置</span>
          </a>
        </div>
      </div>
    </template>
  </side-bar>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
export default {
  name: "userSidebar",
  components: {
    SideBar,
  },
  data() {
    return {
      path: [
        "/online-ordering-system/#/user/home",
        "/online-ordering-system/#/user/shoppingcart",
        "/online-ordering-system/#/user/orderings",
        "/online-ordering-system/#/user/settings",
      ],
    };
  },
  methods: {
    /**
     * event happen when sidebar is clicked
     */
    sideBarClick(event) {
      // event target
      let tar = event.target;
      let tar_tagname = tar.tagName;
      // set event target to be <a/> tag
      if (tar_tagname === "SPAN") {
        tar = tar.parentNode;
      }
      // get sidebar lines
      let sidebar_lines = document.getElementsByClassName("sidebar-line");
      // get sidebar header
      let sidebar_header = document.getElementsByClassName("sidebar-header")[0];
      // get header a tag
      let a_header = sidebar_header.children[0];
      let idx = -1;
      for (let i = 0; i < sidebar_lines.length; i++) {
        const a_ele = sidebar_lines[i].children[0];
        let spans = a_ele.children;
        let color = "#666666";
        if (a_ele === tar || (i === 0 && a_header === tar)) {
          // get clicked target index
          idx = i;
          // set the clicked target color
          color = "skyblue";
        }
        for (const span of spans) {
          span.style["color"] = color;
        }
      }
      // set the href of the event target
      if (idx != -1) {
        tar.href = this.path[idx];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.sidebar-header {
  width: 100%;
  padding: 10px;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #000;
    // transition: all 0.3s ease;
    // cursor: pointer;
  }
}

.sidebar-content {
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .sidebar-line {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      width: 100%;
      padding: 15px 5px;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 18px;
      // transition: all 0.3s ease;
      // cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        color: skyblue;
      }

      span:nth-of-type(1) {
        margin-left: 10px;
        display: inline-block;
        width: 40px;
        // transition: all 0.3s ease;
      }

      // span:nth-of-type(2) {
      //   // margin-left: 10px;
      // }
    }

    &:first-child {
      a {
        span {
          color: skyblue;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .sidebar-header {
    a {
      font-size: 20px;
    }
  }

  .sidebar-content {
    .sidebar-line {
      a {
        justify-content: center;

        span:nth-of-type(2) {
          display: none;
        }

        span:nth-of-type(1) {
          margin: 0;
          width: 18px;
        }
      }
    }
  }
}
</style>