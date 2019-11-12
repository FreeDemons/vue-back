# 表示继承什么环境 就会拥有什么环境
FROM node

# LABEL单纯只是标识一下 没其他意思
LABEL name = "vue-back"
LABEL version = '1.0'

#把当前容器的所有页面拷贝到镜像的app文件夹里
COPY . /app

#指定工作目录
WORKDIR /app

#RUN运行一个命令，在docker build时运行
RUN npm install

#EXPOSE向外暴露一个端口
EXPOSE 3000

#CMD也是运行一个命令，但是在docker run时运行
CMD npm start
