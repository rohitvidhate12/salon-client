export default {
  serverBaseURL: "http://127.0.0.1:7172",
  api: {
    users: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getOne: "/users/",
      getAll: "/users",
    },
    appointments: {
      create: "/appointments",
      update: "/appointments/",
      delete: "/appointments/",
      getOne: "/appointments/",
      getAll: "/appointments",
    },
    employees: {
      create: "/employees",
      update: "/employees/",
      delete: "/employees/",
      getOne: "/employees/",
      getAll: "/employees",
    },
    auth: {
      adminLogin: "/auth/admin-login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
  },
};
