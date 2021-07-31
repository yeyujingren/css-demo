-- mysql服务开启
mysql.server start

-- 通过sql文件导入。
    -- 在sql文件同级目录下
    -- source xxx.sql;
-- sql语句分析
    -- MySQL 提供了一个 EXPLAIN 命令, 它可以对 SELECT 语句进行分析, 
    -- 并输出 SELECT 执行的详细信息, 以供开发人员针对性优化.
    -- EXPLAIN SELECT * from user_info WHERE id < 300;
-- 数据库操作
    -- 链接数据库
    mysql -uroot -p
    mysql -uroot -p12334

    -- 推出数据库
    exit/quit/ctrl+d
    
    -- 查看所有数据库
    show databases;

    -- 显示当前时间
    select now();

    -- 显示数据库版本
    select version();

    -- 创建数据库da 
    create database databaseName charset=utf8;

    -- 查看创建数据库的语句
    show create database databaseName;

    -- 删除数据库
    drop database databaseName;

    -- 查看当前使用的数据库
    select database();

    -- 使用数据库
    use databaseName;

-- 数据表操作
    -- 查看当前数据库中所有的表
    show tables;

    -- 创建表
    -- auto_increment表示自动增加
    -- not null 表示不能为空
    -- primary key 表示主键
    -- default 默认值
    -- create table 数据表名称 (字段 类型 约束)
    create table user(id int primary key not null auto_increment, name varchar(30));

    -- desc 查看表的结构

    -- 插入数据
    insert into tableName values(aaa, bbb, ccc)

    -- 修改表结构
        -- 添加字段
        alter table 表名 add 列名 类型;
        -- 修改字段（重命名）
        alter table 表名 change 原名 新名 类型及约束;
        -- 修改字段（不重命名）
        alter table 表名 modify 列名 类型约束;
        - 删除字段
        alter table 表名 drop 列名；
    -- 删除表
    drop table 表名；
    -- 去重查找
    select distinct xx from xxx;
-- 数据的增删查改
    -- 增加
        -- 枚举中数据从1开始
        insert into 表名 values(按照次序写出全部的属性值，否则会报错)
        -- or 部分插入
        insert into 表名(列1...) values (xx,,,);
        -- 多行插入
        insert into 表名 values(v1， v2...),(v11, v22...);
    -- 修改
    update 表名 set key=val, key2=val2.... where ....；
    -- 删除
        -- 物理删除
        delete from 表名 where 条件;

        -- 逻辑删除
        -- 用一个字段表示该信息不可用
        alter table 表名 add 列名 类型；
        update 表名 set 列名=xxx where 条件；
    -- 查询
        select * from 表名 where 条件;
        select 属性1，属性2 from 表名 where 条件；
        select 属性1 as 别名1 from 表名 where 条件；

-- 查询
    -- 条件查询
        select * from students where age>18;
        -- and 与
        select * from students where age<18 and age>16;
        -- or 或
        select * from students where age>18 or gender="girl";
        -- not 非
        select * from students where not (age>18 and gender="boy");

    -- 模糊查询
        -- like
        -- % 替换一个或者多个
        -- _替换一个
        select name from students where name like "小%";
        select name from students where name like "小_";
        -- rlike 正则
        select name from students where name rlike "果$";
    -- 范围查询
        -- in (10,11,12)
        select name, age from students where age in (12,13,14);
        -- not in
        -- between ... and ... 连续
        select  name from students where age between 16 and 19;
        -- not between ... and ...
        select  name from students where age not between 16 and 19;
        select  name from students where not age between 16 and 19;
-- 排序
    -- order by 字段
    -- asc 从小到大排序，即升序；
    -- desc 从大到小，即降序；
    select * from students where (age between  18 and 30) and gender=1 order by age asc, id desc;
-- 聚合函数
    -- 总数 count
    select count(*) as num from students where gender=2;
    -- 最大值 max
    select  max(age) from students;
    -- 最小值 min
    select  min(age) from students;
    -- 求和 sum
    select  sum(age) from students;
    -- 平均值 avg
    select avg(age) from students;
    -- 四舍五入 round(a,b)  保留b位小数
    select round(sum(age)/count(*), 2) from students;

-- 分组（一般和聚合函数一起使用）
    -- group by
    select age, count(*) from students group by age;
    -- group_concat(...) 组中所对应的属性
    select age, group_concat(name) from students group by age;
    -- having 对分组进行过滤
    select  age from students group  by age having count(*)>2;

-- 分页
    -- limit start, count;
    -- limit 限制查询出来的数据的个数
    select * from students limit 2;
    select * from students limit 3, 4;
    -- limit (第N页-1)*每页的个数, 每页的个数；

