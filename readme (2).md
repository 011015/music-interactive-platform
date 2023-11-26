Button组件

| 参数 | 说明         | 类型                  | 默认值      |
| ---- | ------------ | --------------------- | ----------- |
| type | 设置按钮类型 | `"default" | "nav" | "upNav"` | `"default"` |

LeftNav组件

| 参数        | 说明             | 类型       | 默认值 |
| ----------- | ---------------- | ---------- | ------ |
| activeIndex | 设置活跃导航名称 | `number`   | -      |
| nameList    | 设置导航名称列表 | `Array<T>` | -      |

UpNav组件

| 参数  | 说明       | 类型                                                         | 默认值 |
| ----- | ---------- | ------------------------------------------------------------ | ------ |
| left  | 设置左导航 | `{activeBtn?: boolean, activeIndex?: number, list: Array<string>}` | -      |
| right | 设置右导航 | `{activeBtn?: boolean, activeIndex?: number, list: Array<string>}` | -      |

Radio.Item组件

| 参数  | 说明                           | 类型     | 默认值 |
| ----- | ------------------------------ | -------- | ------ |
| label | 设置标签名                     | `string` | -      |
| bind  | 设置<label>与<input>的绑定名称 | `string` | -      |

Form组件

| 参数      | 说明                 | 类型       | 默认值  |
| --------- | -------------------- | ---------- | ------- |
| titleName | 设置表单标题名       | `string`   | -       |
| onFinish  | 提交表单后的回调函数 | `Function` | -       |
| noStyle   | 设置是否需要默认样式 | `boolean`  | `false` |

Form.Item组件

| 参数      | 说明                           | 类型      | 默认值  |
| --------- | ------------------------------ | --------- | ------- |
| label     | 设置标签名                     | `string`  | -       |
| name      | 设置<label>和<input>的绑定名称 | `string`  | -       |
| required  | 设置该字段是否必填             | `boolean` | `false` |
| className | 设置类名                       |           |         |
| style     | 设置样式                       |           |         |
| children  | 设置子组件                     |           |         |

