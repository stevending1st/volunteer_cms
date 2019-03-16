<template>
  <el-form label-position="right" label-width="80px" >
    <el-form-item label="活动名称">
      <el-input v-model="actInfor.actName" placeholder="请输入活动名称"></el-input>
    </el-form-item>
    <el-form-item label="活动主题" >
      <el-input v-model="actInfor.actTheme" type="textarea" :rows="2" placeholder="请输入活动主题"></el-input>
    </el-form-item>
    <el-form-item label="活动内容" >
      <el-input v-model="actInfor.actContent" type="textarea" :rows="2" placeholder="请输入活动内容"></el-input>
    </el-form-item>
    <el-form-item label="负责团队">
      <el-select placeholder="请选择" v-model="actHost" filterable @change="hostSelectChange">
        <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
      <el-col :span="8">
        <el-input v-model="actInfor.actHost" placeholder="请输入负责团队" @blur="actHostChange"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="发布时间">
      <el-col :span="8">
        <el-input placeholder="请输入年月日时分秒" suffix-icon="el-icon-date" v-model="actInfor.actRelTime">
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="招募时间">
      <el-col :span="11">
        <el-input placeholder="请输入年月日时分秒" suffix-icon="el-icon-date" v-model="actInfor.actStartRegTime">
        </el-input>
      </el-col>
      <el-col :span="2" class="font-center">
        至
      </el-col>
      <el-col :span="11">
        <el-input placeholder="请输入年月日时分秒" suffix-icon="el-icon-date" v-model="actInfor.actEndtRegTime">
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-input placeholder="请输入年月日时分秒" suffix-icon="el-icon-date" v-model="actInfor.actStartTime">
        </el-input>
      </el-col>
      <el-col :span="2" class="font-center">
        至
      </el-col>
      <el-col :span="11">
        <el-input placeholder="请输入年月日时分秒" suffix-icon="el-icon-date" v-model="actInfor.actEndtTime">
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="服务时长">
      <el-col :span="6">
        <el-input v-model="actInfor.actPeriod" placeholder="请输入服务时长">
          <template slot="append">小时</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="招募审核">
      <el-col :span="6">
        <el-radio v-model="actInfor.actReview" label=false >无审核</el-radio>
        <el-radio v-model="actInfor.actReview" label=true >有审核</el-radio>
      </el-col>
    </el-form-item>
    <el-form-item label="活动人数">
      <el-col :span="6">
        <el-radio v-model="actNumOfPeople" label="false" @change="notLimitLimitNumOfPeople">无限制</el-radio>
        <el-radio v-model="actNumOfPeople" label="true" @change="limitLimitNumOfPeople">限制</el-radio>
      </el-col>
      <el-col :span="4" v-show="showLimitNumOfPeople">
        <el-input v-model="actInfor.actNumOfPeople">
          <template slot="append">人</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="截至招募">
      <el-col :span="6">
        <el-radio v-model="actInfor.actNumOfPeopleUpper" label="1" @change="notLimitNum(showActNumOfPeopleUpper)">无限制</el-radio>
        <el-radio v-model="actInfor.actNumOfPeopleUpper" label="2" @change="limitNum(showActNumOfPeopleUpper)">限制</el-radio>
      </el-col>
      <el-col :span="4">
        <el-input v-model="actInfor.actNumOfPeopleUpper">
          <template slot="append">人</template>
        </el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="活动要求" >
      <el-input v-model="actInfor.actMandate" type="textarea" :rows="4" placeholder="请输入活动要求"></el-input>
    </el-form-item>
    <el-form-item label="其他" >
      <el-input v-model="actInfor.actOtherMandate" type="textarea" :rows="2" placeholder="请输入其他注意事项"></el-input>
    </el-form-item>
    <el-form-item label="允许取消">
      <el-col :span="6">
        <el-radio v-model="actInfor.actCancel" value="false">不允许</el-radio>
        <el-radio v-model="actInfor.actCancel" value="true">允许</el-radio>
      </el-col>
    </el-form-item>

    <el-form-item class="setcenter">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  name: 'actForm',
  methods: {
    onSubmit: function () {
      //
    },
    actHostChange: function () {
      console.log("111111")
      let host = this.actInfor.actHost
      for (let i = 0; i < this.options3.length; i++) {
        for (let j = 0; j < this.options3[i].options.length; j++) {
          if (host === this.options3[i].options[j].value) {
            this.actHost = this.actInfor.actHost
            return
          }
        }
      }
      this.actHost = '其他'
    },
    hostSelectChange: function () {
      console.log(this.options3)
      if(this.actHost === '其他') {
        return
      }
      this.actInfor.actHost = this.actHost
    } ,
    notLimitLimitNumOfPeople: function () {
      this.showLimitNumOfPeople = false
      this.actInfor.actNumOfPeople = "all"
    } ,
    limitLimitNumOfPeople: function () {
      this.showLimitNumOfPeople = true
      this.actInfor.actNumOfPeople = "0"
    }
  },
  data () {
    return {
      actHost: '',
      actNumOfPeople: true,
      showLimitNumOfPeople: true,
      showActNumOfPeopleUpper: true,
      actInfor: {
        actName: '',
        actTheme: '',
        actContent: '',
        actHost: '',
        actRelTime: '',
        actStartRegTime: '',
        actEndtRegTime: '',
        actStartTime: '',
        actEndtTime: '',
        actPeriod: '',
        actNumOfPeople: 'all',
        actNumOfPeopleUpper: 'all',
        actMandate: '',
        actOtherMandate: '',
        actCancel: false,
        actReview: true
      },
      options3: [{
        label: '分会',
        options: [{
          value: '春天之约',
          label: '春天之约'
        }, {
          value: '唯爱志愿者协会',
          label: '唯爱志愿者协会'
        }, {
          value: '远拓志愿者协会',
          label: '远拓志愿者协会'
        }, {
          value: '爱心之家志愿者协会',
          label: '爱心之家志愿者协会'
        }, {
          value: '蒲公英志愿者协会',
          label: '蒲公英志愿者协会'
        }, {
          value: '逐梦之翼志愿者协会',
          label: '逐梦之翼志愿者协会'
        }, {
          value: '乐帮爱援志愿者协会',
          label: '乐帮爱援志愿者协会'
        }, {
          value: '求索志愿者协会',
          label: '求索志愿者协会'
        }, {
          value: '行远志愿者协会',
          label: '行远志愿者协会'
        }, {
          value: '微光志愿者协会',
          label: '微光志愿者协会'
        }, {
          value: '青春行志愿者协会',
          label: '青春行志愿者协会'
        }]
      }, {
        label: '其他',
        options: [{
          value: '阳光雨露公益社团',
          label: '阳光雨露公益社团'
        }, {
          value: '其他',
          label: '其他'
        }]
      }]
    }
  }
}
</script>

<style>
.setcenter {
  text-align: center;
}
</style>
