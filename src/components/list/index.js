Component({
  data: {},
  methods: {
    handleOnTap(e) {
      my.navigateTo({url : e.target.dataset.url});
    }
  }
})

// Component({
//   data: {},
//   methods: {
//     onOpenPage(e) {
//       if (e.target.dataset.url) {
//         getApp().currentPage = e.target.dataset.url;
//         my.navigateTo({
//           url: e.target.dataset.url,
//         });
//       }
//     },
//   },
// });