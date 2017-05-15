# lida Project Data Schema


### account(账户)
| 字段          | 类型       | 用途   |
|-------------|----------|------|
| id          | integer  | id   |
| account_id  | string   | 用户名  |
| nick_name    | string   | 昵称   |
| dev_group    | integer  | 开发组  |
| gender      | integer  | 性别   |
| balance     | interger | 余额   |
| last_login   | datatime | 最后登录 |
| tycoon_point | integer  | 土豪值  |
| charm_point  | integer  | 魅力值  |
| active_point | integer  | 活跃值  |

### stage_template(题目模板)
| 字段        | 类型       | 用途    |
|-----------|----------|-------|
| id        | integer  | id    |
| name      | string   | 名称    |
| desc      | string   | 简介    |
| full_score | integer  | 满分    |
| price     | integer  | 价格    |
| duration  | interger | 时限(秒) |


### media_type(媒体类型)
| 字段        | 类型      | 用途   |
|-----------|---------|------|
| id        | integer | id   |
| name      | string  | 类型名 |
| icon_url  | string  | 图标地址 |


### replace(可替换内容)
| 字段        | 类型      | 用途   |
|-----------|---------|------|
| id        | integer | id   |
| stage_template_id  | integer | 题目id |
| media_type | integer | 媒体类型 |
| slot      | integer | 序号   |


### grant(邀约)
| 字段        | 类型       | 用途         |
|-----------|----------|------------|
| id        | integer  | id         |
| publisher | integer  | 发布者id      |
| catagory  | integer  | 公开、聚会、链接分享 |
| name      | string   | 名称         |
| desc      | string   | 简介         |
| price     | integer  | 价格         |
| order_time | datatime | 下单时间       |
| start_time | datatime | 开始时间       |
| end_time   | datatime | 结束时间       |
| gift_score | integer  | 发奖分数       |
| city      | integer  | 活动城市       |
| paid      | bool     | 付款状态       |


### gift(礼品)
| 字段       | 类型       | 用途   |
|----------|----------|------|
| id       | integer  | id   |
| grant_id | integer  | 邀约id |
| content  | string   | 名称   |
| count    | integer  | 数量   |
| ranking  | integer  | 名次   |
| min_score | datatime | 发奖分数 |


### stage(题目)
| 字段          | 类型      | 用途   |
|-------------|---------|------|
| id          | intege  | id   |
| template_id | integer | 模板id |
| grant_id    | integer | 邀约id |
| pass_score   | integer | 及格分  |
| try_count    | integer | 尝试次数 |


### replace_content(替换内容)
| 字段         | 类型      | 用途   |
|------------|---------|------|
| id         | integer | id   |
| stage_id   | integer | 题目id |
| replace_id | integer | 内容id |
| media_id   | integer | 文件id |

### grant_refer(邀约响应)
| 字段         | 类型       | 用途    |
|------------|----------|-------|
| id         | integer  | id    |
| grant_id   | integer  | 邀约id  |
| player_id  | integer  | 参与者id |
| address_id | integer  | 寄送地址  |
| mail_type   | integer  | 快递公司  |
| mail_id    | integer  | 快递单号  |
| refer_time  | datatime | 响应时刻  |
| result     | integer  | 收货结果  |

### task(答题尝试)
| 字段        | 类型       | 用途    |
|-----------|----------|-------|
| id        | integer  | id    |
| player_id | integer  | 参与者id |
| stage_id  | integer  | 题目id  |
| score     | integer  | 分数    |
| try_time   | datetime | 答题时间  |


### grant_invite(邀约邀请)
| 字段         | 类型      | 用途    |
|------------|---------|-------|
| id         | integer | id    |
| grant_id   | integer | 邀约id  |
| invited_id | integer | 受邀者id |
| status     | integer | 邀请状态  |

### address(收货地址)
| 字段          | 类型      | 用途   |
|-------------|---------|------|
| id          | integer | id   |
| user_id     | integer | 用户id |
| country     | string  | 国家   |
| province    | string  | 省份   |
| city        | string  | 城市   |
| area        | string  | 区县   |
| town        | string  | 街道   |
| detail      | string  | 详细地址 |
| mobile      | string  | 手机号码 |
| contact_name | string  | 收货人名 |
| usage       | integer | 默认用途 |


### product(商品)
| 字段         | 类型      | 用途   |
|------------|---------|------|
| id         | integer | id   |
| mechant_id | integer | 商户id |
| name       | string  | 名称   |
| desc       | string  | 简介   |
| price      | integer | 价格   |
| sku        | integer | 库存   |


### message(通知)
| 字段        | 类型       | 用途    |
|-----------|----------|-------|
| id        | integer  | id    |
| user_id   | integer  | 接收者id |
| sender_id | integer  | 发送者id |
| content   | string   | 内容    |
| time      | datetime | 发送时间  |
| read      | bool     | 已读    |


### param_type(参数类型)
| 字段   | 类型      | 用途          |
|------|---------|-------------|
| id   | integer | id          |
| name | string  | 一组参数的名字     |
| desc | string  | 描述(一般是一个公式) |


### param(参数)
| 字段    | 类型      | 用途   |
|-------|---------|------|
| id    | integer | id   |
| type  | integer | 类型id |
| name  | string  | 参数名  |
| value | integer | 参数值  |