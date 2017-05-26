# office
An Express application is essentially a stack of middleware which are executed serially.(express应用其实就是由一系列顺序执行的Middleware组成。)
A middleware is a function with access to the request object (req), the response object (res), and the next middleware in line in the request-response cycle of an Express application. It is commonly denoted by a variable named next. Each middleware has the capacity to execute any code, make changes to the request and the reponse object, end the request-response cycle, and call the next middleware in the stack. Since middleware are execute serially, their order of inclusion is important.(中间件其实就是一个访问express应用串入的req，res，nex参数的函数，这个函数可以访问任何通过req，res传入的资源。)
If the current middleware is not ending the request-response cycle, it is important to call next() to pass on the control to the next middleware, else the request will be left hanging.(如果当前中间件没有完成对网页的res响应 ，还可以通过next把router 留给下一个middleware继续执行)
With an optional mount path, middleware can be loaded at the application level or at the router level. Also, a series of middleware functions can be loaded together, creating a sub-stack of middleware system at a mount point.
# chowel 05-23
你的本地仓库由 git 维护的三棵"树"组成。第一个是你的 工作目录，它持有实际文件；第二个是 暂存区（Index），它像个缓存区域，临时保存你的改动；最后是HEAD，它指向你最后一次提交的结果。
# chowel 05-26
你的本地仓库由 git 维护的三棵"树"组成。第一个是你的 工作目录，它持有实际文件；第二个是 暂存区（Index），它像个缓存区域，临时保存你的改动；最后是HEAD，它指向你最后一次提交的结果。