<template>
	<el-space wrap style="width: 1800px;">
	      <el-card class="box-card"  style="width: 1800px;">
	        <template #header>
	          <div class="card-header">
	            <span>Card name0</span>
	          </div>
	        </template>
	        <div class="text item" style="display:flex">
	          <el-space wrap>
	            <el-card class="box-card" style="width: 350px">
	              <template #header>
	                <div class="card-header">
	                  <span>Card name1</span>
	                </div>
	              </template>
	              <div class="text item">
	                <el-space wrap>
	                  <el-card class="box-card" style="width: 310px">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name4 </span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card" style="width: 310px">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name5  </span>
	                      </div>
	                    </template>
	                    <div class="text item">
	                      <el-space wrap>
	                        <el-card class="box-card" style="width: 110px">
	                          <template #header>
	                            <div class="card-header">
	                              <span>Card name6  </span>
	                            </div>
	                          </template>
	                          <div v-for="o in 4" :key="o" class="text item">
	                            {{ "List item " + o }}
	                          </div>
	                        </el-card>
	                        <el-card class="box-card" style="width: 142px">
	                          <template #header>
	                            <div class="card-header">
	                              <span>Card name7  </span>
	                            </div>
	                          </template>
	                          <div v-for="o in 4" :key="o" class="text item">
	                            {{ "List item " + o }}
	                          </div>
	                        </el-card>
	                      </el-space>
	                    </div>
	                  </el-card>
	                </el-space>
	              </div>
	            </el-card>
	          </el-space>
	          <el-space wrap>
	              <el-card class="box-card" style="width: 1400px">
	              <template #header>
	                <div class="card-header">
	                  <span>Card name2</span>
	                </div>
	              </template>
	              <div class="text item">
	                <el-space wrap>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card" style="width: 590px">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name3</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card" style="width: 235px">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card" style="width: 900px">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div class="text item">
	                      <el-card class="box-card">
	                        <template #header>
	                          <div class="card-header">
	                            <span>Card name</span>
	                          </div>
	                        </template>
	                        <div v-for="o in 4" :key="o" class="text item">
	                          {{ "List item " + o }}
	                        </div>
	                      </el-card>
	                       <el-card class="box-card">
	                        <template #header>
	                          <div class="card-header">
	                            <span>Card name</span>
	                          </div>
	                        </template>
	                        <div v-for="o in 4" :key="o" class="text item">
	                          {{ "List item " + o }}
	                        </div>
	                      </el-card>
	                       <el-card class="box-card">
	                        <template #header>
	                          <div class="card-header">
	                            <span>Card name</span>
	                          </div>
	                        </template>
	                        <div v-for="o in 4" :key="o" class="text item">
	                          {{ "List item " + o }}
	                        </div>
	                      </el-card>
	                       <el-card class="box-card">
	                        <template #header>
	                          <div class="card-header">
	                            <span>Card name</span>
	                          </div>
	                        </template>
	                        <div v-for="o in 4" :key="o" class="text item">
	                          {{ "List item " + o }}
	                        </div>
	                      </el-card>
	                    </div>
	                  </el-card>
	                  <el-card class="box-card" style="width: 440px">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name22</span>
	                      </div>
	                    </template>
	                    <div class="text item">
	                      <el-space wrap>
	                        <el-card class="box-card" style="width: 110px">
	                          <template #header>
	                            <div class="card-header">
	                              <span>Card name6  </span>
	                            </div>
	                          </template>
	                          <div v-for="o in 4" :key="o" class="text item">
	                            {{ "List item " + o }}
	                          </div>
	                        </el-card>
	                        <el-card class="box-card" style="width: 142px">
	                          <template #header>
	                            <div class="card-header">
	                              <span>Card name7  </span>
	                            </div>
	                          </template>
	                          <div v-for="o in 4" :key="o" class="text item">
	                            {{ "List item " + o }}
	                          </div>
	                        </el-card>
	                      </el-space>
	                    </div>
	                  </el-card>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                  <el-card class="box-card">
	                    <template #header>
	                      <div class="card-header">
	                        <span>Card name</span>
	                      </div>
	                    </template>
	                    <div v-for="o in 4" :key="o" class="text item">
	                      {{ "List item " + o }}
	                    </div>
	                  </el-card>
	                </el-space>
	              </div>
	            </el-card>
	          </el-space>
	        </div>
	      </el-card>
	    </el-space>
</template>

<script>
</script>

<style>
</style>