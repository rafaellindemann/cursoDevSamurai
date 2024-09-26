import AdminJS from "adminjs";

import User from "../models/user";

import { hasAdminPermission } from "../services/auth";

export default {
  resource: User,
  options: {
    parent: {
      icon: "User",
    },
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) => hasAdminPermission(currentAdmin),
      },
      resetPassword: {
        actionType: "record",
        icon: "Password",
        handler: async (request, response, context) => {
          return {
            record: context.record.toJSON(),
          };
        },
      },
    },
    properties: {
      id: {
        position: 1,
      },
      initials: {
        position: 2,
        isVisible: { list: true, filter: false, show: true, edit: false },
      },
      name: {
        position: 3,
        isRequired: true,
      },
      email: {
        position: 4,
        isRequired: true,
      },
      password: {
        position: 5,
        isVisible: { list: false, filter: false, show: false, edit: true },
      },
      role: {
        position: 6,
        isRequired: true,
        availableValues: [
          { value: "admin", label: "Administrador" },
          { value: "manager", label: "Gerente" },
          { value: "developer", label: "Desenvolvedor" },
        ],
      },
      status: {
        position: 7,
        isRequired: true,
        availableValues: [
          { value: "active", label: "Ativo" },
          { value: "archived", label: "Arquivado" },
        ],
      },
      createdAt: {
        position: 8,
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        position: 9,
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      password_hash: {
        isVisible: false,
      },
    },
  },
};
