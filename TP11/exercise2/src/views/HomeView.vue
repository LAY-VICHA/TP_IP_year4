<script>
import categoriesApi from '../libs/apis/category'
import productsApi from '../libs/apis/product'

export default {
  data() {
    return {
      categories: [],
      products: []
      
    }
  },
  async mounted() {
    this.categories = await categoriesApi.getCategoryItem();
    this.products = await productsApi.getAllProduct("", "");
    console.log(this.categories);
    
  },
  methods: {
    async onClick(categoryId, itemId){
      this.products = await productsApi.getAllProduct(categoryId, itemId)
    }
  }
}
</script>

<template>
  <div>
    <div class="header">
      <div>
        លេខមួយ.com 
        </div> </div>
    <div class="content">
      <div class="sideBar">
        <ul>
          <li class="category" v-for="category in categories" :key="category._id">
            <a href="#" @Click="onClick(category._id,'')">{{category.name}}</a>
            <ul>
              <li class="item" v-for="item in category?.items" :key="item._id">
                <a id="item-link" href="#" @click="onClick(item.category, item._id)">{{item.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="listing">
        <div v-for="product in products" :key="product._id">
          <div class="product">
            <div>
              <img src="@/assets/1.png" alt="imgLogo">
            </div>
            {{product.title}}
            <div class="price">
              <div class="shop">Shop1</div>
              <div class="value">$999</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.header{
  height: 50px;
  font-size: 30px;
  border: 1px solid black;
}
.content{
  display: flex;
}
.sideBar{
  width: 20%;
  border: 1px solid black;
}
.listing{
  display: grid;
  border: 1px solid black;
  width: 80%;
  grid-template-columns: 25% 25% 25% 25%;
}
.category{
  text-align: left;
  padding-bottom: 10px;
}
.item{
  padding-top: 5px;
}
a{
  text-decoration: none;
  color: black;
}
img{
  width: 100px;
}
.product{
  padding: 10px;
  border: 1px solid black;
}
.price{
  display: flex;
  width: inherit;
  margin-top: 10px;
}
.shop{
  width: 50%;
  text-align: left;
  padding-left: 20px;
}
.value{
  width: 50%;
  text-align: right;
  padding-right: 20px;
}

#item-link:active {
  color: green;
}
</style>