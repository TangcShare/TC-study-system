<template>
  <d2-container>
    <template slot="header">视频管理</template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
      <el-table-column
              prop="date"
              label="日期"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址"
              width="180">
      </el-table-column>
      <el-table-column
              label="操作"
              width="120">
        <template slot-scope="scope">
          <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="danger"
                  size="medium">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
            :style="{marginTop:'10px'}"
            @click.native.prevent="addRow()"
            type="primary"
            size="medium">
      增加
    </el-button>
    <!--<template slot="footer">footer</template>-->
  </d2-container>
</template>

<script>
    export default {
        name: 'video',
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            addRow() {

            }
        },
        data () {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>