-- 连接查询
    -- 内链接

        -- inner join 。。。 on
        select * from students inner join classes on students.cls_id = classes.id;
        select students.*, classes.name from students inner join classes on students.cls_id = classes.id;
    -- 外链接
        -- left/right 谁在左边/右边就以谁为基准。有就显示，没有就展示null
        select * from students as s left join classes as c on s.cls_id=c.id;
        -- 结果进一步筛选
        select * from students as s left join classes as c on s.cls_id=c.id having c.id is null;
        select * from students as s left join classes as c on s.cls_id=c.id where c.id isa null;

-- 自关联查询
    select aid from areas as province inner join areas as city on city.pid=province.aid having province.atitle="甘肃省";

-- 子查询
    -- select中嵌套这select
    select * from students where height = (select max(height) from students);


-- 视图：将查询的结果作为一张虚拟表
    -- create view 视图名 as sql语句
    -- 视图往往用来查询数据
    create view v_goods_info as select  g.*, c.name as cate_name, b.name as brand_name from goods as g left join goods_cates as c on g.cate_id=c.cate_id left join goods_brands as b on g.brand_id = b.id;
    -- 删除视图
    drop view v_goods_info;

    -- 视图的作用：
        -- 提高了重用性，就像是一个函数
        -- 对数据库重构，却不影响程序运行
        -- 提高了安全性， 可以对不同的用户
        -- 让数据库更加清晰

-- 事务
    -- 一个操作序列，要么这些操作全部都执行完，要么全部都不执行，是一个不可分割的整体
    -- 事务的四大特性（ACID）
        -- 原子性（Atomicity）
        -- 一致性（Consistency）
        -- 隔离性（Isolation）
        -- 持久性（Durability）
    -- 开启事务
        begin || start transaction
    -- 提交事务
        commit;
    -- 回滚事务
        rollback ;

    -- demo
    start transaction ;
    select balance from checking where customer_id = 100089;
    update checking set balance = balance - 200.00 where customer_id = 100089;
    update savings set balance = balance - 200.00 where customer_id = 100089;
    commit ;

-- 索引（提高查询效率）但是会影响更新和插入速度
    -- 创建索引
    -- 注释：如果是字符串类型需要写上长度
    create index 索引名称 on 表名(字段名称(长度))
    create index title_index on test_index(title(10));
    -- 删除索引
    drop index 索引名称 on 表名;
    -- 查看索引
    show index from 表名;

-- 开启运行时间监测；
    set profiling = 1;
    -- 查看执行时间
    show profiles;

-- 查询数据库用户
    select * from mysql.user;
    -- 查询用户名、host、密码
    select user, host, authentication_string from mysql.user;

    -- 创建账户、授权
    grant 权限列表 on 数据库 to '用户名'@'访问主机' identified by '密码';
        -- 注意在8。x以上版本，mysql将其进行了拆分
        create user 用户名 identified by '密码';
        grant 权限列表 on 数据库 to 用户名@访问主机

    -- 修改权限
    grant 修改的权限 on 数据库 to 用户名@访问主机 whit grant option;
    flush privileges;

    -- 修改密码
    update mysql.user set anthentication_string=password('newPsd') where user='username';
    flush privileges;

    -- create table user_group(
    --     _id int not null primary key auto_increment comment 'primary key',
    --     u_id int comment 'user id',
    --     g_id int comment 'group id',
    --     foreign key(u_id) references user(id),
    --     foreign key(g_id) references chat_group(id)
    -- );

    -- create table chat_group(
    --     id int primary key not null auto_increment,
    --     g_name varchar(15) default 'chat_room',
    --     notice text,
    --     create_time date,
    --     u_id int not null,
    --     foreign key(u_id) references user(id)
    -- );

    -- create table g_msg(
    --     _id int not null primary key auto_increment comment 'primary key',
    --     u_id int,
    --     g_id int,
    --     content text,
    --     create_time date,
    --     foreign key(u_id) references user(id),
    --     foreign key(g_id) references chat_group(id)
    -- );
    
    -- create table f_msg(
    --     _id int not null primary key auto_increment,
    --     u_id int,
    --     f_id int,
    --     content text not null,
    --     create_time date not null,
    --     foreign key(u_id) references user(id),
    --     foreign key(f_id) references user(id)
    -- );

    -- create table user_friends (
    --     _id int not null primary key auto_increment,
    --     f_id int,
    --     u_id int,
    --     foreign key(u_id) references user(id),
    --     foreign key(f_id) references user(id)
    -- );

    
