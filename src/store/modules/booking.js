const state = () => ({
    dummyData: [
      {
        id: 1,
        name: "サロン",
        disabled: false,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 2,
        name: "小川 海",
        disabled: false,
        slots: [
          {
            data: [
              {
                id: 1,
                startTime: "9:30",
                endTime: "10:30",
                text: "3○○○○○○○",
                color: "#9b9b9b"
              },
            ],
          },
          {
            data: [
              {
                id: 2,
                startTime: "11:00",
                endTime: "12:30",
                text: "3○○○○○○○",
                color: "#eacf5b"
              }
            ],
          },
        ]
      },
      {
        id: 3,
        name: "青木 康隆",
        disabled: false,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 4,
        name: "川辺 こういち",
        disabled: false,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 5,
        name: "小笠原 真麻",
        disabled: false,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 6,
        name: "酒井 恭太",
        disabled: false,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 7,
        name: "堤 佐登美",
        disabled: false,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 8,
        name: "山中 理未",
        disabled: true,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 9,
        name: "福本 佑希子",
        disabled: false,
        slots: [
          {
            data: [],
          }
        ]
      },
      {
        id: 10,
        name: "岩田 紅",
        disabled: true,
        slots: [
          {
            data: [],
          }
        ]
      },
    ],
  })
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
    
  }
  
  // mutations
  const mutations = {
    
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }